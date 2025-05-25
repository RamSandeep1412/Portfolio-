
import React from 'react';
import type { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="bg-gray-800 rounded-xl shadow-2xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-indigo-500/30 flex flex-col h-full border border-gray-700 hover:border-indigo-600/70">
      <img src={project.imageUrl} alt={project.title} className="w-full h-56 object-cover" />
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-semibold text-indigo-400 mb-3">{project.title}</h3>
        <p className="text-gray-400 text-sm mb-4 leading-relaxed flex-grow">{project.description}</p>
        
        {project.responsibilities && project.responsibilities.length > 0 && (
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-gray-200 mb-2">Key Responsibilities:</h4>
            <ul className="list-disc list-inside space-y-1 text-gray-400 text-sm">
              {project.responsibilities.map((resp, index) => (
                <li key={index}>{resp}</li>
              ))}
            </ul>
          </div>
        )}

        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-200 mb-2">Technologies:</h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span key={tech} className="bg-gray-700 text-sky-400 text-xs px-3 py-1 rounded-full">
                {tech}
              </span>
            ))}
          </div>
        </div>
        <div className="mt-auto flex space-x-4">
          {project.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-indigo-400 transition-colors duration-200 border border-gray-600 hover:border-indigo-500 px-4 py-2 rounded-md text-sm font-medium"
            >
              Live Demo
            </a>
          )}
          {project.sourceLink && (
            <a
              href={project.sourceLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-indigo-400 transition-colors duration-200 border border-gray-600 hover:border-indigo-500 px-4 py-2 rounded-md text-sm font-medium"
            >
              Source Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;