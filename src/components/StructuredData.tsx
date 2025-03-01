// src/components/StructuredData.tsx
export default function StructuredData() {
  const conferenceData = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: "SYNTACS 2025",
    description:
      "International Conference on Systems, Networks, and Technical Applications in Computer Science",
    startDate: "2025-03-08T09:00",
    endDate: "2025-03-08T18:45",
    location: {
      "@type": "Place",
      name: "Indian Institute of Technology Ropar",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Rupnagar",
        addressLocality: "Punjab",
        postalCode: "140001",
        addressCountry: "IN",
      },
    },
    organizer: {
      "@type": "Organization",
      name: "Department of Computer Science & Engineering, IIT Ropar",
      url: "https://cse.iitrpr.ac.in/",
    },
    offers: {
      "@type": "Offer",
      url: "https://syntacs2025.site/registration",
      price: "0",
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
    },
    performer: [
      {
        "@type": "Person",
        name: "Dr. Debabrata Nayak",
        jobTitle: "Director, PwC India",
      },
      {
        "@type": "Person",
        name: "Prof. Yogesh Simmhan",
        jobTitle: "Professor, IISc Bangalore",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(conferenceData) }}
    />
  );
}
