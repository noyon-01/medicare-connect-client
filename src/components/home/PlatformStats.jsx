"use client";
import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  FaUserMd,
  FaUserCheck,
  FaCalendarCheck,
  FaRegCommentDots,
  FaHeartbeat,
  FaHospital,
  FaStethoscope,
  FaAward,
} from "react-icons/fa";
import { MdHealthAndSafety } from "react-icons/md";

// ── CountUp Component with Framer Motion ──────────────────────────────
function CountUp({ targetValue, suffix = "+" }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView || targetValue <= 0) {
      setCount(targetValue);
      return;
    }

    const duration = 2000;
    const frameRate = 1000 / 60;
    const totalFrames = Math.round(duration / frameRate);
    let frame = 0;

    const counterInterval = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      const easeProgress = progress * (2 - progress);
      const currentCount = Math.round(easeProgress * targetValue);

      if (frame >= totalFrames) {
        setCount(targetValue);
        clearInterval(counterInterval);
      } else {
        setCount(currentCount);
      }
    }, frameRate);

    return () => clearInterval(counterInterval);
  }, [isInView, targetValue]);

  return (
    <span ref={ref} className="font-black">
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

// ── Stat Card Component ──────────────────────────────────────────────────
function StatCard({
  icon: Icon,
  label,
  value,
  color,
  bgColor,
  iconColor,
  delay,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6, scale: 1.02 }}
      className="group relative bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-300 p-6 overflow-hidden"
    >
      {/* Background Gradient on Hover */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
      ></div>

      {/* Icon Container */}
      <div
        className={`w-14 h-14 rounded-2xl ${bgColor} group-hover:bg-gradient-to-br group-hover:${color} transition-all duration-300 flex items-center justify-center text-2xl mb-4`}
      >
        <Icon
          className={`${iconColor} group-hover:text-white transition-colors duration-300`}
        />
      </div>

      {/* Value */}
      <div
        className={`text-3xl sm:text-4xl font-black tracking-tight ${iconColor} group-hover:scale-105 transition-transform duration-300 origin-left`}
      >
        <CountUp targetValue={value} />
      </div>

      {/* Label */}
      <p className="text-slate-500 text-xs font-bold uppercase tracking-wider mt-1">
        {label}
      </p>

      {/* Bottom Accent Line */}
      <div
        className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${color} scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
      ></div>
    </motion.div>
  );
}

// ── Skeleton Loader ──────────────────────────────────────────────────────
function SkeletonStat() {
  return (
    <div className="bg-white rounded-2xl border border-slate-100 p-6 animate-pulse">
      <div className="w-14 h-14 rounded-2xl bg-slate-100 mb-4"></div>
      <div className="h-8 bg-slate-100 rounded w-3/4 mb-2"></div>
      <div className="h-4 bg-slate-100 rounded w-1/2"></div>
    </div>
  );
}

// ── Main Component ──────────────────────────────────────────────────────
export default function PlatformStats() {
  const [stats, setStats] = useState({
    doctors: 0,
    patients: 0,
    appointments: 0,
    reviews: 0,
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchAnalytics = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BETTER_AUTH_URL || "http://localhost:5000"}/api/admin/analytics`,
        );
        const data = await response.json();

        console.log("Analytics response:", data);

        const extracted = {
          doctors:
            data.stats?.find(
              (s) => s.name === "TOTAL DOCTORS" || s.name === "Total Doctors",
            )?.value || 0,
          patients:
            data.stats?.find(
              (s) => s.name === "TOTAL PATIENTS" || s.name === "Total Patients",
            )?.value || 0,
          appointments:
            data.stats?.find(
              (s) =>
                s.name === "TOTAL APPOINTMENTS" ||
                s.name === "Total Appointments",
            )?.value || 0,
          reviews:
            data.stats?.find(
              (s) =>
                s.name === "REVIEWS RECEIVED" ||
                s.name === "Total Reviews" ||
                s.name === "Reviews Received" ||
                s.name === "reviews",
            )?.value || 0,
        };

        console.log("Extracted stats:", extracted);
        setStats(extracted);
      } catch (error) {
        console.error("Failed to sync analytics:", error);
        setStats({
          doctors: 25,
          patients: 1,
          appointments: 5,
          reviews: 1,
        });
      } finally {
        setIsLoading(false);
      }
    };
    fetchAnalytics();
  }, []);

  const config = [
    {
      label: "Expert Doctors",
      value: stats.doctors,
      icon: FaUserMd,
      color: "from-cyan-500 to-blue-600",
      bgColor: "bg-cyan-50",
      iconColor: "text-cyan-500",
    },
    {
      label: "Happy Patients",
      value: stats.patients,
      icon: FaUserCheck,
      color: "from-emerald-500 to-teal-600",
      bgColor: "bg-emerald-50",
      iconColor: "text-emerald-500",
    },
    {
      label: "Appointments",
      value: stats.appointments,
      icon: FaCalendarCheck,
      color: "from-purple-500 to-violet-600",
      bgColor: "bg-purple-50",
      iconColor: "text-purple-500",
    },
    {
      label: "Reviews",
      value: stats.reviews,
      icon: FaRegCommentDots,
      color: "from-amber-500 to-orange-600",
      bgColor: "bg-amber-50",
      iconColor: "text-amber-500",
    },
  ];

  return (
    <section className="relative bg-gradient-to-b from-white via-slate-50 to-white py-20 px-4 sm:px-6 md:px-12 lg:px-20 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[800px] h-[800px] border border-cyan-500/5 rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[600px] h-[600px] border border-blue-500/5 rounded-full"></div>

        {/* Medical Cross Pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
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
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-50 to-blue-50 text-cyan-600 text-[11px] font-bold px-4 py-2 rounded-full tracking-wide border border-cyan-200/50 mb-4"
          >
            <FaHeartbeat className="text-[12px]" />
            <span className="text-[8px] text-cyan-400">✦</span>
            <span>Platform Analytics</span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            <span className="bg-gradient-to-r from-cyan-600 to-blue-700 bg-clip-text text-transparent">
              Platform
            </span>
            <span className="text-slate-900"> Statistics</span>
          </h2>
          <p className="text-slate-500 text-sm font-medium mt-3 max-w-2xl mx-auto">
            Trusted by thousands of patients and doctors across the globe with
            exceptional care and satisfaction.
          </p>
        </motion.div>

        {/* Stats Grid */}
        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <SkeletonStat key={i} />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {config.map((item, index) => (
              <StatCard
                key={index}
                icon={item.icon}
                label={item.label}
                value={item.value}
                color={item.color}
                bgColor={item.bgColor}
                iconColor={item.iconColor}
                delay={index * 0.1}
              />
            ))}
          </div>
        )}

        {/* Bottom Trust Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 pt-8 border-t border-slate-100 flex flex-wrap justify-center items-center gap-6 md:gap-10 text-center"
        >
          <div className="flex items-center gap-3">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full border-2 border-white bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-xs font-bold text-white"
                >
                  {String.fromCharCode(64 + i)}
                </div>
              ))}
            </div>
            <div className="text-left">
              <p className="text-xs font-bold text-slate-700">
                Trusted by 50K+
              </p>
              <p className="text-[10px] text-slate-400">Patients & Doctors</p>
            </div>
          </div>

          <div className="w-px h-8 bg-slate-200 hidden sm:block"></div>

          <div className="flex items-center gap-2">
            <FaAward className="text-amber-500 text-lg" />
            <div className="text-left">
              <p className="text-xs font-bold text-slate-700">
                98% Satisfaction
              </p>
              <p className="text-[10px] text-slate-400">
                Based on 10,000+ reviews
              </p>
            </div>
          </div>

          <div className="w-px h-8 bg-slate-200 hidden sm:block"></div>

          <div className="flex items-center gap-2">
            <MdHealthAndSafety className="text-emerald-500 text-lg" />
            <div className="text-left">
              <p className="text-xs font-bold text-slate-700">
                HIPAA Compliant
              </p>
              <p className="text-[10px] text-slate-400">Secure & Encrypted</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
