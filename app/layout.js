import "./globals.css";
import Link from "next/link";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">

        <header className="fixed top-0 w-full bg-black/90 backdrop-blur border-b border-gray-800 z-50">
          <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            <Link href="/" className="text-xl font-bold tracking-wide">
              TrustMetrics
            </Link>

            <nav className="hidden md:flex gap-8 text-sm text-gray-300">
              <Link href="/services" className="hover:text-white transition">Services</Link>
              <Link href="/case-studies" className="hover:text-white transition">Case Studies</Link>
              <Link href="/about" className="hover:text-white transition">About</Link>
              <Link href="/blog" className="hover:text-white transition">Blog</Link>
              <Link href="/contact" className="hover:text-white transition">Contact</Link>
            </nav>
          </div>
        </header>

        <main className="pt-24">
          {children}
        </main>

        <footer className="text-center py-10 text-gray-500 border-t border-gray-800 mt-20">
          © {new Date().getFullYear()} TrustMetrics. All Rights Reserved.
        </footer>

      </body>
    </html>
  );
}
