import { Badge } from "@/components/ui/badge";
import { CheckCircle, Scissors, Shirt } from "lucide-react";
import { motion } from "motion/react";

const highlights = [
  "Premium fabrics: cotton, silk, georgette, khadi, linen",
  "Skilled tailors with 20+ years of expertise",
  "Custom garments stitched to your exact specifications",
  "Trusted by over 5,000 satisfied customers",
  "Competitive prices with no compromise on quality",
  "Located in the heart of Noida, easy to visit",
];

const coreServices = [
  {
    icon: Shirt,
    title: "Cloth Material Supply",
    desc: "We provide premium quality raw fabrics and cloth materials — cotton, silk, linen, georgette and more — for tailors, boutiques, and direct buyers.",
  },
  {
    icon: Scissors,
    title: "Custom Garment Manufacturing",
    desc: "Customers bring their cloth material and our expert craftsmen turn it into perfectly tailored garments — kurtas, suits, shirts, salwar suits, and more.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="absolute -top-4 -left-4 w-full h-full border-2 border-gold/30 rounded-2xl" />
            <div className="absolute -bottom-4 -right-4 w-48 h-48 bg-maroon/10 rounded-full blur-3xl" />
            <img
              src="/assets/generated/bunty-garment-about.dim_800x600.jpg"
              alt="Bunty Garment Store"
              className="relative z-10 w-full rounded-2xl object-cover shadow-maroon shadow-xl"
              style={{ aspectRatio: "4/3" }}
            />
            <motion.div
              className="absolute -bottom-6 -right-6 z-20 bg-maroon rounded-2xl p-5 shadow-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <div className="text-center">
                <div className="font-display text-4xl font-bold text-gold">
                  20+
                </div>
                <div className="text-cream/80 font-body text-xs tracking-wider mt-1">
                  YEARS OF TRUST
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Content side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <Badge className="bg-maroon/10 text-maroon border-maroon/20 font-body tracking-widest text-xs mb-4">
              ABOUT US
            </Badge>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-6 leading-tight">
              Crafting Excellence
              <span className="block text-maroon">Since 2005</span>
            </h2>
            <div className="gold-divider w-20 mb-6" />
            <p className="font-body text-muted-foreground text-base leading-relaxed mb-4">
              Bunty Garment is a trusted name in Noida's textile industry,
              proudly serving the community for over two decades. We operate as
              both a
              <strong className="text-foreground">
                {" "}
                cloth material supplier
              </strong>{" "}
              and a
              <strong className="text-foreground"> garment manufacturer</strong>{" "}
              — offering end-to-end textile solutions under one roof.
            </p>
            <p className="font-body text-muted-foreground text-base leading-relaxed mb-7">
              Customers can purchase premium raw fabrics from us and have their
              garments crafted to perfection by our skilled tailors, or simply
              order finished garments directly. We handle everything from fabric
              to final stitch.
            </p>

            {/* Two core service highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {coreServices.map((svc, i) => {
                const Icon = svc.icon;
                return (
                  <motion.div
                    key={svc.title}
                    className="rounded-xl border border-border bg-cream-dark p-4 hover:border-gold transition-colors duration-200"
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.15 * i, duration: 0.45 }}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-8 h-8 rounded-lg bg-maroon flex items-center justify-center flex-shrink-0">
                        <Icon className="w-4 h-4 text-gold" />
                      </div>
                      <h4 className="font-display text-sm font-bold text-foreground leading-tight">
                        {svc.title}
                      </h4>
                    </div>
                    <p className="font-body text-xs text-muted-foreground leading-relaxed">
                      {svc.desc}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {highlights.map((item, i) => (
                <motion.div
                  key={item}
                  className="flex items-start gap-2"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.08 * i, duration: 0.4 }}
                >
                  <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                  <span className="font-body text-sm text-foreground/80">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
