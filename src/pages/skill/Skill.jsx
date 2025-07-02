import { useLoaderData } from 'react-router';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Skills from './Skills';

const Skill = () => {
  const skills = useLoaderData();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-8 text-center text-primary" data-aos="fade-down">
        💻 My Skills
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map(skill => (
          <Skills key={skill.id} skill={skill} />
        ))}
      </div>
    </div>
  );
};

export default Skill;
