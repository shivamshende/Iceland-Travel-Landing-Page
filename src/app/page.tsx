'use client';
import HeroSection from "@/components/HeroSection";
import AboutUsSection from "@/components/AboutUsSection";
import DestinationsSection from "@/components/DestinationsSection";
import GalleriesSection from "@/components/GalleriesSection";
import ReservationSection from "@/components/ReservationSection";
import PackagesSection from "@/components/PackagesSection";
import LandingPage from "@/components/LandingPage";
import "./globals.css";
export default function Home() {
  return (

    <>
    <div>
      <HeroSection />
    </div>

    {/* Other sections */}
    <AboutUsSection />
    <DestinationsSection />
    <GalleriesSection />
    <ReservationSection />
    <PackagesSection />
    <LandingPage />
  </>
  );
}
