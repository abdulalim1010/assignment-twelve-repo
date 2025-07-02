import React from 'react';
import { motion } from 'framer-motion';

const Education = ({ stat }) => {
  const { institution, degree, duration, description, logo, mainImage } = stat;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all cursor-pointer"
      whileHover={{ scale: 1.03 }}
    >
      {/* Main image/banner */}
      {mainImage && (
        <figure className="h-40 overflow-hidden rounded-t-lg">
          <img
            src={mainImage}
            alt={`${institution} banner`}
            className="w-full object-cover"
          />
        </figure>
      )}

      <div className="card-body">
        {/* Logo and institution */}
        <div className="flex items-center gap-4 mb-4">
          {logo && (
            <img
              src={logo}
              alt={`${institution} logo`}
              className="w-14 h-14 object-contain rounded"
            />
          )}
          <div>
            <h2 className="text-xl font-semibold text-primary">{institution}</h2>
            <p className="text-sm text-gray-500">{duration}</p>
          </div>
        </div>

        <h3 className="text-md font-bold text-accent">{degree}</h3>
        <p className="text-sm text-gray-600 mt-2">{description}</p>
      </div>
    </motion.div>
  );
};

export default Education;
