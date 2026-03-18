import { motion } from "framer-motion";
import HeroSection from "@/components/HeroSection";
import ExperienceSection from "@/components/ExperienceSection";
import SkillsSection from "@/components/SkillsSection";
import ResumePane from "@/components/ResumePane";
import StatusBar from "@/components/StatusBar";

const Index = () => {
  return (
    <div className="flex flex-col h-screen w-full overflow-hidden">
      <div className="flex flex-1 overflow-hidden">
        {/* Left Narrative Pane */}
        <motion.main
          initial={{ x: -80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="w-full lg:w-[60%] overflow-y-auto border-r border-border px-8 lg:px-12 py-16 lg:py-24 custom-scrollbar"
        >
          <div className="max-w-2xl">
            <HeroSection />

            <div className="mt-32 space-y-32">
              <ExperienceSection />
              <SkillsSection />

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

        {/* Right Resume Pane - hidden on mobile */}
        <div className="hidden lg:flex lg:w-[40%]">
          <ResumePane />
        </div>
      </div>

      <StatusBar />
    </div>
  );
};

export default Index;
