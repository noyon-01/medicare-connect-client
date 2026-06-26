"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import {
  FaStar,
  FaCheckCircle,
  FaStethoscope,
  FaArrowRight,
  FaChevronLeft,
  FaChevronRight,
  FaUserMd,
  FaHospital,
  FaCalendarCheck,
  FaClock,
  FaPhoneAlt,
  FaVideo,
  FaShieldAlt,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const BACKEND_URL =
  process.env.NEXT_PUBLIC_BETTER_AUTH_URL || "http://localhost:5000";

const convertToBDT = (usdAmount) => {
  const conversionRate = 110;
  return (usdAmount * conversionRate).toFixed(2);
};

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const gridVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: { duration: 0.3 },
  },
};

function SkeletonCard() {
  return (
    <div className="bg-white rounded-2xl border border-slate-100 overflow-hidden animate-pulse shadow-sm">
      <div className="h-64 bg-gradient-to-br from-slate-100 to-slate-200" />
      <div className="p-6 space-y-3">
        <div className="h-5 bg-slate-100 rounded w-3/4" />
        <div className="h-3 bg-slate-100 rounded w-1/2" />
        <div className="h-3 bg-slate-100 rounded w-2/3" />
        <div className="flex justify-between items-center mt-6">
          <div className="h-6 bg-slate-100 rounded w-24" />
          <div className="h-10 bg-slate-100 rounded-xl w-28" />
        </div>
      </div>
    </div>
  );
}

// ── Doctor Card with REAL ratings ──────────────────────────────────────
function DoctorCard({ doc }) {
  const [imgError, setImgError] = useState(false);
  const doctorImg =
    (!imgError && (doc.image || doc.profileImage)) ||
    "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=600";

  const feeUSD = doc.consultationFee || doc.fee || 50;
  const feeBDT = convertToBDT(feeUSD);

  const rating = doc.avgRating || 0;
  const reviewCount = doc.reviewCount || 0;
  const displayRating = rating > 0 ? rating.toFixed(1) : "New";
  const hasRating = rating > 0;

  // Random availability status (for demo)
  const availability = [
    "Available Today",
    "Next Available Tomorrow",
    "Book for Next Week",
  ][Math.floor(Math.random() * 3)];
  const isAvailable = availability === "Available Today";

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -8, transition: { duration: 0.25, ease: "easeOut" } }}
      className="group bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-300 flex flex-col overflow-hidden cursor-pointer"
    >
      <Link href={`/appointments/book/${doc._id || doc.id}`}>
        <div className="relative h-72 w-full bg-gradient-to-br from-slate-100 to-slate-200 overflow-hidden">
          <motion.div
            className="w-full h-full"
            whileHover={{ scale: 1.06 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <Image
              src={doctorImg}
              alt={doc.doctorName || doc.name || "Doctor"}
              width={400}
              height={400}
              unoptimized
              onError={() => setImgError(true)}
              className="w-full h-full object-cover object-top"
            />
          </motion.div>

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Verified Badge */}
          {doc.verificationStatus === "verified" && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="absolute top-3 right-3 bg-emerald-500 text-white flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-wider shadow-lg shadow-emerald-500/30"
            >
              <FaCheckCircle className="text-[11px]" /> Verified
            </motion.div>
          )}

          {/* Availability Badge */}
          <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm text-slate-800 flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[10px] font-bold shadow-lg">
            <span
              className={`w-1.5 h-1.5 rounded-full ${isAvailable ? "bg-emerald-500 animate-pulse" : "bg-amber-500"}`}
            ></span>
            {availability}
          </div>

          {/* Rating Badge */}
          <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-sm text-slate-800 flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold shadow-lg">
            <FaStar className="text-amber-400 text-xs" />
            <span>{hasRating ? rating.toFixed(1) : "New"}</span>
            <span className="text-slate-400 font-medium text-[10px]">
              ({hasRating ? reviewCount : "0"} reviews)
            </span>
          </div>

          {/* Online/Offline Badge */}
          <div className="absolute bottom-3 right-3 bg-cyan-500/90 backdrop-blur-sm text-white flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[10px] font-bold shadow-lg">
            <FaVideo className="text-[10px]" />
            Online
          </div>
        </div>
      </Link>

      <div className="p-5 flex flex-col justify-between flex-grow bg-white">
        <div>
          <div className="flex items-start justify-between">
            <h3 className="text-base font-bold text-slate-900 tracking-tight leading-snug group-hover:text-cyan-600 transition-colors duration-200">
              {doc.doctorName || doc.name || "Specialist Provider"}
            </h3>
            <span className="text-[10px] font-bold text-slate-400 bg-slate-50 px-2 py-1 rounded-md">
              {doc.experience || "5"} yrs
            </span>
          </div>

          <div className="flex items-center gap-2 mt-1.5 flex-wrap">
            <span className="text-cyan-600 text-xs font-semibold bg-cyan-50 px-2 py-0.5 rounded-full">
              {doc.specialization || "General Health"}
            </span>
          </div>

          <div className="flex items-center gap-2 mt-2 text-[11px] text-slate-500">
            <FaHospital className="text-cyan-400 text-[10px]" />
            <span className="font-medium">
              {doc.hospitalName || "Affiliated Clinic"}
            </span>
          </div>

          <div className="flex items-center gap-4 mt-2 text-[10px] text-slate-400">
            <span className="flex items-center gap-1">
              <FaClock className="text-[9px]" />
              {isAvailable ? "Available Now" : "Schedule Soon"}
            </span>
            <span className="flex items-center gap-1">
              <FaPhoneAlt className="text-[9px]" />
              Online Consult
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between mt-4 pt-4 border-t border-slate-50">
          <div>
            <span className="text-[8px] text-slate-400 font-bold uppercase tracking-widest block leading-none mb-0.5">
              Consultation Fee
            </span>
            <div className="space-y-0.5">
              <span className="text-lg font-extrabold text-slate-900">
                ${feeUSD}{" "}
                <span className="text-xs font-semibold text-slate-400">
                  USD
                </span>
              </span>
              <div className="text-sm font-bold text-slate-600">
                ৳{feeBDT}{" "}
                <span className="text-[10px] font-semibold text-slate-400">
                  BDT
                </span>
              </div>
            </div>
          </div>

          <Link
            href={`/appointments/book/${doc._id || doc.id}`}
            className="group/btn bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold text-xs tracking-wide px-5 py-2.5 rounded-xl shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all duration-300 flex items-center gap-2 active:scale-95"
          >
            <FaCalendarCheck className="text-[10px]" />
            Book Now
            <FaArrowRight className="text-[9px] group-hover/btn:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="mt-2 pt-2 border-t border-slate-50/50 flex items-center justify-between">
          <div className="flex items-center gap-1.5 text-[9px] text-slate-400 font-medium">
            <span>💱</span>
            <span>1 USD = ৳110 BDT</span>
          </div>
          <div className="flex items-center gap-1 text-[9px] text-slate-400">
            <FaShieldAlt className="text-[9px] text-emerald-500" />
            <span>Secure</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// ── Main Component ────────────────────────────────────────────────────────────
export default function FeaturedDoctors() {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const res = await fetch(`${BACKEND_URL}/api/doctors?limit=12`);
        if (!res.ok) throw new Error("Failed to fetch doctors.");
        const data = await res.json();

        if (data.success && Array.isArray(data.doctors)) {
          setDoctors(data.doctors);
        }
      } catch (err) {
        console.error("Doctor fetch failed:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchDoctors();
  }, []);

  const totalPages = Math.ceil(doctors.length / itemsPerPage);
  const currentDoctors = doctors.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  const getPaginationNumbers = () => {
    const pages = [];
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else if (currentPage <= 3) {
      pages.push(1, 2, 3, 4, "...", totalPages);
    } else if (currentPage >= totalPages - 2) {
      pages.push(
        1,
        "...",
        totalPages - 3,
        totalPages - 2,
        totalPages - 1,
        totalPages,
      );
    } else {
      pages.push(
        1,
        "...",
        currentPage - 1,
        currentPage,
        currentPage + 1,
        "...",
        totalPages,
      );
    }
    return pages;
  };

  const handlePageChange = (page) => {
    if (page === "..." || page === currentPage) return;
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="bg-gradient-to-b from-slate-50 via-white to-slate-50/50 py-20 px-4 sm:px-6 md:px-12 lg:px-20 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[600px] h-[600px] border border-cyan-500/5 rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[400px] h-[400px] border border-blue-500/5 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header - Enhanced Medical Theme */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4"
        >
          <div className="space-y-3">
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-50 to-blue-50 text-cyan-600 text-[11px] font-bold px-4 py-2 rounded-full tracking-wide border border-cyan-200/50"
            >
              <div className="flex items-center gap-1">
                {[...Array(3)].map((_, i) => (
                  <FaStar key={i} className="text-[9px] text-amber-400" />
                ))}
              </div>
              <span className="text-[8px] text-cyan-400">✦</span>
              <span>Trusted by 50K+ Patients</span>
            </motion.div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
              <span className="bg-gradient-to-r from-cyan-600 to-blue-700 bg-clip-text text-transparent">
                Expert
              </span>
              <span className="text-slate-900"> Specialists</span>
            </h2>
            <p className="text-slate-500 text-sm font-medium max-w-lg">
              Connect with board-certified doctors who are shaping the future of
              healthcare with exceptional patient care.
            </p>
          </div>

          <motion.a
            href="/find-doctors"
            whileHover={{ x: 4 }}
            transition={{ duration: 0.2 }}
            className="group text-xs font-bold text-cyan-600 hover:text-blue-700 transition-colors flex items-center gap-2 whitespace-nowrap self-start sm:self-end bg-white border border-cyan-200/50 px-4 py-2.5 rounded-full shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            View All Doctors
            <FaArrowRight className="text-[9px] group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </motion.div>

        {/* Loading */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <SkeletonCard key={i} />
            ))}
          </div>
        ) : doctors.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20 border border-dashed border-slate-200 rounded-3xl bg-white/50 backdrop-blur-sm"
          >
            <FaUserMd className="text-4xl text-slate-200 mx-auto mb-3" />
            <p className="text-sm font-bold text-slate-400 uppercase tracking-wider">
              No verified specialists available yet.
            </p>
            <p className="text-xs text-slate-300 mt-1">Check back soon.</p>
          </motion.div>
        ) : (
          <>
            {/* Cards Grid */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPage}
                variants={gridVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
              >
                {currentDoctors.map((doc) => (
                  <DoctorCard key={doc._id || doc.id} doc={doc} />
                ))}
              </motion.div>
            </AnimatePresence>

            {/* Pagination - Enhanced */}
            {totalPages > 1 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex items-center justify-center gap-2 mt-14 pt-8 border-t border-slate-100"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className={`flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
                    currentPage === 1
                      ? "text-slate-300 bg-slate-50 cursor-not-allowed"
                      : "text-slate-600 bg-white border border-slate-200 hover:bg-slate-50 hover:border-cyan-300"
                  }`}
                >
                  <FaChevronLeft className="text-[10px]" /> Prev
                </motion.button>

                <div className="flex items-center gap-1.5 px-2">
                  {getPaginationNumbers().map((page, i) => (
                    <motion.button
                      key={i}
                      whileHover={page !== "..." ? { scale: 1.1 } : {}}
                      whileTap={page !== "..." ? { scale: 0.95 } : {}}
                      onClick={() => handlePageChange(page)}
                      className={`h-9 w-9 flex items-center justify-center rounded-xl text-xs font-bold transition-all ${
                        page === "..."
                          ? "text-slate-400 cursor-default"
                          : currentPage === page
                            ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/30"
                            : "text-slate-600 bg-white border border-slate-200 hover:bg-slate-50 hover:border-cyan-300"
                      }`}
                    >
                      {page}
                    </motion.button>
                  ))}
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className={`flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
                    currentPage === totalPages
                      ? "text-slate-300 bg-slate-50 cursor-not-allowed"
                      : "text-slate-600 bg-white border border-slate-200 hover:bg-slate-50 hover:border-cyan-300"
                  }`}
                >
                  Next <FaChevronRight className="text-[10px]" />
                </motion.button>
              </motion.div>
            )}
          </>
        )}

        {/* Footer Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-16 pt-8 border-t border-slate-100 flex flex-wrap justify-center gap-8 md:gap-12 text-center"
        >
          <div>
            <p className="text-2xl font-bold text-cyan-600">500+</p>
            <p className="text-xs text-slate-400 font-medium">Expert Doctors</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-cyan-600">98%</p>
            <p className="text-xs text-slate-400 font-medium">
              Satisfaction Rate
            </p>
          </div>
          <div>
            <p className="text-2xl font-bold text-cyan-600">50K+</p>
            <p className="text-xs text-slate-400 font-medium">Happy Patients</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-cyan-600">24/7</p>
            <p className="text-xs text-slate-400 font-medium">Online Support</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
