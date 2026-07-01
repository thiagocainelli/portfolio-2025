import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import {
  ArrowRight,
  Github,
  Linkedin,
  Code,
  Server,
  Smartphone,
  Cloud,
  Brain,
  Users,
  MessageSquare,
  Clock,
  CheckCircle,
  TrendingUp,
  Zap,
  Target,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import AnimatedText from "../components/AnimatedText";
import CodeBlock from "../components/CodeBlock";
import SkillsList from "../components/SkillsList";
import SEO from "../components/SEO";

const Home: React.FC = () => {
  const { t } = useTranslation();

  const codeExample = `// Software Engineering Portfolio
import { SoftwareEngineer } from '@engineering/software';

const expertise = {
  frontend: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS'],
  backend: ['Node.js', 'Python', 'Nest.js', 'FastAPI', 'Express'],
  database: ['PostgreSQL', 'MySQL', 'PrismaORM', 'TypeORM'],
  mobile: ['React Native', 'Expo'],
  testing: ['Jest', 'Cypress'],
  tools: ['Git', 'GitHub', 'Swagger', 'Docker', 'DBeaver', 'Postman'],
  cloud: ['AWS', 'Azure', 'Digital Ocean'],
  ai: ['LLMs', 'RAG', 'AI Agents', 'LangChain', 'LangGraph', 'LangSmith'],
};

const engineer = new SoftwareEngineer({
  name: 'Thiago Cainelli',
  title: 'Software Engineer',
  expertise,
});

engineer.sayHello();`;

  return (
    <>
      <SEO
        title="Home"
        description="Software Engineer specialized in architecture and development of high-quality software systems. Expertise in React.js, Node.js, Python, TypeScript, React Native, and Generative AI solutions."
        keywords="Software Engineer, Portfolio, React.js, Node.js, TypeScript, Python, React Native, Generative AI, LLMs, LangChain, Web Development, Software Architecture"
        type="website"
        canonical="https://thiagocainelli.com.br/"
      />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="mb-4">
                <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full mb-2">
                  {t("home.badge")}
                </span>
                <AnimatedText
                  text={t("home.title")}
                  className="text-4xl md:text-5xl font-bold mb-4"
                />
                <div className="h-16 mb-6">
                  <TypeAnimation
                    sequence={[
                      t("home.typewriter.react"),
                      2000,
                      t("home.typewriter.node"),
                      2000,
                      t("home.typewriter.python"),
                      2000,
                      t("home.typewriter.ia"),
                      2000,
                      t("home.typewriter.mobile"),
                      2000,
                      t("home.typewriter.fullstack"),
                      2000,
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                    className="text-xl md:text-2xl text-gradient font-medium"
                  />
                </div>
                <p className="text-light-darker mb-8 text-lg">
                  {t("home.description")}
                </p>
              </div>

              <div className="flex flex-wrap gap-4 mb-8">
                <Link
                  to="/contact"
                  className="btn-primary flex items-center gap-2"
                >
                  {t("home.buttons.getInTouch")} <ArrowRight size={18} />
                </Link>
                {/* <Link to='/projects' className='btn-outline flex items-center gap-2'>
                  {t('home.buttons.viewProjects')} <Code size={18} />
                </Link> */}
                {/* <a href='#' className='btn-secondary flex items-center gap-2'>
                  {t('home.buttons.downloadCV')} <Download size={18} />
                </a> */}
              </div>

              <div className="flex items-center gap-4">
                <a
                  href="https://github.com/thiagocainelli"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-dark-lighter hover:bg-dark-lightest transition-colors"
                  aria-label="GitHub"
                >
                  <Github size={20} className="text-light-darker" />
                </a>
                <a
                  href="https://linkedin.com/in/thiagocainelli"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-dark-lighter hover:bg-dark-lightest transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} className="text-light-darker" />
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <CodeBlock code={codeExample} title="engineer.ts" />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-32"
          >
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">
                {t("home.whatIDo.title")}
              </h2>
              <p className="text-light-darker max-w-2xl mx-auto">
                {t("home.whatIDo.subtitle")}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="card flex flex-col items-start gap-4">
                <div className="p-3 rounded-md bg-primary/5 border border-primary/10 text-primary flex items-center gap-2">
                  <Code size={24} />
                  <h3 className="text-xl font-semibold">
                    {t("home.services.frontend.title")}
                  </h3>
                </div>
                <div>
                  <p className="text-light-darker mb-4">
                    {t("home.services.frontend.description")}
                  </p>
                  <SkillsList translationKey="home.services.frontend.skills" />
                </div>
              </div>

              <div className="card flex flex-col items-start gap-4">
                <div className="p-3 rounded-md bg-secondary/5 border border-secondary/10 text-secondary flex items-center gap-2">
                  <Server size={24} />
                  <h3 className="text-xl font-semibold">
                    {t("home.services.backend.title")}
                  </h3>
                </div>
                <div>
                  <p className="text-light-darker mb-4">
                    {t("home.services.backend.description")}
                  </p>
                  <SkillsList translationKey="home.services.backend.skills" />
                </div>
              </div>

              <div className="card flex flex-col items-start gap-4">
                <div className="p-3 rounded-md bg-accent/5 border border-accent/10 text-accent flex items-center gap-2">
                  <Smartphone size={24} />
                  <h3 className="text-xl font-semibold">
                    {t("home.services.mobile.title")}
                  </h3>
                </div>

                <p className="text-light-darker mb-4">
                  {t("home.services.mobile.description")}
                </p>

                <SkillsList translationKey="home.services.mobile.skills" />
              </div>

              <div className="card flex flex-col items-start gap-4">
                <div className="p-3 rounded-md bg-primary/5 border border-primary/10 text-primary flex items-center gap-2">
                  <Cloud size={24} />
                  <h3 className="text-xl font-semibold">
                    {t("home.services.cloud.title")}
                  </h3>
                </div>

                <p className="text-light-darker mb-4">
                  {t("home.services.cloud.description")}
                </p>

                <SkillsList translationKey="home.services.cloud.skills" />
              </div>

              <div className="card flex flex-col items-start gap-4">
                <div className="p-3 rounded-md bg-secondary/5 border border-secondary/10 text-secondary flex items-center gap-2">
                  <Brain size={24} />
                  <h3 className="text-xl font-semibold">
                    {t("home.services.ai.title")}
                  </h3>
                </div>

                <p className="text-light-darker mb-4">
                  {t("home.services.ai.description")}
                </p>

                <SkillsList translationKey="home.services.ai.skills" />
              </div>
            </div>
          </motion.div>

          {/* Como Trabalho Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mt-32"
          >
            <div className="text-center mb-12">
              <h2 className="text-2xl font-semibold mb-4">
                {t("home.howIWork.title")}
              </h2>
              <p className="text-light-darker max-w-2xl mx-auto">
                {t("home.howIWork.subtitle")}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { key: "communication", icon: MessageSquare },
                { key: "collaboration", icon: Users },
                { key: "efficiency", icon: Zap },
                { key: "quality", icon: Target },
              ].map(({ key, icon: Icon }) => (
                <div key={key} className="card text-center">
                  <div className="w-14 h-14 rounded-md bg-primary/5 border border-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Icon className="text-primary" size={28} />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">
                    {t(`home.howIWork.${key}.title`)}
                  </h3>
                  <p className="text-light-darker text-sm leading-relaxed">
                    {t(`home.howIWork.${key}.description`)}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Métricas de Impacto Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mt-32"
          >
            <div className="text-center mb-12">
              <h2 className="text-2xl font-semibold mb-4">
                {t("home.metrics.title")}
              </h2>
              <p className="text-light-darker max-w-2xl mx-auto">
                {t("home.metrics.subtitle")}
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { key: "projects", icon: CheckCircle, value: "20+" },
                { key: "experience", icon: Clock, value: "2021" },
                { key: "satisfaction", icon: TrendingUp, value: "100%" },
                { key: "delivery", icon: Zap, value: "95%" },
              ].map(({ key, icon: Icon, value }) => (
                <div key={key} className="card text-center">
                  <div className="w-12 h-12 rounded-md bg-primary/5 border border-primary/10 flex items-center justify-center mx-auto mb-3">
                    <Icon className="text-primary" size={24} />
                  </div>
                  <div className="text-3xl font-semibold mb-2 text-primary">
                    {value}
                  </div>
                  <p className="text-light-darker text-sm">
                    {t(`home.metrics.${key}.label`)}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Metodologia Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mt-32"
          >
            <div className="text-center mb-12">
              <h2 className="text-2xl font-semibold mb-4">
                {t("home.process.title")}
              </h2>
              <p className="text-light-darker max-w-2xl mx-auto">
                {t("home.process.subtitle")}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "discovery",
                "planning",
                "development",
                "testing",
                "deployment",
                "maintenance",
              ].map((step, index) => (
                <div key={step} className="card">
                  <div className="w-12 h-12 rounded-md bg-primary/5 border border-primary/10 flex items-center justify-center mb-4">
                    <span className="text-lg font-semibold text-primary">
                      {t(`home.process.steps.${step}.number`)}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">
                    {t(`home.process.steps.${step}.title`)}
                  </h3>
                  <p className="text-light-darker text-sm leading-relaxed">
                    {t(`home.process.steps.${step}.description`)}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mt-32"
          >
            <div className="card max-w-3xl mx-auto text-center">
              <h2 className="text-2xl font-semibold mb-4">
                {t("home.cta.title")}
              </h2>
              <p className="text-light-darker mb-6 text-lg">
                {t("home.cta.description")}
              </p>
              <Link
                to="/contact"
                className="btn-primary inline-flex items-center gap-2 text-lg px-8 py-3"
              >
                {t("home.cta.button")} <ArrowRight size={20} />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Home;
