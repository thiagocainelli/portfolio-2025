import React from "react";
import { motion } from "framer-motion";
import { Terminal } from "lucide-react";

interface CodeBlockProps {
  code: string;
  language?: string;
  title?: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({
  code,
  language = "typescript",
  title = "Code Example",
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="rounded-lg overflow-hidden shadow-lg"
    >
      <div className="flex items-center justify-between bg-dark-lightest px-4 py-2 border-b border-dark-lightest">
        <div className="flex items-center gap-2">
          <Terminal size={16} className="text-primary" />
          <span className="text-sm font-medium">{title}</span>
        </div>
        <div className="text-xs text-light-darker">{language}</div>
      </div>
      <pre className="code-block">
        <code>{code}</code>
      </pre>
    </motion.div>
  );
};

export default CodeBlock;
