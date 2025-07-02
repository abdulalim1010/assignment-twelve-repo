import { motion } from 'framer-motion';
import banner from '../assets/banner.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


const Banner = () => {
  
useEffect(() => {
  AOS.init({ duration: 1000 });
}, []);
  return (
    <div className="hero min-h-[80vh] bg-base-100 px-4">
      <div className="hero-content flex-col lg:flex-row-reverse gap-10">

        {/* Image Section with fade-in */}
        <motion.img
          src={banner}
          alt="Banner"
          className="max-w-sm md:max-w-md lg:max-w-lg rounded-lg shadow-2xl"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        />

        {/* Text Section with slide from left */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-primary">
            Welcome to My Skill World
          </h1>
          <p className="py-6 text-base md:text-lg text-gray-600">
            I'm passionate about learning and sharing knowledge in web development, design, and more. Explore my skills and study journey!
          </p>
          <motion.button
            className="btn btn-primary"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Explore Now
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default Banner;
