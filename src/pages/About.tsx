import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Award, BookOpen, Briefcase } from 'lucide-react';
import AnimatedText from '../components/AnimatedText';
import ProfileImage from '../../public/images/thiagocainelli.jpeg';

const About: React.FC = () => {
  return (
    <div className='pt-24 pb-16'>
      <div className='container mx-auto px-4'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='text-center mb-16'
        >
          <h1 className='text-4xl font-bold mb-4'>About Me</h1>
          <AnimatedText
            text='Passionate fullstack developer with a love for creating innovative web solutions'
            className='text-xl text-light-darker max-w-3xl mx-auto'
          />
        </motion.div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20'>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className='relative'
          >
            <div className='absolute -top-10 -left-10 w-40 h-40 bg-primary/20 rounded-full filter blur-3xl'></div>
            <div className='absolute -bottom-10 -right-10 w-40 h-40 bg-secondary/20 rounded-full filter blur-3xl'></div>

            <div className='relative rounded-lg overflow-hidden aspect-square'>
              <img
                src={ProfileImage}
                alt='Thiago Cainelli Image'
                className='w-full h-full object-cover'
              />
              <div className='absolute inset-0 bg-gradient-to-t from-dark to-transparent opacity-60'></div>

              <div className='absolute bottom-0 left-0 right-0 p-6'>
                <div className='glass rounded-lg p-4 backdrop-blur-md'>
                  <div className='flex items-center justify-between mb-2'>
                    <h3 className='font-bold'>Thiago Cainelli</h3>
                  </div>
                  <p className='text-sm text-light-darker'>Fullstack Developer</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h2 className='text-2xl font-bold mb-6'>My Journey</h2>

            <p className='text-light-darker mb-6'>
              I'm a passionate fullstack developer with over 2 years of experience building web
              applications. My journey in software development began with a curiosity about how
              websites work, which led me to dive deep into the world of programming.
            </p>

            <p className='text-light-darker mb-6'>
              I specialize in JavaScript ecosystems, particularly React.js for frontend and Node.js
              for backend development. I'm committed to writing clean, maintainable code and
              creating intuitive user experiences.
            </p>

            <p className='text-light-darker mb-8'>
              When I'm not coding, you can find me exploring new technologies, contributing to
              open-source projects, or sharing my knowledge through technical articles and
              mentoring.
            </p>

            <div className='grid grid-cols-2 gap-4'>
              <div className='flex items-center gap-3'>
                <div className='p-2 rounded-lg bg-dark-lightest text-primary'>
                  <Calendar size={20} />
                </div>
                <div>
                  <p className='text-sm text-light-darker'>Experience</p>
                  <p className='font-medium'>2+ Years</p>
                </div>
              </div>

              <div className='flex items-center gap-3'>
                <div className='p-2 rounded-lg bg-dark-lightest text-secondary'>
                  <Briefcase size={20} />
                </div>
                <div>
                  <p className='text-sm text-light-darker'>Projects</p>
                  <p className='font-medium'>15+ Completed</p>
                </div>
              </div>

              <div className='flex items-center gap-3'>
                <div className='p-2 rounded-lg bg-dark-lightest text-accent'>
                  <Award size={20} />
                </div>
                <div>
                  <p className='text-sm text-light-darker'>Certifications</p>
                  <p className='font-medium'>5+ Earned</p>
                </div>
              </div>

              <div className='flex items-center gap-3'>
                <div className='p-2 rounded-lg bg-dark-lightest text-primary'>
                  <BookOpen size={20} />
                </div>
                <div>
                  <p className='text-sm text-light-darker'>Education</p>
                  <p className='font-medium'>Business Administration Degree</p>
                  <p className='font-medium'>Analysis and Systems Development Degree</p>
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
          className='mb-20'
        >
          <h2 className='text-2xl font-bold mb-8 text-center'>Work Experience</h2>

          <div className='space-y-8'>
            <div className='timeline-item'>
              <div className='card ml-4'>
                <div className='flex flex-col md:flex-row md:items-center md:justify-between mb-4'>
                  <h3 className='text-xl font-bold'>Software Development Lead</h3>
                  <div className='flex items-center gap-2'>
                    <span className='text-primary'>Jan 2025 - Present</span>
                    <span className='px-2 py-1 text-xs bg-primary/20 text-primary rounded-full'>
                      Current
                    </span>
                  </div>
                </div>
                <h4 className='text-light-darker mb-4'>Fairy Solutions - Tecnologia e Inovação</h4>
                <p className='text-light-darker mb-4'>
                  Responsible for planning and managing sprints based on project requirements and
                  business priorities. Leading and mentoring the development team, ensuring
                  efficient task allocation and fostering collaboration to deliver high-quality
                  software solutions.
                </p>
                <div className='flex flex-wrap gap-2'>
                  <span className='skill-badge'>Leadership</span>
                  <span className='skill-badge'>API Development</span>
                  <span className='skill-badge'>Software Architecture</span>
                </div>
              </div>
            </div>

            <div className='timeline-item'>
              <div className='card ml-4'>
                <div className='flex flex-col md:flex-row md:items-center md:justify-between mb-4'>
                  <h3 className='text-xl font-bold'>Full Stack Developer</h3>
                  <span className='text-primary'>Feb 2024 - Feb 2025</span>
                </div>
                <h4 className='text-light-darker mb-4'>Fairy Solutions - Tecnologia e Inovação</h4>
                <p className='text-light-darker mb-4'>
                  Developed and maintained scalable and efficient APIs using NodeJS and NestJS.
                  Created and optimized dynamic, responsive user interfaces with ReactJS, NextJS,
                  and TailwindCSS.
                </p>
                <div className='flex flex-wrap gap-2'>
                  <span className='skill-badge'>Next.js</span>
                  <span className='skill-badge'>React.js</span>
                  <span className='skill-badge'>Node.js</span>
                  <span className='skill-badge'>NestJS</span>
                  <span className='skill-badge'>PostgreSQL</span>
                </div>
              </div>
            </div>

            <div className='timeline-item'>
              <div className='card ml-4'>
                <div className='flex flex-col md:flex-row md:items-center md:justify-between mb-4'>
                  <h3 className='text-xl font-bold'>Frontend Developer (Internship)</h3>
                  <span className='text-primary'>Dec 2023 - Jan 2024</span>
                </div>
                <h4 className='text-light-darker mb-4'>Fairy Solutions - Tecnologia e Inovação</h4>
                <p className='text-light-darker mb-4'>
                  Worked on frontend development, improving application performance, and enhancing
                  UI/UX using modern frontend technologies.
                </p>
                <div className='flex flex-wrap gap-2'>
                  <span className='skill-badge'>React.js</span>
                  <span className='skill-badge'>TypeScript</span>
                  <span className='skill-badge'>TailwindCSS</span>
                </div>
              </div>
            </div>

            <div className='timeline-item'>
              <div className='card ml-4'>
                <div className='flex flex-col md:flex-row md:items-center md:justify-between mb-4'>
                  <h3 className='text-xl font-bold'>Frontend Developer (Freelancer)</h3>
                  <span className='text-primary'>Jun 2023 - Dec 2023</span>
                </div>
                <h4 className='text-light-darker mb-4'>Freelancer</h4>
                <p className='text-light-darker mb-4'>
                  Developed dynamic and responsive web applications, ensuring best practices and
                  high-performance standards.
                </p>
                <div className='flex flex-wrap gap-2'>
                  <span className='skill-badge'>React.js</span>
                  <span className='skill-badge'>TypeScript</span>
                  <span className='skill-badge'>UI/UX</span>
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
          <h2 className='text-2xl font-bold mb-8 text-center'>Education & Certifications</h2>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            <div className='card'>
              <div className='flex items-center gap-3 mb-4'>
                <div className='p-2 rounded-lg bg-dark-lightest text-primary'>
                  <BookOpen size={20} />
                </div>
                <h3 className='text-xl font-bold'>Education</h3>
              </div>

              <div className='space-y-6'>
                <div>
                  <div className='flex justify-between mb-1'>
                    <h4 className='font-medium'>Bachelor of Analysis and Development</h4>
                    <span className='text-primary text-sm'>2023 - 2025</span>
                  </div>
                  <p className='text-light-darker text-sm'>GRAN Faculdade</p>
                </div>

                <div>
                  <div className='flex justify-between mb-1'>
                    <h4 className='font-medium'>Bachelor of Business Administration</h4>
                    <span className='text-primary text-sm'>2017 - 2020</span>
                  </div>
                  <p className='text-light-darker text-sm'>Faculdade REGES</p>
                </div>
              </div>
            </div>

            <div className='card'>
              <div className='flex items-center gap-3 mb-4'>
                <div className='p-2 rounded-lg bg-dark-lightest text-secondary'>
                  <Award size={20} />
                </div>
                <h3 className='text-xl font-bold'>Certifications</h3>
              </div>

              <div className='space-y-6'>
                <div>
                  <div className='flex justify-between mb-1'>
                    <h4 className='font-medium'>NestJS Fundamentals</h4>
                    <span className='text-secondary text-sm'>2024</span>
                  </div>
                  <p className='text-light-darker text-sm'>HCode Courses</p>
                </div>

                <div>
                  <div className='flex justify-between mb-1'>
                    <h4 className='font-medium'>Fullstack Jsvascript</h4>
                    <span className='text-secondary text-sm'>2023</span>
                  </div>
                  <p className='text-light-darker text-sm'>OneBitCode</p>
                </div>

                <div>
                  <div className='flex justify-between mb-1'>
                    <h4 className='font-medium'>Discovery the Cloud AWS</h4>
                    <span className='text-secondary text-sm'>2023</span>
                  </div>
                  <p className='text-light-darker text-sm'>DIO</p>
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
