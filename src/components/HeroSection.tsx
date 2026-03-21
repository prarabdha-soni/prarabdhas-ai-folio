import { motion } from "framer-motion";
import { Mail, Linkedin, Phone } from "lucide-react";

const HeroSection = () => {
  const subtitle = "Principal Architect specializing in RAG, Autonomous Agents, and ROI-driven GenAI deployments.";

  return (
    <section>
      <motion.span
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="text-primary font-mono text-sm tracking-widest uppercase"
      >
        Enterprise AI Solutions Architect
      </motion.span>

      <motion.h1
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="mt-4 text-6xl lg:text-7xl font-bold tracking-tighter leading-[0.9]"
      >
        Prarabdha <br /> Soni
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-6"
      >
        <span className="text-4xl lg:text-5xl font-bold tracking-tight text-primary">
          4+ Years of Experience
        </span>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="mt-6 text-xl text-muted-foreground leading-relaxed max-w-xl"
      >
        I design and deploy production-grade Generative AI systems that automate
        complex business workflows, enhance decision intelligence, and deliver measurable ROI.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-6 font-mono text-xs text-muted-foreground"
      >
        <TypewriterText text={subtitle} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="mt-8 flex gap-4"
      >
        <a
          href="mailto:prarabdha21@gmail.com"
          className="flex items-center gap-2 text-sm font-mono text-muted-foreground hover:text-primary transition-colors"
        >
          <Mail className="w-4 h-4" strokeWidth={1} />
          prarabdha21@gmail.com
        </a>
        <a
          href="https://www.linkedin.com/in/prarabdha-soni"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm font-mono text-muted-foreground hover:text-primary transition-colors"
        >
          <Linkedin className="w-4 h-4" strokeWidth={1} />
          LinkedIn
        </a>
        <a
          href="tel:+918118898113"
          className="flex items-center gap-2 text-sm font-mono text-muted-foreground hover:text-primary transition-colors"
        >
          <Phone className="w-4 h-4" strokeWidth={1} />
          +91-8118898113
        </a>
      </motion.div>
    </section>
  );
};

const TypewriterText = ({ text }: { text: string }) => {
  return (
    <span>
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 + i * 0.02 }}
        >
          {char}
        </motion.span>
      ))}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
        className="text-primary"
      >
        _
      </motion.span>
    </span>
  );
};

export default HeroSection;
