"use client";
import { motion, animate } from "framer-motion";
import { useEffect, useState } from "react";
import {
  FaUsers,
  FaStethoscope,
  FaHospital,
  FaChartLine,
  FaHeartbeat,
  FaUserMd,
  FaAmbulance,
  FaAward,
  FaShieldAlt,
  FaClock,
  FaStar,
  FaArrowRight,
} from "react-icons/fa";
import { MdHealthAndSafety, MdVerified } from "react-icons/md";

const BACKEND_URL =
  process.env.NEXT_PUBLIC_BETTER_AUTH_URL || "http://localhost:5000";

function AnimatedCounter({ from, to }) {
  const [display, setDisplay] = useState(0);
  useEffect(() => {
    const controls = animate(from, to, {
      duration: 2,
      ease: "easeOut",
      onUpdate: (value) => setDisplay(Math.floor(value)),
    });
    return () => controls.stop();
  }, [from, to]);
  return <>{display.toLocaleString()}</>;
}

// ── Skeleton Loader ──────────────────────────────────────────────────────
function SkeletonCard() {
  return (
    <div className="bg-white rounded-2xl border border-slate-100 p-8 animate-pulse shadow-sm">
      <div className="w-14 h-14 rounded-2xl bg-slate-100 mb-6"></div>
      <div className="h-8 bg-slate-100 rounded w-3/4 mb-2"></div>
      <div className="h-4 bg-slate-100 rounded w-1/2"></div>
      <div className="mt-4 h-3 bg-slate-100 rounded w-2/3"></div>
    </div>
  );
}

export default function AboutUsPage() {
  const [stats, setStats] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fallback static data if API fails
  const fallbackStats = [
    {
      id: 1,
      name: "Total Users",
      value: 15000,
      change: "+15%",
      icon: FaUsers,
      color: "cyan",
    },
    {
      id: 2,
      name: "Active Doctors",
      value: 1200,
      change: "+8%",
      icon: FaStethoscope,
      color: "emerald",
    },
    {
      id: 3,
      name: "Partner Hospitals",
      value: 85,
      change: "+12%",
      icon: FaHospital,
      color: "purple",
    },
    {
      id: 4,
      name: "Monthly Growth",
      value: 2000,
      change: "+22%",
      icon: FaChartLine,
      color: "amber",
    },
  ];

  // Color mapping for icons
  const colorMap = {
    cyan: {
      bg: "bg-cyan-50",
      icon: "text-cyan-500",
      gradient: "from-cyan-500 to-blue-600",
      text: "text-cyan-600",
    },
    emerald: {
      bg: "bg-emerald-50",
      icon: "text-emerald-500",
      gradient: "from-emerald-500 to-teal-600",
      text: "text-emerald-600",
    },
    purple: {
      bg: "bg-purple-50",
      icon: "text-purple-500",
      gradient: "from-purple-500 to-violet-600",
      text: "text-purple-600",
    },
    amber: {
      bg: "bg-amber-50",
      icon: "text-amber-500",
      gradient: "from-amber-500 to-orange-600",
      text: "text-amber-600",
    },
  };

  useEffect(() => {
    const fetchAnalytics = async () => {
      try {
        console.log("Fetching from:", `${BACKEND_URL}/api/admin/analytics`);

        const res = await fetch(`${BACKEND_URL}/api/admin/analytics`, {
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }

        const data = await res.json();
        console.log("Fetched data:", data);

        if (data && data.stats && Array.isArray(data.stats)) {
          // Map stats with icons
          const icons = [FaUsers, FaStethoscope, FaHospital, FaChartLine];
          const colors = ["cyan", "emerald", "purple", "amber"];
          const mappedStats = data.stats.map((stat, index) => ({
            ...stat,
            icon: icons[index % icons.length],
            color: colors[index % colors.length],
          }));
          setStats(mappedStats);
        } else {
          console.warn("Unexpected data structure:", data);
          setStats(fallbackStats);
        }
      } catch (err) {
        console.error("Failed to load analytics:", err);
        setError(err.message);
        setStats(fallbackStats);
      } finally {
        setLoading(false);
      }
    };

    fetchAnalytics();
  }, []);

  useEffect(() => {
    if (!loading && stats.length === 0) {
      setStats(fallbackStats);
    }
  }, [loading]);

  if (error) {
    console.warn("Using fallback data due to error:", error);
  }

  const sectionVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section className="relative bg-gradient-to-b from-white via-slate-50 to-white py-20 px-4 sm:px-6 md:px-12 lg:px-20 overflow-hidden min-h-screen">
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
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-50 to-blue-50 text-cyan-600 text-[11px] font-bold px-4 py-2 rounded-full tracking-wide border border-cyan-200/50 mb-4"
          >
            <FaHeartbeat className="text-[12px]" />
            <span className="text-[8px] text-cyan-400">✦</span>
            <span>Platform Analytics</span>
          </motion.div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight">
            <span className="bg-gradient-to-r from-cyan-600 to-blue-700 bg-clip-text text-transparent">
              Our
            </span>
            <span className="text-slate-900"> Impact</span>
          </h1>
          <p className="text-slate-500 text-sm font-medium mt-3 max-w-2xl mx-auto">
            Real-time data on the community we serve — connecting patients with
            world-class healthcare providers.
          </p>

          {error && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-amber-600 text-sm mt-4 bg-amber-50 px-4 py-2 rounded-full inline-block border border-amber-200/50"
            >
              ⚡ Using fallback data (API unavailable)
            </motion.p>
          )}
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {loading
            ? [1, 2, 3, 4].map((i) => <SkeletonCard key={i} />)
            : stats.map((stat, i) => {
                const Icon = stat.icon || FaChartLine;
                const colors = colorMap[stat.color] || colorMap.cyan;

                let numericValue = 0;
                if (stat.value) {
                  const cleaned = stat.value.toString().replace(/[^0-9]/g, "");
                  numericValue = parseInt(cleaned) || 0;
                }

                return (
                  <motion.div
                    key={stat.id || i}
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{
                      delay: i * 0.1,
                      duration: 0.5,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    whileHover={{ y: -6, scale: 1.02 }}
                    className="group relative bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-300 p-8 overflow-hidden"
                  >
                    {/* Background Gradient on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-transparent group-hover:from-cyan-50/30 group-hover:to-blue-50/30 transition-all duration-500"></div>

                    {/* Icon */}
                    <div
                      className={`relative z-10 w-14 h-14 rounded-2xl ${colors.bg} group-hover:bg-gradient-to-br group-hover:${colors.gradient} transition-all duration-300 flex items-center justify-center text-2xl mb-6`}
                    >
                      <Icon
                        className={`${colors.icon} group-hover:text-white transition-colors duration-300`}
                      />
                    </div>

                    {/* Value */}
                    <div
                      className={`relative z-10 text-3xl sm:text-4xl font-black tracking-tight ${colors.text} group-hover:scale-105 transition-transform duration-300 origin-left`}
                    >
                      <AnimatedCounter from={0} to={numericValue} />
                    </div>

                    {/* Label */}
                    <p className="relative z-10 text-xs font-bold text-slate-400 uppercase tracking-wider mt-1">
                      {stat.name || stat.label || "Stat"}
                    </p>

                    {/* Change Badge */}
                    {stat.change && (
                      <div
                        className={`relative z-10 mt-3 inline-flex items-center gap-1 text-[10px] font-bold ${
                          stat.change.startsWith("+")
                            ? "text-emerald-600 bg-emerald-50"
                            : "text-red-600 bg-red-50"
                        } px-2 py-1 rounded-full`}
                      >
                        <span>{stat.change}</span>
                        <span className="text-[8px] opacity-70">
                          vs last month
                        </span>
                      </div>
                    )}

                    {/* Bottom Accent Line */}
                    <div
                      className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${colors.gradient} scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
                    ></div>
                  </motion.div>
                );
              })}
        </div>

        {/* Bottom Section - Trust Badges & CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-16 pt-8 border-t border-slate-100"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Trust Badge 1 */}
            <div className="flex items-center gap-4 bg-white rounded-2xl p-4 border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-500 flex items-center justify-center text-xl">
                <MdVerified />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900">
                  Verified Healthcare
                </p>
                <p className="text-[10px] text-slate-400 font-medium">
                  All doctors & hospitals verified
                </p>
              </div>
            </div>

            {/* Trust Badge 2 */}
            <div className="flex items-center gap-4 bg-white rounded-2xl p-4 border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="w-12 h-12 rounded-xl bg-cyan-50 text-cyan-500 flex items-center justify-center text-xl">
                <FaShieldAlt />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900">
                  Secure & Private
                </p>
                <p className="text-[10px] text-slate-400 font-medium">
                  HIPAA compliant platform
                </p>
              </div>
            </div>

            {/* Trust Badge 3 */}
            <div className="flex items-center gap-4 bg-white rounded-2xl p-4 border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-500 flex items-center justify-center text-xl">
                <FaClock />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900">
                  24/7 Availability
                </p>
                <p className="text-[10px] text-slate-400 font-medium">
                  Book appointments anytime
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mt-8 text-center"
          >
            <div className="inline-flex items-center gap-6 bg-white border border-slate-200 rounded-full px-6 py-3 shadow-sm hover:shadow-md transition-shadow duration-300 flex-wrap justify-center">
              <div className="flex items-center gap-2 text-sm font-medium text-slate-600">
                <FaUserMd className="text-cyan-500" />
                <span>Ready to make a difference?</span>
              </div>
              <div className="w-px h-6 bg-slate-200 hidden sm:block"></div>
              <motion.a
                href="/find-doctors"
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
                className="flex items-center gap-2 text-xs font-bold text-cyan-600 hover:text-blue-700 transition-colors"
              >
                Find a Doctor
                <FaArrowRight className="text-[9px]" />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
