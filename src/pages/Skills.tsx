import React from 'react';
import { motion } from 'framer-motion';
import { Code, Server, Database, Cpu, Globe } from 'lucide-react';
import AnimatedText from '../components/AnimatedText';
import SkillCard from '../components/SkillCard';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: <Code size={24} />,
      skills: [
        'React',
        'TypeScript',
        'JavaScript',
        'HTML5',
        'CSS3',
        'Next.js',
        'Tailwind CSS',
        'Styled Components',
        'React Query',
      ],
    },
    {
      title: 'Backend',
      icon: <Server size={24} />,
      skills: [
        'Node.js',
        'NestJS',
        'REST API',
        'WebSockets',
        'Authentication',
        'Authorization',
        'API Design',
      ],
    },
    {
      title: 'Databases',
      icon: <Database size={24} />,
      skills: ['PostgreSQL', 'Firebase', 'Supabase', 'Prisma', 'SQL', 'NoSQL'],
    },
    // {
    //   title: 'DevOps',
    //   icon: <Terminal size={24} />,
    //   skills: ['Git', 'GitHub', 'AWS'],
    // },
    // {
    //   title: 'Architecture',
    //   icon: <Layers size={24} />,
    //   skills: ['MVC', 'Microservices', 'Serverless', 'RESTful', 'Clean Code', 'Design Patterns', 'SOLID Principles', 'DRY', 'KISS'],
    // },
    {
      title: 'Tools',
      icon: <Cpu size={24} />,
      skills: ['VS Code', 'Git', 'GitHub', 'Postman', 'Figma', 'Webpack', 'Vite', 'npm', 'yarn'],
    },
    {
      title: 'Web',
      icon: <Globe size={24} />,
      skills: [
        'Responsive Design',
        'Progressive Web Apps',
        'Web Performance',
        'SEO',
        'Accessibility',
        'Cross-Browser Compatibility',
        'Mobile First',
      ],
    },
    // {
    //   title: 'UI/UX',
    //   icon: <Palette size={24} />,
    //   skills: ['UI Design', 'UX Principles', 'Wireframing', 'Prototyping', 'Color Theory', 'Typography', 'User Research', 'Usability Testing'],
    // },
  ];

  return (
    <div className='pt-24 pb-16'>
      <div className='container mx-auto px-4'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='text-center mb-16'
        >
          <h1 className='text-4xl font-bold mb-4'>Skills & Expertise</h1>
          <AnimatedText
            text='A comprehensive overview of my technical skills and areas of expertise'
            className='text-xl text-light-darker max-w-3xl mx-auto'
          />
        </motion.div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20'>
          {skillCategories.map((category, index) => (
            <SkillCard
              key={index}
              title={category.title}
              icon={category.icon}
              skills={category.skills}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className='mb-20'
        >
          <h2 className='text-2xl font-bold mb-8 text-center'>Technical Proficiency</h2>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            <div className='card'>
              <h3 className='text-xl font-bold mb-6'>Frontend Development</h3>

              <div className='space-y-6'>
                <div>
                  <div className='flex justify-between mb-2'>
                    <span className='font-medium'>React.js</span>
                    <span>95%</span>
                  </div>
                  <div className='h-2 bg-dark-lightest rounded-full overflow-hidden'>
                    <div
                      className='h-full bg-gradient-to-r from-primary to-secondary rounded-full'
                      style={{ width: '95%' }}
                    ></div>
                  </div>
                </div>

                <div>
                  <div className='flex justify-between mb-2'>
                    <span className='font-medium'>TypeScript</span>
                    <span>90%</span>
                  </div>
                  <div className='h-2 bg-dark-lightest rounded-full overflow-hidden'>
                    <div
                      className='h-full bg-gradient-to-r from-primary to-secondary rounded-full'
                      style={{ width: '90%' }}
                    ></div>
                  </div>
                </div>

                <div>
                  <div className='flex justify-between mb-2'>
                    <span className='font-medium'>HTML5</span>
                    <span>85%</span>
                  </div>
                  <div className='h-2 bg-dark-lightest rounded-full overflow-hidden'>
                    <div
                      className='h-full bg-gradient-to-r from-primary to-secondary rounded-full'
                      style={{ width: '85%' }}
                    ></div>
                  </div>
                </div>

                <div>
                  <div className='flex justify-between mb-2'>
                    <span className='font-medium'>CSS/Tailwind</span>
                    <span>85%</span>
                  </div>
                  <div className='h-2 bg-dark-lightest rounded-full overflow-hidden'>
                    <div
                      className='h-full bg-gradient-to-r from-primary to-secondary rounded-full'
                      style={{ width: '85%' }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            <div className='card'>
              <h3 className='text-xl font-bold mb-6'>Backend Development</h3>

              <div className='space-y-6'>
                <div>
                  <div className='flex justify-between mb-2'>
                    <span className='font-medium'>Node.js</span>
                    <span>90%</span>
                  </div>
                  <div className='h-2 bg-dark-lightest rounded-full overflow-hidden'>
                    <div
                      className='h-full bg-gradient-to-r from-secondary to-accent rounded-full'
                      style={{ width: '90%' }}
                    ></div>
                  </div>
                </div>

                <div>
                  <div className='flex justify-between mb-2'>
                    <span className='font-medium'>Nest.js</span>
                    <span>85%</span>
                  </div>
                  <div className='h-2 bg-dark-lightest rounded-full overflow-hidden'>
                    <div
                      className='h-full bg-gradient-to-r from-secondary to-accent rounded-full'
                      style={{ width: '85%' }}
                    ></div>
                  </div>
                </div>

                <div>
                  <div className='flex justify-between mb-2'>
                    <span className='font-medium'>PostgreSQL</span>
                    <span>80%</span>
                  </div>
                  <div className='h-2 bg-dark-lightest rounded-full overflow-hidden'>
                    <div
                      className='h-full bg-gradient-to-r from-secondary to-accent rounded-full'
                      style={{ width: '80%' }}
                    ></div>
                  </div>
                </div>

                <div>
                  <div className='flex justify-between mb-2'>
                    <span className='font-medium'>REST API Design</span>
                    <span>85%</span>
                  </div>
                  <div className='h-2 bg-dark-lightest rounded-full overflow-hidden'>
                    <div
                      className='h-full bg-gradient-to-r from-secondary to-accent rounded-full'
                      style={{ width: '85%' }}
                    ></div>
                  </div>
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
          <h2 className='text-2xl font-bold mb-8 text-center'>My Development Process</h2>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            <div className='card text-center'>
              <div className='w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4'>
                <span className='text-2xl font-bold text-primary'>01</span>
              </div>
              <h3 className='text-xl font-bold mb-2'>Planning & Research</h3>
              <p className='text-light-darker'>
                Understanding requirements, researching solutions, and planning architecture.
              </p>
            </div>

            <div className='card text-center'>
              <div className='w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-4'>
                <span className='text-2xl font-bold text-secondary'>02</span>
              </div>
              <h3 className='text-xl font-bold mb-2'>Development</h3>
              <p className='text-light-darker'>
                Writing clean, maintainable code with a focus on performance and best practices.
              </p>
            </div>

            <div className='card text-center'>
              <div className='w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4'>
                <span className='text-2xl font-bold text-accent'>03</span>
              </div>
              <h3 className='text-xl font-bold mb-2'>Testing & Deployment</h3>
              <p className='text-light-darker'>Thorough testing, debugging, and deploying.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
