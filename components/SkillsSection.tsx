import React from 'react';
import { SKILLS_DATA } from '../constants';
import SectionWrapper from './SectionWrapper';
import type { Skill } from '../types';

const SkillItem: React.FC<{ skill: Skill }> = ({ skill }) => {
  return (
    <div 
      className="bg-gray-700 text-indigo-300 p-3 rounded-lg shadow-md 
                 border border-gray-600 
                 hover:bg-indigo-600 hover:text-white hover:border-indigo-500 
                 transform hover:scale-105 transition-all duration-200 ease-in-out 
                 text-center cursor-default"
      title={skill.name}
    >
      <h4 className="text-md font-medium truncate">{skill.name}</h4>
    </div>
  );
};


const SkillsSection: React.FC = () => {
  return (
    <SectionWrapper id="skills" title="My Skills" className="bg-gray-800/50">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 md:gap-6 text-left">
        {SKILLS_DATA.map((skill) => (
          <SkillItem key={skill.id} skill={skill} />
        ))}
      </div>
       <p className="mt-12 text-gray-400 italic max-w-xl mx-auto">
        Passionate about continuous learning and embracing new challenges to craft elegant and effective web solutions.
      </p>
    </SectionWrapper>
  );
};

export default SkillsSection;