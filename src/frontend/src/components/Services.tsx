import { Badge } from "@/components/ui/badge";
import { CheckCircle, Scissors, Shirt } from "lucide-react";
import { motion } from "motion/react";

const services = [
  {
    id: "cloth-supply",
    icon: Shirt,
    title: "Cloth Material Supply",
    subtitle: "Premium Fabrics at Your Door",
    description:
      "We supply a wide range of premium quality raw cloth materials including cotton, linen, georgette, and more. Whether you are a tailor, boutique owner, or direct buyer — we have the finest fabrics for every need.",
    points: [
      "Cotton, Linen, Georgette & more",
      "Wholesale and retail quantities available",
      "Direct sourcing from top textile mills",
      "Competitive bulk pricing for tailors & shops",
    ],
    accent: "bg-maroon",
    badgeStyle: "bg-maroon/10 text-maroon border-maroon/20",
  },
  {
    id: "garment-mfg",
    icon: Scissors,
    title: "Garment Manufacturing",
    subtitle: "Custom Stitching & Production",
    description:
      "Bring your cloth and we will craft it into a perfect garment — or let us handle everything end-to-end. Our skilled craftsmen manufacture shirts, pants, suits, and more to your exact specifications.",
    points: [
      "Custom stitching as per your design",
      "Expert tailors with 20+ years experience",
      "Bulk orders for events & businesses",
      "Quality finishing with timely delivery",
    ],
    accent: "bg-navy",
    badgeStyle: "bg-navy/10 text-navy border-navy/20",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Badge className="bg-gold/15 text-gold-dark border-gold/30 font-body tracking-widest text-xs mb-4">
            WHAT WE DO
          </Badge>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Our <span className="text-maroon">Services</span>
          </h2>
          <div className="gold-divider w-24 mx-auto mb-5" />
          <p className="text-muted-foreground font-body text-lg max-w-xl mx-auto">
            From raw cloth material to finished garments — we handle every step
            of the textile journey.
          </p>
        </motion.div>

        {/* Service cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((svc, i) => {
            const Icon = svc.icon;
            return (
              <motion.div
                key={svc.id}
                className="group relative rounded-3xl overflow-hidden border border-border hover:border-gold hover:shadow-gold transition-all duration-300 bg-card"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 * i, duration: 0.55 }}
                data-ocid={`services.item.${i + 1}`}
              >
                {/* Top accent strip with icon */}
                <div className={`${svc.accent} px-8 pt-8 pb-6`}>
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-white/15 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-7 h-7 text-gold" />
                    </div>
                    <div>
                      <Badge
                        className={`${svc.badgeStyle} font-body tracking-widest text-xs mb-1 bg-white/20 text-cream border-white/20`}
                      >
                        SERVICE 0{i + 1}
                      </Badge>
                      <h3 className="font-display text-2xl font-bold text-cream leading-tight">
                        {svc.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-cream/70 font-body text-sm mt-3 tracking-wide italic">
                    {svc.subtitle}
                  </p>
                </div>

                {/* Body */}
                <div className="px-8 py-6">
                  <p className="font-body text-muted-foreground text-sm leading-relaxed mb-5">
                    {svc.description}
                  </p>
                  <ul className="space-y-2.5">
                    {svc.points.map((point) => (
                      <li key={point} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                        <span className="font-body text-sm text-foreground/80">
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
