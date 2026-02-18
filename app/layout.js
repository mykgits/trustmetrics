"use client";

import "./globals.css";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function RootLayout({ children }) {
  const [open, setOpen] = useState(false);

  return (
    <html lang="en">
      <body className="bg-black text-white">

        {/* NAVBAR */}
        <header className="fixed top-0 w-full bg-black/90 backdrop-blur border-b border-gray-800 z-50">
          <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

            <Link href="/" className="text-xl font-bold tracking-wide">
              TrustMetrics
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex gap-8 text-sm text-gray-300">
              <Link href="/services" className="hover:text-white transition">Services</Link>
              <Link href="/case-studies" className="hover:text-white transition">Case Studies</Link>
              <Link href="/about" className="hover:text-white transition">About</Link>
              <Link href="/blog" className="hover:text-white transition">Blog</Link>
              <Link href="/contact" className="hover:text-white transition">Contact</Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setOpen(!open)}
            >
              {open ? <X size={28} /> : <Menu size={28} />}
            </button>

          </div>

          {/* Mobile Dropdown */}
          {open && (
            <div className="md:hidden bg-black border-t border-gray-800 px-6 pb-6 space-y-4 text-gray-300">
              <Link href="/services" onClick={() => setOpen(false)} className="block hover:text-white">Services</Link>
              <Link href="/case-studies" onClick={() => setOpen(false)} className="block hover:text-white">Case Studies</Link>
              <Link href="/about" onClick={() => setOpen(false)} className="block hover:text-white">About</Link>
              <Link href="/blog" onClick={() => setOpen(false)} className="block hover:text-white">Blog</Link>
              <Link href="/contact" onClick={() => setOpen(false)} className="block hover:text-white">Contact</Link>
            </div>
          )}

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
