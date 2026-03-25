import { motion } from "framer-motion";
import { Building2, Users, Calendar } from "lucide-react";

const experiences = [
  {
    role: "Senior Software Engineer (SDE-3)",
    company: "Arthmate (Omnifi)",
    period: "Oct 2023 – Present",
    scope: "Operational Systems Pod Lead · Team of 8",
    highlights: [
      "Spearheading operational systems pod, guiding backend team on architecture decisions for mission-critical fintech infrastructure",
      "Architected recursive Kafka event-processing engine automating loan disbursement pipelines end-to-end",
      "Designed factory-pattern runtime instantiation for dynamic bean resolution based on real-time conditions",
      "Built real-time Credit Risk Model with XGBoost & LlamaIndex integrating CIBIL, CRIF, Experian scores",
      "Engineered Credit Decisioning API (FastAPI + Lambda) — reduced loan approval time by 60%",
      "Designed GNN-based Fraud Detection System analyzing borrower relationship graphs",
      "Led migration of EC2-hosted Spring scheduled jobs to AWS ECS Fargate, redesigning the system from cron-based execution to demand-driven architecture, improving scalability, reducing idle compute costs, and enhancing operational reliability",
    ],
    tech: ["Java", "Spring Boot", "Python", "FastAPI", "Kafka", "Redis", "XGBoost", "GNNs", "AWS Lambda", "PostgreSQL"],
  },
  {
    role: "Software Engineer (SDE-2 → SDE-3)",
    company: "Arthmate",
    period: "Feb 2022 – Oct 2023",
    scope: "Backend Engineering · Team of 15",
    highlights: [
      "Enhanced MSME financial systems with validator microservice ensuring loan application compliance",
      "Integrated BBPS via serverless architecture with Cognito ID for secure real-time EMI calculations",
      "Developed multi-bank integrations (Axis, ICICI, RBL) and credit bureau connectors (CIBIL, CRIF)",
      "Engineered co-lending platform with AI-powered dynamic co-lender selection and scoring",
      "Designed E-NACH & E-Sign authorization with Aadhaar-based UIDAI authentication",
    ],
    tech: ["Java", "Spring Boot", "Node.js", "Express.js", "MongoDB", "MySQL", "Docker", "Redis", "BullMQ"],
  },
];

const ExperienceSection = () => {
  return (
    <section>
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-10"
      >
        // Professional Experience
      </motion.h2>

      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-xl glass-card overflow-hidden"
          >
            {/* Header */}
            <div className="p-5 pb-4 border-b border-border/50">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h3 className="text-base font-bold text-foreground">{exp.role}</h3>
                  <div className="flex flex-wrap items-center gap-3 mt-1.5 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1.5">
                      <Building2 className="w-3.5 h-3.5" strokeWidth={1.5} />
                      {exp.company}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" strokeWidth={1.5} />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5" strokeWidth={1.5} />
                      {exp.scope}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Highlights */}
            <div className="p-5 pt-4">
              <ul className="space-y-2.5">
                {exp.highlights.map((h, i) => (
                  <li key={i} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/60 mt-2 shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-1.5 mt-5 pt-4 border-t border-border/30">
                {exp.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 text-[10px] font-mono rounded-md bg-secondary text-secondary-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Education */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-6 p-5 rounded-xl glass-card"
      >
        <h3 className="text-xs font-mono uppercase tracking-wider text-primary mb-2">Education</h3>
        <div className="flex justify-between items-center">
          <div>
            <p className="text-sm font-semibold text-foreground">B.Tech in Computer Science & Engineering</p>
            <p className="text-sm text-muted-foreground">IIT Guwahati</p>
          </div>
          <span className="text-xs font-mono text-muted-foreground">2021</span>
        </div>
      </motion.div>
    </section>
  );
};

export default ExperienceSection;
