import Link from "next/link";

export default function CaseStudies() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-32">

      <div className="max-w-6xl mx-auto">

        <h1 className="text-5xl font-extrabold tracking-tight mb-16">
          Case Studies
        </h1>

        <div className="grid md:grid-cols-2 gap-12">

          {/* CASE STUDY CARD */}
          <Link
            href="/case-studies/search-relevance-optimization"
            className="p-8 bg-gray-950 rounded-2xl border border-gray-800 hover:border-indigo-500/40 transition block"
          >
            <h3 className="text-xl font-semibold mb-4">
              Multilingual Search Relevance Optimization
            </h3>
            <p className="text-gray-400">
              Structured Needs Met evaluation and cross-locale benchmarking
              to improve AI search consistency and accuracy.
            </p>
          </Link>

        </div>

      </div>

    </div>
  );
}
