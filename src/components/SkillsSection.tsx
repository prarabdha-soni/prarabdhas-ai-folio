import { motion } from "framer-motion";
import { Shield } from "lucide-react";

const skills = {
  "Languages & Frameworks": ["Java", "Python", "Node.js", "Spring Boot", "FastAPI", "Express.js"],
  "AI / ML": ["TensorFlow", "XGBoost", "Scikit-Learn", "LlamaIndex", "PyTorch", "GNNs", "RAG"],
  "Cloud & Infrastructure": ["AWS Lambda", "AWS Cognito", "Docker", "Apache Kafka", "Redis", "BullMQ"],
  "Databases": ["PostgreSQL", "MySQL", "MongoDB"],
  "Certifications": ["AWS ML Specialty", "AWS GenAI Specialist"],
};

const SkillsSection = () => {
  return (
    <section>
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-12"
      >
        // Technical Stack
      </motion.h2>

      <div className="space-y-8">
        {Object.entries(skills).map(([category, items], idx) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h3 className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-3">
              {category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {items.map((item) => (
                <span
                  key={item}
                  className={`px-3 py-1.5 text-xs font-mono rounded-sm border border-border transition-colors ${
                    category === "Certifications"
                      ? "bg-accent/10 text-accent border-accent/30 hover:bg-accent/20"
                      : "bg-secondary text-secondary-foreground hover:border-primary/40"
                  }`}
                >
                  {category === "Certifications" && <Shield className="w-3 h-3 inline mr-1.5" strokeWidth={1} />}
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
