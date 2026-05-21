import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const faqs = [
  {
    question: "What services do you offer?",
    answer:
      "We offer a range of professional spa services, including laser treatments, facials, lymphatic therapies, and body massages, all designed to help you relax, rejuvenate, and restore your overall wellness.",
  },
  {
    question: "Do I need to make an appointment?",
    answer:
      "Yes, we recommend booking an appointment in advance to ensure availability and provide you with the best possible experience. You can call at (866) 686-8680 to make a booking or look us up in Vagaro. Walk-ins are welcome based on availability.",
  },
  {
    question: "How long is each session?",
    answer:
      "Our sessions typically range from 30 minutes to 90 minutes. You can choose the duration that best suits your needs and schedule.",
  },
  {
    question: "Is bodywork safe for everyone?",
    answer:
      "Bodywork is generally safe for most people. However, if you have any medical conditions, injuries, or are pregnant, please let us know before your session so we can tailor the treatment for you.",
  },
  {
    question: "Do you offer packages or memberships?",
    answer:
      "Yes, we offer special packages and membership options for clients who wish to enjoy regular treatments. Please contact us or visit our Packages & Membership page for more details.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept cash, credit/debit cards, and selected digital payment methods.",
  },
  {
    question: "Can I cancel or reschedule my appointment?",
    answer:
      "Yes, appointments can be canceled or rescheduled with at least 24 hours’ notice. Late cancellations may be subject to a fee.",
  },
  {
    question: "Is your spa clean and hygienic?",
    answer:
      "Absolutely. We follow strict hygiene and sanitation protocols to ensure a clean, safe, and relaxing environment for every guest.",
  },
  {
    question: "Do you offer gift cards?",
    answer:
      "Yes, gift cards are available and make a perfect gift for any occasion. You can purchase them in-store or online on our website.",
  },
  {
    question: "How can I book an appointment?",
    answer:
      "You can book an appointment by calling us, messaging us, or using the online booking system named Vagaro.",
  },
];

const FAQS = () => {
  const [openIndex, setOpenIndex] = useState(0);
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
                FAQ's
              </h1>
            </motion.div>
          </div>
        </div>
      </section>
      <section className="relative overflow-hidden bg-[#f6f1eb] py-16 md:py-24 px-4 sm:px-6 md:px-10">
        <div className="absolute top-0 left-0 w-[320px] md:w-125 h-80 md:h-125 bg-[#e7ddd1] rounded-full blur-3xl opacity-40 -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-65 md:w-100 h-65 md:h-100 bg-[#efe4d7] rounded-full blur-3xl opacity-40 translate-x-1/3 translate-y-1/3" />

        <div className="relative max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-10 md:mb-14"
          >
            <span className="uppercase tracking-[0.28em] md:tracking-[0.35em] text-[10px] md:text-[12px] text-[#b49b84] font-semibold">
              Frequently Asked Questions
            </span>

            <h2 className="mt-4 text-[30px] sm:text-[38px] md:text-[52px] leading-[1.1] tracking-[-0.04em] font-semibold text-[#1f1f1f]">
              Everything You Need
              <br />
              To Know
            </h2>

            <p className="mt-4 md:mt-5 max-w-2xl mx-auto text-[14px] sm:text-[15px] md:text-[17px] leading-[1.8] md:leading-[1.9] text-[#7a726b] px-2">
              Discover answers to the most common questions about our
              treatments, booking process, memberships, and wellness experience.
            </p>
          </motion.div>

          <div className="space-y-3 md:space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.05,
                  }}
                  viewport={{ once: true }}
                  className={`group overflow-hidden rounded-[22px] md:rounded-[28px] border transition-all duration-500 ${
                    isOpen
                      ? "border-[#d7c4b0] bg-white shadow-[0_15px_40px_rgba(0,0,0,0.05)] md:shadow-[0_20px_60px_rgba(0,0,0,0.06)]"
                      : "border-[#e8ddd2] bg-[#fcfaf8]"
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full flex items-start md:items-center justify-between gap-4 md:gap-6 px-4 sm:px-5 md:px-8 py-5 md:py-7 text-left"
                  >
                    <div className="flex items-start gap-3 sm:gap-4 md:gap-5 flex-1">
                      <div
                        className={`flex items-center justify-center min-w-9.5 md:min-w-10.5 h-9.5 md:h-10.5 rounded-full transition-all duration-500 ${
                          isOpen
                            ? "bg-[#1f1f1f] text-white"
                            : "bg-[#ede4da] text-[#8e7d6d]"
                        }`}
                      >
                        <span className="text-[12px] md:text-[14px] font-semibold">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>

                      <h3 className="text-[15px] sm:text-[16px] md:text-[21px] leading-normal md:leading-[1.4] tracking-[-0.02em] md:tracking-[-0.03em] font-semibold text-[#222] pr-2 md:pr-4">
                        {faq.question}
                      </h3>
                    </div>

                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.35 }}
                      className={`min-w-10.5 md:min-w-12 h-10.5 md:h-12 rounded-full flex items-center justify-center transition-all duration-500 ${
                        isOpen
                          ? "bg-[#1f1f1f] text-white"
                          : "bg-[#f1ebe4] text-[#9d8d7d]"
                      }`}
                    >
                      {isOpen ? (
                        <RemoveIcon className="text-[20px]! md:text-[22px]!" />
                      ) : (
                        <AddIcon className="text-[20px]! md:text-[22px]!" />
                      )}
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          duration: 0.45,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                      >
                        <motion.div
                          initial={{ y: -10 }}
                          animate={{ y: 0 }}
                          exit={{ y: -10 }}
                          transition={{ duration: 0.3 }}
                          className="px-4 sm:px-5 md:px-8 pb-6 md:pb-9"
                        >
                          <div className="pl-0 md:pl-15.5">
                            <div className="w-full h-px bg-[#ece3da] mb-5 md:mb-6" />

                            <p className="max-w-3xl text-[14px] sm:text-[15px] md:text-[16px] leading-[1.9] md:leading-loose text-[#6e675f] font-medium">
                              {faq.answer}
                            </p>
                          </div>
                        </motion.div>
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

export default FAQS;
