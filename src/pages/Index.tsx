import { motion } from "framer-motion";
import HeroSection from "@/components/HeroSection";
import TechnicalSkillsSection from "@/components/TechnicalSkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import SkillsSection from "@/components/SkillsSection";
import ResumePane from "@/components/ResumePane";
import StatusBar from "@/components/StatusBar";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="flex-1 overflow-y-auto px-6 md:px-12 lg:px-24 py-16 lg:py-24"
      >
        <div className="max-w-4xl mx-auto">
          <HeroSection />

          <div className="mt-24 space-y-24">
            <TechnicalSkillsSection />
            <ExperienceSection />
            <SkillsSection />
            <ResumePane />

            {/* Contact */}
            <section className="pb-16">
              <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-8"
              >
                // Request Architecture Review
              </motion.h2>
              <motion.a
                href="mailto:prarabdha21@gmail.com"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="inline-block px-6 py-3 text-sm font-mono border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors rounded-sm"
              >
                prarabdha21@gmail.com →
              </motion.a>
            </section>
          </div>
        </div>
      </motion.main>

      <StatusBar />
    </div>
  );
};

export default Index;
