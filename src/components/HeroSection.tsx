import { motion } from "framer-motion";
import { Mail, Linkedin, Phone, Github, ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative">
      {/* Top badge */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-6"
      >
        <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
        <span className="text-xs font-mono text-primary tracking-wide">Available for Architecture Consulting</span>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="text-5xl lg:text-7xl font-extrabold tracking-tight leading-[1.05]"
      >
        Prarabdha Soni
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.25 }}
        className="mt-3 flex flex-wrap items-center gap-3"
      >
        <span className="text-lg font-semibold text-foreground">Enterprise AI Solutions Architect</span>
        <span className="text-muted-foreground">·</span>
        <span className="text-lg font-medium gradient-text">4+ Years Building Production AI</span>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl"
      >
        I design and deploy production-grade Generative AI systems that automate
        complex business workflows, enhance decision intelligence, and deliver measurable ROI.
      </motion.p>

      {/* Key metrics */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.55, duration: 0.5 }}
        className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4"
      >
        {[
          { value: "15+", label: "Production Systems" },
          { value: "60%", label: "Faster Loan Approval" },
          { value: "8+", label: "Team Members Led" },
          { value: "2x", label: "AWS Certified" },
        ].map((metric, i) => (
          <div key={i} className="p-3 rounded-lg glass-card text-center">
            <div className="text-2xl font-bold text-primary">{metric.value}</div>
            <div className="text-[11px] font-mono text-muted-foreground mt-1">{metric.label}</div>
          </div>
        ))}
      </motion.div>

      {/* Contact row */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="mt-8 flex flex-wrap gap-3"
      >
        <a
          href="mailto:prarabdha21@gmail.com"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors"
        >
          <Mail className="w-4 h-4" />
          Get in Touch
          <ArrowRight className="w-3.5 h-3.5" />
        </a>
        <a
          href="https://www.linkedin.com/in/prarabdha-soni"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border text-sm font-medium text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors"
        >
          <Linkedin className="w-4 h-4" />
          LinkedIn
        </a>
        <a
          href="tel:+918118898113"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border text-sm font-medium text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors"
        >
          <Phone className="w-4 h-4" />
          +91-8118898113
        </a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
