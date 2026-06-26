"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  FaHeartbeat,
  FaBrain,
  FaBone,
  FaBaby,
  FaHandSparkles,
  FaArrowRight,
  FaStethoscope,
  FaHospital,
} from "react-icons/fa";

const specs = [
  {
    name: "Cardiology",
    icon: FaHeartbeat,
    desc: "Advanced cardiovascular care with state-of-the-art diagnostics and personalized treatment plans.",
    color: "rose",
    number: "01",
  },
  {
    name: "Neurology",
    icon: FaBrain,
    desc: "Expert neurological care for brain, spine, and nervous system disorders with cutting-edge technology.",
    color: "purple",
    number: "02",
  },
  {
    name: "Orthopedics",
    icon: FaBone,
    desc: "Comprehensive bone and joint care including sports medicine and joint replacement surgeries.",
    color: "emerald",
    number: "03",
  },
  {
    name: "Pediatrics",
    icon: FaBaby,
    desc: "Complete child healthcare from infancy to adolescence with specialized pediatric services.",
    color: "sky",
    number: "04",
  },
  {
    name: "Dermatology",
    icon: FaHandSparkles,
    desc: "Advanced skincare solutions for all skin conditions with personalized treatment approaches.",
    color: "amber",
    number: "05",
  },
];

// Static color mapping for Tailwind (no dynamic class issues)
const colorMap = {
  rose: {
    bg: "bg-rose-50",
    hoverBg: "group-hover:bg-rose-500",
    icon: "text-rose-500",
    gradient: "from-rose-500 to-red-600",
    text: "text-rose-600",
    border: "border-rose-200/50",
    shadow: "shadow-rose-500/10",
  },
  purple: {
    bg: "bg-purple-50",
    hoverBg: "group-hover:bg-purple-500",
    icon: "text-purple-500",
    gradient: "from-purple-500 to-violet-600",
    text: "text-purple-600",
    border: "border-purple-200/50",
    shadow: "shadow-purple-500/10",
  },
  emerald: {
    bg: "bg-emerald-50",
    hoverBg: "group-hover:bg-emerald-500",
    icon: "text-emerald-500",
    gradient: "from-emerald-500 to-teal-600",
    text: "text-emerald-600",
    border: "border-emerald-200/50",
    shadow: "shadow-emerald-500/10",
  },
  sky: {
    bg: "bg-sky-50",
    hoverBg: "group-hover:bg-sky-500",
    icon: "text-sky-500",
    gradient: "from-sky-500 to-blue-600",
    text: "text-sky-600",
    border: "border-sky-200/50",
    shadow: "shadow-sky-500/10",
  },
  amber: {
    bg: "bg-amber-50",
    hoverBg: "group-hover:bg-amber-500",
    icon: "text-amber-500",
    gradient: "from-amber-500 to-orange-600",
    text: "text-amber-600",
    border: "border-amber-200/50",
    shadow: "shadow-amber-500/10",
  },
};

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
  hover: {
    y: -8,
    scale: 1.02,
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

export default function Specializations() {
  return (
    <section className="relative bg-gradient-to-b from-white via-slate-50 to-white py-20 px-4 sm:px-6 md:px-12 lg:px-20 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[800px] h-[800px] border border-cyan-500/5 rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[600px] h-[600px] border border-blue-500/5 rounded-full"></div>

        {/* Medical Cross Pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="grid grid-cols-10 gap-6 p-6">
            {[...Array(100)].map((_, i) => (
              <div
                key={i}
                className="w-3 h-3 border border-cyan-600 rotate-45"
              ></div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-50 to-blue-50 text-cyan-600 text-[11px] font-bold px-4 py-2 rounded-full tracking-wide border border-cyan-200/50 mb-4"
          >
            <FaStethoscope className="text-[12px]" />
            <span className="text-[8px] text-cyan-400">✦</span>
            <span>5+ Medical Specialties</span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            <span className="bg-gradient-to-r from-cyan-600 to-blue-700 bg-clip-text text-transparent">
              Expert
            </span>
            <span className="text-slate-900"> Medical Specializations</span>
          </h2>
          <p className="text-slate-500 text-sm font-medium mt-3 max-w-2xl mx-auto">
            Access world-class healthcare across multiple specialties with
            board-certified physicians and advanced medical technology.
          </p>
        </motion.div>

        {/* Specialties Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.08, delayChildren: 0.1 },
            },
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6"
        >
          {specs.map((spec, idx) => {
            const Icon = spec.icon;
            const colors = colorMap[spec.color];

            return (
              <motion.div
                key={idx}
                variants={cardVariants}
                whileHover="hover"
                className="group relative bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-300 p-6 cursor-pointer overflow-hidden"
              >
                {/* Background Gradient on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-transparent group-hover:from-cyan-50/30 group-hover:to-blue-50/30 transition-all duration-500"></div>

                {/* Number Badge */}
                <div className="absolute top-3 right-3 text-3xl font-black text-slate-100 group-hover:text-slate-200 transition-colors duration-300 select-none">
                  {spec.number}
                </div>

                {/* Icon */}
                <div
                  className={`relative z-10 w-14 h-14 rounded-2xl ${colors.bg} group-hover:bg-gradient-to-br group-hover:${colors.gradient} transition-all duration-300 flex items-center justify-center text-2xl mb-4`}
                >
                  <Icon
                    className={`${colors.icon} group-hover:text-white transition-colors duration-300`}
                  />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h4
                    className={`text-base font-bold text-slate-900 tracking-tight mb-2 group-hover:${colors.text} transition-colors duration-300`}
                  >
                    {spec.name}
                  </h4>
                  <p className="text-slate-400 text-xs leading-relaxed">
                    {spec.desc}
                  </p>
                </div>

                {/* Learn More Link */}
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  whileHover={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  className="relative z-10 mt-4 flex items-center gap-2 text-[10px] font-bold text-cyan-600 opacity-0 group-hover:opacity-100 transition-all duration-300"
                >
                  <span>Learn More</span>
                  <FaArrowRight className="text-[8px] group-hover:translate-x-1 transition-transform" />
                </motion.div>

                {/* Bottom Accent Line */}
                <div
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${colors.gradient} scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
                ></div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-6 bg-white border border-slate-200 rounded-full px-6 py-3 shadow-sm hover:shadow-md transition-shadow duration-300 flex-wrap justify-center">
            <div className="flex items-center gap-2 text-sm font-medium text-slate-600">
              <FaHospital className="text-cyan-500" />
              <span>Need help choosing?</span>
            </div>
            <div className="w-px h-6 bg-slate-200 hidden sm:block"></div>
            <motion.a
              href="/find-doctors"
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2 }}
              className="flex items-center gap-2 text-xs font-bold text-cyan-600 hover:text-blue-700 transition-colors"
            >
              Find a Specialist
              <FaArrowRight className="text-[9px]" />
            </motion.a>
          </div>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7 }}
          className="mt-12 pt-8 border-t border-slate-100 flex flex-wrap justify-center gap-8 md:gap-12 text-center"
        >
          <div>
            <p className="text-2xl font-bold text-cyan-600">5+</p>
            <p className="text-xs text-slate-400 font-medium">Specialties</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-cyan-600">500+</p>
            <p className="text-xs text-slate-400 font-medium">Expert Doctors</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-cyan-600">50K+</p>
            <p className="text-xs text-slate-400 font-medium">Happy Patients</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-cyan-600">98%</p>
            <p className="text-xs text-slate-400 font-medium">Success Rate</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
