import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-card/30 transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Col */}
          <div className="md:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <span className="font-heading text-xl font-extrabold tracking-tight">
                Nuansa<span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Labs</span>
              </span>
            </Link>
            <p className="text-sm text-muted max-w-sm mb-4">
              Nuansa Labs adalah studio pengembang aplikasi mobile, web, dan sistem automasi digital cerdas. Kami berdedikasi menciptakan solusi berkualitas tinggi dan ramah pengguna untuk bisnis Anda.
            </p>
          </div>

          {/* Nav Links Col */}
          <div>
            <h4 className="font-heading text-sm font-semibold mb-4 tracking-wider uppercase text-foreground">
              Navigasi
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/#home" className="text-sm text-muted hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#products" className="text-sm text-muted hover:text-primary transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/#services" className="text-sm text-muted hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/#about" className="text-sm text-muted hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="text-sm text-muted hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Col */}
          <div>
            <h4 className="font-heading text-sm font-semibold mb-4 tracking-wider uppercase text-foreground">
              Hukum & Kebijakan
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-sm text-muted hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-muted hover:text-primary transition-colors">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted text-center md:text-left">
            &copy; 2026 Nuansa Labs. All rights reserved. | Google Play Verified Developer Platform.
          </p>
          <div className="text-xs text-muted text-center md:text-right">
            Email: abdulhamid55255@gmail.com
          </div>
        </div>
      </div>
    </footer>
  );
}
