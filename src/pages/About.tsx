import React from "react";
import { motion } from "framer-motion";
import { Calendar, Award, BookOpen, Briefcase } from "lucide-react";
import { useTranslation } from "react-i18next";
import AnimatedText from "../components/AnimatedText";
import ProfileImage from "../../public/images/thiagocainelli.jpeg";
import SEO from "../components/SEO";

const About: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <SEO
        title="About"
        description="Learn more about Thiago Cainelli, a passionate Fullstack Developer with expertise in modern web technologies, mobile development, and cloud solutions."
        keywords="About, Experience, Education, Skills, Fullstack Developer, Thiago Cainelli, Career, Background"
        type="profile"
        canonical="https://thiagocainelli.com.br"
      />
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
                      {t("home.badge")}
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
              {t("about.experience.title")}
            </h2>

            <div className="space-y-8">
              <div className="timeline-item">
                <div className="card ml-4">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h3 className="text-xl font-bold">
                      {t("about.experience.jobs.pl.title")}
                    </h3>
                    <div className="flex items-center gap-2">
                      <span className="text-primary">
                        {t("about.experience.jobs.pl.period")}
                      </span>
                      <span className="px-2 py-1 text-xs bg-primary/20 text-primary rounded-full">
                        {t("about.experience.current")}
                      </span>
                    </div>
                  </div>
                  <h4 className="text-light-darker mb-4">
                    {t("about.experience.jobs.pl.company")}
                  </h4>
                  <div className="flex flex-col gap-2 mb-4">
                    {(
                      (t("about.experience.jobs.pl.responsibilities", {
                        returnObjects: true,
                      }) as string[]) || []
                    ).map((responsibility: string, index: number) => (
                      <p key={index} className="text-light-darker">
                        - {responsibility}
                      </p>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {(
                      (t("about.experience.jobs.pl.skills", {
                        returnObjects: true,
                      }) as string[]) || []
                    ).map((skill: string, index: number) => (
                      <span key={index} className="skill-badge">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="timeline-item">
                <div className="card ml-4">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h3 className="text-xl font-bold">
                      {t("about.experience.jobs.lead.title")}
                    </h3>
                    <div className="flex items-center gap-2">
                      <span className="text-primary">
                        {t("about.experience.jobs.lead.period")}
                      </span>
                    </div>
                  </div>
                  <h4 className="text-light-darker mb-4">
                    {t("about.experience.jobs.lead.company")}
                  </h4>

                  <div className="flex flex-col gap-2 mb-4">
                    {(
                      (t("about.experience.jobs.lead.responsibilities", {
                        returnObjects: true,
                      }) as string[]) || []
                    ).map((responsibility: string, index: number) => (
                      <p key={index} className="text-light-darker">
                        - {responsibility}
                      </p>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {(
                      (t("about.experience.jobs.lead.skills", {
                        returnObjects: true,
                      }) as string[]) || []
                    ).map((skill: string, index: number) => (
                      <span key={index} className="skill-badge">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="timeline-item">
                <div className="card ml-4">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h3 className="text-xl font-bold">
                      {t("about.experience.jobs.fullstack.title")}
                    </h3>
                    <span className="text-primary">
                      {t("about.experience.jobs.fullstack.period")}
                    </span>
                  </div>
                  <h4 className="text-light-darker mb-4">
                    {t("about.experience.jobs.fullstack.company")}
                  </h4>
                  <div className="flex flex-col gap-2 mb-4">
                    {(
                      (t("about.experience.jobs.fullstack.responsibilities", {
                        returnObjects: true,
                      }) as string[]) || []
                    ).map((responsibility: string, index: number) => (
                      <p key={index} className="text-light-darker">
                        - {responsibility}
                      </p>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {(
                      (t("about.experience.jobs.fullstack.skills", {
                        returnObjects: true,
                      }) as string[]) || []
                    ).map((skill: string, index: number) => (
                      <span key={index} className="skill-badge">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="timeline-item">
                <div className="card ml-4">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h3 className="text-xl font-bold">
                      {t("about.experience.jobs.freelancer.title")}
                    </h3>
                    <span className="text-primary">
                      {t("about.experience.jobs.freelancer.period")}
                    </span>
                  </div>
                  <h4 className="text-light-darker mb-4">
                    {t("about.experience.jobs.freelancer.company")}
                  </h4>
                  <div className="flex flex-col gap-2 mb-4">
                    {(
                      (t("about.experience.jobs.freelancer.responsibilities", {
                        returnObjects: true,
                      }) as string[]) || []
                    ).map((responsibility: string, index: number) => (
                      <p key={index} className="text-light-darker">
                        - {responsibility}
                      </p>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {(
                      (t("about.experience.jobs.freelancer.skills", {
                        returnObjects: true,
                      }) as string[]) || []
                    ).map((skill: string, index: number) => (
                      <span key={index} className="skill-badge">
                        {skill}
                      </span>
                    ))}
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
              {t("about.education.title")}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="card">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-dark-lightest text-primary">
                    <BookOpen size={20} />
                  </div>
                  <h3 className="text-xl font-bold">
                    {t("about.education.education.title")}
                  </h3>
                </div>

                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between mb-1">
                      <h4 className="font-medium">
                        {t("about.education.education.degree1")}
                      </h4>
                      <span className="text-primary text-sm">
                        {t("about.education.education.period1")}
                      </span>
                    </div>
                    <p className="text-light-darker text-sm">
                      {t("about.education.education.school1")}
                    </p>
                  </div>

                  <div>
                    <div className="flex justify-between mb-1">
                      <h4 className="font-medium">
                        {t("about.education.education.degree2")}
                      </h4>
                      <span className="text-primary text-sm">
                        {t("about.education.education.period2")}
                      </span>
                    </div>
                    <p className="text-light-darker text-sm">
                      {t("about.education.education.school2")}
                    </p>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-dark-lightest text-secondary">
                    <Award size={20} />
                  </div>
                  <h3 className="text-xl font-bold">
                    {t("about.education.certifications.title")}
                  </h3>
                </div>

                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between mb-1">
                      <h4 className="font-medium">
                        {t("about.education.certifications.nestjs")}
                      </h4>
                      <span className="text-secondary text-sm">
                        {t("about.education.certifications.nestjsYear")}
                      </span>
                    </div>
                    <p className="text-light-darker text-sm">
                      {t("about.education.certifications.nestjsSchool")}
                    </p>
                  </div>

                  <div>
                    <div className="flex justify-between mb-1">
                      <h4 className="font-medium">
                        {t("about.education.certifications.fullstack")}
                      </h4>
                      <span className="text-secondary text-sm">
                        {t("about.education.certifications.fullstackYear")}
                      </span>
                    </div>
                    <p className="text-light-darker text-sm">
                      {t("about.education.certifications.fullstackSchool")}
                    </p>
                  </div>

                  <div>
                    <div className="flex justify-between mb-1">
                      <h4 className="font-medium">
                        {t("about.education.certifications.aws")}
                      </h4>
                      <span className="text-secondary text-sm">
                        {t("about.education.certifications.awsYear")}
                      </span>
                    </div>
                    <p className="text-light-darker text-sm">
                      {t("about.education.certifications.awsSchool")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default About;
