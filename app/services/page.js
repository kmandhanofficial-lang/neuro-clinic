import { Suspense } from "react";
import ServicesClient from "./ServicesClient";

export const metadata = {
  title: "Our Services | Your Company Name",
  description: "Explore our professional services designed to meet your needs.",
  openGraph: {
    title: "Our Services | Your Company Name",
    description: "Explore our professional services designed to meet your needs.",
    url: "https://yourwebsite.com/services",
    images: [
      {
        url: "/images/services-og.jpg",
        width: 1200,
        height: 630,
        alt: "Our Services",
      },
    ],
  },
};

export default function ServicesPage() {
  return (
    <Suspense fallback={null}>
      <ServicesClient />
    </Suspense>
  );
}
