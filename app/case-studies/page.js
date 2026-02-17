export const metadata = {
  title: "Case Studies",
  description:
    "Structured AI search relevance optimization and multilingual media quality validation case studies.",
};


export default function CaseStudies() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-32">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-bold mb-16">Case Studies</h1>

        <div className="space-y-16 text-gray-400">

          <div>
            <h2 className="text-2xl text-white font-semibold mb-4">
              AI Search Relevance Optimization
            </h2>
            <p>
              Challenge: Inconsistent multilingual query relevance.
              Approach: Structured Needs Met scoring and intent gap analysis.
              Outcome: Improved evaluation consistency and measurable
              relevance accuracy improvement.
            </p>
          </div>

          <div>
            <h2 className="text-2xl text-white font-semibold mb-4">
              Multilingual Dubbing Quality Validation
            </h2>
            <p>
              Executed structured LipSync and subtitle validation workflows
              across four Indic languages ensuring compliance and linguistic accuracy.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}

