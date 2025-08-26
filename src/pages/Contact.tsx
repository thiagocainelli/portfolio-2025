import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button, Form, Input, message } from "antd";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useTranslation } from "react-i18next";
import AnimatedText from "../components/AnimatedText";

const { TextArea } = Input;

interface FormValues {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact: React.FC = () => {
  const { t } = useTranslation();
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const onFinish = (values: FormValues) => {
    setLoading(true);

    // Simulate form submission
    setTimeout(() => {
      console.log("Form values:", values);
      message.success("Message sent successfully!");
      form.resetFields();
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-4">{t("contact.title")}</h1>
          <AnimatedText
            text={t("contact.subtitle")}
            className="text-xl text-light-darker max-w-3xl mx-auto"
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold mb-6">Contact Information</h2>

            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary mt-1">
                  <Mail size={20} />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Email</h3>
                  <a
                    href="mailto:thiagocainelli@gmail.com"
                    className="text-light-darker hover:text-primary transition-colors"
                  >
                    thiagocainelli@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-secondary/10 text-secondary mt-1">
                  <Phone size={20} />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Phone</h3>
                  <a
                    href="tel:+1234567890"
                    className="text-light-darker hover:text-secondary transition-colors"
                  >
                    +55 (16) 98251-4074
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-accent/10 text-accent mt-1">
                  <MapPin size={20} />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Location</h3>
                  <p className="text-light-darker">Brazil</p>
                </div>
              </div>
            </div>

            <div className="card">
              <h3 className="text-xl font-bold mb-4">Let's Connect</h3>
              <p className="text-light-darker mb-6">
                Follow me on social media or check out my work on GitHub. I'm
                always open to new connections and opportunities.
              </p>

              <div className="flex items-center gap-4">
                <a
                  href="https://github.com/thiagocainelli"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-dark-lighter hover:bg-dark-lightest transition-colors"
                  aria-label="GitHub"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-light-darker"
                  >
                    <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21"></path>
                  </svg>
                </a>

                <a
                  href="https://linkedin.com/in/thiagocainelli"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-dark-lighter hover:bg-dark-lightest transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-light-darker"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="card">
              <h2 className="text-2xl font-bold mb-6">Send Me a Message</h2>

              <Form
                form={form}
                layout="vertical"
                onFinish={onFinish}
                requiredMark={false}
              >
                <Form.Item
                  name="name"
                  label="Name"
                  rules={[
                    { required: true, message: "Please enter your name" },
                  ]}
                >
                  <Input className="contact-input" placeholder="Your name" />
                </Form.Item>

                <Form.Item
                  name="email"
                  label="Email"
                  rules={[
                    { required: true, message: "Please enter your email" },
                    { type: "email", message: "Please enter a valid email" },
                  ]}
                >
                  <Input
                    className="contact-input"
                    placeholder="Your email address"
                  />
                </Form.Item>

                <Form.Item
                  name="subject"
                  label="Subject"
                  rules={[
                    { required: true, message: "Please enter a subject" },
                  ]}
                >
                  <Input
                    className="contact-input"
                    placeholder="Subject of your message"
                  />
                </Form.Item>

                <Form.Item
                  name="message"
                  label="Message"
                  rules={[
                    { required: true, message: "Please enter your message" },
                  ]}
                >
                  <TextArea
                    className="contact-input"
                    placeholder="Your message"
                    rows={5}
                  />
                </Form.Item>

                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    size="large"
                    loading={loading}
                    className="btn-primary w-full flex items-center justify-center gap-2"
                    icon={<Send size={18} />}
                  >
                    Send Message
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h2 className="text-2xl font-bold mb-8 text-center">
            Frequently Asked Questions
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card">
              <h3 className="text-xl font-bold mb-3">
                What services do you offer?
              </h3>
              <p className="text-light-darker">
                I specialize in full-stack web development, including frontend
                development with React.js, backend development with Node.js,
                database design, and API development.
              </p>
            </div>

            <div className="card">
              <h3 className="text-xl font-bold mb-3">
                What is your typical project process?
              </h3>
              <p className="text-light-darker">
                My process typically includes requirements gathering, planning,
                design, development, testing, and deployment. I maintain clear
                communication throughout the project lifecycle.
              </p>
            </div>

            <div className="card">
              <h3 className="text-xl font-bold mb-3">
                Are you available for freelance work?
              </h3>
              <p className="text-light-darker">
                Yes, I'm available for freelance projects. I can work on both
                short-term and long-term engagements, depending on the project
                requirements and timeline.
              </p>
            </div>

            <div className="card">
              <h3 className="text-xl font-bold mb-3">
                How do you handle project pricing?
              </h3>
              <p className="text-light-darker">
                Project pricing depends on the scope, complexity, and timeline.
                I offer both fixed-price and hourly rate options. Contact me
                with your project details for a custom quote.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
