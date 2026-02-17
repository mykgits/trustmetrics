export default function Services() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-32">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold mb-16">Services</h1>

        <div className="space-y-16 text-gray-400">

          <div>
            <h2 className="text-2xl text-white font-semibold mb-4">
              Search Quality Evaluation
            </h2>
            <p>
              Structured Needs Met and Page Quality assessment aligned with E-E-A-T
              frameworks. Multilingual query evaluation across Telugu, Tamil,
              Hindi, and English datasets.
            </p>
          </div>

          <div>
            <h2 className="text-2xl text-white font-semibold mb-4">
              Multilingual AI Annotation
            </h2>
            <p>
              High-precision transcription, OCR validation, and linguistic
              benchmarking across Indic languages for AI training datasets.
            </p>
          </div>

          <div>
            <h2 className="text-2xl text-white font-semibold mb-4">
              Media & Dubbing QA
            </h2>
            <p>
              LipSync review, subtitle validation, and broadcast-level
              multilingual quality compliance for AI media systems.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
