import Footer from "./components/Footer";
import "./globals.css";

export const metadata = {
  title: "Mahabali Price Action | Learn Professional Price Action Trading",
  description:
    "Mahabali Price Action is your ultimate resource to master price action trading. Learn chart reading, candlestick patterns, supply-demand, and real-world trading psychology from experts.",
  keywords: [
    "Mahabali Price Action",
    "price action trading",
    "learn trading online",
    "technical analysis",
    "trading education",
    "candlestick patterns",
    "forex trading course",
    "stock market training",
    "supply and demand trading",
    "price action strategy",
  ],
  authors: [{ name: "Mahabali Price Action" }],
  openGraph: {
    title: "Mahabali Price Action | Learn Professional Price Action Trading",
    description:
      "Master the art of price action trading with Mahabali Price Action. Learn real-world strategies for stock, forex, and crypto markets.",
    url: "https://mahabalipriceaction.com",
    siteName: "Mahabali Price Action",
    images: [
      {
        url: "/MahaBaliLogo.png",
        width: 800,
        height: 600,
        alt: "Mahabali Price Action Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/MahaBaliLogo.png",
    shortcut: "/MahaBaliLogo.png",
    apple: "/MahaBaliLogo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/MahaBaliLogo.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="google-site-verification"
          content="<!-- add your Google Search Console verification code here -->"
        />
      </head>
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}
