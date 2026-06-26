"use client";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  MessageSquare,
  Clock,
  ArrowRight,
  Send,
  CheckCircle,
  Facebook,
  Twitter,
  Linkedin,
  Youtube,
} from "lucide-react";
import { FaHeartbeat, FaStethoscope, FaHospital } from "react-icons/fa";

const faqs = [
  {
    q: "How do I book an appointment?",
    a: "Navigate to the Find Doctors section and click 'Book' on your preferred professional. You'll receive instant confirmation.",
  },
  {
    q: "Is my medical data secure?",
    a: "Yes, we use industry-standard encryption and comply with HIPAA regulations to ensure your health records remain private and secure.",
  },
  {
    q: "Can I cancel or reschedule?",
    a: "Absolutely! You can manage your appointments from your dashboard. Cancellations are free up to 24 hours before.",
  },
  {
    q: "Do you accept insurance?",
    a: "We work with major insurance providers. You can check your coverage during the booking process.",
  },
];

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function ContactUsPage() {
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
        {/* Header Section */}
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
            <MessageSquare className="w-4 h-4" />
            <span className="text-[8px] text-cyan-400">✦</span>
            <span>Get in Touch</span>
          </motion.div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight">
            <span className="bg-gradient-to-r from-cyan-600 to-blue-700 bg-clip-text text-transparent">
              Contact
            </span>
            <span className="text-slate-900"> Us</span>
          </h1>
          <p className="text-slate-500 text-sm font-medium mt-3 max-w-2xl mx-auto">
            We're here to help you get the best medical care possible. Reach out
            to us anytime.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Left: Contact Details & Quick Links - 2/5 columns */}
          <div className="lg:col-span-2 space-y-8">
            {/* Contact Cards */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="space-y-4"
            >
              <div className="group bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-300 p-6 flex items-start gap-4 overflow-hidden relative">
                <div className="w-12 h-12 rounded-xl bg-cyan-50 group-hover:bg-cyan-500 text-cyan-500 group-hover:text-white transition-all duration-300 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Email
                  </p>
                  <a
                    href="mailto:support@medicare.com"
                    className="text-sm font-semibold text-slate-900 hover:text-cyan-600 transition-colors"
                  >
                    support@medicare.com
                  </a>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>

              <div className="group bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-300 p-6 flex items-start gap-4 overflow-hidden relative">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 group-hover:bg-emerald-500 text-emerald-500 group-hover:text-white transition-all duration-300 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Phone
                  </p>
                  <a
                    href="tel:+880123456789"
                    className="text-sm font-semibold text-slate-900 hover:text-emerald-600 transition-colors"
                  >
                    +880 123 456 789
                  </a>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-500 to-teal-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>

              <div className="group bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-300 p-6 flex items-start gap-4 overflow-hidden relative">
                <div className="w-12 h-12 rounded-xl bg-purple-50 group-hover:bg-purple-500 text-purple-500 group-hover:text-white transition-all duration-300 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Location
                  </p>
                  <p className="text-sm font-semibold text-slate-900">
                    Dhaka, Bangladesh
                  </p>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 to-violet-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>

              <div className="group bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl p-6 text-white flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-white/70 uppercase tracking-wider">
                    Support Hours
                  </p>
                  <p className="text-sm font-bold">24/7 Emergency Support</p>
                  <p className="text-xs text-white/70 mt-0.5">
                    Always here for you
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Social Media */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6"
            >
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">
                Follow Us
              </p>
              <div className="flex items-center gap-3">
                <a
                  href="#"
                  className="w-10 h-10 rounded-xl bg-slate-100 text-slate-500 flex items-center justify-center hover:bg-cyan-500 hover:text-white transition-all duration-300"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-xl bg-slate-100 text-slate-500 flex items-center justify-center hover:bg-cyan-500 hover:text-white transition-all duration-300"
                >
                  <Twitter className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-xl bg-slate-100 text-slate-500 flex items-center justify-center hover:bg-cyan-500 hover:text-white transition-all duration-300"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-xl bg-slate-100 text-slate-500 flex items-center justify-center hover:bg-cyan-500 hover:text-white transition-all duration-300"
                >
                  <Youtube className="w-4 h-4" />
                </a>
              </div>
            </motion.div>

            {/* FAQ Section */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">
                Frequently Asked Questions
              </h3>
              <div className="space-y-4">
                {faqs.map((faq, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    className="group bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 p-5 cursor-pointer"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-cyan-50 text-cyan-500 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                        {i + 1}
                      </div>
                      <div>
                        <p className="font-bold text-slate-900 text-sm group-hover:text-cyan-600 transition-colors">
                          {faq.q}
                        </p>
                        <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                          {faq.a}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right: Contact Form - 3/5 columns */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="lg:col-span-3"
          >
            <div className="bg-white rounded-3xl border border-slate-100 shadow-2xl shadow-slate-200/50 p-8 md:p-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white flex items-center justify-center">
                  <Send className="w-4 h-4" />
                </div>
                <div>
                  <h2 className="text-xl font-black text-slate-900">
                    Send a Message
                  </h2>
                  <p className="text-xs text-slate-400 font-medium">
                    We'll respond within 24 hours
                  </p>
                </div>
              </div>

              <form className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="group">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-1.5">
                      First Name
                    </label>
                    <input
                      className="w-full p-4 rounded-xl border border-slate-200 focus:border-cyan-400 focus:ring-4 focus:ring-cyan-50 outline-none transition-all text-sm bg-slate-50 group-hover:bg-white group-hover:border-cyan-300"
                      placeholder="John"
                    />
                  </div>
                  <div className="group">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-1.5">
                      Last Name
                    </label>
                    <input
                      className="w-full p-4 rounded-xl border border-slate-200 focus:border-cyan-400 focus:ring-4 focus:ring-cyan-50 outline-none transition-all text-sm bg-slate-50 group-hover:bg-white group-hover:border-cyan-300"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div className="group">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-1.5">
                    Email Address
                  </label>
                  <input
                    className="w-full p-4 rounded-xl border border-slate-200 focus:border-cyan-400 focus:ring-4 focus:ring-cyan-50 outline-none transition-all text-sm bg-slate-50 group-hover:bg-white group-hover:border-cyan-300"
                    placeholder="you@example.com"
                    type="email"
                  />
                </div>

                <div className="group">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-1.5">
                    Subject
                  </label>
                  <input
                    className="w-full p-4 rounded-xl border border-slate-200 focus:border-cyan-400 focus:ring-4 focus:ring-cyan-50 outline-none transition-all text-sm bg-slate-50 group-hover:bg-white group-hover:border-cyan-300"
                    placeholder="How can we help?"
                  />
                </div>

                <div className="group">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-1.5">
                    Message
                  </label>
                  <textarea
                    className="w-full p-4 rounded-xl border border-slate-200 h-36 focus:border-cyan-400 focus:ring-4 focus:ring-cyan-50 outline-none transition-all text-sm bg-slate-50 group-hover:bg-white group-hover:border-cyan-300 resize-none"
                    placeholder="Tell us how we can assist you..."
                  ></textarea>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 rounded-xl uppercase tracking-wider text-xs shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all duration-300 flex items-center justify-center gap-3 overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    Send Message
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                </motion.button>

                <div className="flex items-center justify-center gap-2 text-[10px] text-slate-400 font-medium">
                  <CheckCircle className="w-3 h-3 text-emerald-500" />
                  <span>
                    We respect your privacy. Your information is secure.
                  </span>
                </div>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-16 pt-8 border-t border-slate-100 flex flex-wrap justify-center gap-8 md:gap-12 text-center"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-50 text-cyan-500 flex items-center justify-center">
              <FaHeartbeat className="text-lg" />
            </div>
            <div className="text-left">
              <p className="text-sm font-bold text-slate-900">50K+</p>
              <p className="text-[10px] text-slate-400 font-medium">
                Happy Patients
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-500 flex items-center justify-center">
              <FaStethoscope className="text-lg" />
            </div>
            <div className="text-left">
              <p className="text-sm font-bold text-slate-900">500+</p>
              <p className="text-[10px] text-slate-400 font-medium">
                Expert Doctors
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-500 flex items-center justify-center">
              <FaHospital className="text-lg" />
            </div>
            <div className="text-left">
              <p className="text-sm font-bold text-slate-900">85+</p>
              <p className="text-[10px] text-slate-400 font-medium">
                Partner Hospitals
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-500 flex items-center justify-center">
              <Clock className="w-5 h-5" />
            </div>
            <div className="text-left">
              <p className="text-sm font-bold text-slate-900">24/7</p>
              <p className="text-[10px] text-slate-400 font-medium">
                Support Available
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
