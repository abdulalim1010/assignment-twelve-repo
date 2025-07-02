import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <motion.h2
        className="text-4xl font-bold text-center text-primary mb-10"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        📬 Contact Me
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Contact Info Section */}
        <motion.div
          className="space-y-4"
          data-aos="fade-right"
        >
          <h3 className="text-2xl font-semibold text-accent">Get in Touch</h3>
          <p className="text-gray-600 leading-relaxed">
            Feel free to reach out through the form or connect with me via email and social media. I'm always open to new ideas, projects, and collaborations!
          </p>
          <div className="space-y-2 text-sm">
            <p><span className="font-semibold">📧 Email:</span> your.email@example.com</p>
            <p><span className="font-semibold">📞 Phone:</span> +880123456789</p>
            <p><span className="font-semibold">📍 Address:</span> Rangpur, Bangladesh</p>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          className="card bg-base-200 shadow-xl p-6 rounded-lg space-y-6"
          data-aos="fade-left"
        >
          {/* Name */}
          <div className="form-control space-y-1">
            <label className="label text-sm font-semibold text-gray-700">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="input input-bordered rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
              required
            />
          </div>

          {/* Email */}
          <div className="form-control space-y-1">
            <label className="label text-sm font-semibold text-gray-700">Email</label>
            <input
              type="email"
              placeholder="Your Email"
              className="input input-bordered rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
              required
            />
          </div>

          {/* Message */}
          <div className="form-control space-y-1">
            <label className="label text-sm font-semibold text-gray-700">Message</label>
            <textarea
              placeholder="Write your message here..."
              className="textarea textarea-bordered h-32 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none"
              required
            ></textarea>
            <label className="label text-xs text-gray-400">
              💡 Tip: Be clear and concise in your message.
            </label>
          </div>

          {/* Submit Button */}
          <div className="text-end">
            <motion.button
              type="submit"
              className="btn btn-primary px-6"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message
            </motion.button>
          </div>
        </motion.form>
      </div>
    </div>
  );
};

export default Contact;
