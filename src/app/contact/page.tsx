import Breadcrumb from "@/components/Common/BreadCrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page",
  description: "This is the Contact Page",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      
{/**
       * <Breadcrumb
        pageName="Contact Page"
        description=""
      />
       * 
      */}
      <Contact />
    </>
  );
};

export default ContactPage;