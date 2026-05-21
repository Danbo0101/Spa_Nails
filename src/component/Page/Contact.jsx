import { motion } from "framer-motion";
import {
  LocationOnRounded,
  PhoneRounded,
  FacebookRounded,
  Instagram,
  ArrowOutwardRounded,
} from "@mui/icons-material";

const Contact = () => {
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
                Contact Us Today
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
                Reach out to our team to begin your personalized path to pure
                relaxation.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>
      <section className="relative overflow-hidden bg-[#efe6df] py-16 md:py-20 px-4 sm:px-6 md:px-10 lg:px-20">
        <div className="absolute top-0 left-0 w-[320px] md:w-125 h-80 md:h-125 bg-[#d9c5b6]/30 blur-3xl rounded-full -translate-x-1/2 -translate-y-1/2" />

        <div className="absolute bottom-0 right-0 w-70 md:w-112.5 h-70 md:h-112.5 bg-[#c7a792]/20 blur-3xl rounded-full translate-x-1/3 translate-y-1/3" />

        <div className="relative max-w-7xl mx-auto grid lg:grid-cols-[0.85fr_1.15fr] gap-12 lg:gap-20 items-start lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="relative z-10"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-md border border-white/40 shadow-sm mb-6">
              <div className="w-2 h-2 rounded-full bg-[#6f4436]" />

              <span className="text-[10px] sm:text-[11px] tracking-[0.25em] uppercase text-[#6b5d56] font-medium">
                Contact Us
              </span>
            </div>

            <h2 className="text-[34px] sm:text-[42px] md:text-[56px] leading-[1.05] font-serif text-[#211d1b] mb-5">
              Let’s Create
              <br />
              Your Glow
            </h2>

            <p className="text-[14px] sm:text-[15px] md:text-[16px] leading-[1.9] text-[#756c67] max-w-120 mb-8 md:mb-10">
              Experience luxury wellness and personalized beauty care at our
              premium spa locations in New York.
            </p>

            <div className="space-y-4 md:space-y-5">
              <motion.div
                whileHover={{ x: 6 }}
                className="group flex gap-4 p-4 md:p-5 rounded-3xl md:rounded-[28px] bg-white/55 backdrop-blur-xl border border-white/40 shadow-[0_10px_40px_rgba(0,0,0,0.04)]"
              >
                <div className="w-11 h-11 md:w-12 md:h-12 rounded-2xl bg-[#5e392d] text-white flex items-center justify-center shrink-0">
                  <LocationOnRounded sx={{ fontSize: 22 }} />
                </div>

                <div>
                  <h3 className="text-[14px] md:text-[16px] font-semibold text-[#2b2725] mb-1">
                    Flushing Location
                  </h3>

                  <p className="text-[13px] md:text-[14px] leading-[1.7] text-[#746c67]">
                    133-20 41st Rd., Unit 7A.
                    <br />
                    Flushing, NY 11355
                  </p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 6 }}
                className="group flex gap-4 p-4 md:p-5 rounded-3xl md:rounded-[28px] bg-white/55 backdrop-blur-xl border border-white/40 shadow-[0_10px_40px_rgba(0,0,0,0.04)]"
              >
                <div className="w-11 h-11 md:w-12 md:h-12 rounded-2xl bg-[#5e392d] text-white flex items-center justify-center shrink-0">
                  <LocationOnRounded sx={{ fontSize: 22 }} />
                </div>

                <div>
                  <h3 className="text-[14px] md:text-[16px] font-semibold text-[#2b2725] mb-1">
                    Manhattan 33rd St.
                  </h3>

                  <p className="text-[13px] md:text-[14px] leading-[1.7] text-[#746c67]">
                    41 W. 33rd St., Unit 200
                    <br />
                    New York, NY 10001
                  </p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 6 }}
                className="flex items-center gap-4 p-4 md:p-5 rounded-3xl md:rounded-[28px] bg-white/55 backdrop-blur-xl border border-white/40 shadow-[0_10px_40px_rgba(0,0,0,0.04)]"
              >
                <div className="w-11 h-11 md:w-12 md:h-12 rounded-2xl bg-[#5e392d] text-white flex items-center justify-center shrink-0">
                  <PhoneRounded sx={{ fontSize: 20 }} />
                </div>

                <div>
                  <p className="text-[10px] md:text-[11px] uppercase tracking-[0.2em] text-[#8c817b] mb-1">
                    Phone Number
                  </p>

                  <h3 className="text-[14px] md:text-[16px] font-semibold text-[#2b2725]">
                    (866) 686-8680
                  </h3>
                </div>
              </motion.div>
            </div>

            <div className="flex items-center gap-3 md:gap-4 mt-7 md:mt-8">
              <motion.a
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.95 }}
                href="/"
                className="w-11 h-11 md:w-12 md:h-12 rounded-2xl bg-white/70 backdrop-blur-lg border border-white/40 shadow-md flex items-center justify-center text-[#5b382c]"
              >
                <FacebookRounded sx={{ fontSize: 22 }} />
              </motion.a>

              <motion.a
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.95 }}
                href="/"
                className="w-11 h-11 md:w-12 md:h-12 rounded-2xl bg-white/70 backdrop-blur-lg border border-white/40 shadow-md flex items-center justify-center text-[#5b382c]"
              >
                <Instagram sx={{ fontSize: 22 }} />
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-white/40 blur-2xl rounded-[36px] md:rounded-[40px]" />

            <div className="relative p-5 sm:p-6 md:p-9 lg:p-10 rounded-[30px] md:rounded-[36px] border border-white/40 bg-white/65 backdrop-blur-2xl shadow-[0_20px_80px_rgba(0,0,0,0.08)]">
              <div className="mb-7 md:mb-8">
                <h3 className="text-[28px] sm:text-[32px] md:text-[40px] font-serif text-[#211d1b] mb-2">
                  Book Consultation
                </h3>

                <p className="text-[#7a706a] text-[14px] md:text-[16px] leading-[1.8]">
                  Fill out the form and our beauty specialists will contact you
                  shortly.
                </p>
              </div>

              <form className="space-y-4 md:space-y-5">
                <div>
                  <label className="block text-[13px] md:text-[14px] font-medium text-[#5f5652] mb-2">
                    Full Name
                  </label>

                  <input
                    type="text"
                    placeholder="Your full name"
                    className="w-full h-13.5 md:h-15 rounded-2xl bg-white/70 border border-[#e4ddd8] px-4 md:px-5 text-[14px] md:text-[15px] outline-none focus:border-[#6f4436] focus:ring-4 focus:ring-[#6f4436]/10 transition-all"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
                  <div>
                    <label className="block text-[13px] md:text-[14px] font-medium text-[#5f5652] mb-2">
                      Email Address
                    </label>

                    <input
                      type="email"
                      placeholder="you@example.com"
                      className="w-full h-13.5 md:h-15 rounded-2xl bg-white/70 border border-[#e4ddd8] px-4 md:px-5 text-[14px] md:text-[15px] outline-none focus:border-[#6f4436] focus:ring-4 focus:ring-[#6f4436]/10 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-[13px] md:text-[14px] font-medium text-[#5f5652] mb-2">
                      Phone Number
                    </label>

                    <input
                      type="text"
                      placeholder="(123) 456-7890"
                      className="w-full h-13.5 md:h-15 rounded-2xl bg-white/70 border border-[#e4ddd8] px-4 md:px-5 text-[14px] md:text-[15px] outline-none focus:border-[#6f4436] focus:ring-4 focus:ring-[#6f4436]/10 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[13px] md:text-[14px] font-medium text-[#5f5652] mb-2">
                    Message
                  </label>

                  <textarea
                    rows={5}
                    placeholder="Tell us about your preferred treatment..."
                    className="w-full rounded-3xl bg-white/70 border border-[#e4ddd8] px-4 md:px-5 py-4 text-[14px] md:text-[15px] outline-none resize-none focus:border-[#6f4436] focus:ring-4 focus:ring-[#6f4436]/10 transition-all"
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.015 }}
                  whileTap={{ scale: 0.985 }}
                  className="group relative w-full h-14 md:h-15.5 overflow-hidden rounded-2xl bg-[#5b382c] text-white text-[15px] md:text-[17px] font-medium shadow-[0_10px_30px_rgba(91,56,44,0.3)]"
                >
                  <span className="absolute inset-0 bg-linear-to-r from-[#6d4435] to-[#4e2f25] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <span className="relative flex items-center justify-center gap-2">
                    Submit
                  </span>
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
