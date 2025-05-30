import React from 'react';
import { HOME_DATA, NAVBAR_HEIGHT } from '../constants';
import SectionWrapper from './SectionWrapper';

const HomeSection: React.FC = () => {
  const handleViewWorkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
        const yOffset = -NAVBAR_HEIGHT + 1;
        const y = projectsSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <SectionWrapper 
      id="home" 
      className="!pt-24 md:!pt-32" 
      titleClassName="sr-only" 
    >
      <div className="flex flex-col md:flex-row items-center justify-center gap-12 text-center md:text-left">
        <div className="md:w-1/2 order-2 md:order-1">
          <h1 className="text-7xl sm:text-5xl lg:text-5xl font-extrabold mb-4">
            Hi, I'm <span className="text-indigo-400">{HOME_DATA.name}</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 mb-6">{HOME_DATA.title}</p>
          <p className="text-lg text-gray-400 mb-8 leading-relaxed">{HOME_DATA.summary}</p>
          <a
            href="#projects"
            onClick={handleViewWorkClick}
            className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
          >
            View My Work
          </a>
        </div>
        <div className="md:w-1/2 order-1 md:order-2 flex justify-center">
          <img 
            src={HOME_DATA.imageUrl} 
            alt={HOME_DATA.name} 
            className="rounded-full w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 object-cover border-4 border-indigo-500 shadow-2xl" 
          />
        </div>
      </div>
    </SectionWrapper>
  );
};

export default HomeSection;