import { motion } from "framer-motion";
import { Brain, Database, Cloud, Shield, Workflow, Zap, ArrowRight } from "lucide-react";

const pipelines = [
  {
    icon: Brain,
    title: "Agentic RAG Pipeline",
    description: "Multi-agent retrieval system with tool calling, function orchestration, and self-correcting evaluation loops",
    stack: ["LangGraph", "GPT-4o", "Pinecone", "FastAPI"],
    color: "text-primary",
  },
  {
    icon: Workflow,
    title: "Event-Driven Task Orchestrator",
    description: "Recursive Kafka-based workflow engine automating loan disbursement with dynamic bean instantiation",
    stack: ["Kafka", "Spring Boot", "Redis", "PostgreSQL"],
    color: "text-accent",
  },
  {
    icon: Shield,
    title: "Credit Risk & Fraud Detection",
    description: "Real-time scoring with XGBoost ensembles and Graph Neural Networks for borrower relationship analysis",
    stack: ["XGBoost", "GNNs", "TensorFlow", "AWS Lambda"],
    color: "text-primary",
  },
  {
    icon: Zap,
    title: "AI-Powered Document Processing",
    description: "Intelligent extraction pipeline with LlamaIndex for compliance automation and enterprise search",
    stack: ["LlamaIndex", "Claude 3", "ChromaDB", "FastAPI"],
    color: "text-accent",
  },
  {
    icon: Database,
    title: "Co-Lending Platform Engine",
    description: "Dynamic co-lender selection via AI scoring with multi-bank integration (Axis, ICICI, RBL)",
    stack: ["Java", "MongoDB", "Docker", "BullMQ"],
    color: "text-primary",
  },
  {
    icon: Cloud,
    title: "Serverless Banking Integration",
    description: "BBPS, E-NACH, E-Sign systems with Aadhaar-based UIDAI authentication and Cognito ID security",
    stack: ["AWS Lambda", "Cognito", "Node.js", "Express.js"],
    color: "text-accent",
  },
];

const ArchitectureSection = () => {
  return (
    <section>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mb-10"
      >
        <h2 className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-2">
          // Systems Architected
        </h2>
        <p className="text-sm text-muted-foreground max-w-xl">
          Production pipelines and system architectures designed for scale, reliability, and intelligent automation.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-4">
        {pipelines.map((pipeline, idx) => {
          const Icon = pipeline.icon;
          return (
            <motion.div
              key={pipeline.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="group p-5 rounded-xl glass-card hover:glow-primary transition-all duration-300 cursor-default"
            >
              <div className="flex items-start gap-3">
                <div className={`p-2 rounded-lg bg-primary/10 ${pipeline.color} shrink-0`}>
                  <Icon className="w-4 h-4" strokeWidth={1.5} />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                    {pipeline.title}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                    {pipeline.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {pipeline.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 text-[10px] font-mono rounded-md bg-secondary text-secondary-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default ArchitectureSection;
