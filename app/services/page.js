export default function Services() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-32">

      <div className="max-w-6xl mx-auto">

        <h1 className="text-5xl font-extrabold tracking-tight mb-16">
          AI Evaluation Services
        </h1>

        <div className="space-y-20">

          {/* SERVICE 1 */}
          <div className="p-10 bg-gray-950 rounded-2xl border border-gray-800">
            <h2 className="text-2xl font-semibold mb-6">
              Search Quality Evaluation
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              Structured search relevance assessment aligned with enterprise
              E-E-A-T frameworks and multilingual intent analysis models.
            </p>

            <ul className="text-gray-500 list-disc ml-6 space-y-2">
              <li>Needs Met scoring & intent validation</li>
              <li>Page Quality benchmarking</li>
              <li>Relevance consistency auditing</li>
              <li>Evaluation guideline compliance</li>
              <li>Structured reporting & performance documentation</li>
            </ul>
          </div>

          {/* SERVICE 2 */}
          <div className="p-10 bg-gray-950 rounded-2xl border border-gray-800">
            <h2 className="text-2xl font-semibold mb-6">
              Multilingual AI Annotation
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              High-precision linguistic validation and structured annotation
              workflows supporting AI training datasets across Indic languages.
            </p>

            <ul className="text-gray-500 list-disc ml-6 space-y-2">
              <li>i18n transcription validation</li>
              <li>OCR text verification</li>
              <li>Cross-locale linguistic benchmarking</li>
              <li>Dataset quality audits</li>
              <li>Annotation consistency checks</li>
            </ul>
          </div>

          {/* SERVICE 3 */}
          <div className="p-10 bg-gray-950 rounded-2xl border border-gray-800">
            <h2 className="text-2xl font-semibold mb-6">
              Media & Dubbing Quality Assurance
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              Broadcast-level multilingual quality control for AI-driven
              media localization and dubbing systems.
            </p>

            <ul className="text-gray-500 list-disc ml-6 space-y-2">
              <li>LipSync accuracy validation</li>
              <li>Subtitle alignment verification</li>
              <li>SBS / ACR evaluation</li>
              <li>Language compliance review</li>
              <li>Multilingual audio-text synchronization</li>
            </ul>
          </div>

        </div>

      </div>

    </div>
  );
}
