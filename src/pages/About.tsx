import React from "react";
import { motion } from "framer-motion";
import { Calendar, Award, BookOpen, Briefcase } from "lucide-react";
import { useTranslation } from "react-i18next";
import AnimatedText from "../components/AnimatedText";
import ProfileImage from "../../public/images/thiagocainelli.jpeg";

const About: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-4">{t("about.title")}</h1>
          <AnimatedText
            text={t("about.subtitle")}
            className="text-xl text-light-darker max-w-3xl mx-auto"
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/20 rounded-full filter blur-3xl"></div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-secondary/20 rounded-full filter blur-3xl"></div>

            <div className="relative rounded-lg overflow-hidden aspect-square">
              <img
                src={ProfileImage}
                alt="Thiago Cainelli Image"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent opacity-60"></div>

              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="glass rounded-lg p-4 backdrop-blur-md">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold">Thiago Cainelli</h3>
                  </div>
                  <p className="text-sm text-light-darker">
                    Fullstack Developer
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h2 className="text-2xl font-bold mb-6">
              {t("about.journey.title")}
            </h2>

            <div className="flex flex-col gap-4 mb-6">
              <p className="text-light-darker">
                {t("about.journey.description1")}
              </p>
              <p className="text-light-darker">
                {t("about.journey.description2")}
              </p>
              <p className="text-light-darker">
                {t("about.journey.description3")}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-dark-lightest text-primary">
                  <Calendar size={20} />
                </div>
                <div>
                  <p className="text-sm text-light-darker">
                    {t("about.stats.experience")}
                  </p>
                  <p className="font-medium">{t("about.stats.years")}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-dark-lightest text-secondary">
                  <Briefcase size={20} />
                </div>
                <div>
                  <p className="text-sm text-light-darker">
                    {t("about.stats.projects")}
                  </p>
                  <p className="font-medium">{t("about.stats.completed")}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-dark-lightest text-accent">
                  <Award size={20} />
                </div>
                <div>
                  <p className="text-sm text-light-darker">
                    {t("about.stats.certifications")}
                  </p>
                  <p className="font-medium">{t("about.stats.earned")}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-dark-lightest text-primary">
                  <BookOpen size={20} />
                </div>
                <div>
                  <p className="text-sm text-light-darker">
                    {t("about.stats.education")}
                  </p>
                  <p className="font-medium">{t("about.stats.degree")}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-2xl font-bold mb-8 text-center">
            Work Experience
          </h2>

          <div className="space-y-8">
            <div className="timeline-item">
              <div className="card ml-4">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 className="text-xl font-bold">Fullstack Developer PL</h3>
                  <div className="flex items-center gap-2">
                    <span className="text-primary">Jan 2025 - Present</span>
                    <span className="px-2 py-1 text-xs bg-primary/20 text-primary rounded-full">
                      Current
                    </span>
                  </div>
                </div>
                <h4 className="text-light-darker mb-4">
                  Fairy Solutions - Tecnologia e Inovação
                </h4>
                <div className="flex flex-col gap-2 mb-4">
                  <p className="text-light-darker">
                    - Developing and maintaining web applications using ReactJS,
                    NestJS, and TypeScript, contributing across both frontend
                    and backend.
                  </p>
                  <p className="text-light-darker">
                    - Responsible for building and deploying scalable solutions
                    in cloud environments (AWS, DigitalOcean, Azure).
                  </p>
                  <p className="text-light-darker">
                    - Integrated the OpenAI API into platform features, enabling
                    intelligent interactions and automation capabilities.
                  </p>
                  <p className="text-light-darker">
                    - Collaborating in agile sprints with cross-functional
                    teams, ensuring timely delivery of high-quality features.
                  </p>
                  <p className="text-light-darker">
                    - Improving application performance and maintainability
                    through continuous refactoring, documentation, and testing
                    practices.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="skill-badge">React.js</span>
                  <span className="skill-badge">Next.js</span>
                  <span className="skill-badge">TypeScript</span>
                  <span className="skill-badge">TailwindCSS</span>
                  <span className="skill-badge">Node.js</span>
                  <span className="skill-badge">NestJS</span>
                  <span className="skill-badge">PostgreSQL</span>
                  <span className="skill-badge">AWS</span>
                  <span className="skill-badge">DigitalOcean</span>
                  <span className="skill-badge">Azure</span>
                  <span className="skill-badge">OpenAI API</span>
                  <span className="skill-badge">Jest</span>
                  <span className="skill-badge">Cypress</span>
                  <span className="skill-badge">Agile</span>
                  <span className="skill-badge">Clean Code</span>
                </div>
              </div>
            </div>

            <div className="timeline-item">
              <div className="card ml-4">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 className="text-xl font-bold">
                    Fullstack Developer and Software Development Lead
                  </h3>
                  <div className="flex items-center gap-2">
                    <span className="text-primary">Jan 2025 - Jun 2025</span>
                  </div>
                </div>
                <h4 className="text-light-darker mb-4">
                  Fairy Solutions - Tecnologia e Inovação
                </h4>

                <div className="flex flex-col gap-2 mb-4">
                  <p className="text-light-darker">
                    - Combined software development duties with the technical
                    leadership of a 4-person engineering team, managing sprints,
                    priorities, and successful project deliveries.
                  </p>
                  <p className="text-light-darker">
                    - Contributed broadly to front-end and back-end development
                    using ReactJS, NestJS, TypeScript, and PostgreSQL, handling
                    a wide range of features, refactors, and integrations.
                  </p>
                  <p className="text-light-darker">
                    - Collaborated closely with stakeholders to align technical
                    execution with business goals, using agile methodologies and
                    tools like Git and ClickUp.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="skill-badge">React.js</span>
                  <span className="skill-badge">TypeScript</span>
                  <span className="skill-badge">TailwindCSS</span>
                  <span className="skill-badge">Node.js</span>
                  <span className="skill-badge">NestJS</span>
                  <span className="skill-badge">PostgreSQL</span>
                  <span className="skill-badge">Agile</span>
                  <span className="skill-badge">Clean Code</span>
                  <span className="skill-badge">Leadership</span>
                  <span className="skill-badge">API Development</span>
                  <span className="skill-badge">Software Architecture</span>
                  <span className="skill-badge">Git</span>
                  <span className="skill-badge">ClickUp</span>
                </div>
              </div>
            </div>

            <div className="timeline-item">
              <div className="card ml-4">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 className="text-xl font-bold">Full Stack Developer</h3>
                  <span className="text-primary">Feb 2024 - Feb 2025</span>
                </div>
                <h4 className="text-light-darker mb-4">
                  Fairy Solutions - Tecnologia e Inovação
                </h4>
                <div className="flex flex-col gap-2 mb-4">
                  <p className="text-light-darker">
                    - Developed and maintained scalable full-stack applications
                    using ReactJS, NestJS, TypeScript, and PostgreSQL.
                  </p>
                  <p className="text-light-darker">
                    - Led integrations with third-party APIs, increasing data
                    reliability and consistency by 30%.
                  </p>
                </div>
                <div className="flex flex-col gap-2 mb-4">
                  <p className="text-light-darker">
                    - Refactored and optimized legacy codebases, improving
                    application performance and reducing technical debt by 45%.
                  </p>
                </div>
                <div className="flex flex-col gap-2 mb-4">
                  <p className="text-light-darker">
                    - Actively participated in agile sprints and team
                    collaboration using Git and ClickUp.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="skill-badge">Next.js</span>
                  <span className="skill-badge">React.js</span>
                  <span className="skill-badge">Node.js</span>
                  <span className="skill-badge">TypeScript</span>
                  <span className="skill-badge">NestJS</span>
                  <span className="skill-badge">PostgreSQL</span>
                </div>
              </div>
            </div>

            <div className="timeline-item">
              <div className="card ml-4">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 className="text-xl font-bold">
                    Frontend Developer (Freelancer)
                  </h3>
                  <span className="text-primary">Jun 2023 - Dec 2023</span>
                </div>
                <h4 className="text-light-darker mb-4">Freelancer</h4>
                <div className="flex flex-col gap-2 mb-4">
                  <p className="text-light-darker">
                    - Developed modern, high-performance interfaces for landing
                    pages, websites, and web systems, focusing on responsiveness
                    and user experience.
                  </p>
                  <p className="text-light-darker">
                    - Worked across the full stack using ReactJS (frontend) and
                    Node.js (backend), including API integrations, state
                    management, and performance optimization.
                  </p>
                  <p className="text-light-darker">
                    - Managed the entire development lifecycle — from
                    architecture and implementation to testing and delivery.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="skill-badge">React.js</span>
                  <span className="skill-badge">Node.js</span>
                  <span className="skill-badge">Express</span>
                  <span className="skill-badge">PostgreSQL</span>
                  <span className="skill-badge">TypeScript</span>
                  <span className="skill-badge">TailwindCSS</span>
                  <span className="skill-badge">Git</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold mb-8 text-center">
            Education & Certifications
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-dark-lightest text-primary">
                  <BookOpen size={20} />
                </div>
                <h3 className="text-xl font-bold">Education</h3>
              </div>

              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-1">
                    <h4 className="font-medium">
                      Bachelor of Analysis and Development
                    </h4>
                    <span className="text-primary text-sm">2023 - 2025</span>
                  </div>
                  <p className="text-light-darker text-sm">GRAN Faculdade</p>
                </div>

                <div>
                  <div className="flex justify-between mb-1">
                    <h4 className="font-medium">
                      Bachelor of Business Administration
                    </h4>
                    <span className="text-primary text-sm">2017 - 2020</span>
                  </div>
                  <p className="text-light-darker text-sm">Faculdade REGES</p>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-dark-lightest text-secondary">
                  <Award size={20} />
                </div>
                <h3 className="text-xl font-bold">Certifications</h3>
              </div>

              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-1">
                    <h4 className="font-medium">NestJS Fundamentals</h4>
                    <span className="text-secondary text-sm">2024</span>
                  </div>
                  <p className="text-light-darker text-sm">HCode Courses</p>
                </div>

                <div>
                  <div className="flex justify-between mb-1">
                    <h4 className="font-medium">Fullstack Javascript</h4>
                    <span className="text-secondary text-sm">2023</span>
                  </div>
                  <p className="text-light-darker text-sm">OneBitCode</p>
                </div>

                <div>
                  <div className="flex justify-between mb-1">
                    <h4 className="font-medium">Discovery the Cloud AWS</h4>
                    <span className="text-secondary text-sm">2023</span>
                  </div>
                  <p className="text-light-darker text-sm">DIO</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
