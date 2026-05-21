import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const galleryImagesLunaraManhattan = [
  "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=1400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?q=80&w=1400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=1400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?q=80&w=1400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?q=80&w=1400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=1400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1400&auto=format&fit=crop",
];

const galleryImagesLunaraFlushing = [
  "https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=1400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?q=80&w=1400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=1400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=1400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?q=80&w=1400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?q=80&w=1400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1400&auto=format&fit=crop",
];

const Locations = () => {
  return (
    <div>
      <LunaraManhattanGallery />
      <LunaraFlushingGallery />
    </div>
  );
};

const LunaraManhattanGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openImage = (index) => {
    setSelectedImage(index);
    document.body.style.overflow = "hidden";
  };

  const closeImage = () => {
    setSelectedImage(null);
    document.body.style.overflow = "auto";
  };

  const nextImage = () => {
    setSelectedImage((prev) =>
      prev === galleryImagesLunaraManhattan.length - 1 ? 0 : prev + 1,
    );
  };

  const prevImage = () => {
    setSelectedImage((prev) =>
      prev === 0 ? galleryImagesLunaraManhattan.length - 1 : prev - 1,
    );
  };

  return (
    <section className="relative bg-[#f6f3ef] py-20 md:py-28 px-5 md:px-10 lg:px-16 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.9),transparent_45%)]" />

      <div className="relative max-w-375 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-14 md:mb-20"
        >
          <span className="uppercase tracking-[0.35em] text-[11px] text-[#a1907e] block mb-4">
            Lunara Spa Interior
          </span>

          <h2 className="font-serif text-[36px] md:text-[64px] text-[#1f1f1f] tracking-[-0.04em] leading-none">
            MANHATTAN <span className="text-[75%]">33RD ST.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
          {galleryImagesLunaraManhattan.map((image, index) => (
            <motion.button
              key={index}
              onClick={() => openImage(index)}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.55,
                delay: index * 0.03,
              }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-[28px] bg-white shadow-[0_15px_60px_rgba(0,0,0,0.06)]"
            >
              <div className="absolute inset-0 z-10 bg-linear-to-t from-black/40 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />

              <img
                src={image}
                alt=""
                className="w-full h-47.5 md:h-65 object-cover transition duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 rounded-[28px] border border-white/0 group-hover:border-white/20 z-20 transition duration-500" />

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileHover={{ opacity: 1, y: 0 }}
                className="absolute bottom-5 left-5 z-30"
              >
                <span className="text-white text-[11px] md:text-sm tracking-[0.25em] uppercase">
                  Explore Space
                </span>
              </motion.div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.button
              onClick={closeImage}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.08 }}
              className="absolute top-5 right-5 md:top-8 md:right-8 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 flex items-center justify-center text-white transition z-50"
            >
              <X size={22} />
            </motion.button>

            <motion.button
              onClick={prevImage}
              whileTap={{ scale: 0.92 }}
              whileHover={{ scale: 1.08 }}
              className="absolute left-3 md:left-8 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 flex items-center justify-center text-white transition z-50"
            >
              <ChevronLeft size={24} />
            </motion.button>

            <motion.button
              onClick={nextImage}
              whileTap={{ scale: 0.92 }}
              whileHover={{ scale: 1.08 }}
              className="absolute right-3 md:right-8 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 flex items-center justify-center text-white transition z-50"
            >
              <ChevronRight size={24} />
            </motion.button>

            <motion.div
              key={selectedImage}
              initial={{ opacity: 0, scale: 0.92, y: 35 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94 }}
              transition={{ duration: 0.45 }}
              className="relative w-full max-w-7xl"
            >
              <img
                src={galleryImagesLunaraManhattan[selectedImage]}
                alt=""
                className="w-full max-h-[88vh] object-contain rounded-4xl shadow-[0_25px_120px_rgba(0,0,0,0.55)]"
              />

              <div className="absolute bottom-5 left-1/2 -translate-x-1/2 px-5 py-2 rounded-full bg-white/10 backdrop-blur-2xl border border-white/10">
                <span className="text-white text-xs md:text-sm tracking-[0.22em] uppercase">
                  {selectedImage + 1} / {galleryImagesLunaraManhattan.length}
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

const LunaraFlushingGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openImage = (index) => {
    setSelectedImage(index);
    document.body.style.overflow = "hidden";
  };

  const closeImage = () => {
    setSelectedImage(null);
    document.body.style.overflow = "auto";
  };

  const nextImage = () => {
    setSelectedImage((prev) =>
      prev === galleryImagesLunaraFlushing.length - 1 ? 0 : prev + 1,
    );
  };

  const prevImage = () => {
    setSelectedImage((prev) =>
      prev === 0 ? galleryImagesLunaraFlushing.length - 1 : prev - 1,
    );
  };

  return (
    <section className="relative bg-[#f3efe9] py-20 md:py-28 px-5 md:px-10 lg:px-16 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-87.5 bg-linear-to-b from-[#ebe3da] to-transparent" />

      <div className="relative max-w-375 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-14 md:mb-20"
        >
          <span className="uppercase tracking-[0.35em] text-[11px] text-[#9b8d80] block mb-4">
            Lunara Spa Interior
          </span>

          <h2 className="font-serif text-[34px] md:text-[64px] text-[#1f1f1f] tracking-[-0.04em] leading-none">
            FLUSHING <span className="text-[75%]">41ST RD.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
          {galleryImagesLunaraFlushing.map((image, index) => (
            <motion.button
              key={index}
              onClick={() => openImage(index)}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.55,
                delay: index * 0.03,
              }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-[28px] bg-white shadow-[0_15px_60px_rgba(0,0,0,0.06)]"
            >
              <div className="absolute inset-0 z-10 bg-linear-to-t from-black/40 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />

              <img
                src={image}
                alt=""
                className="w-full h-47.5 md:h-65 object-cover transition duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 rounded-[28px] border border-white/0 group-hover:border-white/20 z-20 transition duration-500" />

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileHover={{ opacity: 1, y: 0 }}
                className="absolute bottom-5 left-5 z-30"
              >
                <span className="text-white text-[11px] md:text-sm tracking-[0.25em] uppercase">
                  Explore Space
                </span>
              </motion.div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.button
              onClick={closeImage}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.08 }}
              className="absolute top-5 right-5 md:top-8 md:right-8 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 flex items-center justify-center text-white transition z-50"
            >
              <X size={22} />
            </motion.button>

            <motion.button
              onClick={prevImage}
              whileTap={{ scale: 0.92 }}
              whileHover={{ scale: 1.08 }}
              className="absolute left-3 md:left-8 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 flex items-center justify-center text-white transition z-50"
            >
              <ChevronLeft size={24} />
            </motion.button>

            <motion.button
              onClick={nextImage}
              whileTap={{ scale: 0.92 }}
              whileHover={{ scale: 1.08 }}
              className="absolute right-3 md:right-8 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 flex items-center justify-center text-white transition z-50"
            >
              <ChevronRight size={24} />
            </motion.button>

            <motion.div
              key={selectedImage}
              initial={{ opacity: 0, scale: 0.92, y: 35 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94 }}
              transition={{ duration: 0.45 }}
              className="relative w-full max-w-7xl"
            >
              <img
                src={galleryImagesLunaraFlushing[selectedImage]}
                alt=""
                className="w-full max-h-[88vh] object-contain rounded-4xl shadow-[0_25px_120px_rgba(0,0,0,0.55)]"
              />

              <div className="absolute bottom-5 left-1/2 -translate-x-1/2 px-5 py-2 rounded-full bg-white/10 backdrop-blur-2xl border border-white/10">
                <span className="text-white text-xs md:text-sm tracking-[0.22em] uppercase">
                  {selectedImage + 1} / {galleryImagesLunaraFlushing.length}
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Locations;
