import { motion } from "framer-motion";

const experiences = [
  {
    title: "SaaS Product — Core Infrastructure",
    company: "Arthmate (Omnifi)",
    period: "Oct 2023 – Present",
    team: "Backend, team size – 8",
    tech: "Java, Spring Boot, Kafka, Redis, AWS, PostgreSQL, MySQL, MongoDB",
    highlights: [
      "Architected an advanced task manager leveraging recursive Apache Kafka event processing, automating mission-critical workflows such as loan disbursement.",
      "Designed a factory-based runtime instantiation mechanism to dynamically retrieve and instantiate beans based on real-time conditions.",
    ],
  },
  {
    title: "Credit Risk Modeling",
    company: "Arthmate (Omnifi)",
    period: "Feb 2024 – Present",
    team: "Risk team size – 7",
    tech: "Python, XGBoost, Scikit-Learn, FastAPI, AWS Lambda, GNNs, TensorFlow, LlamaIndex",
    highlights: [
      "Developed a real-time Credit Risk Model using XGBoost & LlamaIndex, integrating CIBIL, CRIF, and Experian credit scores for loan default prediction.",
      "Built a Credit Decisioning API with FastAPI and AWS Lambda, reducing loan approval time by 60%.",
      "Designed an AI-driven Fraud Detection System leveraging Graph Neural Networks to analyze borrower relationships.",
    ],
  },
  {
    title: "LMS/LOS Origin Product",
    company: "Arthmate",
    period: "Feb 2022 – Oct 2023",
    team: "Backend, team size – 15",
    tech: "Java, Spring Boot, Node.js, Express.js, MongoDB, MySQL, Docker, Redis, BullMQ",
    highlights: [
      "Enhanced MSME financial systems with validator microservice ensuring loan application compliance.",
      "Integrated BBPS using serverless architecture with Cognito ID for secure real-time EMI calculations.",
      "Developed secure banking integrations with Axis, ICICI, RBL and credit bureaus (CIBIL, CRIF).",
      "Engineered co-lending platform with dynamic co-lender selection via AI scoring.",
      "Designed E-NACH and E-Sign authorization systems with Aadhaar-based UIDAI authentication.",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section>
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-12"
      >
        // Work Experience
      </motion.h2>

      <div className="space-y-16">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="border-t border-border pt-8"
          >
            <div className="flex items-start justify-between gap-4 mb-1">
              <h3 className="text-lg font-semibold tracking-tight">{exp.title}</h3>
              <span className="font-mono text-xs text-muted-foreground tabular-nums whitespace-nowrap">
                {exp.period}
              </span>
            </div>
            <p className="text-sm text-muted-foreground">{exp.company}</p>
            <p className="font-mono text-[10px] text-muted-foreground mt-1">{exp.team}</p>

            <div className="mt-4 flex flex-wrap gap-1.5">
              {exp.tech.split(", ").map((t) => (
                <span
                  key={t}
                  className="px-2 py-0.5 text-[10px] font-mono rounded-sm bg-secondary text-secondary-foreground border border-border"
                >
                  {t}
                </span>
              ))}
            </div>

            <ul className="mt-6 space-y-3">
              {exp.highlights.map((h, i) => (
                <li key={i} className="text-sm text-muted-foreground leading-relaxed pl-4 border-l border-border">
                  {h}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
