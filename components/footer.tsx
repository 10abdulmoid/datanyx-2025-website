import Image from "next/image";
import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-black/80 border-t border-gray-800 py-12 mt-16">
      {/* Subtle space background */}
      <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 text-white">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10 text-center md:text-left">
          {/* Logo and About */}
          <div className="md:col-span-2">
            <div className="flex justify-center md:justify-start mb-4">
              <Image
                src="/assets/datanyx25logo.png"
                width={180}
                height={80}
                alt="DATANYX Logo"
                priority
              />
            </div>
            <p
              className="text-gray-300 mb-4 leading-relaxed max-w-md mx-auto md:mx-0"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Telangana&apos;s flagship 24-hour datathon returns — bigger, bolder,
              and more transformative. Dive into the world of data science, AI,
              and cloud innovation where ideas become impact. Collaborate and
              create breakthroughs that shape the next era of technology — this
              is DATANYX&apos;25.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="text-lg font-semibold mb-4"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Quick Links
            </h4>
            <ul className="space-y-2">
              {[
                "About",
                "Domains",
                "Schedule",
                "Prizes",
                "Sponsors",
                "FAQs",
              ].map((section) => (
                <li key={section}>
                  <a
                    href={`#${section.toLowerCase()}`}
                    className="text-gray-400 hover:text-white transition-colors"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    {section}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4
              className="text-lg font-semibold mb-4"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Contact
            </h4>
            <div
              className="space-y-3 text-gray-400"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              <div>datanyx2k25@gmail.com</div>
              <div>
                <p>Vahaj: +91 8897022603</p>
                <p>Nameera: +91 8125134015</p>
              </div>

              {/* Manual and Campus Location */}
              <div>
                <div className="font-medium text-white">Event Venue</div>
                <div>Muffakham Jah College of Engineering &amp; Tech</div>
                <div>Mount Pleasant, 8-2-249, Venkateshwara Hills</div>
                <div>Banjara Hills, Hyderabad, India</div>
                <div className="mt-2">
                  <Link
                    href="https://www.google.com/maps/search/?api=1&query=MJCET+Banjara+Hills+Hyderabad+Telangana+500034"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    View on Google Maps →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Developer Section */}
        <div className="mt-6 flex flex-col md:flex-row items-center justify-center gap-4 text-center">
          <style jsx>{`
            .glow-text {
              color: #fff;
              text-shadow: 0 0 8px #fff, 0 0 15px #ffffff, 0 0 25px #ccc,
                0 0 40px #ffffff;
              animation: glowPulse 2s infinite ease-in-out alternate;
            }
            @keyframes glowPulse {
              from {
                text-shadow: 0 0 8px #fff, 0 0 15px #ccc;
              }
              to {
                text-shadow: 0 0 20px #fff, 0 0 35px #ffffff;
              }
            }
          `}</style>

          {/* Developer card - horizontal on desktop, vertical on mobile */}
          <div
            className="flex flex-col md:flex-row items-center gap-3 md:gap-4"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            {/* On mobile (vertical): label on top, image below */}
            {/* On desktop (horizontal): image left, label right */}
            <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-white ring-1 ring-white/10 shadow-md flex-shrink-0 order-2 md:order-1">
              <Image
                src="/osman.JPG"
                alt="Mohammed Osman"
                width={56}
                height={56}
                className="h-full w-full object-cover object-top"
              />
            </div>
            <div className="flex flex-col items-center md:items-start order-1 md:order-2">
              <span className="text-white text-sm font-semibold">Mohammed Osman</span>
              <span className="text-gray-400 text-xs uppercase tracking-wider">Developer</span>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 pt-6 mt-10 flex flex-col md:flex-row justify-between items-center gap-4 text-center">
          <div
            className="text-gray-400 text-sm"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            © {currentYear} Datanyx. All rights reserved.
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <Link
              href="/coc"
              target="_blank"
              className="text-gray-400 hover:text-white transition-colors"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Code of Conduct
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
