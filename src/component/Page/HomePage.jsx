import { motion, AnimatePresence } from "framer-motion";
import { useMemo, useState } from "react";
import {
  Phone,
  Mail,
  Clock3,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Star,
} from "lucide-react";

const reviews = [
  {
    name: "Brittany Barbos",
    time: "2 months ago",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
    review:
      "OMG. I had no idea what to expect when i booked this lymphatic massage but wanted to relax and de-puff after a flight, and it was incredible. I felt like I was floating on a cloud the entire time.",
  },
  {
    name: "Shanice Boynton",
    time: "2 months ago",
    image:
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=200&auto=format&fit=crop",
    review:
      "I recently had a 90 minute massage with Eliana. She did an amazing job on my back and foot.",
  },
  {
    name: "Alyssa Davila",
    time: "2 months ago",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
    review:
      "Diana, at the front desk is thorough and very courteous. She greets you with great energy.",
  },
  {
    name: "Sarah ElBatji",
    time: "2 months ago",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop",
    review:
      "Amazing experience!! it was my first time and I absolutely loved it.",
  },
  {
    name: "Jessica Miller",
    time: "3 months ago",
    image:
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=200&auto=format&fit=crop",
    review:
      "Such a beautiful spa. The atmosphere is calm and luxurious and the facial treatment was incredible.",
  },
  {
    name: "Emma Wilson",
    time: "1 month ago",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=200&auto=format&fit=crop",
    review:
      "The service here is unmatched. Everything feels premium from the moment you walk in.",
  },
  {
    name: "Sophia Carter",
    time: "5 months ago",
    image:
      "https://images.unsplash.com/photo-1491349174775-aaafddd81942?q=80&w=200&auto=format&fit=crop",
    review:
      "Best facial spa I’ve ever visited. Super relaxing and the staff are incredibly kind.",
  },
];

const HomePage = () => {
  const [current, setCurrent] = useState(0);
  const [expandedReview, setExpandedReview] = useState(null);

  const isBeginning = current === 0;
  const isEnd = current >= reviews.length - 4;
  return (
    <div>
      <section
        className="relative h-screen overflow-hidden"
        style={{
          backgroundImage:
            'url("https://i.ibb.co/7tSsCkrc/Chat-GPT-Image-May-20-2026-at-03-48-03-PM.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className="absolute inset-0 md:hidden"
          style={{
            backgroundImage:
              'url("https://i.ibb.co/MDsB30SJ/Chat-GPT-Image-May-20-2026-at-04-03-21-PM.png")',
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.82),rgba(0,0,0,0.58),rgba(0,0,0,0.28))] md:bg-[linear-gradient(to_right,rgba(0,0,0,0.72),rgba(0,0,0,0.35),rgba(0,0,0,0.15))]" />

        <div className="absolute -left-30 top-[5%] h-65 w-65 rounded-full bg-[#e7c8aa]/10 blur-3xl md:h-105 md:w-105" />

        <div className="absolute -bottom-25 -right-20 h-55 w-55 rounded-full bg-[#b88f72]/10 blur-3xl md:h-80 md:w-[320px]" />

        <div className="relative z-10 flex h-screen items-center px-5 pb-12 pt-28 sm:px-6 md:px-14 md:py-20 lg:px-24">
          <div className="w-full max-w-170">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-4 flex items-center gap-3 md:mb-7 md:gap-4"
            >
              <div className="h-px w-9 bg-[#e7d7c8]/60 md:w-16" />

              <span
                className="text-[8px] uppercase tracking-[0.32em] text-[#f1e3d5]/75 sm:text-[9px] md:text-[11px]"
                style={{
                  fontFamily: "var(--font-menu)",
                }}
              >
                Luxury Wellness Experience
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="max-w-180"
            >
              <h1
                className="leading-[0.92] tracking-[-0.065em] text-white md:leading-[0.9]"
                style={{
                  fontFamily: "var(--font-paytone)",
                  fontSize: "clamp(2.2rem,9vw,6.2rem)",
                  fontWeight: "400",
                }}
              >
                <span className="block text-white/95">A Premier</span>

                <span className="block bg-linear-to-r from-[#fffdf9] via-[#f4e4d6] to-[#d8b79f] bg-clip-text text-transparent">
                  Destination
                </span>

                <div className="mt-1 flex flex-wrap items-end gap-x-3 gap-y-0 md:mt-2 md:gap-x-5">
                  <span className="text-white/92">for Luxury</span>

                  <span className="italic text-[#f3dfcf]">Spa</span>
                </div>

                <span className="mt-1 block italic text-[#f0dccb]">
                  Services
                </span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                delay: 0.25,
              }}
              className="mt-5 max-w-125 text-[13px] leading-[1.75] tracking-[0.02em] text-white/72 sm:text-[14px] md:mt-8 md:max-w-140 md:text-[18px] md:leading-[1.85]"
              style={{
                fontFamily: "var(--font-menu)",
              }}
            >
              Curated journeys crafted for deep relaxation, elevated rituals,
              and timeless wellness in an atmosphere designed to calm the
              senses.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                delay: 0.45,
              }}
              className="mt-7 flex flex-col gap-3 md:mt-12 md:flex-row md:gap-5"
            >
              <motion.button
                whileHover={{
                  scale: 1.03,
                  y: -3,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                className="group relative overflow-hidden rounded-[22px] border border-white/10 bg-[#6c4c3c]/80 px-5 py-4 text-white shadow-[0_10px_40px_rgba(0,0,0,0.28)] backdrop-blur-xl transition-all duration-500 md:rounded-full md:px-7"
              >
                <div className="absolute inset-0 bg-linear-to-r from-[#8b6854]/10 via-white/10 to-[#8b6854]/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative z-10 flex items-center justify-between gap-3">
                  <div>
                    <p
                      className="text-[10px] uppercase tracking-[0.25em] text-white/45"
                      style={{
                        fontFamily: "var(--font-menu)",
                      }}
                    >
                      Manhattan
                    </p>

                    <span
                      className="mt-1 block text-left text-[13px] leading-normal text-white sm:text-[14px] md:text-[14px]"
                      style={{
                        fontFamily: "var(--font-menu)",
                      }}
                    >
                      33rd St. Book on Vagaro
                    </span>
                  </div>

                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/10">
                    <ArrowUpRight
                      size={16}
                      className="shrink-0 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                    />
                  </div>
                </div>
              </motion.button>

              <motion.button
                whileHover={{
                  scale: 1.03,
                  y: -3,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                className="group relative overflow-hidden rounded-[22px] border border-white/15 bg-white/10 px-5 py-4 text-white shadow-[0_10px_40px_rgba(0,0,0,0.22)] backdrop-blur-xl transition-all duration-500 hover:bg-white/15 md:rounded-full md:px-7"
              >
                <div className="absolute inset-0 bg-linear-to-r from-white/0 via-white/10 to-white/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative z-10 flex items-center justify-between gap-3">
                  <div>
                    <p
                      className="text-[10px] uppercase tracking-[0.25em] text-white/45"
                      style={{
                        fontFamily: "var(--font-menu)",
                      }}
                    >
                      Flushing
                    </p>

                    <span
                      className="mt-1 block text-left text-[13px] leading-normal text-white sm:text-[14px] md:text-[14px]"
                      style={{
                        fontFamily: "var(--font-menu)",
                      }}
                    >
                      41st Rd. Book on Vagaro
                    </span>
                  </div>

                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/10">
                    <ArrowUpRight
                      size={16}
                      className="shrink-0 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                    />
                  </div>
                </div>
              </motion.button>
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 h-40 w-full bg-linear-to-t from-black/70 via-black/20 to-transparent" />
      </section>
      <section className="relative overflow-hidden bg-[#eee5df] min-h-screen flex items-center justify-center px-4 sm:px-6 py-10 lg:py-20">
        <div className="absolute -top-30 -left-30 w-[320px] h-80 bg-[#d8c4b7] rounded-full blur-3xl opacity-30" />
        <div className="absolute -bottom-30 -right-30 w-[320px] h-80 bg-[#c7afa0] rounded-full blur-3xl opacity-20" />

        <div className="relative z-10 max-w-6xl w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center overflow-hidden rounded-4xl lg:rounded-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative h-full order-1"
            >
              <img
                src="https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=1600&auto=format&fit=crop"
                alt="Lunara Spa"
                className="w-full h-80 sm:h-105 lg:h-155 rounded-2xl object-cover"
              />

              <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 bg-white/75 backdrop-blur-xl border border-white/60 rounded-2xl px-4 py-3 sm:px-5 sm:py-4 shadow-xl"
              >
                <p className="text-[9px] sm:text-[10px] tracking-[3px] sm:tracking-[4px] uppercase text-[#8f7666]">
                  Premium Care
                </p>

                <h3
                  className="text-xl sm:text-2xl mt-1 text-[#2a2522]"
                  style={{ fontFamily: "var(--font-menu)" }}
                >
                  Facial & Wellness
                </h3>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 45 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9 }}
              className="order-2 px-5 sm:px-8 md:px-10 lg:px-14 py-10 lg:py-0 flex flex-col justify-center"
            >
              <span className="text-[10px] sm:text-[11px] uppercase tracking-[4px] sm:tracking-[5px] text-[#9b7f6d] mb-3 sm:mb-4">
                Luxury Spa Experience
              </span>

              <h1
                className="text-[34px] sm:text-[44px] md:text-5xl lg:text-[56px] leading-[1.05] uppercase text-[#262220]"
                style={{ fontFamily: "var(--font-menu)" }}
              >
                Lunara <br />
                Spa Lifestyle
              </h1>

              <div className="w-20 sm:w-24 h-0.5 bg-[#5b3b2e] rounded-full mt-5 sm:mt-6" />

              <p className="mt-5 sm:mt-6 text-[14px] sm:text-[15px] md:text-base leading-relaxed text-[#6d625d] max-w-lg">
                Immerse yourself in a peaceful atmosphere designed for beauty,
                relaxation, and rejuvenation with luxurious facial rituals and
                modern wellness treatments.
              </p>

              <div className="mt-7 sm:mt-8 space-y-3 sm:space-y-4">
                <motion.div
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-3 sm:gap-4 rounded-2xl bg-white/55 backdrop-blur-lg border border-white/60 px-4 sm:px-5 py-3.5 sm:py-4 shadow-md"
                >
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#5b3b2e] text-white flex items-center justify-center shadow-lg shrink-0">
                    <Phone size={17} />
                  </div>

                  <div>
                    <p className="text-[9px] sm:text-[10px] tracking-[2px] sm:tracking-[3px] uppercase text-[#9b7f6d]">
                      Call Us
                    </p>

                    <p className="text-[13px] sm:text-[15px] text-[#2e2927]">
                      (866) 686-8680
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-3 sm:gap-4 rounded-2xl bg-white/55 backdrop-blur-lg border border-white/60 px-4 sm:px-5 py-3.5 sm:py-4 shadow-md"
                >
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#5b3b2e] text-white flex items-center justify-center shadow-lg shrink-0">
                    <Mail size={17} />
                  </div>

                  <div className="min-w-0">
                    <p className="text-[9px] sm:text-[10px] tracking-[2px] sm:tracking-[3px] uppercase text-[#9b7f6d]">
                      Email
                    </p>

                    <p className="text-[13px] sm:text-[15px] text-[#2e2927] break-all">
                      info@lunaraspa.com
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-3 sm:gap-4 rounded-2xl bg-white/55 backdrop-blur-lg border border-white/60 px-4 sm:px-5 py-3.5 sm:py-4 shadow-md"
                >
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#5b3b2e] text-white flex items-center justify-center shadow-lg shrink-0">
                    <Clock3 size={17} />
                  </div>

                  <div>
                    <p className="text-[9px] sm:text-[10px] tracking-[2px] sm:tracking-[3px] uppercase text-[#9b7f6d]">
                      Hours
                    </p>

                    <p className="text-[13px] sm:text-[15px] text-[#2e2927]">
                      10 AM — 10 PM
                    </p>
                  </div>
                </motion.div>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                className="mt-8 sm:mt-10 w-full sm:w-fit px-7 sm:px-8 py-4 rounded-full bg-[#5b3b2e] text-white text-[12px] sm:text-sm tracking-[2px] uppercase shadow-[0_12px_30px_rgba(91,59,46,0.35)] hover:bg-[#4a2f24] transition-all duration-300"
                style={{ fontFamily: "var(--font-paytone)" }}
              >
                Book Appointment
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>
      <section className="relative w-full overflow-hidden bg-[#f6f1eb] py-28">
        <div className="absolute inset-0 overflow-hidden opacity-40">
          <div className="absolute -left-30 -top-30 h-80 w-[320px] rounded-full bg-[#efe3d6] blur-3xl" />
          <div className="absolute -bottom-37.5 -right-25 h-75 w-75 rounded-full bg-[#e8ddd2] blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-412.5 px-5 md:px-8">
          <div className="mb-20 flex flex-col items-center text-center">
            <p className="mb-4 font-serif text-[11px] uppercase tracking-[0.45em] text-[#a08f82]">
              Client Experience
            </p>

            <h2 className="max-w-175 font-serif text-4xl leading-tight text-[#2b2724] md:text-6xl">
              Loved by Clients Who Value Luxury Self Care
            </h2>

            <p className="mt-6 max-w-155 text-[15px] leading-[1.9] text-[#7d7268] md:text-[16px]">
              Real experiences from clients who trust our spa for calming,
              personalized, and premium beauty treatments.
            </p>

            <div className="mt-8 h-px w-28 bg-linear-to-r from-transparent via-[#ccb9aa] to-transparent" />
          </div>

          <div className="relative">
            {!isBeginning && (
              <button
                onClick={() => setCurrent((prev) => prev - 1)}
                className="absolute -left-2 top-1/2 z-100 hidden -translate-y-1/2 lg:flex"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#e7ddd3]/70 bg-white/60 text-[#7d7166] backdrop-blur-md transition-all duration-300 hover:scale-105 hover:bg-white hover:text-[#2b2724]">
                  <ChevronLeft size={18} strokeWidth={1.8} />
                </div>
              </button>
            )}

            {!isEnd && (
              <button
                onClick={() => setCurrent((prev) => prev + 1)}
                className="absolute -right-4 top-1/2 z-100 hidden -translate-y-1/2 lg:flex"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#e7ddd3]/70 bg-white/60 text-[#7d7166] backdrop-blur-md transition-all duration-300 hover:scale-105 hover:bg-white hover:text-[#2b2724]">
                  <ChevronRight size={18} strokeWidth={1.8} />
                </div>
              </button>
            )}

            <div className="overflow-hidden">
              <motion.div
                animate={{
                  x:
                    window.innerWidth < 1024
                      ? `-${current * 100}%`
                      : `-${current * 25}%`,
                }}
                transition={{
                  duration: 0.55,
                  ease: [0.22, 1, 0.36, 1],
                }}
                drag={window.innerWidth < 1024 ? "x" : false}
                dragConstraints={{
                  left: 0,
                  right: 0,
                }}
                onDragEnd={(e, info) => {
                  if (window.innerWidth >= 1024) return;

                  if (info.offset.x < -50 && current < reviews.length - 1) {
                    setCurrent((prev) => prev + 1);
                  }

                  if (info.offset.x > 50 && current > 0) {
                    setCurrent((prev) => prev - 1);
                  }
                }}
                className="flex items-start gap-0 lg:gap-7"
              >
                {reviews.map((item, index) => {
                  const isExpanded = expandedReview === index;

                  const words = item.review.split(" ");
                  const shouldTrim = words.length > 26;

                  const previewText = shouldTrim
                    ? words.slice(0, 26).join(" ") + "..."
                    : item.review;

                  return (
                    <motion.div
                      layout
                      transition={{
                        layout: {
                          duration: 0.45,
                          ease: [0.22, 1, 0.36, 1],
                        },
                      }}
                      key={index}
                      className={`group relative flex flex-col overflow-hidden rounded-[34px] border border-white/50 bg-white/75 p-8 backdrop-blur-xl transition duration-500 hover:border-[#e8ddd2] hover:shadow-[0_30px_80px_rgba(0,0,0,0.08)] min-w-full lg:min-w-[calc(25%-24px)] ${
                        isExpanded ? "h-auto min-h-90" : "h-90"
                      }`}
                    >
                      <div className="relative mb-7 flex items-start justify-between">
                        <div className="flex items-center gap-4">
                          <div className="relative">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="h-16 w-16 rounded-full object-cover ring-4 ring-[#f5ece4]"
                            />

                            <div className="absolute -bottom-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#91b497] text-[10px] text-white shadow">
                              ✓
                            </div>
                          </div>

                          <div>
                            <h3 className="max-w-42.5 truncate text-[19px] font-semibold tracking-wide text-[#2d2a26]">
                              {item.name}
                            </h3>

                            <p className="mt-1 text-sm text-[#9d9085]">
                              {item.time}
                            </p>
                          </div>
                        </div>

                        <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#f1e6dc] bg-[#fcfaf8]">
                          <img
                            src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
                            alt="google"
                            className="h-4 w-4"
                          />
                        </div>
                      </div>

                      <div className="mb-6 flex items-center gap-1.5">
                        {[...Array(5)].map((_, idx) => (
                          <Star
                            key={idx}
                            size={17}
                            fill="#d8b36a"
                            stroke="#d8b36a"
                          />
                        ))}
                      </div>

                      <motion.div
                        initial={false}
                        animate={{
                          height: isExpanded ? "auto" : "95px",
                        }}
                        transition={{
                          duration: 0.35,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="overflow-hidden"
                      >
                        <p className="text-[15px] leading-loose text-[#5f5750]">
                          {isExpanded ? item.review : previewText}
                        </p>
                      </motion.div>

                      <div className="mt-auto pt-7">
                        {shouldTrim && (
                          <button
                            onClick={() =>
                              setExpandedReview(isExpanded ? null : index)
                            }
                            className="group inline-flex items-center gap-2 text-sm font-medium tracking-wide text-[#8e8073] transition duration-300 hover:text-[#2d2a26]"
                          >
                            {isExpanded ? "Show less" : "Read more"}

                            <span
                              className={`transition duration-300 ${
                                isExpanded ? "rotate-180" : ""
                              }`}
                            >
                              ↓
                            </span>
                          </button>
                        )}
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>

            <div className="mt-10 flex items-center justify-center gap-2 lg:hidden">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    current === index
                      ? "w-10 bg-[#2d2a26]"
                      : "w-2.5 bg-[#d5c8bc]"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
