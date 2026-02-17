import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://trustmetricsai.vercel.app"),
  title: {
    default: "TrustMetrics | AI Evaluation & Multilingual Quality Consulting",
    template: "%s | TrustMetrics",
  },
  description:
    "Founder-led AI evaluation consulting specializing in search quality assessment, multilingual annotation, and media QA frameworks for global technology platforms.",
  keywords: [
    "AI evaluation consulting",
    "Search quality evaluation",
    "Multilingual AI annotation",
    "AI quality assurance",
    "E-E-A-T evaluation",
    "RWS AI projects",
  ],
  openGraph: {
    title: "TrustMetrics | AI Evaluation Consulting",
    description:
      "Precision AI evaluation and multilingual data quality consulting for global platforms.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">

        {/* NAVBAR */}
        <header className="fixed top-0 left-0 w-full bg-black/90 backdrop-blur border-b border-gray-800 z-50">
          <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            <a href="/" className="text-xl font-bold tracking-wide">
              TrustMetrics
            </a>

            <nav className="hidden md:flex gap-8 text-sm text-gray-300">
              <a href="/services" className="hover:text-white">Services</a>
              <a href="/case-studies" className="hover:text-white">Case Studies</a>
              <a href="/about" className="hover:text-white">About</a>
              <a href="/blog" className="hover:text-white">Blog</a>
              <a href="/contact" className="hover:text-white">Contact</a>
            </nav>
          </div>
        </header>

        {/* MAIN CONTENT */}
        <main className="pt-24">
          {children}
        </main>

        {/* FOOTER */}
        <footer className="text-center py-10 text-gray-500 border-t border-gray-800 mt-20">
          © {new Date().getFullYear()} TrustMetrics. All Rights Reserved.
        </footer>

      </body>
    </html>
  );
}
