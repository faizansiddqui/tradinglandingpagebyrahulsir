// src/app/lib/queue.js
import IORedis from "ioredis";
import { Queue } from "bullmq";

const QUEUE_NAME = "webinar-reminders";

let queueInstance = null;
let connectionInstance = null;

function getConnection() {
  if (!connectionInstance) {
    if (!process.env.REDIS_URL) {
      throw new Error("REDIS_URL is not set");
    }
    connectionInstance = new IORedis(process.env.REDIS_URL, {
      maxRetriesPerRequest: null,
    });
  }
  return connectionInstance;
}

export function getQueue() {
  if (!queueInstance) {
    queueInstance = new Queue(QUEUE_NAME, {
      connection: getConnection(),
    });
  }
  return queueInstance;
}

function safeDelayMs(targetIso) {
  const target = new Date(targetIso).getTime();
  const now = Date.now();
  return Math.max(0, target - now);
}

export async function scheduleReminders({ rowNumber, name, email, phone10, webinarDay, webinarDate, webinarTime, webinarISO }) {
  const queue = getQueue();

  const jobPayload = { rowNumber, name, email, phone10, webinarDay, webinarDate, webinarTime, webinarISO };

  const webinarTs = new Date(webinarISO).getTime();
  if (Number.isNaN(webinarTs)) {
    throw new Error("Invalid webinarISO");
  }

  const oneDayMs = 24 * 60 * 60 * 1000;
  const tenMinMs = 10 * 60 * 1000;

  const jobs = [
    {
      name: "send-1day",
      delay: safeDelayMs(new Date(webinarTs - oneDayMs).toISOString()),
      jobId: `${rowNumber}:1day`,
    },
    {
      name: "send-10min",
      delay: safeDelayMs(new Date(webinarTs - tenMinMs).toISOString()),
      jobId: `${rowNumber}:10min`,
    },
    {
      name: "send-live",
      delay: safeDelayMs(new Date(webinarTs).toISOString()),
      jobId: `${rowNumber}:live`,
    },
  ];

  for (const job of jobs) {
    try {
      await queue.add(job.name, jobPayload, {
        jobId: job.jobId,
        delay: job.delay,
        attempts: 3,
        removeOnComplete: true,
        removeOnFail: false,
      });
    } catch (error) {
      // Duplicate jobId will throw; ignore
      if (!String(error?.message || "").includes("JobId")) {
        throw error;
      }
    }
  }
}
