import { TrendingUp } from "lucide-react";

const Logo = () => {
  return (
    <div className="flex items-center gap-2 animate-fade-in">
      <div className="relative">
        <TrendingUp className="w-12 h-12 text-primary animate-glow" strokeWidth={2.5} />
        <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full animate-pulse" />
      </div>
      <div>
        <h1 className="text-2xl font-black text-primary tracking-tight">MahaBali</h1>
        <p className="text-xs text-primary/80 font-semibold tracking-widest uppercase">Price Action</p>
      </div>
    </div>
  );
};

export default Logo;
