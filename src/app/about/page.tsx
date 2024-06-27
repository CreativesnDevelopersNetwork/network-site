import AboutSectionOne from "@/components/About/SectionOne";
import AboutSectionTwo from "@/components/About/SectionTwo";
import AboutSectionThree from "@/components/About/SectionThree";
import Breadcrumb from "@/components/Common/BreadCrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "This is About Page for Startup Nextjs Template",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About"
        description="Here we meet the backbone of it all."
      />
      <AboutSectionOne />
      <AboutSectionTwo />
      <AboutSectionThree />
    </>
  );
};

export default AboutPage;