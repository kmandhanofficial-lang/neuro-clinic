


import { Suspense } from "react";
import ContactClient from "./ContactClient";

// Metadata for SEO
export const metadata = {
  title: "Contact Us | Your Company Name",
  description: "Get in touch with us for queries, support, or service requests.",
  openGraph: {
    title: "Contact Us | Your Company Name",
    description: "Get in touch with us for queries, support, or service requests.",
    url: "https://yourwebsite.com/contact",
    images: [
      {
        url: "/images/contact-og.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Us",
      },
    ],
  },
};

export default function ContactPage() {
  return (
    <Suspense fallback={null}>
      <ContactClient />
    </Suspense>
  );
}
