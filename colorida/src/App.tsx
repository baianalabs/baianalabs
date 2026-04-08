/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Efficiency from "./components/Efficiency";
import Stats from "./components/Stats";
import Testimonials from "./components/Testimonials";
import ContactForm from "./components/ContactForm";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import Logo from "./components/Logo";

export default function App() {
  return (
    <div className="min-h-screen bg-surface bg-antigravity-gradient relative">
      <Logo isWatermark />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Features />
        <Stats />
        <Efficiency />
        <Testimonials />
        <ContactForm />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
