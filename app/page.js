"use client";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">

      {/* NAVBAR */}
      <nav className="fixed w-full bg-black/80 backdrop-blur border-b border-gray-800 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="/" className="text-xl font-bold tracking-wide">
            TrustMetrics
          </a>

          <div className="hidden md:flex gap-8 text-sm text-gray-300">
            <a href="/services" className="hover:text-white">Services</a>
            <a href="/case-studies" className="hover:text-white">Case Studies</a>
            <a href="/about" className="hover:text-white">About</a>
            <a href="/blog" className="hover:text-white">Blog</a>
            <a href="/contact" className="hover:text-white">Contact</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="pt-40 pb-32 px-6 text-center">
        <h1 className="text-5xl md:text-6xl font-bold leading-tight max-w-4xl mx-auto">
          Precision AI Evaluation & Multilingual Data Quality Consulting
        </h1>

        <p className="mt-6 text-gray-400 max-w-3xl mx-auto text-lg">
          Founder-led AI quality consulting supporting global technology
          platforms with structured search evaluation, multilingual annotation,
          and media quality assurance frameworks.
        </p>

        <div className="mt-10 flex justify-center gap-6">
          <a
            href="/services"
            className="bg-white text-black px-8 py-4 rounded-lg font-semibold"
          >
            Explore Services
          </a>

          <a
            href="/contact"
            className="border border-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-black transition"
          >
            Request Consultation
          </a>
        </div>
      </section>

      {/* POSITIONING STRIP */}
      <section className="py-16 bg-gray-950 text-center px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-gray-400 text-lg leading-relaxed">
            TrustMetrics is a premium specialist AI evaluation initiative led
            by Krishna Kishore Pisipati, delivering measurable quality
            benchmarking across search systems, multilingual datasets, and
            AI-driven media workflows.
          </p>
        </div>
      </section>

      {/* CORE CAPABILITIES SUMMARY */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-semibold mb-16">
            Core Capabilities
          </h2>

          <div className="grid md:grid-cols-3 gap-12 text-gray-400">

            <div>
              <h3 className="text-xl text-white font-semibold mb-4">
                Search Quality Evaluation
              </h3>
              <p>
                Structured Needs Met and Page Quality analysis aligned with
                enterprise E-E-A-T frameworks.
              </p>
            </div>

            <div>
              <h3 className="text-xl text-white font-semibold mb-4">
                Multilingual AI Annotation
              </h3>
              <p>
                High-precision linguistic validation across Telugu, Tamil,
                Hindi, and English datasets.
              </p>
            </div>

            <div>
              <h3 className="text-xl text-white font-semibold mb-4">
                Media & Dubbing QA
              </h3>
              <p>
                LipSync, subtitle validation, and structured broadcast-level
                multilingual QA workflows.
              </p>
            </div>

          </div>

          <div className="mt-16">
            <a
              href="/services"
              className="border border-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-black transition"
            >
              View Detailed Services →
            </a>
          </div>
        </div>
      </section>

      {/* EXPERIENCE HIGHLIGHT */}
      <section className="py-24 bg-gray-950 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-semibold mb-8">
            Global Evaluation Experience
          </h2>

          <p className="text-gray-400 leading-relaxed text-lg">
            Experience contributing to structured AI evaluation initiatives
            including RWS / TrainAI programs, multilingual transcription
            workflows, dubbing quality validation, and structured search
            relevance benchmarking across global platforms.
          </p>

          <div className="mt-10">
            <a
              href="/about"
              className="border border-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-black transition"
            >
              Learn More About TrustMetrics →
            </a>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-32 px-6 text-center">
        <h2 className="text-4xl font-semibold mb-6">
          Ready to Strengthen Your AI Quality Framework?
        </h2>

        <p className="text-gray-400 mb-10">
          Let’s discuss how structured evaluation methodologies can enhance
          your platform’s relevance and multilingual performance.
        </p>

        <a
          href="/contact"
          className="bg-white text-black px-10 py-5 rounded-lg font-semibold"
        >
          Start a Conversation
        </a>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-10 text-gray-500 border-t border-gray-800">
        © {new Date().getFullYear()} TrustMetrics. All Rights Reserved.
      </footer>

    </div>
  );
}
