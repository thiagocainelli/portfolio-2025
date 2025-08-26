import React from "react";
import { useTranslation } from "react-i18next";

interface SkillsListProps {
  translationKey: string;
}

const SkillsList: React.FC<SkillsListProps> = ({ translationKey }) => {
  const { t } = useTranslation();

  const skills = t(translationKey, { returnObjects: true });

  if (!Array.isArray(skills)) {
    return null;
  }

  return (
    <div className="flex flex-wrap gap-2">
      {skills.map((skill, index) => (
        <span key={index} className="skill-badge">
          {skill}
        </span>
      ))}
    </div>
  );
};

export default SkillsList;
