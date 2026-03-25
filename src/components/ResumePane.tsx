import { motion } from "framer-motion";

const ResumePane = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="border border-border rounded-sm bg-muted/30"
    >
      {/* Header */}
      <div className="p-4 border-b border-border flex justify-between items-center font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
        <span className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          System: Active
        </span>
        <span>PRARABDHA_SONI_CV.v1</span>
      </div>

      {/* Resume Content */}
      <div className="p-6 lg:p-8 font-mono">
        <ResumeHeader />
        <ResumeSection title="EDUCATION">
          <ResumeEntry title="B.Tech in CSE" subtitle="IIT Guwahati" date="Sep 2021" />
        </ResumeSection>

        <ResumeSection title="EXPERIENCE">
          <ResumeEntry title="Senior Software Engineer (SDE-3)" subtitle="Arthmate (Omnifi)" date="Oct 2023 – Present" description="Led backend team of 5, owning architecture for mission-critical lending workflows. Drove end-to-end integration of BBPS, E-NACH, eSign." />
          <ResumeEntry title="SaaS Product — Core Infrastructure" subtitle="Arthmate (Omnifi)" date="Oct 2023 – Feb 2024" description="Architected task manager with recursive Kafka processing. Dynamic runtime execution framework for condition-based service resolution." />
          <ResumeEntry title="Credit Risk Modeling" subtitle="Arthmate (Omnifi)" date="Feb 2024 – Jul 2024" description="Real-time Credit Risk Model with XGBoost & LlamaIndex. Credit Decisioning API reducing approval time by 60%. GNN-based Fraud Detection System." />
          <ResumeEntry title="LMS/LOS Origin Product" subtitle="Arthmate" date="Feb 2022 – Present" description="EC2→ECS Fargate migration, MSME validation system, BBPS serverless integration, multi-bank integrations, co-lending platform, E-NACH & E-Sign systems." />
        </ResumeSection>

        <ResumeSection title="TECHNICAL SKILLS">
          <div className="space-y-2 text-[11px] text-muted-foreground">
            <div><span className="text-foreground">Languages:</span> Java, Python, Node.js, TypeScript</div>
            <div><span className="text-foreground">Frameworks:</span> Spring Boot, FastAPI, Express.js</div>
            <div><span className="text-foreground">AI/ML:</span> TensorFlow, XGBoost, Scikit-Learn, LlamaIndex, PyTorch, GNNs</div>
            <div><span className="text-foreground">Cloud:</span> AWS Lambda, Cognito, Docker, Kafka, Redis</div>
            <div><span className="text-foreground">Databases:</span> PostgreSQL, MySQL, MongoDB</div>
          </div>
        </ResumeSection>

        <ResumeSection title="CERTIFICATIONS">
          <div className="space-y-1.5 text-[11px]">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              <span className="text-foreground">AWS Certified ML Specialty</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              <span className="text-foreground">AWS Certified GenAI Specialist</span>
            </div>
          </div>
        </ResumeSection>

        <ResumeSection title="CONTACT">
          <div className="space-y-1.5 text-[11px] text-muted-foreground">
            <div>prarabdha21@gmail.com</div>
            <div>+91-8118898113</div>
            <div>linkedin.com/in/prarabdha-soni</div>
          </div>
        </ResumeSection>
      </div>
    </motion.section>
  );
};

const ResumeHeader = () => (
  <div className="mb-8 pb-4 border-b border-border">
    <h2 className="text-lg font-semibold tracking-tight font-sans">PRARABDHA SONI</h2>
    <p className="text-[11px] text-primary mt-1">Senior Software Engineer (SDE-3)</p>
    <p className="text-[10px] text-muted-foreground mt-0.5">Principal AI & Cloud Data Scientist</p>
  </div>
);

const ResumeSection = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="mb-8">
    <h3 className="text-[10px] uppercase tracking-[0.3em] text-primary mb-4 pb-1 border-b border-border/50">{title}</h3>
    {children}
  </div>
);

const ResumeEntry = ({ title, subtitle, date, description }: { title: string; subtitle: string; date: string; description?: string }) => (
  <div className="mb-4">
    <div className="flex justify-between items-start gap-2">
      <div>
        <p className="text-[12px] text-foreground font-medium">{title}</p>
        <p className="text-[10px] text-muted-foreground">{subtitle}</p>
      </div>
      <span className="text-[10px] tabular-nums text-muted-foreground whitespace-nowrap">{date}</span>
    </div>
    {description && <p className="text-[10px] text-muted-foreground mt-1.5 leading-relaxed">{description}</p>}
  </div>
);

export default ResumePane;
