import { motion } from "framer-motion";

const Packages = () => {
  return (
    <div>
      <section className="min-h-screen bg-linear-to-b from-[#dde2da] via-[#d9d6d1] to-[#d9d6d1] px-6 md:px-10 lg:px-20 py-16 lg:py-24 overflow-hidden flex items-center">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[0.95fr_1.05fr] gap-10 lg:gap-16 items-center w-full">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="max-w-130"
          >
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="uppercase tracking-[0.28em] text-[10px] md:text-[11px] text-[#7d7b74] block mb-5"
            >
              Signature Facial Collection
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.15 }}
              viewport={{ once: true }}
              className="text-[42px] sm:text-[54px] lg:text-[66px] leading-[0.92] tracking-[-0.045em] text-[#262522]"
              style={{
                fontFamily: '"Cormorant Garamond", serif',
                fontWeight: 600,
              }}
            >
              Healthy <br /> Glowing Skin
              <br />
              Starts Here
            </motion.h2>

            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 70 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="h-px bg-[#8b8a83] mt-7"
            />

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-7 text-[15px] md:text-[16px] leading-[1.9] text-[#5f5d58]"
            >
              Indulge your skin with our{" "}
              <span className="font-semibold text-[#3a3935]">
                Wildflower Signature Facial Package
              </span>
              , designed to restore hydration, glow, and balance.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.55 }}
              viewport={{ once: true }}
              className="mt-7 rounded-3xl bg-white/45 backdrop-blur-sm border border-white/50 px-5 py-5 shadow-[0_10px_30px_rgba(0,0,0,0.04)]"
            >
              <p className="uppercase tracking-[0.24em] text-[10px] text-[#8a8881] mb-2">
                Limited Offer
              </p>

              <p className="text-[20px] md:text-[22px] leading-[1.4] text-[#2f2d2a]">
                <span className="font-semibold">
                  3 Signature Facials at $65
                </span>
                <span className="text-[15px] text-[#7b7973]"> / session</span>
              </p>

              <p className="mt-1 text-[14px] text-[#8d8b85]">
                Originally priced at $89 each.
              </p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.7 }}
              viewport={{ once: true }}
              className="mt-7 text-[15px] md:text-[16px] leading-[1.9] text-[#66645f]"
            >
              Each session is customized to your skin’s needs, helping address
              dryness, congestion, and sensitivity while delivering a calming,
              restorative spa ritual.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.85 }}
              viewport={{ once: true }}
              className="mt-9"
            >
              <button className="group relative overflow-hidden rounded-full border border-[#2d2c29] px-7 py-3.5 text-[12px] uppercase tracking-[0.22em] text-[#2d2c29] transition-all duration-500 hover:text-white">
                <span className="relative z-10 flex items-center gap-3">
                  Discover Experience
                  <span className="transition-transform duration-500 group-hover:translate-x-1">
                    →
                  </span>
                </span>

                <div className="absolute inset-0 bg-[#2d2c29] translate-y-full group-hover:translate-y-0 transition-transform duration-500 rounded-full" />
              </button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92, x: 60 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -bottom-10 -right-8 w-56 h-56 bg-white/20 rounded-full blur-3xl" />

            <motion.div
              whileHover={{ y: -6 }}
              transition={{ duration: 0.45 }}
              className="relative overflow-hidden rounded-[34px] shadow-[0_35px_90px_rgba(0,0,0,0.13)]"
            >
              <img
                src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=1600&auto=format&fit=crop"
                alt=""
                className="w-full h-[56vh] sm:h-[64vh] lg:h-[72vh] object-cover hover:scale-[1.05] transition-transform duration-2500 ease-out"
              />

              <div className="absolute inset-0 bg-linear-to-t from-black/10 via-transparent to-white/10" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.5 }}
              viewport={{ once: true }}
              className="absolute -left-6 bottom-8 hidden md:block"
            >
              <div className="bg-white/75 backdrop-blur-md rounded-3xl px-6 py-4 shadow-[0_12px_40px_rgba(0,0,0,0.08)] border border-white/50">
                <p className="uppercase tracking-[0.22em] text-[10px] text-[#8b8a84]">
                  Skin Therapy
                </p>

                <p
                  className="mt-1 text-[24px] leading-none text-[#2b2a27]"
                  style={{ fontFamily: '"Cormorant Garamond", serif' }}
                >
                  Luxury Facial
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
      <section className="min-h-screen bg-linear-to-b from-[#d9d6d1] via-[#d5d0c8] to-[#d5d0c8] px-6 md:px-10 lg:px-20 py-16 lg:py-24 overflow-hidden flex items-center">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-16 items-center w-full">
          <motion.div
            initial={{ opacity: 0, x: -60, scale: 0.96 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="lg:relative hidden lg:block"
          >
            <div className="absolute -top-10 -left-10 w-48 h-48 bg-white/20 rounded-full blur-3xl" />

            <motion.div
              whileHover={{ y: -6 }}
              transition={{ duration: 0.45 }}
              className="relative overflow-hidden rounded-[34px] shadow-[0_35px_90px_rgba(0,0,0,0.13)]"
            >
              <img
                src="https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=1600&auto=format&fit=crop"
                alt=""
                className="w-full h-[56vh] sm:h-[62vh] lg:h-[68vh] object-cover hover:scale-[1.05] transition-transform duration-2500 ease-out"
              />

              <div className="absolute inset-0 bg-linear-to-tr from-black/5 via-transparent to-white/10" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              className="absolute -bottom-5 left-8 hidden md:block"
            >
              <div className="bg-white/70 backdrop-blur-md border border-white/40 rounded-3xl px-6 py-4 shadow-[0_12px_40px_rgba(0,0,0,0.08)]">
                <p className="uppercase tracking-[0.24em] text-[10px] text-[#8a8882]">
                  Wellness Ritual
                </p>

                <p
                  className="mt-1 text-[24px] text-[#2b2a27] leading-none"
                  style={{ fontFamily: '"Cormorant Garamond", serif' }}
                >
                  Full Body Massage
                </p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="max-w-130"
          >
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="uppercase tracking-[0.28em] text-[10px] md:text-[11px] text-[#7d7b74] block mb-5"
            >
              Luxury Massage Therapy
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.15 }}
              viewport={{ once: true }}
              className="text-[42px] sm:text-[54px] lg:text-[66px] leading-[0.95] tracking-[-0.045em] text-[#262522]"
              style={{
                fontFamily: '"Cormorant Garamond", serif',
                fontWeight: 600,
              }}
            >
              Ultimate
              <br />
              Full-Body
              <br />
              Relaxation
            </motion.h2>

            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 70 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="h-px bg-[#8b8a83] mt-7"
            />

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-7 text-[15px] md:text-[16px] leading-[1.9] text-[#5f5d58]"
            >
              For complete relaxation, discover our{" "}
              <span className="font-semibold text-[#3a3935]">
                Signature Massage Packages
              </span>
              , thoughtfully designed to ease tension and restore balance.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.55 }}
              viewport={{ once: true }}
              className="mt-7 rounded-3xl bg-white/45 backdrop-blur-sm border border-white/50 px-5 py-5 shadow-[0_10px_30px_rgba(0,0,0,0.04)]"
            >
              <p className="uppercase tracking-[0.24em] text-[10px] text-[#8a8881] mb-2">
                Special Wellness Offer
              </p>

              <p className="text-[20px] md:text-[22px] leading-[1.4] text-[#2f2d2a]">
                <span className="font-semibold">3 Hours Massage at $50</span>
                <span className="text-[15px] text-[#7b7973]"> / hour</span>
              </p>

              <p className="mt-1 text-[14px] text-[#8d8b85]">
                Originally priced at $65 per hour.
              </p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.7 }}
              viewport={{ once: true }}
              className="mt-7 text-[15px] md:text-[16px] leading-[1.9] text-[#66645f]"
            >
              Ideal for soothing tired muscles, reducing stress, and supporting
              your overall well-being through a deeply calming spa experience.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.85 }}
              viewport={{ once: true }}
              className="mt-9"
            >
              <button className="group relative overflow-hidden rounded-full border border-[#2d2c29] px-7 py-3.5 text-[12px] uppercase tracking-[0.22em] text-[#2d2c29] transition-all duration-500 hover:text-white">
                <span className="relative z-10 flex items-center gap-3">
                  Explore Treatments
                  <span className="transition-transform duration-500 group-hover:translate-x-1">
                    →
                  </span>
                </span>

                <div className="absolute inset-0 bg-[#2d2c29] translate-y-full group-hover:translate-y-0 transition-transform duration-500 rounded-full" />
              </button>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -60, scale: 0.96 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="lg:relative lg:hidden block"
          >
            <div className="absolute -top-10 -left-10 w-48 h-48 bg-white/20 rounded-full blur-3xl" />

            <motion.div
              whileHover={{ y: -6 }}
              transition={{ duration: 0.45 }}
              className="relative overflow-hidden rounded-[34px] shadow-[0_35px_90px_rgba(0,0,0,0.13)]"
            >
              <img
                src="https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=1600&auto=format&fit=crop"
                alt=""
                className="w-full h-[56vh] sm:h-[62vh] lg:h-[68vh] object-cover hover:scale-[1.05] transition-transform duration-2500 ease-out"
              />

              <div className="absolute inset-0 bg-linear-to-tr from-black/5 via-transparent to-white/10" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              className="absolute -bottom-5 left-8 hidden md:block"
            >
              <div className="bg-white/70 backdrop-blur-md border border-white/40 rounded-3xl px-6 py-4 shadow-[0_12px_40px_rgba(0,0,0,0.08)]">
                <p className="uppercase tracking-[0.24em] text-[10px] text-[#8a8882]">
                  Wellness Ritual
                </p>

                <p
                  className="mt-1 text-[24px] text-[#2b2a27] leading-none"
                  style={{ fontFamily: '"Cormorant Garamond", serif' }}
                >
                  Full Body Massage
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
      <section className="min-h-screen bg-linear-to-b from-[#d5d0c8] via-[#dde2da] to-[#dde2da] px-6 md:px-10 lg:px-20 py-16 lg:py-24 overflow-hidden flex items-center">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[0.92fr_1.08fr] gap-10 lg:gap-16 items-center w-full">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="max-w-135"
          >
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="uppercase tracking-[0.28em] text-[10px] md:text-[11px] text-[#7d7b74] block mb-5"
            >
              Advanced Wellness Therapy
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.15 }}
              viewport={{ once: true }}
              className="text-[42px] sm:text-[54px] lg:text-[66px] leading-[0.94] tracking-[-0.045em] text-[#262522]"
              style={{
                fontFamily: '"Cormorant Garamond", serif',
                fontWeight: 600,
              }}
            >
              Deeper Focus,
              <br />
              Greater Renewal
            </motion.h2>

            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 70 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="h-px bg-[#8b8a83] mt-7"
            />

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-7 text-[15px] md:text-[16px] leading-[1.9] text-[#5f5d58]"
            >
              For guests seeking longer restorative sessions, our{" "}
              <span className="font-semibold text-[#3a3935]">
                intensive lymphatic massage packages
              </span>{" "}
              are thoughtfully designed to promote circulation, detoxification,
              and deep relaxation.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.55 }}
              viewport={{ once: true }}
              className="mt-7 space-y-4"
            >
              <div className="rounded-3xl bg-white/45 backdrop-blur-sm border border-white/50 px-5 py-5 shadow-[0_10px_30px_rgba(0,0,0,0.04)]">
                <p className="uppercase tracking-[0.22em] text-[10px] text-[#8a8881] mb-2">
                  90 Minute Package
                </p>

                <p className="text-[20px] md:text-[22px] leading-[1.4] text-[#2f2d2a]">
                  <span className="font-semibold">
                    3 Lymphatic Massages at $120
                  </span>
                  <span className="text-[15px] text-[#7b7973]"> / hour</span>
                </p>

                <p className="mt-1 text-[14px] text-[#8d8b85]">
                  Originally priced at $180 per hour.
                </p>
              </div>

              <div className="rounded-3xl bg-white/45 backdrop-blur-sm border border-white/50 px-5 py-5 shadow-[0_10px_30px_rgba(0,0,0,0.04)]">
                <p className="uppercase tracking-[0.22em] text-[10px] text-[#8a8881] mb-2">
                  60 Minute Package
                </p>

                <p className="text-[20px] md:text-[22px] leading-[1.4] text-[#2f2d2a]">
                  <span className="font-semibold">
                    3 Lymphatic Massages at $90
                  </span>
                  <span className="text-[15px] text-[#7b7973]"> / hour</span>
                </p>

                <p className="mt-1 text-[14px] text-[#8d8b85]">
                  Originally priced at $120 per hour.
                </p>
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.75 }}
              viewport={{ once: true }}
              className="mt-7 text-[15px] md:text-[16px] leading-[1.9] text-[#66645f]"
            >
              A meaningful way to invest in your well-being or gift someone a
              luxurious self-care ritual with lasting therapeutic benefits.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              viewport={{ once: true }}
              className="mt-9"
            >
              <button className="group relative overflow-hidden rounded-full border border-[#2d2c29] px-7 py-3.5 text-[12px] uppercase tracking-[0.22em] text-[#2d2c29] transition-all duration-500 hover:text-white">
                <span className="relative z-10 flex items-center gap-3">
                  View Wellness Packages
                  <span className="transition-transform duration-500 group-hover:translate-x-1">
                    →
                  </span>
                </span>

                <div className="absolute inset-0 bg-[#2d2c29] translate-y-full group-hover:translate-y-0 transition-transform duration-500 rounded-full" />
              </button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92, x: 60 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -bottom-10 -right-8 w-56 h-56 bg-white/20 rounded-full blur-3xl" />

            <motion.div
              whileHover={{ y: -6 }}
              transition={{ duration: 0.45 }}
              className="relative overflow-hidden rounded-[34px] shadow-[0_35px_90px_rgba(0,0,0,0.13)]"
            >
              <img
                src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1600&auto=format&fit=crop"
                alt=""
                className="w-full h-[56vh] sm:h-[64vh] lg:h-[72vh] object-cover hover:scale-[1.05] transition-transform duration-2500 ease-out"
              />

              <div className="absolute inset-0 bg-linear-to-tr from-black/10 via-transparent to-white/10" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              className="absolute -left-6 bottom-8 hidden md:block"
            >
              <div className="bg-white/70 backdrop-blur-md border border-white/40 rounded-3xl px-6 py-4 shadow-[0_12px_40px_rgba(0,0,0,0.08)]">
                <p className="uppercase tracking-[0.24em] text-[10px] text-[#8a8882]">
                  Detox & Recovery
                </p>

                <p
                  className="mt-1 text-[24px] text-[#2b2a27] leading-none"
                  style={{ fontFamily: '"Cormorant Garamond", serif' }}
                >
                  Lymphatic Therapy
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
      <section className="min-h-screen bg-linear-to-b from-[#dde2da] via-[#d9d6d1] to-[#efeae2] px-6 md:px-10 lg:px-20 py-20 lg:py-32 overflow-hidden flex items-center">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[1fr_0.9fr] gap-10 lg:gap-20 items-center w-full">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
            className="hidden lg:block"
          >
            <div className="relative w-full h-155 rounded-[40px] bg-white/10 border border-white/20 overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_70%)]" />

              <motion.div
                animate={{
                  scale: [1, 1.04, 1],
                  opacity: [0.4, 0.7, 0.4],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -top-20 -left-15 w-[320px] h-80 rounded-full bg-white/10 blur-3xl"
              />

              <motion.div
                animate={{
                  scale: [1.05, 1, 1.05],
                  opacity: [0.25, 0.45, 0.25],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-30 -right-20 w-90 h-90 rounded-full bg-black/5 blur-3xl"
              />

              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <p
                    className="text-[72px] leading-none text-[#262522]"
                    style={{
                      fontFamily: '"Cormorant Garamond", serif',
                      fontWeight: 600,
                    }}
                  >
                    Lunara
                  </p>

                  <div className="w-16 h-px bg-[#8a8882] mx-auto my-5" />

                  <p className="uppercase tracking-[0.35em] text-[11px] text-[#7f7d77]">
                    Laser Genesis Therapy
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="max-w-140 lg:ml-auto"
          >
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="uppercase tracking-[0.28em] text-[10px] md:text-[11px] text-[#7d7b74] block mb-5"
            >
              Advanced Skin Rejuvenation
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.15 }}
              viewport={{ once: true }}
              className="text-[42px] sm:text-[54px] lg:text-[68px] leading-[0.95] tracking-[-0.045em] text-[#262522]"
              style={{
                fontFamily: '"Cormorant Garamond", serif',
                fontWeight: 600,
              }}
            >
              Radiant Skin,
              <br />
              Lasting Results
            </motion.h2>

            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 70 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="h-px bg-[#8b8a83] mt-7"
            />

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-7 text-[15px] md:text-[16px] leading-[1.9] text-[#5f5d58]"
            >
              For guests seeking visible rejuvenation and long-term skin
              renewal, our{" "}
              <span className="font-semibold text-[#3a3935]">
                exclusive Laser Genesis package
              </span>{" "}
              delivers smoother texture, refined pores, and a naturally radiant
              complexion.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.55 }}
              viewport={{ once: true }}
              className="mt-7 rounded-3xl bg-white/45 backdrop-blur-sm border border-white/50 px-5 py-5 shadow-[0_10px_30px_rgba(0,0,0,0.04)]"
            >
              <p className="uppercase tracking-[0.22em] text-[10px] text-[#8a8881] mb-2">
                Signature Laser Package
              </p>

              <p className="text-[20px] md:text-[22px] leading-normal text-[#2f2d2a]">
                <span className="font-semibold">
                  3 Laser Genesis Sessions at $150
                </span>
                <span className="text-[15px] text-[#7b7973]"> / session</span>
              </p>

              <p className="mt-1 text-[14px] text-[#8d8b85]">
                Originally priced at $350 per session.
              </p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.72 }}
              viewport={{ once: true }}
              className="mt-7 text-[15px] md:text-[16px] leading-[1.9] text-[#66645f]"
            >
              A luxurious way to invest in healthier skin while enjoying
              meaningful savings and a personalized commitment to ongoing care
              at Lunara Spa.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              viewport={{ once: true }}
              className="mt-9"
            >
              <button className="group relative overflow-hidden rounded-full border border-[#2d2c29] px-7 py-3.5 text-[12px] uppercase tracking-[0.22em] text-[#2d2c29] transition-all duration-500 hover:text-white">
                <span className="relative z-10 flex items-center gap-3">
                  Discover Skin Therapy
                  <span className="transition-transform duration-500 group-hover:translate-x-1">
                    →
                  </span>
                </span>

                <div className="absolute inset-0 bg-[#2d2c29] translate-y-full group-hover:translate-y-0 transition-transform duration-500 rounded-full" />
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Packages;
