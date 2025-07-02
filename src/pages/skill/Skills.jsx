import React from 'react';

const Skills = ({ skill }) => {
  const { name, experience, logo, mainImage, projects } = skill;

  return (
    <div 
      data-aos="flip-left"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000"
      className="card bg-green-100 shadow-xl hover:shadow-2xl transition-all duration-300"
    >
      <figure className="h-48 overflow-hidden">
        <img src={mainImage} alt={name} className="w-full object-cover" />
      </figure>

      <div className="card-body">
        <div className="flex items-center gap-4 mb-4">
          <img src={logo} alt={name} className="w-12 h-12 object-contain" />
          <div>
            <h2 className="card-title">{name}</h2>
            <p className="text-sm text-gray-500">{experience}</p>
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-1 text-sm text-primary">Projects:</h4>
          <ul className="list-disc list-inside text-sm text-gray-600">
            {projects.map((project, idx) => (
              <li key={idx}>{project}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
