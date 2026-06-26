"use client";
import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  FaUserMd,
  FaRegCheckCircle,
  FaArrowRight,
  FaShieldAlt,
  FaClock,
  FaStar,
} from "react-icons/fa";
import hero from "../../../public/Hero.json";
import Lottie from "lottie-react";

const Banner = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.3]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, -50]);

  // Floating animation for Lottie
  const floatAnimation = {
    y: [0, -20, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  return (
    <div ref={containerRef}>
      <section className="relative bg-gradient-to-br from-indigo-950 via-purple-900 to-slate-900 text-white overflow-hidden min-h-[90vh] flex items-center">
        {/* Unique Background Pattern - Geometric Shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-purple-500/10 rounded-full animate-spin-slow"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-indigo-500/20 rounded-full animate-spin-slow-reverse"></div>

          {/* Animated Grid Dots */}
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_#8B5CF6_1px,_transparent_1px)] [background-size:32px_32px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-0 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Content - Enhanced with unique design elements */}
            <motion.div
              style={{ opacity, y }}
              initial={{ opacity: 0, x: -80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-8 text-center lg:text-left"
            >
              {/* Animated Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-500/20 to-indigo-500/20 backdrop-blur-sm border border-purple-400/30 rounded-full px-5 py-2 text-purple-300 text-sm font-bold uppercase tracking-wider"
              >
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-purple-500"></span>
                </span>
                <FaRegCheckCircle className="text-purple-400" />
                <span>Trusted by 50K+ Patients</span>
              </motion.div>

              {/* Main Heading with Gradient */}
              <motion.h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1]">
                <span className="bg-gradient-to-r from-purple-300 via-pink-300 to-indigo-300 bg-clip-text text-transparent">
                  Revolutionizing
                </span>
                <br />
                <span className="text-white">Your Healthcare</span>
                <br />
                <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
                  Experience
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-slate-300 text-lg max-w-xl leading-relaxed"
              >
                Where cutting-edge technology meets compassionate care. Book
                appointments with world-class specialists in seconds, access
                your health records instantly, and experience healthcare
                reimagined.
              </motion.p>

              {/* Feature Pills */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="flex flex-wrap gap-3 justify-center lg:justify-start"
              >
                {[
                  { icon: FaShieldAlt, text: "HIPAA Compliant" },
                  { icon: FaClock, text: "24/7 Access" },
                  { icon: FaStar, text: "Top Specialists" },
                ].map((feature, index) => (
                  <span
                    key={index}
                    className="flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 text-sm text-slate-300"
                  >
                    <feature.icon className="text-purple-400" />
                    {feature.text}
                  </span>
                ))}
              </motion.div>

              {/* CTA Buttons with Hover Effects */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="flex flex-wrap gap-4 pt-4 justify-center lg:justify-start"
              >
                <motion.a
                  href="/find-doctors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white px-8 py-4 rounded-2xl font-bold text-sm tracking-wide shadow-2xl shadow-purple-500/30 transition-all flex items-center gap-3 w-full sm:w-auto overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <FaUserMd /> Find Best Doctors
                    <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                </motion.a>

                <motion.a
                  href="/about-us"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white/20 hover:border-purple-400 bg-white/5 backdrop-blur-sm hover:bg-white/10 text-white px-8 py-4 rounded-2xl font-bold text-sm tracking-wide transition-all text-center w-full sm:w-auto"
                >
                  Discover More
                </motion.a>
              </motion.div>

              {/* Trust Badges */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="flex items-center gap-6 pt-4 justify-center lg:justify-start"
              >
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full border-2 border-slate-800 bg-gradient-to-br from-purple-400 to-indigo-400 flex items-center justify-center text-xs font-bold"
                    >
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-400 text-sm" />
                    ))}
                  </div>
                  <p className="text-slate-400 text-sm">
                    Rated 4.9/5 by 10,000+ patients
                  </p>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Side - Enhanced Lottie with floating animation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="relative flex items-center justify-center"
            >
              {/* Decorative glow behind Lottie */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-indigo-500/20 rounded-full blur-3xl scale-150"></div>

              <motion.div
                animate={floatAnimation}
                className="relative z-10 w-[80%] sm:w-[70%] lg:w-full max-w-xl"
              >
                <Lottie animationData={hero} loop={true} />

                {/* Floating Stats Card */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1, duration: 0.6 }}
                  className="absolute -bottom-4 -right-4 lg:-bottom-8 lg:-right-8 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-4 shadow-2xl"
                >
                  <div className="text-center">
                    <p className="text-2xl font-bold text-white">98%</p>
                    <p className="text-xs text-slate-300">Satisfaction Rate</p>
                  </div>
                </motion.div>

                {/* Another floating badge */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.2, duration: 0.6 }}
                  className="absolute -top-4 -left-4 lg:-top-8 lg:-left-8 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-2xl p-3 shadow-2xl"
                >
                  <div className="text-center">
                    <p className="text-lg font-bold text-white">24/7</p>
                    <p className="text-xs text-purple-200">Live Support</p>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Gradient Line */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
      </section>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: translate(-50%, -50%) rotate(0deg);
          }
          to {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }
        @keyframes spin-slow-reverse {
          from {
            transform: translate(-50%, -50%) rotate(360deg);
          }
          to {
            transform: translate(-50%, -50%) rotate(0deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 30s linear infinite;
        }
        .animate-spin-slow-reverse {
          animation: spin-slow-reverse 25s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Banner;
