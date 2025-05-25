import React, { useRef, useEffect, useState } from 'react';

interface SectionWrapperProps {
  id: string;
  title?: string; 
  children: React.ReactNode;
  className?: string;
  titleClassName?: string;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ id, title, children, className = '', titleClassName = '' }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); 
        }
      },
      {
        root: null, 
        rootMargin: '0px',
        threshold: 0.1, 
      }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section
      id={id}
      ref={sectionRef}
      className={`min-h-screen py-16 md:py-24 px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center
                  transition-all duration-1000 ease-out
                  ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
                  ${className}`}
    >
      <div className="container mx-auto max-w-4xl text-center">
        {title && (
          <h2 className={`text-4xl md:text-5xl font-bold mb-12 text-indigo-400 ${titleClassName}`}>
            {title}
          </h2>
        )}
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;