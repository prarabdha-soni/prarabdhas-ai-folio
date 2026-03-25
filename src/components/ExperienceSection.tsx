import { motion } from "framer-motion";
import { Building2, Users, Calendar } from "lucide-react";

const experiences = [
  {
    role: "Senior Software Engineer (SDE-3)",
    company: "Arthmate (Omnifi)",
    period: "Oct 2023 – Present",
    scope: "Operational Systems Pod Lead · Team of 8",
    highlights: [
      "Led a backend team of 5 as part of the operational systems pod, owning architecture and delivery of mission-critical lending workflows (disbursement, mandates, repayments)",
      "Drove end-to-end integration of third-party systems (BBPS, E-NACH, eSign), improving transaction reliability and enabling scalable loan lifecycle automation",
    ],
    tech: ["Java", "Spring Boot", "Kafka", "Redis", "AWS", "PostgreSQL", "MySQL", "MongoDB"],
  },
  {
    role: "SaaS Product — Core Infrastructure",
    company: "Arthmate (Omnifi)",
    period: "Oct 2023 – Feb 2024",
    scope: "Backend · Team of 8",
    highlights: [
      "Architected an advanced task manager leveraging recursive Apache Kafka event processing, fully configurable via Master Data Management service, automating mission-critical workflows such as loan disbursement",
      "Designed a dynamic runtime execution framework enabling condition-based service resolution and extensible workflows across loan processing pipelines",
    ],
    tech: ["Java", "Spring Boot", "Kafka", "Redis", "AWS", "Cognito", "PostgreSQL", "MySQL", "MongoDB", "Swagger"],
  },
  {
    role: "Credit Risk Modeling",
    company: "Arthmate (Omnifi)",
    period: "Feb 2024 – Jul 2024",
    scope: "Risk Team · Team of 7",
    highlights: [
      "Developed a real-time Credit Risk Model using XGBoost & LlamaIndex, integrating CIBIL, CRIF, and Experian credit scores for loan default prediction and fraud detection",
      "Engineered feature pipelines for borrower risk assessment, including credit history, DTI, loan stacking behavior, and transactional anomalies",
      "Built a Credit Decisioning API with FastAPI and AWS Lambda, reducing loan approval time by 60% while ensuring compliance with RBI guidelines",
      "Designed an AI-driven Fraud Detection System leveraging Graph Neural Networks (PyTorch Geometric, DGL) to analyze borrower relationships, flagging synthetic identity fraud and collusion networks",
    ],
    tech: ["Python", "XGBoost", "Scikit-Learn", "FastAPI", "AWS Lambda", "GNNs", "TensorFlow", "LlamaIndex"],
  },
  {
    role: "LMS/LOS Origin Product",
    company: "Arthmate",
    period: "Feb 2022 – Present",
    scope: "Backend · Team of 15",
    highlights: [
      "Led migration of EC2-hosted Spring scheduled jobs to AWS ECS Fargate, redesigning from cron-based to demand-driven, event-triggered architecture; improved scalability and reduced idle compute costs",
      "Architected MSME financial workflow validation system with centralized validator microservice integrated via Bull queue, enforcing strict deviation-first processing for compliance checks",
      "Designed and implemented BBPS integration using serverless architecture (AWS Lambda, Cognito), enabling secure, scalable bill payment processing with real-time EMI computation",
      "Built and scaled secure banking integrations with Axis, ICICI, and RBL, along with credit bureau connectors (CIBIL, CRIF), strengthening underwriting pipelines",
      "Engineered co-lending platform with dynamic lender selection API integrated with data science models for real-time A/B/C risk scoring",
      "Designed robust E-NACH system handling multi-step net banking mandate flows with reliable state management, idempotency, and rollback handling",
      "Developed Aadhaar-based E-Sign authorization system (UIDAI integration) for secure and compliant digital signing flows",
      "Built dynamic credit scoring orchestration layer, intelligently selecting between providers (CIBIL, CRIF, Experian) based on partner configuration",
    ],
    tech: ["Java", "Spring Boot", "Spring Batch", "Node.js", "Express.js", "MongoDB", "MySQL", "Jest", "Docker", "BullMQ", "Redis"],
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
