"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FaQuoteLeft,
  FaStar,
  FaUserCircle,
  FaSpinner,
  FaHeart,
  FaRegHeart,
  FaArrowRight,
  FaCheckCircle,
  FaUserMd,
  FaCalendarAlt,
} from "react-icons/fa";
import { MdVerified } from "react-icons/md";

// Reviews only store `patientEmail`, not a display name — the backend tries
// to recover a real name from the linked appointment first; if that's not
// available either, we derive a readable label from the email's local part
// (e.g. "joygoswaminiloy2023@gmail.com" -> "Joygoswaminiloy2023") rather than
// showing a raw, full email address publicly on the homepage.
function getDisplayName(review) {
  if (review.patientName) return review.patientName;
  if (review.patientEmail) {
    const localPart = review.patientEmail.split("@")[0];
    return localPart.charAt(0).toUpperCase() + localPart.slice(1);
  }
  return "Verified Patient";
}

function formatDate(dateStr) {
  if (!dateStr) return "";
  try {
    return new Date(dateStr).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  } catch {
    return "";
  }
}

// ── Skeleton Loader ──────────────────────────────────────────────────────
function SkeletonCard() {
  return (
    <div className="bg-white rounded-2xl border border-slate-100 p-6 animate-pulse shadow-sm">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-slate-100"></div>
          <div className="space-y-2">
            <div className="h-4 bg-slate-100 rounded w-24"></div>
            <div className="h-3 bg-slate-100 rounded w-16"></div>
          </div>
        </div>
        <div className="w-20 h-4 bg-slate-100 rounded"></div>
      </div>
      <div className="mt-4 space-y-2">
        <div className="h-3 bg-slate-100 rounded w-full"></div>
        <div className="h-3 bg-slate-100 rounded w-5/6"></div>
        <div className="h-3 bg-slate-100 rounded w-4/6"></div>
      </div>
      <div className="mt-4 pt-4 border-t border-slate-100 flex gap-2">
        <div className="h-6 bg-slate-100 rounded w-16"></div>
        <div className="h-6 bg-slate-100 rounded w-20"></div>
      </div>
    </div>
  );
}

export default function SuccessStories() {
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const BACKEND =
          process.env.NEXT_PUBLIC_BETTER_AUTH_URL || "http://localhost:5000";
        const res = await fetch(
          `${BACKEND}/api/doctors/reviews/featured?limit=6&minRating=4`,
        );
        const data = await res.json();
        if (data.success) {
          setStories(data.reviews || []);
        } else {
          setError(true);
        }
      } catch (err) {
        console.error("Failed to load success stories:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchReviews();
  }, []);

  // Nothing genuine to show yet — quietly skip the section rather than
  // showing fabricated testimonials.
  if (!loading && !error && stories.length === 0) return null;

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
        {/* HEADER SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-50 to-blue-50 text-cyan-600 text-[11px] font-bold px-4 py-2 rounded-full tracking-wide border border-cyan-200/50 mb-4"
          >
            <FaHeart className="text-[12px]" />
            <span className="text-[8px] text-cyan-400">✦</span>
            <span>Patient Testimonials</span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            <span className="bg-gradient-to-r from-cyan-600 to-blue-700 bg-clip-text text-transparent">
              Success
            </span>
            <span className="text-slate-900"> Stories</span>
          </h2>
          <p className="text-slate-500 text-sm font-medium mt-3 max-w-2xl mx-auto">
            Real stories from real patients who found hope, healing, and expert
            care through our platform.
          </p>
        </motion.div>

        {/* LOADING STATE */}
        {loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <SkeletonCard key={i} />
            ))}
          </div>
        )}

        {/* ERROR STATE */}
        {!loading && error && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-20 border border-dashed border-slate-200 rounded-3xl bg-white/50 backdrop-blur-sm"
          >
            <FaUserCircle className="text-4xl text-slate-200 mx-auto mb-3" />
            <p className="text-sm font-bold text-slate-400 uppercase tracking-wider">
              Couldn't load reviews right now
            </p>
            <p className="text-xs text-slate-300 mt-1">
              Please check back soon.
            </p>
          </motion.div>
        )}

        {/* TESTIMONIALS GRID */}
        {!loading && !error && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {stories.map((story, idx) => {
              const slideDirection = idx % 2 === 0 ? -40 : 40;
              const displayName = getDisplayName(story);
              const rating = story.rating || 5;

              return (
                <motion.div
                  key={story._id}
                  initial={{ opacity: 0, x: slideDirection, y: 20 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{
                    duration: 0.6,
                    delay: idx * 0.05,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  whileHover={{ y: -6 }}
                  className="group relative bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-300 p-6 lg:p-8 overflow-hidden"
                >
                  {/* Background Gradient on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-transparent group-hover:from-cyan-50/20 group-hover:to-blue-50/20 transition-all duration-500"></div>

                  {/* Decorative Quote Mark */}
                  <div className="absolute top-6 right-6 text-cyan-500/5 text-6xl font-serif transition-all duration-300 group-hover:text-cyan-500/10">
                    <FaQuoteLeft />
                  </div>

                  {/* Rating Stars */}
                  <div className="flex items-center gap-1.5 mb-4 relative z-10">
                    <div className="flex text-amber-400 text-xs gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <FaStar
                          key={i}
                          className={
                            i < rating ? "text-amber-400" : "text-slate-200"
                          }
                        />
                      ))}
                    </div>
                    <span className="text-[10px] text-slate-400 font-medium ml-1">
                      {rating}.0
                    </span>
                  </div>

                  {/* Review Content */}
                  <div className="relative z-10">
                    <p className="text-slate-600 text-sm leading-relaxed italic mb-4">
                      "{story.reviewText}"
                    </p>

                    {/* Doctor Info (if available) */}
                    {story.doctorName && (
                      <div className="flex items-center gap-2 text-[11px] text-slate-400 font-medium mb-3">
                        <FaUserMd className="text-cyan-400 text-[10px]" />
                        <span>Dr. {story.doctorName}</span>
                        {story.specialization && (
                          <>
                            <span className="text-slate-300">•</span>
                            <span className="text-slate-400">
                              {story.specialization}
                            </span>
                          </>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Patient Profile Footer */}
                  <div className="relative z-10 mt-4 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      {/* Avatar */}
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-100 to-blue-100 flex items-center justify-center text-2xl text-cyan-500">
                        {story.patientImage ? (
                          <img
                            src={story.patientImage}
                            alt={displayName}
                            className="w-full h-full rounded-full object-cover"
                          />
                        ) : (
                          <FaUserCircle className="text-cyan-400" />
                        )}
                      </div>

                      <div className="flex flex-col">
                        <div className="flex items-center gap-1.5">
                          <span className="text-sm font-bold text-slate-800">
                            {displayName}
                          </span>
                          <MdVerified className="text-emerald-500 text-sm" />
                        </div>
                        <div className="flex items-center gap-2 text-[10px] text-slate-400 font-medium">
                          <span>Verified Patient</span>
                          {story.createdAt && (
                            <>
                              <span className="text-slate-300">•</span>
                              <span className="flex items-center gap-1">
                                <FaCalendarAlt className="text-[8px]" />
                                {formatDate(story.createdAt)}
                              </span>
                            </>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Like/Heart Button (decorative) */}
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="text-slate-300 hover:text-rose-500 transition-colors duration-300"
                    >
                      <FaRegHeart className="text-sm group-hover:text-rose-500 transition-colors" />
                    </motion.button>
                  </div>

                  {/* Bottom Accent Line */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                </motion.div>
              );
            })}
          </div>
        )}

        {/* Bottom CTA - View All Reviews */}
        {!loading && !error && stories.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-12 text-center"
          >
            <motion.a
              href="/reviews"
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2 }}
              className="inline-flex items-center gap-2 text-sm font-bold text-cyan-600 hover:text-blue-700 transition-colors bg-white border border-slate-200 px-6 py-3 rounded-full shadow-sm hover:shadow-md transition-all duration-300"
            >
              <FaCheckCircle className="text-[12px] text-emerald-500" />
              Read More Success Stories
              <FaArrowRight className="text-[10px] group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </motion.div>
        )}

        {/* Stats Row */}
        {!loading && !error && stories.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="mt-12 pt-8 border-t border-slate-100 flex flex-wrap justify-center gap-8 md:gap-12 text-center"
          >
            <div>
              <p className="text-2xl font-bold text-cyan-600">
                {stories.length}+
              </p>
              <p className="text-xs text-slate-400 font-medium">Stories</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-cyan-600">4.9/5</p>
              <p className="text-xs text-slate-400 font-medium">
                Average Rating
              </p>
            </div>
            <div>
              <p className="text-2xl font-bold text-cyan-600">98%</p>
              <p className="text-xs text-slate-400 font-medium">Satisfaction</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-cyan-600">50K+</p>
              <p className="text-xs text-slate-400 font-medium">
                Happy Patients
              </p>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
