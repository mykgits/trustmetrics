"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function Counter({ target }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1500;
    const increment = target / (duration / 16);

    const counter = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(counter);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(counter);
  }, [target]);

  return <span>{count}</span>;
}

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">

      {/* HERO */}
      <section className="pt-40 pb-36 px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-extrabold tracking-tight"
        >
          Precision AI Evaluation &{" "}
          <span className="text-indigo-400">
            Multilingual Quality
          </span>{" "}
          Consulting
        </motion.h1>

        <p className="mt-8 text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
          Founder-led AI quality consulting supporting global platforms with
          structured search evaluation, multilingual annotation, and enterprise QA.
        </p>
      </section>

      {/* METRICS */}
      <section className="py-24 bg-gray-950 text-center">
        <div className="max-w-5xl mx-auto grid md:grid-cols-4 gap-10">

          <div>
            <h3 className="text-4xl font-extrabold text-indigo-400">
              <Counter target={5} />+
            </h3>
            <p className="text-gray-400 mt-2">Years Experience</p>
          </div>

          <div>
            <h3 className="text-4xl font-extrabold text-indigo-400">
              <Counter target={4} />
            </h3>
            <p className="text-gray-400 mt-2">Languages Supported</p>
          </div>

          <div>
            <h3 className="text-4xl font-extrabold text-indigo-400">
              <Counter target={10} />+
            </h3>
            <p className="text-gray-400 mt-2">AI Programs Contributed</p>
          </div>

          <div>
            <h3 className="text-4xl font-extrabold text-indigo-400">
              <Counter target={100} />%
            </h3>
            <p className="text-gray-400 mt-2">Structured Methodology</p>
          </div>

        </div>
      </section>

      {/* WHY TRUSTMETRICS */}
      <section className="py-28 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold tracking-tight mb-16">
            Why TrustMetrics
          </h2>

          <div className="grid md:grid-cols-3 gap-12 text-left">

            <div>
              <h3 className="text-xl font-semibold mb-4">
                Founder-Led Precision
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Direct involvement in all evaluation workflows.
                No outsourcing layers.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">
                Multilingual Depth
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Cross-locale validation expertise ensuring consistent
                AI performance across languages.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">
                Structured Reporting
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Measurable evaluation insights with documented
                benchmarking methodology.
              </p>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
