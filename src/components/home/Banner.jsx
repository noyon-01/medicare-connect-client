"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {
  FaUserMd,
  FaRegCheckCircle,
  FaArrowRight,
  FaShieldAlt,
  FaClock,
  FaStar,
  FaAmbulance,
  FaMicroscope,
  FaHeartbeat,
  FaStethoscope,
  FaHospital,
  FaCalendarCheck,
  FaPhoneAlt,
} from "react-icons/fa";
import { FiActivity, FiAward } from "react-icons/fi";
import hero from "../../../public/Hero.json";
import Lottie from "lottie-react";

// ডাক্তারদের ইমেজ (আপনি আপনার ইমেজ পাথ দিতে পারেন)
const doctorImages = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    specialty: "Cardiologist",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=500&fit=crop&crop=center",
    rating: 4.9,
    experience: "15+ Years",
  },
  {
    id: 2,
    name: "Dr. Michael Chen",
    specialty: "Neurologist",
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=500&fit=crop&crop=center",
    rating: 4.8,
    experience: "12+ Years",
  },
  {
    id: 3,
    name: "Dr. Emily Rodriguez",
    specialty: "Pediatrician",
    image:
      "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=500&fit=crop&crop=center",
    rating: 4.9,
    experience: "10+ Years",
  },
  {
    id: 4,
    name: "Dr. James Wilson",
    specialty: "Orthopedic Surgeon",
    image:
      "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=500&fit=crop&crop=center",
    rating: 4.7,
    experience: "18+ Years",
  },
];

const Banner = () => {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
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
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-950 to-cyan-950 text-white overflow-hidden min-h-[95vh] flex items-center">
        {/* Medical Background Pattern */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-cyan-500/10 rounded-full animate-spin-slow"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-blue-500/20 rounded-full animate-spin-slow-reverse"></div>

          {/* Medical Cross Pattern Background */}
          <div className="absolute inset-0 opacity-5">
            <div className="grid grid-cols-8 gap-8 p-8">
              {[...Array(64)].map((_, i) => (
                <div
                  key={i}
                  className="w-4 h-4 border-2 border-cyan-400/30 rotate-45"
                ></div>
              ))}
            </div>
          </div>

          {/* Animated Grid Dots */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_#22D3EE_1px,_transparent_1px)] [background-size:32px_32px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-0 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left Content - Medical Theme */}
            <motion.div
              style={{ opacity, y }}
              initial={{ opacity: 0, x: -80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-6 text-center lg:text-left"
            >
              {/* Animated Medical Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="inline-flex items-center gap-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-sm border border-cyan-400/30 rounded-full px-5 py-2 text-cyan-300 text-sm font-bold uppercase tracking-wider"
              >
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span>
                </span>
                <FaHeartbeat className="text-cyan-400" />
                <span>Premium Healthcare Network</span>
              </motion.div>

              {/* Main Heading with Medical Theme */}
              <motion.h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1]">
                <span className="text-white">Your Health,</span>
                <br />
                <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-cyan-300 bg-clip-text text-transparent">
                  Our Priority
                </span>
                <br />
                <span className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold">
                  Expert Care at Your Fingertips
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-slate-300 text-base sm:text-lg max-w-xl leading-relaxed"
              >
                Connect with top-rated medical specialists instantly. Book
                appointments, access your health records, and receive
                world-class care from the comfort of your home.
              </motion.p>

              {/* Medical Features */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="flex flex-wrap gap-3 justify-center lg:justify-start"
              >
                {[
                  { icon: FaAmbulance, text: "Emergency Care" },
                  { icon: FaMicroscope, text: "Advanced Diagnostics" },
                  { icon: FaStethoscope, text: "Expert Doctors" },
                  { icon: FaHospital, text: "Top Hospitals" },
                ].map((feature, index) => (
                  <span
                    key={index}
                    className="flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 text-sm text-slate-300 hover:border-cyan-400/30 hover:bg-cyan-500/10 transition-all duration-300"
                  >
                    <feature.icon className="text-cyan-400" />
                    {feature.text}
                  </span>
                ))}
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="flex flex-wrap gap-6 justify-center lg:justify-start"
              >
                <div className="text-center">
                  <p className="text-3xl font-bold text-cyan-400">500+</p>
                  <p className="text-xs text-slate-400">Expert Doctors</p>
                </div>
                <div className="w-px h-12 bg-white/10"></div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-cyan-400">50K+</p>
                  <p className="text-xs text-slate-400">Happy Patients</p>
                </div>
                <div className="w-px h-12 bg-white/10"></div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-cyan-400">98%</p>
                  <p className="text-xs text-slate-400">Satisfaction Rate</p>
                </div>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="flex flex-wrap gap-4 pt-2 justify-center lg:justify-start"
              >
                <motion.a
                  href="/find-doctors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-2xl font-bold text-sm tracking-wide shadow-2xl shadow-cyan-500/30 transition-all flex items-center gap-3 w-full sm:w-auto overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <FaCalendarCheck /> Book Appointment
                    <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                </motion.a>

                <motion.a
                  href="/about-us"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white/20 hover:border-cyan-400 bg-white/5 backdrop-blur-sm hover:bg-white/10 text-white px-8 py-4 rounded-2xl font-bold text-sm tracking-wide transition-all text-center w-full sm:w-auto flex items-center gap-2 justify-center"
                >
                  <FaPhoneAlt className="text-cyan-400" />
                  Call Now
                </motion.a>
              </motion.div>
            </motion.div>

            {/* Right Side - Doctor Slider & Lottie */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="relative"
            >
              {/* Decorative glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl scale-150"></div>

              <div className="relative z-10 space-y-6">
                {/* Doctor Swiper Slider */}
                <div className="relative">
                  <Swiper
                    modules={[Autoplay, Pagination, Navigation]}
                    spaceBetween={20}
                    slidesPerView={1}
                    centeredSlides={true}
                    autoplay={{
                      delay: 3000,
                      disableOnInteraction: false,
                    }}
                    pagination={{
                      clickable: true,
                      bulletClass: "swiper-pagination-bullet !bg-cyan-400",
                    }}
                    navigation={{
                      nextEl: ".swiper-button-next",
                      prevEl: ".swiper-button-prev",
                    }}
                    onSlideChange={(swiper) =>
                      setActiveIndex(swiper.activeIndex)
                    }
                    className="max-w-sm mx-auto"
                  >
                    {doctorImages.map((doctor, index) => (
                      <SwiperSlide key={doctor.id}>
                        <motion.div
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{
                            opacity: activeIndex === index ? 1 : 0.7,
                            scale: activeIndex === index ? 1 : 0.95,
                          }}
                          transition={{ duration: 0.5 }}
                          className="relative group"
                        >
                          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-slate-800 to-slate-900 border border-white/10 shadow-2xl shadow-cyan-500/10">
                            {/* Doctor Image */}
                            <div className="relative h-[400px] overflow-hidden">
                              <img
                                src={doctor.image}
                                alt={doctor.name}
                                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                              />
                              {/* Gradient Overlay */}
                              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>

                              {/* Badge */}
                              <div className="absolute top-4 left-4 bg-cyan-500/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold">
                                {doctor.experience}
                              </div>

                              {/* Rating Badge */}
                              <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                                <FaStar className="text-yellow-400 text-[10px]" />
                                {doctor.rating}
                              </div>
                            </div>

                            {/* Doctor Info */}
                            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-slate-900 to-transparent">
                              <h3 className="text-xl font-bold text-white">
                                {doctor.name}
                              </h3>
                              <p className="text-cyan-400 text-sm font-medium">
                                {doctor.specialty}
                              </p>
                              <div className="flex items-center gap-3 mt-2">
                                <button className="text-xs bg-cyan-500/20 border border-cyan-400/30 px-3 py-1 rounded-full text-cyan-300 hover:bg-cyan-500/30 transition-colors">
                                  View Profile
                                </button>
                                <button className="text-xs bg-white/10 border border-white/20 px-3 py-1 rounded-full text-white hover:bg-white/20 transition-colors">
                                  Book Now
                                </button>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      </SwiperSlide>
                    ))}
                  </Swiper>

                  {/* Navigation Arrows */}
                  <button className="swiper-button-prev absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white flex items-center justify-center hover:bg-white/20 transition-colors">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                  </button>
                  <button className="swiper-button-next absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white flex items-center justify-center hover:bg-white/20 transition-colors">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>

                {/* Small Lottie Animation Below */}
                <motion.div
                  animate={floatAnimation}
                  className="w-32 h-32 mx-auto opacity-60"
                >
                  <Lottie animationData={hero} loop={true} />
                </motion.div>

                {/* Trust Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  className="flex items-center justify-center gap-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4"
                >
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="w-10 h-10 rounded-full border-2 border-slate-800 bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-xs font-bold text-white"
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
                      Trusted by 50,000+ patients
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Gradient Line */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
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
        .swiper-pagination-bullet {
          background: #22d3ee !important;
        }
        .swiper-pagination-bullet-active {
          background: #06b6d4 !important;
        }
        .swiper-button-prev,
        .swiper-button-next {
          position: absolute !important;
        }
      `}</style>
    </div>
  );
};

export default Banner;
