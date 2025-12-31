import Banner from "@/components/home/Banner";
import HeroIntro from "@/components/home/HeroIntro";
import ServicesSection from "@/components/home/ServicesSection";
import DoctorProfileCard  from "@/components/home/DoctorProfileCard ";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import OurAchievements from "@/components/home/OurAchievements";
import Testimonials from "@/components/home/Testimonials";
import ServicesSlider from "@/components/home/ServicesSlider";
import ContactUs from "@/components/home/ContactUs";
import FAQSection from "@/components/home/FAQSection";


export const metadata = {
  title: "Best Neuro Clinic in Zirakpur | Brain & Nerve Specialist",
  description:
    "Looking for the best Neuro Clinic in Zirakpur? Get expert treatment for brain, spine and nerve disorders with advanced neurological care and diagnosis.",

  keywords: [
    "Neuro Clinic Zirakpur",
    "Neurologist in Zirakpur",
    "Brain Specialist Zirakpur",
    "Nerve Doctor Zirakpur",
    "Spine Specialist Zirakpur",
    "Neurology Hospital Zirakpur",
  ],

  openGraph: {
    title: "Neuro Clinic in Zirakpur | Advanced Neurological Care",
    description:
      "Trusted Neuro Clinic in Zirakpur offering expert brain, spine and nerve treatments with modern diagnostics.",
    url: "https://www.neuroclinic.com",
    siteName: "Neuro Clinic",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Neuro Clinic Zirakpur",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Neuro Clinic in Zirakpur | Brain & Nerve Care",
    description:
      "Expert neurological treatment in Zirakpur for brain, spine and nerve disorders.",
    images: ["/og-image.png"],
  },
};

export default function HomePage() {
  return (
    <>
      <Banner />
      <HeroIntro />
      <ServicesSection />
      <DoctorProfileCard  />
      <OurAchievements />
      <WhyChooseUs />
      
      <ServicesSlider />
      <Testimonials />
      
      <ContactUs />
      <FAQSection />
    </>
  );
}
