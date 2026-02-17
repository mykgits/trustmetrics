"use client";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">

      {/* NAVBAR */}
      <nav className="fixed w-full bg-black/80 backdrop-blur border-b border-gray-800 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold tracking-wide">
            TrustMetrics
          </h1>
          <div className="hidden md:flex gap-8 text-sm text-gray-300">
            <a href="#expertise" className="hover:text-white">Expertise</a>
            <a href="#experience" className="hover:text-white">Experience</a>
            <a href="#process" className="hover:text-white">Process</a>
            <a href="#founder" className="hover:text-white">Founder</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="pt-40 pb-28 px-6 text-center">
        <h1 className="text-5xl md:text-6xl font-bold leading-tight max-w-4xl mx-auto">
          Precision AI Evaluation & Multilingual Data Quality for Global Platforms
        </h1>
        <p className="mt-6 text-gray-400 max-w-3xl mx-auto text-lg">
          Founder-led AI quality consulting delivering structured evaluation
          frameworks for search systems, media localization, and multilingual
          training data validation.
        </p>
        <div className="mt-10">
          <a
            href="#contact"
            className="bg-white text-black px-8 py-4 rounded-xl font-semibold"
          >
            Request Consultation
          </a>
        </div>
      </section>

      {/* WHO WE SUPPORT */}
      <section className="py-20 bg-gray-950 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-10">
            Supporting Global AI & Media Platforms
          </h2>
          <div className="grid md:grid-cols-2 gap-6 text-gray-400 text-left">
            <ul className="space-y-3">
              <li>• AI Search & Recommendation Platforms</li>
              <li>• Large Language Model Training Programs</li>
              <li>• Multilingual AI Product Development</li>
            </ul>
            <ul className="space-y-3">
              <li>• Media Localization & Dubbing QA Teams</li>
              <li>• Global Evaluation Vendors (including RWS projects)</li>
              <li>• Structured AI Quality Benchmarking Initiatives</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CORE EXPERTISE */}
      <section id="expertise" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-semibold mb-16 text-center">
            Core Expertise
          </h2>

          <div className="grid md:grid-cols-2 gap-12">

            <div>
              <h3 className="text-xl font-semibold mb-4">
                Search Quality Evaluation
              </h3>
              <p className="text-gray-400">
                Structured Needs Met and Page Quality assessment aligned with
                E-E-A-T frameworks. Experience evaluating multilingual queries
                to improve search relevance and user satisfaction metrics.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">
                Multilingual AI Annotation
              </h3>
              <p className="text-gray-400">
                High-precision transcription, OCR validation, and cross-locale
                linguistic evaluation across Telugu, Tamil, Hindi, and English datasets.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">
                Dubbing & Media Quality Assurance
              </h3>
              <p className="text-gray-400">
                LipSync review, subtitle validation, SBS/ACR evaluation and
                broadcast-level compliance testing for AI media workflows.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">
                Evaluation Framework Design
              </h3>
              <p className="text-gray-400">
                Process-driven quality scoring models, structured audit reporting,
                and performance benchmarking frameworks.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="py-24 bg-gray-950 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-semibold mb-10 text-center">
            Professional Experience
          </h2>

          <p className="text-gray-400 leading-relaxed text-lg text-center">
            Founder Krishna Kishore Pisipati has contributed to multiple AI
            evaluation and multilingual QA initiatives including structured
            search quality rating programs under RWS / TrainAI, dubbing and
            LipSync evaluation for Indic language projects, i18n transcription
            validation workflows, and AI content compliance assessments.
          </p>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="py-24 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-semibold mb-16">
            Our Evaluation Process
          </h2>

          <div className="grid md:grid-cols-5 gap-8 text-gray-400">
            <div>
              <h4 className="font-semibold text-white mb-2">1. Requirement Analysis</h4>
              <p>Understand scope, data types, and evaluation goals.</p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-2">2. Framework Definition</h4>
              <p>Define structured scoring methodology.</p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-2">3. Multi-layer Evaluation</h4>
              <p>Systematic linguistic and quality validation.</p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-2">4. Reporting</h4>
              <p>Detailed quality insights and benchmark metrics.</p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-2">5. Optimization Loop</h4>
              <p>Continuous improvement recommendations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FOUNDER */}
      <section id="founder" className="py-24 bg-gray-950 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-semibold mb-8">
            Founder
          </h2>

          <h3 className="text-xl font-semibold mb-4">
            Krishna Kishore Pisipati
          </h3>

          <p className="text-gray-400 leading-relaxed">
            Computer Science Engineer and AI Search Quality Specialist with over
            five years of experience contributing to global AI evaluation
            initiatives. Specializing in structured search relevance auditing,
            multilingual linguistic validation, and performance-driven quality
            benchmarking.
          </p>

          <p className="text-gray-400 mt-6 leading-relaxed">
            TrustMetrics was founded to deliver precision-driven AI evaluation
            support to global technology platforms seeking structured,
            measurable, and multilingual quality insights.
          </p>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 px-6 text-center">
        <h2 className="text-4xl font-semibold mb-10">
          Contact
        </h2>

        <p className="text-gray-400 mb-10">
          Ready to improve your AI evaluation accuracy? Let’s discuss your requirements.
        </p>

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
              alert("Something went wrong.");
            }
          }}
          className="max-w-xl mx-auto space-y-6"
        >
          <input
            name="name"
            required
            placeholder="Your Name"
            className="w-full p-4 rounded-lg bg-gray-900 border border-gray-700"
          />
          <input
            name="email"
            type="email"
            required
            placeholder="Your Email"
            className="w-full p-4 rounded-lg bg-gray-900 border border-gray-700"
          />
          <textarea
            name="message"
            required
            placeholder="Your Message"
            rows="5"
            className="w-full p-4 rounded-lg bg-gray-900 border border-gray-700"
          ></textarea>

          <button className="bg-white text-black px-8 py-4 rounded-lg font-semibold">
            Send Message
          </button>
        </form>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-10 text-gray-500 border-t border-gray-800">
        © {new Date().getFullYear()} TrustMetrics. All Rights Reserved.
      </footer>

    </div>
  );
}
