import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { useTranslation } from "react-i18next";

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="glass border-t border-dark-lightest mt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-light-darker text-sm">
              &copy; {currentYear}{" "}
              <span className="text-gradient font-medium">Thiago Cainelli</span>
              . {t("footer.copyright")}
            </p>
          </div>

          <div className="flex items-center space-x-4">
            <a
              href="https://github.com/thiagocainelli"
              target="_blank"
              rel="noopener noreferrer"
              className="text-light-darker hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com/in/thiagocainelli"
              target="_blank"
              rel="noopener noreferrer"
              className="text-light-darker hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>

            <a
              href="mailto:thiagocainelli@gmail.com"
              className="text-light-darker hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
