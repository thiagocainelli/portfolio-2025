import React from 'react';
import { motion } from 'framer-motion';
import AnimatedText from '../components/AnimatedText';
import ProjectCard from '../components/ProjectCard';
import personalFinances from '../../public/images/personal-finances.jpeg';
import tlviagens from '../../public/images/tl-viagens.jpeg';
import tcimports from '../../public/images/tc-imports.jpeg';
import cainellimovies from '../../public/images/cainelli-movies.jpeg';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Personal Finances',
      description: 'A personal finances app with categories, transactions, and budgeting features.',
      image: `${personalFinances}`,
      tags: ['Next.js', 'Tailwind CSS', 'TypeScript'],
      demoUrl: 'https://personal-finances-cainelli.vercel.app/',
      repoUrl: 'https://github.com/thiagocainelli/personal-finances',
    },
    {
      title: 'Cainelli Movies',
      description: 'A movie database app with features like search, filtering, and pagination.',
      image: `${cainellimovies}`,
      tags: ['Next.js', 'Tailwind CSS', 'TypeScript'],
      demoUrl: 'https://movies-tmdb-thiago-cainellis-projects.vercel.app/',
      repoUrl: 'https://github.com/thiagocainelli/movies-tmdb',
    },
    {
      title: 'TL Viagens - Travel Agency',
      description: 'A travel agency website',
      image: `${tlviagens}`,
      tags: ['Next.js', 'TypeScript', 'Tailwind CSS'],
      demoUrl: 'https://tl-viagens.vercel.app/',
      repoUrl: 'https://github.com/thiagocainelli/tl-viagens',
    },
    {
      title: 'Stock Control',
      description:
        'A stock control app with features like inventory management, sales, and purchase orders.',
      image: `${tcimports}`,
      tags: ['React', 'JavaScript', 'CSS3'],
      demoUrl: 'https://tcimports-stock.vercel.app/',
      repoUrl: 'https://github.com/thiagocainelli/tcimports-stock',
    },
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
          <h1 className='text-4xl font-bold mb-4'>My Projects</h1>
          <AnimatedText
            text="Showcasing my work and the technologies I've mastered"
            className='text-xl text-light-darker max-w-3xl mx-auto'
          />
        </motion.div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16'>
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              tags={project.tags}
              demoUrl={project.demoUrl}
              repoUrl={project.repoUrl}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className='text-center'
        >
          <h2 className='text-2xl font-bold mb-4'>Want to see more?</h2>
          <p className='text-light-darker mb-8 max-w-2xl mx-auto'>
            These are just a few highlights from my portfolio. Visit my GitHub profile to explore
            more projects and contributions.
          </p>
          <a
            href='https://github.com/thiagocainelli'
            target='_blank'
            rel='noopener noreferrer'
            className='btn-primary inline-flex items-center gap-2'
          >
            View More on GitHub
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='20'
              height='20'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            >
              <path d='M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21'></path>
            </svg>
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
