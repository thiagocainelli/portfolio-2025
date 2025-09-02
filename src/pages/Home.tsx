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
} from "lucide-react";
import { useTranslation } from "react-i18next";
import AnimatedText from "../components/AnimatedText";
import CodeBlock from "../components/CodeBlock";
import SkillsList from "../components/SkillsList";
import SEO from "../components/SEO";

const Home: React.FC = () => {
  const { t } = useTranslation();

  const codeExample = `// Welcome to my portfolio
import { Developer } from '@fullstack/developer';

const skills = {
  frontend: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS',],
  backend: ['Node.js', 'Python', 'Nest.js', 'FastAPI', 'Express'],
  database: ['PostgreSQL', 'MySQL', 'PrismaORM', 'TypeORM'],
  mobile: ['React Native', 'Expo'],
  testing: ['Jest', 'Cypress'],
  tools: ['Git', 'GitHub', 'Swagger', 'Docker', 'DBeaver', 'Postman'],
  cloud: ['AWS', 'Azure', 'Digital Ocean'],
  ia: ['LLMs', 'RAG', 'AI Agents', 'LangChain', 'LangGraph', 'LangSmith'],
};

const developer = new Developer({
  name: 'Thiago Cainelli',
  title: 'Fullstack Developer',
  skills,
});

developer.sayHello();`;

  return (
    <>
      <SEO
        title="Home"
        description="Welcome to my portfolio! I'm Thiago Cainelli, a Fullstack Developer passionate about creating innovative web solutions with React.js, Node.js, TypeScript, React Native, and modern web technologies."
        keywords="Portfolio, Home, Fullstack Developer, React.js, Node.js, TypeScript, React Native, Web Development"
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
                      t("home.typewriter.mobile"),
                      2000,
                      t("home.typewriter.problem"),
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
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/20 rounded-full filter blur-3xl"></div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-secondary/20 rounded-full filter blur-3xl"></div>
              <CodeBlock code={codeExample} title="developer.js" />
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="card flex flex-col items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary flex items-center gap-2">
                  <Code size={24} />
                  <h3 className="text-xl font-bold">
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
                <div className="p-3 rounded-lg bg-secondary/10 text-secondary flex items-center gap-2">
                  <Server size={24} />
                  <h3 className="text-xl font-bold">
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
                <div className="p-3 rounded-lg bg-secondary/10 text-secondary flex items-center gap-2">
                  <Smartphone size={24} />
                  <h3 className="text-xl font-bold">
                    {t("home.services.mobile.title")}
                  </h3>
                </div>

                <p className="text-light-darker mb-4">
                  {t("home.services.mobile.description")}
                </p>

                <SkillsList translationKey="home.services.mobile.skills" />
              </div>

              <div className="card flex flex-col items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary flex items-center gap-2">
                  <Cloud size={24} />
                  <h3 className="text-xl font-bold">
                    {t("home.services.cloud.title")}
                  </h3>
                </div>

                <p className="text-light-darker mb-4">
                  {t("home.services.cloud.description")}
                </p>

                <SkillsList translationKey="home.services.cloud.skills" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mt-32"
          >
            <h2 className="text-2xl font-bold mb-8 text-center">
              {t("home.process.title")}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="card text-center">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">
                    {t("home.process.steps.planning.number")}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2">
                  {t("home.process.steps.planning.title")}
                </h3>
                <p className="text-light-darker">
                  {t("home.process.steps.planning.description")}
                </p>
              </div>

              <div className="card text-center">
                <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-secondary">
                    {t("home.process.steps.development.number")}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2">
                  {t("home.process.steps.development.title")}
                </h3>
                <p className="text-light-darker">
                  {t("home.process.steps.development.description")}
                </p>
              </div>

              <div className="card text-center">
                <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-accent">
                    {t("home.process.steps.testing.number")}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2">
                  {t("home.process.steps.testing.title")}
                </h3>
                <p className="text-light-darker">
                  {t("home.process.steps.testing.description")}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Home;
