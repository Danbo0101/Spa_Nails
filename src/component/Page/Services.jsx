import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
import SpaRoundedIcon from "@mui/icons-material/SpaRounded";
import AutoAwesomeRoundedIcon from "@mui/icons-material/AutoAwesomeRounded";

const services = [
  {
    category: "Facial",
    services: [
      {
        name: "Wildflower Facial 60 Mins",
        price: "$89.00",
        description:
          "Brighten your complexion with a 60-minute session. Walk out with a renewed glow.",
      },

      {
        name: "Deep Clean Facial 75 Mins",
        price: "$109.00",
        description:
          "Experience a deep cleanse, gentle exfoliation, and refreshed skin with a 75-minute session.",
      },

      {
        name: "GM Rosa Sea Calming Algo Facial",
        price: "$155.00",
        description:
          "This facial is to treat dehydration, redness, and rosacea-prone skin condition using a special thermal-cooling seaweed mask (Iodine-free) is high in mineral and vitamin content. Skin will be made to soften, detoxify, and calm all in one treatment.",
      },

      {
        name: "GM Acne Deep Cleansing Facial",
        price: "$155.00",
        description:
          "5-steps facial formulated with BHA’s, AHA’s & Probiotics is designed to clear skin congestion, detoxify, control acne and normalize skin leaving you feeling refreshed, and renewed. Treating acne is also recommended for those with fatigued looking skin.",
      },

      {
        name: "GM Glass Skin Glowing Peel Facial",
        price: "$145.00",
        description:
          "This concentrated peel is formulated from a combination of Glycolic and Lactic acid, it deeply exfoliates the skin and specializes in reducing fine lines and wrinkles while also reducing hyperpigmentation, and an instant glow.",
      },

      {
        name: "GM Hydro Lifting Facial",
        price: "$165.00",
        description:
          "5-steps anti-aging treatment exfoliates, intensely hydrates the skin with a lymphatic massage, follow by toning mask that will lift and firms the skin with immediate visible result. This non-surgical treatment is recommended for skin that is dehydrated.",
      },

      {
        name: "GM Power -C Brightening Facial",
        price: "$165.00",
        description:
          "powerful antioxidant facial, using a stabilized L-ascorbic acid (Vitamin-C) to combat free radical and the harmful UV rays. A perfect facial before and after vacation, the powerful seaweed and an organic mud mask will help to brighten the complexion.",
      },

      {
        name: "GM Botox-Like Retinol Facial",
        price: "$185.00",
        description:
          "If you want to experience the effect of Botox without a trip to the doctor’s office, this is for you! The Botinol treatment combines two advanced Peptides complex and Vitamin A that works in harmony to visible reduce both superficial and deeper wrinkles.",
      },

      {
        name: "GM Collagen 90 Rejuvenate Facial",
        price: "$180.00",
        description:
          "This treatment is ideal for mature and fatigued skin. The facial is proven to reduce fine lines and wrinkles, improve cell metabolism and skin regeneration. Recommended for skin that is tired, stressed, large pores and severely dehydrated.",
      },

      {
        name: "GM Wildflower Signature Facial",
        price: "$120.00",
        description:
          "It includes an enzyme base exfoliation to remove dull surface skin cell, gentle extraction, followed by a relaxing facial massage, customized serum and mask are then applied according to your skin type. Your skin will be brighter, softer, and healthier.",
      },

      {
        name: "Anti Aging Facial With Hydra Beauty Device",
        price: "$129.00",
        description:
          "Target signs of aging, enhance firmness, elasticity, and lift the face for a youthful contour, 75 minutes. (Limited Time: $109; Regular: $150)",
      },

      {
        name: "Hydrating Facial With Hydra Beauty Device",
        price: "$129.00",
        description:
          "Hydrate your skin, stimulate collagen production for 75 minutes. (Limited Time: $109; Regular: $150)",
      },

      {
        name: "Deep Clean Facial with Hydra Beauty Device",
        price: "$129.00",
        description:
          "Deep clean and hydration for all skin types, 75 minutes. (Limited Time: $109; Regular: $150)",
      },

      {
        name: "Anti-Wrinkle Eye Treatment",
        price: "$55.00",
        description:
          "Combat fine lines and wrinkles with a 30-minute targeted treatment that includes a gentle exfoliation, anti-aging eye mask, and a firming eye cream.",
      },

      {
        name: "Brightening Eye Treatment",
        price: "$45.00",
        description:
          "Revitalize tired eyes with a 30-minute soothing massage and brightening mask that targets dark circles and promotes a more radiant appearance.",
      },

      {
        name: "Anti-Aging Hand Treatment",
        price: "$40.00",
        description:
          "Combat signs of aging on your hands with a 30-minute targeted treatment that includes exfoliation, a rejuvenating mask, and a firming hand massage.",
      },

      {
        name: "Firming Neck Treatment",
        price: "$58.00",
        description:
          "Neck unveils the first sign of aging — counter it with our 30-minute neck treatment with exfoliation, an anti-wrinkle mask, and a tightening massage.",
      },

      {
        name: "Eye Treatment With Hydra Beauty Device",
        price: "$78.00",
        description:
          "Focus on the eye area to reduce puffiness, diminish dark circles, and smooth fine lines, 45 minutes. (Limited Time: $78; Regular: $98)",
      },

      {
        name: "Neck Lift Treatment With Hydra Beauty Device",
        price: "$78.00",
        description:
          "Targets the neck area to tighten, lift, and improve skin elasticity for a more defined neckline, 45 minutes.(Limited Time: $78; Regular: $98)",
      },
    ],
  },
  {
    category: "Lymphatic Drainage Massage",
    services: [
      {
        name: "Face, Head and Body Lymphatic Drainage Massage",
        price: "$180.00",
        description:
          "Face, head, and body Lymphatic Drainage Massage is a soothing and relaxing massage that can detox your complexion, drain fluids, increase the circulation, reduce swelling and puffiness",
      },

      {
        name: "Face and Head Lymphatic Drainage Massage",
        price: "$90.00",
        description:
          "Face and head Lymphatic Drainage massage is a soothing and relaxing massage that can detox your complexion, drain fluids, increase the circulation, reduce swelling and puffiness",
      },

      {
        name: "Body Manual Lymphatic Drainage Massage",
        price: "$120.00",
        description:
          "The lymph vessels connect to the lymph nodes which filters, concentrates, breaks downs or stores these substances. From the lymph nodes the lymph vessels transports the fluid back to the blood (circulatory system).",
      },

      {
        name: "Couples Massage Body Manual Lymphatic Drainage",
        price: "$240.00",
        description:
          "The lymph vessels connect to the lymph nodes which filters, concentrates, breaks downs or stores these substances. From the lymph nodes the lymph vessels transports the fluid back to the blood (circulatory system) for 2 people.",
      },

      {
        name: "Couples Massage Face, Head and Body Lymphatic Drainage",
        price: "$360.00",
        description:
          "Face, head, and body Lymphatic Drainage Massage is a soothing and relaxing massage that can detox your complexion, drain fluids, increase the circulation, reduce swelling and puffiness for 2 people.",
      },
    ],
  },
];

const Services = () => {
  const [active, setActive] = useState(null);
  const categoryRefs = useRef([]);

  const handleToggle = (index) => {
    const nextValue = active === index ? null : index;

    setActive(nextValue);

    if (nextValue !== null) {
      setTimeout(() => {
        categoryRefs.current[index]?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 180);
    }
  };
  return (
    <div>
      <section
        className="relative h-105 md:h-105 overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage: `url("https://i.ibb.co/nsrxNHy9/inner-hero-3-background-image-png.webp")`,
        }}
      >
        <div className="absolute inset-0 bg-[#3b241b]/55 backdrop-[blur(1px)]" />

        <div className="absolute inset-0 bg-linear-to-b from-black/10 via-transparent to-black/20" />

        <div className="relative z-10 flex h-full items-center justify-center px-6 text-center">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, ease: "easeOut" }}
            >
              <h1
                className="text-white text-[48px] sm:text-[64px] md:text-[82px] leading-[0.95] tracking-[-0.04em] drop-shadow-[0_4px_20px_rgba(0,0,0,0.35)]"
                style={{
                  fontFamily: '"Cormorant Garamond", serif',
                }}
              >
                Our Services
              </h1>

              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "90px" }}
                transition={{ duration: 1.2, delay: 0.4 }}
                className="h-px bg-white/60 mx-auto my-6"
              />

              <motion.p
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="mx-auto max-w-3xl text-white/90 text-[16px] sm:text-[18px] md:text-[20px] leading-[1.6] font-medium"
                style={{
                  fontFamily: '"DM Sans", sans-serif',
                }}
              >
                Creating custom experiences where your well-being is the focus
                of the treatments.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>
      <section className="min-h-[50vh] lg:min-h-[80vh] bg-[#f7f3ee] px-4 py-10 md:px-8 lg:px-14 flex items-center overflow-hidden">
        <div className="max-w-6xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-14 md:mb-20 text-center px-2 sm:px-4"
          >
            <div className="flex items-center justify-center gap-2 mb-3">
              <SpaRoundedIcon className="text-[#9d7c63]! text-[15px]! sm:text-[16px]! md:text-[18px]!" />

              <span className="uppercase tracking-[0.22em] text-[9px] sm:text-[10px] md:text-xs text-[#9d7c63] font-medium">
                Luxury Spa Services
              </span>
            </div>

            <h2 className="text-[28px] sm:text-[36px] md:text-[48px] font-semibold text-[#2d221d] tracking-[-0.04em] leading-[1.1] max-w-225 mx-auto">
              Relax, Renew & Glow Naturally
            </h2>
          </motion.div>

          <div className="space-y-4">
            {services.map((item, index) => {
              const isOpen = active === index;

              return (
                <motion.div
                  ref={(el) => (categoryRefs.current[index] = el)}
                  key={index}
                  layout
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className={`group overflow-hidden rounded-[22px] md:rounded-3xl border transition-all duration-500 ${
                    isOpen
                      ? "bg-white border-[#d9c6b6] shadow-[0_15px_45px_rgba(0,0,0,0.05)]"
                      : "bg-[#efebe7] border-[#ece5df] hover:bg-white"
                  }`}
                >
                  <button
                    onClick={() => handleToggle(index)}
                    className="w-full flex items-center justify-between px-4 sm:px-5 md:px-8 py-4 sm:py-5 md:py-6 text-left"
                  >
                    <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                      <motion.div
                        animate={{
                          rotate: isOpen ? 90 : 0,
                          scale: isOpen ? 1.05 : 1,
                        }}
                        transition={{ duration: 0.35 }}
                        className={`min-w-9.5 sm:min-w-10 w-9.5 h-9.5 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-all duration-500 ${
                          isOpen
                            ? "bg-[#2d221d] text-white"
                            : "bg-white text-[#2d221d]"
                        }`}
                      >
                        <KeyboardArrowRightRoundedIcon className="text-[20px]! md:text-[22px]!" />
                      </motion.div>

                      <div className="min-w-0">
                        <h2 className="text-[17px] sm:text-[22px] md:text-[30px] leading-[1.2] font-semibold tracking-[-0.03em] text-[#2d221d] wrap-break-word">
                          {item.category}
                        </h2>
                      </div>
                    </div>

                    <AutoAwesomeRoundedIcon className="hidden md:block text-[20px]! text-[#c9b09b]! group-hover:rotate-12 transition-transform duration-500" />
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.45 }}
                        className="overflow-hidden"
                      >
                        <div className="px-4 sm:px-5 md:px-8 pb-6 sm:pb-7 md:pb-8">
                          <div
                            className={`grid gap-4 ${
                              item.services.length > 1
                                ? "grid-cols-1 lg:grid-cols-2"
                                : "grid-cols-1"
                            }`}
                          >
                            {item.services.length > 0 ? (
                              item.services.map((service, i) => (
                                <motion.div
                                  key={i}
                                  initial={{ opacity: 0, y: 25 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{
                                    duration: 0.4,
                                    delay: i * 0.08,
                                  }}
                                  className="relative h-full overflow-hidden rounded-[20px] md:rounded-[22px] border border-[#eee7e2] bg-[#faf8f6] p-4 sm:p-5 md:p-6"
                                >
                                  <div className="absolute top-0 right-0 w-32 sm:w-40 h-32 sm:h-40 bg-[#e9ddd3] rounded-full blur-3xl opacity-30" />

                                  <div className="relative z-10 flex h-full flex-col">
                                    <div className="flex items-start justify-between gap-3 sm:gap-4 mb-3">
                                      <h3 className="text-[15px] sm:text-[17px] md:text-[20px] font-semibold text-[#2d221d] leading-[1.45] tracking-[-0.02em]">
                                        {service.name}
                                      </h3>

                                      <div className="min-w-fit rounded-full bg-[#2d221d] px-3 sm:px-4 py-1.5 text-[11px] sm:text-[12px] md:text-sm font-medium text-white shadow-md">
                                        {service.price}
                                      </div>
                                    </div>

                                    <p className="text-[#6f655f] leading-[1.8] text-[12px] sm:text-[13px] md:text-[14px] font-light">
                                      {service.description}
                                    </p>
                                  </div>
                                </motion.div>
                              ))
                            ) : (
                              <div className="rounded-2xl bg-[#faf8f6] border border-[#eee7e2] py-8 text-center text-sm text-[#8c7f75]">
                                Services coming soon.
                              </div>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
