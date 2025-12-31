import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";
import "./globals.css";

export const metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
  ),

  title: {
    default: "Neuro Clinic | Brain, Spine & Nerve Care",
    template: "%s | Neuro Clinic",
  },

  description:
    "Neuro Clinic provides expert neurological care including brain, spine and nerve disorders.",

  openGraph: {
    title: "Neuro Clinic | Advanced Neurological Care",
    description:
      "Expert neurological diagnosis and treatment for brain, spine and nerve disorders.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Neuro Clinic",
      },
    ],
    type: "website",
    locale: "en_IN",
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Header />
        <main className="pt-0">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
