import { motion } from "framer-motion";
import HeroSection from "@/components/HeroSection";
import TechnicalSkillsSection from "@/components/TechnicalSkillsSection";
import ArchitectureSection from "@/components/ArchitectureSection";
import ExperienceSection from "@/components/ExperienceSection";
import StatusBar from "@/components/StatusBar";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="flex-1 overflow-y-auto px-6 md:px-12 lg:px-24 py-16 lg:py-20"
      >
        <div className="max-w-5xl mx-auto space-y-20">
          <HeroSection />
          <TechnicalSkillsSection />
          <ArchitectureSection />
          <ExperienceSection />

          {/* CTA */}
          <motion.section
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="pb-12 text-center"
          >
            <h2 className="text-2xl font-bold text-foreground mb-2">Let's Build Something Intelligent</h2>
            <p className="text-sm text-muted-foreground mb-6">
              Looking for an AI architect to design your next production pipeline?
            </p>
            <a
              href="mailto:prarabdha21@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
            >
              Start a Conversation →
            </a>
          </motion.section>
        </div>
      </motion.main>

      <StatusBar />
    </div>
  );
};

export default Index;
