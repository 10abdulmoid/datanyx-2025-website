import type { Metadata } from "next";
import Background from "@/components/ui/background";
import "./globals.css";
import { ReactLenis } from "@/utils/lenis";
import { SmoothCursor } from "@/components/ui/cursor";
import { poppins } from "@/lib/fonts";

export const viewport = {
  themeColor: "#1E3A8A",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.datanyx.in"),
  applicationName: "Datanyx 2.0",

  title: {
    default: "Datanyx 2.0 | Telangana's Premier 24-Hour National Datathon",
    template: "%s | Datanyx 2.0"
  },
  
  description:
    "Join Datanyx 2.0, India's premier national-level 24-hour datathon organized by IEEE SMC MJCET & AWS Cloud Club MJCET. Compete with undergraduate teams, solve real-world problems using data science, ML & AI. Prizes worth ₹XX,XXX!",
  
  keywords: [
    "Datanyx 2.0",
    "Datanyx 2025",
    "datathon India 2025",
    "24-hour datathon",
    "national datathon India",
    "data science competition",
    "machine learning hackathon",
    "AI competition India",
    "IEEE SMC MJCET",
    "AWS Cloud Club MJCET",
    "Telangana datathon",
    "Hyderabad datathon 2025",
    "student datathon",
    "data analytics competition",
    "undergraduate hackathon India",
    "MJCET events",
  ],
  
  authors: [
    { name: "IEEE SMC MJCET", url: "https://www.datanyx.in" },
    { name: "AWS Cloud Club MJCET", url: "https://www.datanyx.in" },
  ],
  
  creator: "IEEE SMC MJCET & AWS Cloud Club MJCET",
  publisher: "IEEE SMC MJCET & AWS Cloud Club MJCET",
  
  openGraph: {
    title: "Datanyx 2.0 | India's Premier 24-Hour National Datathon 2025",
    description:
      "🚀 24 hours of data-driven innovation! Solve real-world problems with AI & ML. Teams of 2-4 | National-level competition | Amazing prizes & certificates | Register now!",
    url: "https://www.datanyx.in",
    siteName: "Datanyx 2.0",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "/assets/datanyx25logo.png",
        width: 1200,
        height: 630,
        alt: "Datanyx 2.0 - National 24-Hour Datathon",
        type: "image/png",
      },
    ],
  },
  
  twitter: {
    card: "summary_large_image",
    site: "@DatanyxEvent",
    creator: "@IEEESMCMJCET",
    title: "Datanyx 2.0 | National Datathon - Register Your Team Now! 🚀",
    description:
      "24-hour national datathon | Data Science, ML & AI challenges | Teams of 2-4 | Prizes, mentorship & certificates | Organized by IEEE SMC MJCET & AWS Cloud Club",
    images: ["/assets/datanyx25logo.png"],
  },
  
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  
  alternates: {
    canonical: "https://www.datanyx.in",
  },
  

  other: {
    "event:type": "datathon",
    "event:duration": "24 hours",
    "event:registration": "open",
    "event:level": "national",
    "event:team-size": "2-4 members",
    "og:image:secure_url": "https://www.datanyx.in/assets/datanyx25logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <style
          dangerouslySetInnerHTML={{
            __html: `
              /* Black background immediately */
              html, body { background:#000; }
              /* Hide all content until we flag 'mounted' */
              html:not([data-mounted="true"]) body > * {
                opacity: 0 !important;
              }
              html[data-mounted="true"] body > * {
                opacity: 1;
                transition: opacity 200ms ease;
              }
            `,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Mark as mounted ASAP (runs before React hydration)
              document.documentElement.setAttribute('data-mounted','true');
            `,
          }}
        />
        <link rel="icon" type="image/png" href="/favicon.png" sizes="32x32" />
      </head>
      <body className={`relative ${poppins.className}`}>
        <Background />
        <SmoothCursor
          size={17}
          color="black"
          showTrail={false}
          trailLength={8}
          magneticDistance={60}
          magneticElements="[data-magnetic]"
          springConfig={{
            damping: 50,
            stiffness: 450,
            mass: 0.8,
            restDelta: 0.001,
          }}
        />
        <ReactLenis root>{children}</ReactLenis>
      </body>
    </html>
  );
}
