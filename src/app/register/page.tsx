"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export const metadata = {
  title: "Registration | SYNTACS 2025",
  description:
    "Register for SYNTACS 2025 - International Conference on Systems, Networks, and Technical Applications in Computer Science at IIT Ropar, taking place on March 8th, 2025.",
};

const FormLinkPage = () => {
  const router = useRouter();

  useEffect(() => {
    const formUrl = process.env.NEXT_PUBLIC_REGISTRATION_FORM_URL;
    if (formUrl) {
      router.push(formUrl);
    } else {
      console.error(
        "Registration form URL is not defined in environment variables"
      );
    }
  }, [router]);

  return null;
};

export default FormLinkPage;
