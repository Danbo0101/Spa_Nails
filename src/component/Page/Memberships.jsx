import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";

const benefits = [
  "@$49.99 A Month",
  "One Complimentary Service Monthly",
  "Priority Reservation Access",
  "Birthday Signature Treatment",
];

const Memberships = () => {
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
              <span
                className="mb-4 inline-block uppercase tracking-[0.38em] text-white/70 text-[10px] md:text-xs"
                style={{
                  fontFamily: '"DM Sans", sans-serif',
                }}
              >
                Lunara Spa Experience
              </span>

              <h1
                className="text-white text-[48px] sm:text-[64px] md:text-[82px] leading-[0.95] tracking-[-0.04em] drop-shadow-[0_4px_20px_rgba(0,0,0,0.35)]"
                style={{
                  fontFamily: '"Cormorant Garamond", serif',
                }}
              >
                Memberships
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
      <section className="min-h-screen bg-[#f5f1eb] px-5 sm:px-6 md:px-10 lg:px-16 py-14 md:py-16 flex items-center overflow-hidden">
        <div className="max-w-6xl mx-auto w-full grid lg:grid-cols-[0.9fr_1.1fr] gap-14 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="max-w-117.5 order-2 lg:order-1"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#ebe2d8] text-[#8d735f] text-[9px] sm:text-[10px] tracking-[0.22em] uppercase font-medium mb-4">
              Premium Wellness
            </span>

            <h2 className="font-serif text-[30px] sm:text-[36px] md:text-[42px] leading-[1.1] text-[#201916] font-semibold tracking-[-0.02em]">
              Signature
              <br />
              Membership
            </h2>

            <p className="mt-4 text-[13px] sm:text-[14px] md:text-[15px] leading-[1.9] text-[#6f6963] max-w-[95%]">
              A thoughtfully curated membership designed to bring balance,
              restoration, and elevated self-care into your weekly routine.
            </p>

            <div className="mt-7 space-y-4">
              {benefits.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 sm:gap-4 border-b border-[#e9dfd5] pb-4"
                >
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#5b3928] flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                    <Check className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-white stroke-3" />
                  </div>

                  <p className="text-[13px] sm:text-[14px] md:text-[15px] text-[#4f4b47] leading-[1.8]">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              <button className="bg-[#5b3928] hover:bg-[#492d21] text-white transition-all duration-300 px-5 py-3 rounded-full text-[12px] sm:text-[13px] tracking-wide shadow-md">
                Manhattan 33rd St.
              </button>

              <button className="border border-[#cdb8a7] bg-white/70 hover:bg-[#5b3928] hover:text-white text-[#5b3928] transition-all duration-300 px-5 py-3 rounded-full text-[12px] sm:text-[13px] tracking-wide">
                Flushing 41st Rd.
              </button>
            </div>

            <p className="mt-5 text-[11px] sm:text-[12px] text-[#9b938c] italic">
              *Massage & facial services only
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative order-1 lg:order-2"
          >
            <div className="relative overflow-hidden rounded-[28px] sm:rounded-[34px]">
              <img
                src="https://i.ibb.co/KMBjDBf/image-1200x946-1-png.webp"
                alt="Luxury Spa"
                className="w-full h-90 sm:h-115 md:h-130 object-cover"
              />

              <div className="absolute inset-0 bg-linear-to-t from-black/20 via-black/5 to-transparent" />
            </div>

            <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 md:left-10 bg-white/85 backdrop-blur-xl rounded-[22px] px-5 sm:px-6 py-4 sm:py-5 shadow-[0_15px_40px_rgba(0,0,0,0.08)] border border-white/40 max-w-55 sm:max-w-65">
              <p className="uppercase tracking-[0.22em] text-[#9d8471] text-[8px] sm:text-[9px] font-medium mb-2">
                Luxury Care
              </p>

              <p className="mt-2 text-[11px] sm:text-[12px] leading-6 text-[#6f6963]">
                Calm spaces, restorative rituals, and timeless wellness.
              </p>
            </div>

            <div className="hidden md:block absolute -top-5 -right-5 w-28 h-28 rounded-full bg-[#e7d8ca]/60 blur-2xl" />
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Memberships;
