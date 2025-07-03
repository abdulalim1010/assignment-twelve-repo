import React from 'react';
import { motion } from 'framer-motion';
import footbal from '../assets/footbal.jfif';
import coding from '../assets/coding.jpg';

const Dream = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16 space-y-20">
      {/* Football Dream */}
      <motion.div
        className="relative grid md:grid-cols-2 items-center gap-10
                   border-4 border-primary rounded-2xl p-6
                   hover:shadow-lg transition-shadow"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div>
          <motion.h2
            className="text-3xl font-bold text-primary flex items-center gap-3 mb-4"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/2972/2972109.png"
              alt="Football Icon"
              className="w-8 h-8"
            />
            ⚽ My Dream in Football
          </motion.h2>
          <p className="text-gray-700 text-lg">
            Football is my passion. I love watching top footballers, playing with friends, and following matches. It teaches me discipline, teamwork, and energy — and it inspires my lifestyle and mindset.
          </p>
        </div>
        <motion.img
          src={footbal}
          alt="Football illustration"
          className="rounded-xl w-full max-w-md mx-auto"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
        />
      </motion.div>

      {/* Coding Dream */}
      <motion.div
        className="relative grid md:grid-cols-2 items-center gap-10
                   border-4 border-secondary rounded-2xl p-6
                   hover:shadow-lg transition-shadow"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <motion.img
          src={coding}
          alt="Coding illustration"
          className="rounded-xl w-full max-w-md mx-auto order-2 md:order-1"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
        />
        <div className="order-1 md:order-2">
          <motion.h2
            className="text-3xl font-bold text-secondary flex items-center gap-3 mb-4"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/2721/2721297.png"
              alt="Coding Icon"
              className="w-8 h-8"
            />
            💻 My Dream in Coding
          </motion.h2>
          <p className="text-gray-700 text-lg">
            Coding is my future. I dream of becoming a full-stack developer, working globally or freelancing, and building apps that help people. From education to environment — I want my code to bring positive change.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default Dream;
