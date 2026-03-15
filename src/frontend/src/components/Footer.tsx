import { Heart, MapPin, Phone } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();
  const caffeineUrl = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`;

  return (
    <footer className="bg-navy text-cream/80">
      {/* Gold top bar */}
      <div className="gold-divider" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <img
              src="/assets/generated/bunty-garment-logo-transparent.dim_400x150.png"
              alt="Bunty Garment"
              className="h-12 w-auto object-contain mb-4 brightness-0 invert opacity-90"
            />
            <p className="font-body text-sm text-cream/60 leading-relaxed max-w-xs">
              Noida's most trusted garment store, offering premium quality
              fabrics and timeless styles for every occasion.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-display text-base font-bold text-gold mb-4 tracking-wide">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {["Home", "Collections", "About", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="font-body text-sm text-cream/60 hover:text-gold transition-colors"
                    data-ocid="footer.link"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="font-display text-base font-bold text-gold mb-4 tracking-wide">
              Contact
            </h4>
            <div className="space-y-3">
              <a
                href="tel:8130865401"
                className="flex items-center gap-2 text-cream/60 hover:text-gold transition-colors font-body text-sm"
                data-ocid="footer.link"
              >
                <Phone className="w-4 h-4 text-gold/70" />
                8130865401
              </a>
              <div className="flex items-start gap-2 text-cream/60 font-body text-sm">
                <MapPin className="w-4 h-4 text-gold/70 mt-0.5 flex-shrink-0" />
                <span>Noida, Uttar Pradesh, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-cream/40">
            © {year} Bunty Garment. All rights reserved.
          </p>
          <a
            href={caffeineUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-xs text-cream/40 hover:text-cream/70 transition-colors flex items-center gap-1"
          >
            Built with <Heart className="w-3 h-3 text-gold/60 mx-0.5" /> using
            caffeine.ai
          </a>
        </div>
      </div>
    </footer>
  );
}
