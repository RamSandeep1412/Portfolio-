import React from 'react';
import { PROJECTS_DATA } from '../constants';
import ProjectCard from './ProjectCard';
import SectionWrapper from './SectionWrapper';

const ProjectsSection: React.FC = () => {
  return (
    <SectionWrapper id="projects" title="My Projects" className="bg-gray-800">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-12">
        {PROJECTS_DATA.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default ProjectsSection;