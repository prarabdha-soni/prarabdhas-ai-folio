import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Shield, Activity } from "lucide-react";

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
      className="h-8 bg-card/80 backdrop-blur-sm border-t border-border flex items-center justify-between px-6 font-mono text-[10px] text-muted-foreground shrink-0"
    >
      <div className="flex items-center gap-5">
        <span>{time}</span>
        <span className="flex items-center gap-1.5">
          <Activity className="w-3 h-3 text-accent" strokeWidth={1.5} />
          Systems Online
        </span>
      </div>
      <div className="flex items-center gap-4">
        <span className="flex items-center gap-1.5">
          <Shield className="w-3 h-3 text-primary" strokeWidth={1.5} />
          AWS-CERTIFIED ML & GenAI
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          AVAILABLE
        </span>
      </div>
    </motion.div>
  );
};

export default StatusBar;
