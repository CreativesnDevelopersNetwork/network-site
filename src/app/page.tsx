import SectionOne from "@/components/About/SectionOne";
import SectionTwo from "@/components/About/SectionTwo";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
// import Video from "@/components/Video";
import { Metadata } from "next";

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
      <Brands />
      <SectionOne />
      <SectionTwo />
      {/* <Testimonials /> */}
      {/* <Pricing /> */}
      <Blog />
      <Contact />
    </>
  );
}