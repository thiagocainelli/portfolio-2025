import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { ArrowRight, Github, Linkedin, Code, Server } from 'lucide-react';
import AnimatedText from '../components/AnimatedText';
import CodeBlock from '../components/CodeBlock';

const Home: React.FC = () => {
  const codeExample = `// Welcome to my portfolio
import { Developer } from '@fullstack/developer';

const skills = {
  frontend: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS',],
  backend: ['Node.js', 'Nest.js', 'PostgreSQL', 'Prisma'],
  tools: ['Git', 'GitHub', 'Swagger']
};

const developer = new Developer({
  name: 'Thiago Cainelli',
  title: 'Fullstack Developer',
  skills,
});

developer.sayHello();`;

  return (
    <div className='pt-24 pb-16'>
      <div className='container mx-auto px-4'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className='mb-4'>
              <span className='inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full mb-2'>
                Fullstack Developer
              </span>
              <AnimatedText
                text='Building digital experiences with code and creativity'
                className='text-4xl md:text-5xl font-bold mb-4'
              />
              <div className='h-16 mb-6'>
                <TypeAnimation
                  sequence={[
                    'React.js Developer',
                    2000,
                    'Node.js Engineer',
                    2000,
                    'Problem Solver',
                    2000,
                  ]}
                  wrapper='span'
                  speed={50}
                  repeat={Infinity}
                  className='text-xl md:text-2xl text-gradient font-medium'
                />
              </div>
              <p className='text-light-darker mb-8 text-lg'>
                I craft robust and scalable web applications using modern technologies. Specializing
                in React.js for frontend and Node.js for backend development.
              </p>
            </div>

            <div className='flex flex-wrap gap-4 mb-8'>
              <Link to='/contact' className='btn-primary flex items-center gap-2'>
                Get in Touch <ArrowRight size={18} />
              </Link>
              <Link to='/projects' className='btn-outline flex items-center gap-2'>
                View Projects <Code size={18} />
              </Link>
              {/* <a href='#' className='btn-secondary flex items-center gap-2'>
                Download CV <Download size={18} />
              </a> */}
            </div>

            <div className='flex items-center gap-4'>
              <a
                href='https://github.com/thiagocainelli'
                target='_blank'
                rel='noopener noreferrer'
                className='p-2 rounded-full bg-dark-lighter hover:bg-dark-lightest transition-colors'
                aria-label='GitHub'
              >
                <Github size={20} className='text-light-darker' />
              </a>
              <a
                href='https://linkedin.com/in/thiagocainelli'
                target='_blank'
                rel='noopener noreferrer'
                className='p-2 rounded-full bg-dark-lighter hover:bg-dark-lightest transition-colors'
                aria-label='LinkedIn'
              >
                <Linkedin size={20} className='text-light-darker' />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className='relative'
          >
            <div className='absolute -top-10 -left-10 w-40 h-40 bg-primary/20 rounded-full filter blur-3xl'></div>
            <div className='absolute -bottom-10 -right-10 w-40 h-40 bg-secondary/20 rounded-full filter blur-3xl'></div>
            <CodeBlock code={codeExample} title='developer.js' />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className='mt-32'
        >
          <div className='text-center mb-16'>
            <h2 className='text-3xl font-bold mb-4'>What I Do</h2>
            <p className='text-light-darker max-w-2xl mx-auto'>
              I specialize in building modern web applications with a focus on performance,
              accessibility, and user experience.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            <div className='card flex items-start gap-4'>
              <div className='p-3 rounded-lg bg-primary/10 text-primary'>
                <Code size={24} />
              </div>
              <div>
                <h3 className='text-xl font-bold mb-2'>Frontend Development</h3>
                <p className='text-light-darker mb-4'>
                  Creating responsive and interactive user interfaces using React.js, TypeScript,
                  and modern CSS frameworks.
                </p>
                <div className='flex flex-wrap gap-2'>
                  <span className='skill-badge'>React.js</span>
                  <span className='skill-badge'>Next.js</span>
                  <span className='skill-badge'>TypeScript</span>
                  <span className='skill-badge'>Tailwind CSS</span>
                </div>
              </div>
            </div>

            <div className='card flex items-start gap-4'>
              <div className='p-3 rounded-lg bg-secondary/10 text-secondary'>
                <Server size={24} />
              </div>
              <div>
                <h3 className='text-xl font-bold mb-2'>Backend Development</h3>
                <p className='text-light-darker mb-4'>
                  Building robust APIs and server-side applications using Node.js, Express, and
                  various database technologies.
                </p>
                <div className='flex flex-wrap gap-2'>
                  <span className='skill-badge'>Node.js</span>
                  <span className='skill-badge'>Nest.js</span>
                  <span className='skill-badge'>PostgreSQL</span>
                  <span className='skill-badge'>PrismaORM</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
