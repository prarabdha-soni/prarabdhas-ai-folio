import { motion } from "framer-motion";
import { Shield, Brain, Code2, Cloud, Database, Cpu } from "lucide-react";

const skillCategories = [
  {
    icon: Brain,
    title: "LLM & GenAI",
    items: ["GPT-4o/4.5", "Claude 3/4", "Gemini 3", "LLaMA 3/4", "DeepSeek v3"],
  },
  {
    icon: Cpu,
    title: "AI Frameworks",
    items: ["LangChain", "LangGraph", "LlamaIndex", "AutoGen", "LangSmith", "PhiData", "n8n"],
  },
  {
    icon: Code2,
    title: "Architecture Patterns",
    items: ["Agentic RAG", "Multi-Agent Systems", "Tool Calling", "Function Orchestration", "Fine-Tuning", "Eval Pipelines"],
  },
  {
    icon: Database,
    title: "Vector & Data",
    items: ["Pinecone", "Weaviate", "FAISS", "ChromaDB", "Qdrant", "PostgreSQL", "MongoDB"],
  },
  {
    icon: Code2,
    title: "Languages & Backend",
    items: ["Java", "Python", "Node.js", "Spring Boot", "FastAPI", "Express.js"],
  },
  {
    icon: Cloud,
    title: "Cloud & Infra",
    items: ["AWS Lambda", "Cognito", "Docker", "Kafka", "Redis", "BullMQ"],
  },
];

const certifications = [
  "AWS Certified ML Specialty",
  "AWS Certified GenAI Specialist",
];

const TechnicalSkillsSection = () => {
  return (
    <section>
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-10"
      >
        // Technical Stack
      </motion.h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {skillCategories.map((cat, idx) => {
          const Icon = cat.icon;
          return (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.06, duration: 0.5 }}
              className="p-4 rounded-xl glass-card hover:glow-primary hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center gap-2 mb-3">
                <Icon className="w-4 h-4 text-primary" strokeWidth={1.5} />
                <h3 className="text-xs font-semibold uppercase tracking-wider text-foreground">{cat.title}</h3>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {cat.items.map((item) => (
                  <span
                    key={item}
                    className="px-2 py-1 text-[10px] font-mono rounded-md bg-secondary text-secondary-foreground border border-border hover:border-primary/50 hover:bg-primary/10 hover:text-primary hover:scale-110 hover:-translate-y-0.5 transition-all duration-200 cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Certifications */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-4 p-4 rounded-xl glass-card flex items-center gap-4"
      >
        <Shield className="w-5 h-5 text-accent shrink-0" strokeWidth={1.5} />
        <div className="flex flex-wrap gap-2">
          {certifications.map((cert) => (
            <span
              key={cert}
              className="px-3 py-1 text-[11px] font-mono rounded-md bg-accent/10 text-accent border border-accent/20"
            >
              {cert}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default TechnicalSkillsSection;
