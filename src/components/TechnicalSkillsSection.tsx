import { motion } from "framer-motion";
import { Shield } from "lucide-react";

const technicalSkills = {
  "Large Language Models": ["GPT-4o/4.5", "Claude 3/4", "Gemini 3", "LLaMA 3/4", "DeepSeek v3"],
  "LLM Frameworks": ["LangChain", "LangGraph", "LlamaIndex", "AutoGen", "LangSmith", "PhiData", "n8n AI Agents"],
  "Architectures": ["Agentic RAG", "Multi-Agent Systems", "Tool Calling", "Function Orchestration", "Prompt Engineering", "Fine-Tuning", "Evaluation Pipelines"],
  "Vector & Retrieval": ["Pinecone", "Weaviate", "FAISS", "ChromaDB", "Qdrant", "Knowledge Graph Integration"],
  "Applications": ["AI Copilots", "Enterprise Search", "Compliance Automation", "Intelligent Document Processing", "Conversational AI"],
  "Languages & Frameworks": ["Java", "Python", "Node.js", "Spring Boot", "FastAPI", "Express.js"],
  "AI / ML": ["TensorFlow", "XGBoost", "Scikit-Learn", "PyTorch", "GNNs"],
  "Cloud & Infrastructure": ["AWS Lambda", "AWS Cognito", "Docker", "Apache Kafka", "Redis", "BullMQ"],
  "Databases": ["PostgreSQL", "MySQL", "MongoDB"],
  "Certifications": ["AWS ML Specialty", "AWS GenAI Specialist"],
};

const TechnicalSkillsSection = () => {
  return (
    <section>
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-12"
      >
        // Technical Skills
      </motion.h2>

      <div className="space-y-6">
        {Object.entries(technicalSkills).map(([category, items], idx) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
          >
            <h3 className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-2">
              {category}
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {items.map((item) => (
                <span
                  key={item}
                  className={`px-2.5 py-1 text-[11px] font-mono rounded-sm border transition-colors ${
                    category === "Certifications"
                      ? "bg-accent/10 text-accent border-accent/30 hover:bg-accent/20"
                      : "bg-secondary text-secondary-foreground border-border hover:border-primary/40"
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

export default TechnicalSkillsSection;
