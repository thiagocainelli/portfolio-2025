import React from "react";
import { motion } from "framer-motion";
import { Calendar, Briefcase } from "lucide-react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
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
        description="Learn more about Thiago Cainelli, a Software Engineer specialized in architecture and development of high-quality software systems, with expertise in modern web technologies, mobile development, cloud solutions, and Generative AI."
        keywords="About, Software Engineer, Education, Certifications, Thiago Cainelli, Software Architecture, Generative AI"
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
              <div className="relative rounded-lg overflow-hidden aspect-square border border-white/5">
                <img
                  src={ProfileImage}
                  alt="Thiago Cainelli Image"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent opacity-50"></div>

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="bg-dark-lighter/95 border border-white/5 rounded-lg p-4 shadow-soft">
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
                <p className="text-light-darker">
                  {t("about.journey.description4")}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-md bg-primary/5 border border-primary/10 text-primary">
                    <Calendar size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-light-darker">
                      {t("about.stats.experience")}
                    </p>
                    <p className="font-semibold">{t("about.stats.years")}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-md bg-secondary/5 border border-secondary/10 text-secondary">
                    <Briefcase size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-light-darker">
                      {t("about.stats.projects")}
                    </p>
                    <p className="font-semibold">
                      {t("about.stats.completed")}
                    </p>
                  </div>
                </div>

                {/* <div className="flex items-center gap-3">
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
                </div> */}
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="max-w-2xl mx-auto">
              <h2 className="text-2xl font-semibold mb-6">
                {t("about.values.title")}
              </h2>
              <p className="text-light-darker mb-8 leading-relaxed">
                {t("about.values.description")}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="w-12 h-12 rounded-md bg-primary/5 border border-primary/10 flex items-center justify-center mx-auto mb-3">
                    <span className="text-primary text-xl">✓</span>
                  </div>
                  <h3 className="font-semibold mb-2">
                    {t("about.values.quality.title")}
                  </h3>
                  <p className="text-sm text-light-darker">
                    {t("about.values.quality.description")}
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-12 h-12 rounded-md bg-secondary/5 border border-secondary/10 flex items-center justify-center mx-auto mb-3">
                    <span className="text-secondary text-xl">⚡</span>
                  </div>
                  <h3 className="font-semibold mb-2">
                    {t("about.values.efficiency.title")}
                  </h3>
                  <p className="text-sm text-light-darker">
                    {t("about.values.efficiency.description")}
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-12 h-12 rounded-md bg-accent/5 border border-accent/10 flex items-center justify-center mx-auto mb-3">
                    <span className="text-accent text-xl">🤝</span>
                  </div>
                  <h3 className="font-semibold mb-2">
                    {t("about.values.collaboration.title")}
                  </h3>
                  <p className="text-sm text-light-darker">
                    {t("about.values.collaboration.description")}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mt-20 text-center"
          >
            <div className="card max-w-2xl mx-auto">
              <h2 className="text-2xl font-semibold mb-4">
                {t("about.cta.title")}
              </h2>
              <p className="text-light-darker mb-6">
                {t("about.cta.description")}
              </p>
              <Link
                to="/contact"
                className="btn-primary inline-flex items-center gap-2"
              >
                {t("about.cta.button")} <ArrowRight size={18} />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default About;
