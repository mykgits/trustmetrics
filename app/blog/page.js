export default function Blog() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-32">
      <div className="max-w-6xl mx-auto">

        <h1 className="text-5xl font-extrabold tracking-tight mb-16">
          AI Evaluation Insights
        </h1>

        <div className="grid md:grid-cols-2 gap-12">

          <div className="p-8 bg-gray-950 rounded-2xl border border-gray-800 hover:border-indigo-500/40 transition">
            <h3 className="text-xl font-semibold mb-4">
              Improving AI Search Relevance
            </h3>
            <p className="text-gray-400">
              Understanding Needs Met frameworks and structured intent
              validation in multilingual search ecosystems.
            </p>
          </div>

          <div className="p-8 bg-gray-950 rounded-2xl border border-gray-800 hover:border-indigo-500/40 transition">
            <h3 className="text-xl font-semibold mb-4">
              Multilingual AI Challenges
            </h3>
            <p className="text-gray-400">
              Cross-locale validation complexities and structured
              annotation discipline in AI systems.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}
