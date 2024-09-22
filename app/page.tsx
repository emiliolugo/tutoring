import AboutPage from "@/components/About";
import ContactPage from "@/components/Contact";
import LandingPage from "@/components/Landing";
import Navbar from "@/components/Navbar";
import PricingPage from "@/components/Pricing";
import ServicesPage from "@/components/Services";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between overflow-x-hidden">
      <div className="min-h-screen bg-gray-100 text-gray-800">
        <Navbar />
      <LandingPage />

      <AboutPage />

      <ServicesPage />

      <PricingPage />

      <ContactPage />

      {/* Footer */}
      <footer className="bg-blue-600 text-white text-center py-4">
        <p>&copy; {new Date().getFullYear()} LeTutor. All rights reserved.</p>
      </footer>
    </div>
    </main>
  );
}
