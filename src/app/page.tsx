import SectionOne from "@/components/About/SectionOne";
import SectionTwo from "@/components/About/SectionTwo";
// import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Header from "@/components/Header";

import { Metadata } from "next";
import SectionThree from "@/components/About/SectionThree";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Creatives & Developers Network",
  description: "This is Home for Startup Nextjs Template",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Features />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <Brands />
      {/* <Testimonials /> */}
      {/* <Pricing /> */}
      {/* <Blog /> */}
      <Contact />
      <Footer />
    </>
  );
}