"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

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
