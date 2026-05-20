import { motion } from "framer-motion";

const GiftCards = () => {
  return (
    <div>
      <section className="bg-[#f7f3ee] py-16 md:py-20 px-5 sm:px-6 lg:px-14 overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -top-4 -left-4 md:-top-6 md:-left-6 w-full h-full rounded-[28px] md:rounded-[36px] border border-[#d8cfc5]" />

            <img
              src="https://i.ibb.co/SXkxtFpf/Chat-GPT-Image-May-21-2026-at-04-06-48-AM.png"
              alt=""
              className="relative w-full h-80 sm:h-105 md:h-115 object-cover rounded-[28px] md:rounded-[36px] shadow-[0_20px_60px_rgba(0,0,0,0.08)]"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="max-w-140"
          >
            <span className="uppercase tracking-[0.28em] md:tracking-[0.35em] text-[10px] md:text-[11px] text-[#9b8573] mb-4 md:mb-5 block">
              Luxury Gift Card
            </span>

            <h2 className="font-serif text-[32px] sm:text-[38px] md:text-[42px] leading-[1.08] text-[#1f1f1f] mb-5 md:mb-6">
              Give the Gift of Relaxation
            </h2>

            <p className="text-[#6d6d6d] text-[15px] md:text-[16px] leading-[1.9] md:leading-loose font-light mb-8 md:mb-10">
              Purchasing a gift card is simple: visit us in person at our
              Manhattan location or contact us to learn about available online
              or phone purchase options. A Lunara Spa gift card is a thoughtful
              and memorable way to show someone their well-being matters.
            </p>

            <div className="flex items-center gap-4 md:gap-5 flex-wrap">
              <motion.button
                whileHover={{ y: -3, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-[#5c3a2c] hover:bg-[#4d3024] transition-all duration-300 text-white text-[14px] md:text-[15px] font-medium px-7 md:px-8 py-3.5 md:py-4 rounded-full shadow-lg shadow-[#5c3a2c]/10"
              >
                Buy Gift Card
              </motion.button>

              <span className="text-[13px] md:text-[14px] text-[#8a8a8a] tracking-wide">
                Manhattan 33rd St.
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-[#f7f3ee] py-16 md:py-20 px-5 sm:px-6 lg:px-14 overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="max-w-140 order-2 lg:order-1"
          >
            <span className="uppercase tracking-[0.28em] md:tracking-[0.35em] text-[10px] md:text-[11px] text-[#9b8573] mb-4 md:mb-5 block">
              Lunara Gift Card
            </span>

            <h2 className="font-serif text-[32px] sm:text-[38px] md:text-[42px] leading-[1.08] text-[#1f1f1f] mb-5 md:mb-6">
              Give the Gift of Luxury
            </h2>

            <p className="text-[#6d6d6d] text-[15px] md:text-[16px] leading-[1.9] md:leading-loose font-light mb-8 md:mb-10">
              Purchasing a gift card is simple: visit us in person at our
              Flushing location or contact us to learn about available online or
              phone purchase options. However you choose to give, a Lunara Spa
              gift card is a thoughtful, memorable way to show someone that
              their well-being matters. Share the sanctuary—let them discover
              (or rediscover) the art of relaxation at Lunara Spa.
            </p>

            <div className="flex items-center gap-4 md:gap-5 flex-wrap">
              <motion.button
                whileHover={{ y: -3, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-[#5c3a2c] hover:bg-[#4d3024] transition-all duration-300 text-white text-[14px] md:text-[15px] font-medium px-7 md:px-8 py-3.5 md:py-4 rounded-full shadow-lg shadow-[#5c3a2c]/10"
              >
                Buy Gift Card
              </motion.button>

              <span className="text-[13px] md:text-[14px] text-[#8a8a8a] tracking-wide">
                Flushing, NY
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="relative order-1 lg:order-2"
          >
            <div className="absolute -top-4 -right-4 md:-top-6 md:-right-6 w-full h-full rounded-[28px] md:rounded-[36px] border border-[#d8cfc5]" />

            <img
              src="https://i.ibb.co/5gLPF1bC/Chat-GPT-Image-May-21-2026-at-04-45-02-AM.png"
              alt=""
              className="relative w-full h-80 sm:h-105 md:h-115 object-cover rounded-[28px] md:rounded-[36px] shadow-[0_20px_60px_rgba(0,0,0,0.08)]"
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default GiftCards;
