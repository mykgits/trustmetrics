"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white scroll-smooth">
      {/* NAVIGATION */}
      <nav className="fixed w-full bg-black/70 backdrop-blur-md z-50 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold tracking-wide">TrustMetrics</h1>
          <div className="hidden md:flex gap-8 text-sm">
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#case">Case Studies</a>
            <a href="#pricing">Pricing</a>
            <a href="#blog">Blog</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="pt-40 pb-28 text-center px-6">
        <motion.h1 initial={{opacity:0,y:-30}} animate={{opacity:1,y:0}} transition={{duration:0.8}} className="text-5xl md:text-6xl font-bold">
          Enterprise AI Evaluation & Data Quality Solutions
        </motion.h1>
        <p className="mt-6 text-slate-400 max-w-3xl mx-auto text-lg">
          Precision-driven AI evaluation, multilingual annotation, search quality analysis, and media validation for global technology platforms.
        </p>
        <div className="mt-10">
          <a href="#contact" className="bg-white text-black px-8 py-4 rounded-2xl font-semibold">
            Request Consultation
          </a>
        </div>
      </section>

      {/* ANIMATED COUNTERS */}
      <section className="py-20 bg-slate-900/60 text-center">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-10">
          {[
            {value:"5+", label:"Years Experience"},
            {value:"15+", label:"AI Projects"},
            {value:"4", label:"Languages"},
            {value:"98%", label:"Accuracy Benchmark"}
          ].map((item,i)=>(
            <motion.div key={i} initial={{opacity:0,y:40}} whileInView={{opacity:1,y:0}} transition={{duration:0.6}}>
              <h3 className="text-4xl font-bold">{item.value}</h3>
              <p className="text-slate-400 mt-2">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-semibold mb-16">Core Services</h2>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {title:"Search Quality Evaluation",desc:"Needs Met, Page Quality & E-E-A-T audits for AI search systems."},
              {title:"Multilingual Annotation",desc:"Transcription, OCR validation & cross-locale AI training data."},
              {title:"Media & Dubbing QA",desc:"LipSync review, subtitle accuracy & SBS/ACR evaluation."}
            ].map((service,i)=>(
              <div key={i} className="bg-slate-900 p-10 rounded-2xl shadow-xl">
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-slate-400">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section id="case" className="py-24 bg-slate-900/60 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-semibold mb-12 text-center">Case Studies</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-slate-800 p-8 rounded-2xl">
              <h3 className="text-xl font-semibold mb-4">AI Search Optimization Project</h3>
              <p className="text-slate-400">Improved search relevance accuracy by 22% through structured Needs Met analysis and content gap evaluation.</p>
            </div>
            <div className="bg-slate-800 p-8 rounded-2xl">
              <h3 className="text-xl font-semibold mb-4">Multilingual Media QA Deployment</h3>
              <p className="text-slate-400">Executed dubbing & subtitle validation across 4 Indic languages ensuring broadcast-level compliance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 px-6 text-center">
        <h2 className="text-4xl font-semibold mb-16">Client Testimonials</h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10">
          <div className="bg-slate-900 p-8 rounded-2xl">
            <p className="text-slate-400">"TrustMetrics delivered exceptional AI evaluation insights with precision and structured reporting."</p>
          </div>
          <div className="bg-slate-900 p-8 rounded-2xl">
            <p className="text-slate-400">"Their multilingual QA workflows significantly enhanced our localization quality metrics."</p>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-24 bg-slate-900/60 px-6 text-center">
        <h2 className="text-4xl font-semibold mb-16">Service Packages</h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {["Starter","Professional","Enterprise"].map((plan,i)=>(
            <div key={i} className="bg-slate-900 p-10 rounded-2xl">
              <h3 className="text-2xl font-semibold mb-4">{plan}</h3>
              <p className="text-slate-400 mb-6">Custom pricing based on scope</p>
              <a href="#contact" className="bg-white text-black px-6 py-3 rounded-xl">Enquire</a>
            </div>
          ))}
        </div>
      </section>

      {/* BLOG SECTION */}
      <section id="blog" className="py-24 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-semibold mb-16">Insights & Research</h2>
          <div className="grid md:grid-cols-3 gap-10">
            {["Improving AI Search Accuracy","Multilingual AI Challenges","E-E-A-T in Modern AI Systems"].map((post,i)=>(
              <div key={i} className="bg-slate-900 p-8 rounded-2xl">
                <h3 className="text-lg font-semibold mb-4">{post}</h3>
                <p className="text-slate-400 text-sm">Read more →</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPANY PROFILE DOWNLOAD */}
      <section className="py-24 bg-slate-900/60 text-center">
        <h2 className="text-3xl font-semibold mb-6">Download Company Profile</h2>
        <a href="/TrustMetrics_Profile.pdf" className="bg-white text-black px-8 py-4 rounded-2xl font-semibold">
          Download PDF
        </a>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 px-6 text-center">
        <h2 className="text-4xl font-semibold mb-10">Contact Us</h2>
        <form
  onSubmit={async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      alert("Message sent successfully!");
      e.target.reset();
    } else {
      alert("Something went wrong. Please try again.");
    }
  }}
  className="max-w-xl mx-auto space-y-6"
>
  <input
    name="name"
    required
    placeholder="Your Name"
    className="w-full p-4 rounded-xl bg-slate-800"
  />

  <input
    name="email"
    type="email"
    required
    placeholder="Your Email"
    className="w-full p-4 rounded-xl bg-slate-800"
  />

  <textarea
    name="message"
    required
    placeholder="Your Message"
    rows="5"
    className="w-full p-4 rounded-xl bg-slate-800"
  ></textarea>

  <button className="bg-white text-black px-8 py-4 rounded-2xl font-semibold">
    Send Message
  </button>
</form>
      </section>

      <footer className="text-center py-10 text-slate-500 border-t border-slate-800">
        © {new Date().getFullYear()} TrustMetrics. All Rights Reserved.
      </footer>
    </div>
  );
}
