"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-32">

      <div className="max-w-5xl mx-auto">

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-extrabold tracking-tight mb-12"
        >
          About TrustMetrics
        </motion.h1>

        <div className="space-y-10 text-gray-400 text-lg leading-relaxed">

          <p>
            TrustMetrics is a founder-led AI evaluation consulting initiative
            established by <span className="text-white font-semibold">Krishna Kishore Pisipati</span>,
            Computer Science Engineer and AI Search Quality Specialist.
          </p>

          <p>
            With over five years of experience contributing to global AI
            evaluation initiatives including structured programs under RWS / TrainAI,
            multilingual annotation projects, and media QA workflows,
            TrustMetrics focuses on delivering precision-driven evaluation
            methodologies aligned with enterprise standards.
          </p>

          <p>
            The consulting approach emphasizes structured scoring frameworks,
            multilingual consistency, measurable reporting, and disciplined
            evaluation benchmarking.
          </p>

        </div>

        {/* Expertise Pillars */}
        <div className="mt-20 grid md:grid-cols-3 gap-10">

          <div className="p-8 bg-gray-950 rounded-2xl border border-gray-800">
            <h3 className="text-xl font-semibold mb-4">Technical Foundation</h3>
            <p className="text-gray-400">
              Computer Science background supporting structured evaluation logic,
              data analysis thinking, and performance measurement.
            </p>
          </div>

          <div className="p-8 bg-gray-950 rounded-2xl border border-gray-800">
            <h3 className="text-xl font-semibold mb-4">Multilingual Expertise</h3>
            <p className="text-gray-400">
              Native-level fluency across Telugu, Tamil, Hindi, and English
              supporting cross-locale AI validation.
            </p>
          </div>

          <div className="p-8 bg-gray-950 rounded-2xl border border-gray-800">
            <h3 className="text-xl font-semibold mb-4">Enterprise Discipline</h3>
            <p className="text-gray-400">
              Structured methodology, documentation clarity, and measurable
              evaluation reporting.
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}
