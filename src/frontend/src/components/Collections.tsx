import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { motion } from "motion/react";
import { useGetAllProductCategories } from "../hooks/useQueries";

const categoryImages: Record<string, string> = {
  Shirts: "/assets/generated/shirt-collection.dim_600x700.jpg",
  Pants: "/assets/generated/pants-collection.dim_600x700.jpg",
  Suits: "/assets/generated/suit-collection.dim_600x700.jpg",
  Jackets: "/assets/generated/jacket-collection.dim_600x700.jpg",
  "T-Shirts": "/assets/generated/tshirt-collection.dim_600x700.jpg",
  Trousers: "/assets/generated/trouser-collection.dim_600x700.jpg",
  Skirts: "/assets/generated/skirt-collection.dim_600x700.jpg",
  "Women's Tops": "/assets/generated/womens-tops-collection.dim_600x700.jpg",
  Dresses: "/assets/generated/womens-dress-collection.dim_600x700.jpg",
};

const categoryIcons: Record<string, string> = {
  Shirts: "👔",
  Pants: "👖",
  Suits: "🤵",
  Jackets: "🧥",
  "T-Shirts": "👕",
  Trousers: "👖",
  Skirts: "👗",
  "Women's Tops": "👚",
  Dresses: "👗",
};

const defaultCategories = [
  {
    id: BigInt(1),
    name: "Shirts",
    description:
      "Premium cotton and linen shirts for formal and casual occasions. Available in a wide range of colors and fits.",
  },
  {
    id: BigInt(2),
    name: "Pants",
    description:
      "Tailored trousers and casual pants crafted for comfort and style. Perfect for every occasion.",
  },
  {
    id: BigInt(3),
    name: "Suits",
    description:
      "Elegant two-piece and three-piece suits in fine wool and polyester blends. Ideal for weddings and corporate events.",
  },
  {
    id: BigInt(4),
    name: "Jackets",
    description:
      "Stylish jackets and blazers in various fabrics. A versatile addition to any wardrobe.",
  },
  {
    id: BigInt(5),
    name: "T-Shirts",
    description:
      "Comfortable and durable T-shirts in cotton and blended fabrics. Great for casual everyday wear.",
  },
  {
    id: BigInt(6),
    name: "Trousers",
    description:
      "Well-fitted formal and casual trousers available in multiple fabrics and cuts.",
  },
  {
    id: BigInt(7),
    name: "Skirts",
    description:
      "Stylish skirts for women in a variety of fabrics, lengths, and fits. From A-line to pencil styles, perfect for every occasion.",
  },
  {
    id: BigInt(8),
    name: "Women's Tops",
    description:
      "Elegant and comfortable tops and blouses for women in cotton, polyester, and blended fabrics. Suitable for formal and casual wear.",
  },
  {
    id: BigInt(9),
    name: "Dresses",
    description:
      "Beautiful women's dresses in premium fabrics. From casual day dresses to formal evening wear, crafted for style and comfort.",
  },
];

const skeletonKeys = [
  "sk1",
  "sk2",
  "sk3",
  "sk4",
  "sk5",
  "sk6",
  "sk7",
  "sk8",
  "sk9",
];

export default function Collections() {
  const { data: categories, isLoading } = useGetAllProductCategories();

  const displayCategories =
    categories && categories.length > 0 ? categories : defaultCategories;

  return (
    <section id="collections" className="py-24 bg-cream-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Badge className="bg-maroon/10 text-maroon border-maroon/20 font-body tracking-widest text-xs mb-4">
            OUR COLLECTIONS
          </Badge>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Explore Our <span className="text-maroon">Garments</span>
          </h2>
          <div className="gold-divider w-24 mx-auto mb-6" />
          <p className="text-muted-foreground font-body text-lg max-w-xl mx-auto">
            From shirts and suits to skirts and dresses — quality garments for
            everyone.
          </p>
        </motion.div>

        {isLoading ? (
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            data-ocid="collections.loading_state"
          >
            {skeletonKeys.map((k) => (
              <Skeleton
                key={k}
                className="rounded-2xl"
                style={{ aspectRatio: "3/4", height: "auto" }}
              />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayCategories.map((cat, i) => {
              const image = categoryImages[cat.name];
              const icon = categoryIcons[cat.name] ?? "🧵";
              return (
                <motion.div
                  key={String(cat.id)}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.08 * i, duration: 0.5 }}
                  data-ocid={`collections.item.${i + 1}`}
                >
                  <Card className="group border border-border hover:border-gold hover:shadow-gold transition-all duration-300 bg-card overflow-hidden cursor-pointer rounded-2xl">
                    {/* Product image */}
                    <div
                      className="relative overflow-hidden"
                      style={{ aspectRatio: "3/4" }}
                    >
                      {image ? (
                        <img
                          src={image}
                          alt={cat.name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      ) : (
                        <div className="w-full h-full bg-cream-dark flex items-center justify-center">
                          <span className="text-6xl">{icon}</span>
                        </div>
                      )}
                      {/* Gradient overlay at bottom for text legibility */}
                      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/60 to-transparent" />
                      {/* Category name overlaid on image bottom */}
                      <div className="absolute bottom-0 inset-x-0 px-5 pb-4">
                        <h3 className="font-display text-xl font-bold text-cream">
                          {cat.name}
                        </h3>
                        <div className="h-0.5 w-8 bg-gold mt-1" />
                      </div>
                    </div>

                    {/* Description below image */}
                    <CardContent className="px-5 py-4">
                      <p className="text-muted-foreground font-body text-sm leading-relaxed">
                        {cat.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
