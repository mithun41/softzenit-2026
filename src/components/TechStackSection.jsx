import React from 'react';

const techCategories = [
  {
    category: "Frontend",
    technologies: ["React", "Next.js", "Flutter", "React Native",  "TypeScript"]
  },
  {
    category: "Backend",
    technologies: ["Node.js", "Python", "Laravel", "Django"]
  },
  {
    category: "Database",
    technologies: ["PostgreSQL", "MySQL", "MongoDB", ]
  },
  {
    category: "Cloud & DevOps",
    technologies: ["AWS",  "Azure", "Docker", "Kubernetes", "CI/CD"]
  },
  {
    category: "AI & ML",
    technologies: ["OpenAI GPT", "LangChain", "Zapier"]
  }
];

const TechStackSection = () => {
  return (
    <section className="py-20 bg-[#f8fafc]">
      <div className="container max-w-5xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold tracking-[0.2em] text-blue-500 uppercase mb-4 inline-block">
            TECHNOLOGY STACK
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            What We Build With
          </h2>
        </div>

        {/* Tech Grid */}
        <div className="flex flex-col gap-6">
          {techCategories.map((group, idx) => (
            <div key={idx} className="flex flex-col md:flex-row md:items-center gap-4 md:gap-12">
              <div className="md:w-48 flex-shrink-0">
                <span className="text-sm font-semibold tracking-wider text-blue-500 uppercase">
                  {group.category}
                </span>
              </div>
              <div className="flex flex-wrap gap-3">
                {group.technologies.map((tech, techIdx) => (
                  <span 
                    key={techIdx} 
                    className="px-4 py-2 bg-white text-slate-700 text-sm font-medium rounded-md border border-slate-200 shadow-sm hover:border-blue-300 hover:text-blue-600 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TechStackSection;
