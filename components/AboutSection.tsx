
import React from 'react';
import { ABOUT_DATA } from '../constants';
import SectionWrapper from './SectionWrapper';
import type { StudyEntry } from '../types';

const AboutSection: React.FC = () => {
  return (
    <SectionWrapper id="about" title="About Me" className="bg-gray-800/50">
      <div className="text-lg text-gray-300 leading-relaxed space-y-8">
        <p className="max-w-3xl mx-auto">{ABOUT_DATA.bio}</p>
        
        <div className="grid md:grid-cols-2 gap-8 text-left">
          <div>
            <h3 className="text-2xl font-semibold text-indigo-400 mb-6">Education</h3>
            {ABOUT_DATA.study.map((edu: StudyEntry, index: number) => (
              <div 
                key={index} 
                className="bg-gray-700/60 p-6 rounded-lg shadow-xl backdrop-blur-sm border border-gray-600/50 mb-6 last:mb-0"
              >
                <p className="font-bold text-gray-100 text-lg">{edu.degree}</p>
                <p className="text-gray-400 mb-2">{edu.institution}</p>
                <ul className="list-disc list-inside space-y-1 text-gray-400">
                  {edu.details.map((detail, detailIndex) => (
                    <li key={detailIndex}>{detail}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="bg-gray-700/60 p-6 rounded-lg shadow-xl backdrop-blur-sm border border-gray-600/50">
            <h3 className="text-2xl font-semibold text-indigo-400 mb-4">Hobbies & Interests</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-400">
              {ABOUT_DATA.hobbies.map((hobby, index) => (
                <li key={index}>{hobby}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default AboutSection;