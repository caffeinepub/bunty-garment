import { Button } from "@/components/ui/button";
import { ChevronDown, Phone, Scissors, Shirt } from "lucide-react";
import { motion } from "motion/react";

export default function Hero() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('/assets/generated/bunty-garment-hero.dim_1400x700.jpg')",
        }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-navy/75" />
      <div className="absolute inset-0 bg-gradient-to-b from-maroon/40 via-transparent to-navy/60" />

      {/* Decorative diagonal pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            oklch(0.72 0.14 72) 0px,
            oklch(0.72 0.14 72) 1px,
            transparent 1px,
            transparent 20px
          )`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center pt-24">
        {/* Ornament */}
        <motion.div
          className="flex items-center justify-center gap-4 mb-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="h-px w-16 bg-gold" />
          <span className="text-gold text-sm font-body tracking-[0.3em] uppercase">
            Since 2005
          </span>
          <div className="h-px w-16 bg-gold" />
        </motion.div>

        {/* Main heading */}
        <motion.h1
          className="font-display text-5xl sm:text-7xl lg:text-8xl font-bold text-cream leading-tight mb-2"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          Bunty
        </motion.h1>
        <motion.h1
          className="font-display text-5xl sm:text-7xl lg:text-8xl font-bold text-gold leading-tight mb-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Garment
        </motion.h1>

        {/* Tagline */}
        <motion.div
          className="inline-block mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.32 }}
        >
          <div className="relative px-8 py-3">
            <span className="absolute left-0 top-1/2 -translate-y-1/2 w-6 h-px bg-gold" />
            <span className="absolute right-0 top-1/2 -translate-y-1/2 w-6 h-px bg-gold" />
            <p className="font-display text-xl sm:text-2xl lg:text-3xl font-semibold text-gold tracking-wide italic">
              Quality Fabrics, Timeless Style
            </p>
          </div>
        </motion.div>

        {/* Business subtitle */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 mb-5"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.42 }}
        >
          <span className="flex items-center gap-1.5 bg-cream/10 border border-cream/20 rounded-full px-4 py-1.5 text-cream text-sm font-body tracking-wide backdrop-blur-sm">
            <Shirt className="w-4 h-4 text-gold flex-shrink-0" />
            Cloth Material Supplier
          </span>
          <span className="hidden sm:block text-gold/60 text-lg">&amp;</span>
          <span className="flex items-center gap-1.5 bg-cream/10 border border-cream/20 rounded-full px-4 py-1.5 text-cream text-sm font-body tracking-wide backdrop-blur-sm">
            <Scissors className="w-4 h-4 text-gold flex-shrink-0" />
            Garment Manufacturer
          </span>
        </motion.div>

        <motion.p
          className="text-gold/70 font-body text-sm tracking-widest mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          ✦ NOIDA, UTTAR PRADESH ✦
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.58 }}
        >
          <Button
            asChild
            size="lg"
            className="bg-gold hover:bg-gold-light text-navy font-body font-bold text-base px-8 py-4 h-auto tracking-wide shadow-gold"
            data-ocid="hero.primary_button"
          >
            <a href="tel:8130865401">
              <Phone className="w-5 h-5 mr-2" />
              Call: 8130865401
            </a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-cream/50 text-cream hover:bg-cream/10 hover:border-gold font-body font-medium text-base px-8 py-4 h-auto tracking-wide"
            onClick={() => scrollTo("#collections")}
            data-ocid="hero.secondary_button"
          >
            View Collections
          </Button>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="mt-16 grid grid-cols-3 gap-8 max-w-xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.72 }}
        >
          {[
            { value: "20+", label: "Years Experience" },
            { value: "5000+", label: "Happy Customers" },
            { value: "500+", label: "Garment Styles" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-display text-3xl font-bold text-gold">
                {stat.value}
              </div>
              <div className="text-cream/60 text-xs font-body tracking-wide mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        type="button"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-cream/50 hover:text-gold transition-colors"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
        onClick={() => scrollTo("#collections")}
        aria-label="Scroll down"
        data-ocid="hero.button"
      >
        <ChevronDown className="w-8 h-8" />
      </motion.button>
    </section>
  );
}
