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

        </div>
      </motion.main>

      <StatusBar />
    </div>
  );
};

export default Index;
