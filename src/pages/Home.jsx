import React from 'react';
import { Link } from 'react-router';
import { motion } from 'framer-motion';
import Banner from './Banner';

const Home = () => {
  return (
    <div className="space-y-20 pb-24">
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
            {[
              { name: 'React', logo: '/assets/skills/react.png' },
              { name: 'Tailwind', logo: '/assets/skills/tailwind.png' },
              { name: 'Firebase', logo: '/assets/skills/firebase.png' },
              { name: 'MongoDB', logo: '/assets/skills/mongodb.png' },
              { name: 'Python', logo: '/assets/skills/python.png' },
              { name: 'Java', logo: '/assets/skills/java.png' },
            ].map(skill => (
              <div key={skill.name} className="card bg-base-200 p-4 text-center shadow-sm">
                <img src={skill.logo} alt={skill.name} className="w-14 h-14 mx-auto mb-2" />
                <p className="font-medium">{skill.name}</p>
              </div>
            ))}
          </div>
          <Link to="/skill" className="btn btn-outline btn-primary mt-6">See All Skills</Link>
        </motion.div>
      </section>

      {/* Extra Sections */}
      <section className="max-w-5xl mx-auto px-4 space-y-14">
        {/* Favorites */}
        <div data-aos="fade-up">
          <h2 className="text-2xl font-bold text-accent mb-2">💖 My Favorite Things</h2>
          <ul className="list-disc list-inside text-gray-600">
            <li>Coding at night</li>
            <li>Exploring new tech</li>
            <li>Watching tech YouTube channels</li>
            <li>Helping others with code</li>
          </ul>
        </div>

        {/* Habits */}
        <div data-aos="fade-up">
          <h2 className="text-2xl font-bold text-accent mb-2">📌 My Habits</h2>
          <ul className="list-disc list-inside text-gray-600">
            <li>Consistent coding practice</li>
            <li>Waking up early</li>
            <li>Journaling ideas</li>
            <li>Helping orphanage children</li>
          </ul>
        </div>

        {/* Dream */}
        <div data-aos="fade-up">
          <h2 className="text-2xl font-bold text-accent mb-2">🌟 My Dream</h2>
          <p className="text-gray-700">
            My dream is to become a skilled full-stack developer, work with top companies or freelance worldwide, and build platforms that help people.
          </p>
        </div>

        {/* Good Jobs */}
        <div data-aos="fade-up">
          <h2 className="text-2xl font-bold text-accent mb-2">✅ My Good Jobs</h2>
          <ul className="list-disc list-inside text-gray-600">
            <li>Built a messenger app with Firebase</li>
            <li>Created parcel delivery system with full auth and MongoDB</li>
            <li>Implemented tree plantation project in community</li>
          </ul>
        </div>

        {/* Collection */}
        <div data-aos="fade-up">
          <h2 className="text-2xl font-bold text-accent mb-2">📚 My Collections</h2>
          <ul className="list-disc list-inside text-gray-600">
            <li>Over 20 mini projects</li>
            <li>Self-made component libraries</li>
            <li>Firebase auth patterns</li>
            <li>AliExpress mission earnings log for social help</li>
          </ul>
        </div>
      </section>

      {/* Explore Buttons */}
      <section className="max-w-5xl mx-auto px-4">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 text-center mt-10">
          <Link to="/study" className="btn btn-accent w-full">🎓 Education</Link>
          <Link to="/projects" className="btn btn-secondary w-full">🚀 Projects</Link>
          <Link to="/contact" className="btn btn-info w-full">📬 Contact Me</Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
