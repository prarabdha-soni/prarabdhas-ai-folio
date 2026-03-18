import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Shield, Cpu } from "lucide-react";

const StatusBar = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () => {
      setTime(new Date().toISOString().replace("T", " ").slice(0, 19) + " UTC");
    };
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1.2, duration: 0.5 }}
      className="h-5 bg-card border-t border-border flex items-center justify-between px-4 font-mono text-[9px] text-muted-foreground shrink-0"
    >
      <div className="flex items-center gap-4">
        <span>{time}</span>
        <span className="flex items-center gap-1">
          <Cpu className="w-2.5 h-2.5" strokeWidth={1} />
          GPU: Idle
        </span>
        <Sparkline />
      </div>
      <div className="flex items-center gap-3">
        <span className="flex items-center gap-1">
          <Shield className="w-2.5 h-2.5 text-accent" strokeWidth={1} />
          AWS-CERTIFIED
        </span>
        <span className="flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
          ONLINE
        </span>
      </div>
    </motion.div>
  );
};

const Sparkline = () => {
  const points = Array.from({ length: 20 }, () => Math.random() * 8 + 2);
  const pathD = points
    .map((p, i) => `${i === 0 ? "M" : "L"} ${i * 3} ${10 - p}`)
    .join(" ");

  return (
    <svg width="60" height="10" className="opacity-60">
      <path d={pathD} fill="none" stroke="hsl(199 89% 48%)" strokeWidth="1" />
    </svg>
  );
};

export default StatusBar;
