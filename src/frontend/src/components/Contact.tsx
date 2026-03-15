import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, MapPin, MessageCircle, Phone, Star } from "lucide-react";
import { motion } from "motion/react";

export default function Contact() {
  const whatsappLink =
    "https://wa.me/918130865401?text=Hello%20Bunty%20Garment%2C%20I%27d%20like%20to%20know%20more%20about%20your%20collection.";

  return (
    <section id="contact" className="py-24 bg-maroon relative overflow-hidden">
      {/* Decorative background pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `repeating-linear-gradient(
            -45deg,
            oklch(0.72 0.14 72) 0px,
            oklch(0.72 0.14 72) 1px,
            transparent 1px,
            transparent 24px
          )`,
        }}
      />
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-navy/30 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Badge className="bg-gold/20 text-gold border-gold/30 font-body tracking-widest text-xs mb-4">
            CONTACT US
          </Badge>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-cream mb-4">
            Get In <span className="text-gold">Touch</span>
          </h2>
          <div className="gold-divider w-24 mx-auto mb-6" />
          <p className="text-cream/70 font-body text-lg max-w-xl mx-auto">
            Visit us in Noida or give us a call — we're always happy to help you
            find the perfect garment.
          </p>
        </motion.div>

        {/* Contact cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Phone */}
          <motion.div
            className="bg-white/5 backdrop-blur-sm border border-gold/20 rounded-2xl p-8 text-center hover:bg-white/10 hover:border-gold/50 transition-all duration-300 group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0, duration: 0.5 }}
          >
            <div className="w-14 h-14 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-gold/30 transition-colors">
              <Phone className="w-7 h-7 text-gold" />
            </div>
            <h3 className="font-display text-xl font-bold text-cream mb-2">
              Call Us
            </h3>
            <p className="text-cream/60 font-body text-sm mb-4">
              Mon–Sat, 10 AM to 8 PM
            </p>
            <a
              href="tel:8130865401"
              className="text-gold font-body text-xl font-bold hover:text-gold-light transition-colors"
              data-ocid="contact.link"
            >
              8130865401
            </a>
          </motion.div>

          {/* Address */}
          <motion.div
            className="bg-white/5 backdrop-blur-sm border border-gold/20 rounded-2xl p-8 text-center hover:bg-white/10 hover:border-gold/50 transition-all duration-300 group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            <div className="w-14 h-14 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-gold/30 transition-colors">
              <MapPin className="w-7 h-7 text-gold" />
            </div>
            <h3 className="font-display text-xl font-bold text-cream mb-2">
              Visit Us
            </h3>
            <p className="text-cream/60 font-body text-sm mb-4">
              Come see our full collection
            </p>
            <p className="text-gold font-body text-base font-semibold">
              Noida, Uttar Pradesh
            </p>
          </motion.div>

          {/* Hours */}
          <motion.div
            className="bg-white/5 backdrop-blur-sm border border-gold/20 rounded-2xl p-8 text-center hover:bg-white/10 hover:border-gold/50 transition-all duration-300 group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <div className="w-14 h-14 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-gold/30 transition-colors">
              <Clock className="w-7 h-7 text-gold" />
            </div>
            <h3 className="font-display text-xl font-bold text-cream mb-2">
              Store Hours
            </h3>
            <p className="text-cream/60 font-body text-sm mb-4">
              We're open 7 days a week
            </p>
            <p className="text-gold font-body text-base font-semibold">
              10:00 AM – 8:00 PM
            </p>
          </motion.div>
        </div>

        {/* CTA buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <Button
            asChild
            size="lg"
            className="bg-gold hover:bg-gold-light text-navy font-body font-bold text-base px-10 py-4 h-auto shadow-gold"
            data-ocid="contact.primary_button"
          >
            <a href="tel:8130865401">
              <Phone className="w-5 h-5 mr-2" />
              Call 8130865401
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-green-400/50 text-green-300 hover:bg-green-400/10 hover:border-green-400 font-body font-semibold text-base px-10 py-4 h-auto"
            data-ocid="contact.secondary_button"
          >
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-5 h-5 mr-2" />
              WhatsApp Us
            </a>
          </Button>
        </motion.div>

        {/* Trust strip */}
        <motion.div
          className="mt-16 flex flex-wrap items-center justify-center gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          {[
            { icon: Star, label: "5-Star Rated" },
            { icon: Phone, label: "Quick Response" },
            { icon: MapPin, label: "Central Noida" },
          ].map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2 text-cream/60">
              <Icon className="w-4 h-4 text-gold/60" />
              <span className="font-body text-sm tracking-wide">{label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
