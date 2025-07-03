import React from 'react';
import { Link } from 'react-router';
import { motion } from 'framer-motion';
import Banner from './Banner';
import Favorites from './Favorites';
import Dream from './Dream';
import ThemeSwitcher from '../components/rootlayout/ThemeSwitcher';

const Home = () => {
  const skills = [
    { name: 'React', logo: 'https://cdn.worldvectorlogo.com/logos/react-2.svg' },
    { name: 'Tailwind', logo: 'https://cdn.worldvectorlogo.com/logos/tailwind-css-2.svg' },
    { name: 'Firebase', logo: 'https://cdn.worldvectorlogo.com/logos/firebase-1.svg' },
    { name: 'MongoDB', logo: 'https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg' },
    { name: 'Python', logo: 'https://cdn.worldvectorlogo.com/logos/python-5.svg' },
    { name: 'Java', logo: 'https://cdn.worldvectorlogo.com/logos/java-14.svg' },
  ];

  return (
    <div className="space-y-20 pb-24">
      <ThemeSwitcher></ThemeSwitcher>
      {/* Hero Banner */}
      <Banner />

      {/* About Me */}
      <section className="max-w-5xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-primary mb-3">👨‍💻 About Me</h2>
          <p className="text-gray-700">
            I’m Md Abdul Alim, an EEE student passionate about web development and creating amazing digital experiences. I love learning, solving problems, and working on real-world projects.
          </p>
          <Link to="/about" className="btn btn-outline btn-primary mt-4">Read More</Link>
        </motion.div>
      </section>

      {/* Skills */}
      <section className="max-w-5xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-primary mb-6">💼 Skills Preview</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {skills.map(skill => (
              <div key={skill.name} className="card bg-base-200 p-4 text-center shadow-sm">
                <img src={skill.logo} alt={skill.name} className="w-14 h-14 mx-auto mb-2" />
                <p className="font-medium">{skill.name}</p>
              </div>
            ))}
          </div>
          <Link to="/skill" className="btn btn-outline btn-primary mt-6">See All Skills</Link>
        </motion.div>
      </section>


      {/* Explore Buttons */}
      <section className="max-w-5xl mx-auto px-4">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 text-center mt-10">
          <Link to="/study" className="btn btn-accent w-full">🎓 Education</Link>
          <Link to="/projects" className="btn btn-secondary w-full">🚀 Projects</Link>
          <Link to="/contact" className="btn btn-info w-full">📬 Contact Me</Link>
        </div>
      </section>
      {/* diffrernt section */}

      <Favorites />
      
      <Dream/>



    </div>
  );
};

export default Home;
