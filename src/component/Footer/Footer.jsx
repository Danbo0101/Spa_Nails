import { motion } from "framer-motion";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import EastRoundedIcon from "@mui/icons-material/EastRounded";

const locations = [
  {
    title: "Flushing",
    address1: "133-20 41st Rd., Unit 7A",
    address2: "Flushing, NY 11355",
    map: "https://maps.google.com/maps?q=133-20%2041st%20Rd%20Flushing%20NY%2011355&t=&z=15&ie=UTF8&iwloc=&output=embed",
  },
  {
    title: "Manhattan",
    address1: "41 W. 33rd St., Unit 200",
    address2: "New York, NY 10001",
    map: "https://maps.google.com/maps?q=41%20W%2033rd%20St%20New%20York%20NY%2010001&t=&z=15&ie=UTF8&iwloc=&output=embed",
  },
];

const Footer = () => {
  return (
    <footer className="relative w-screen overflow-hidden bg-[#f4efeb] text-[#4a3128]">
      <div className="absolute inset-0 opacity-40">
        <div className="absolute -left-30 -top-30 h-80 w-[320px] rounded-full bg-[#e8d8cf] blur-3xl" />
        <div className="absolute -bottom-35 -right-20 h-80 w-[320px] rounded-full bg-[#eadfd7] blur-3xl" />
      </div>

      <div className="relative ">
        <div className="border-b border-[#e8ddd6]">
          <div className="mx-auto grid max-w-425 lg:grid-cols-2">
            {locations.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.12 }}
                viewport={{ once: true }}
                className={`group relative overflow-hidden px-5 py-10 sm:px-8 lg:px-10 lg:py-12 ${
                  index === 0
                    ? "border-b border-[#e8ddd6] lg:border-b-0 lg:border-r"
                    : ""
                }`}
              >
                <div className="absolute inset-0 bg-linear-to-br from-white/80 to-[#f8f3ef]/40 opacity-0 transition duration-500 group-hover:opacity-100" />

                <div className="relative z-10">
                  <div className="mb-6 flex items-center justify-between">
                    <div>
                      <p className="mb-1 text-[10px] uppercase tracking-[0.35em] text-[#a18476]">
                        Lunara Spa
                      </p>

                      <h3 className="text-[24px] font-light tracking-tight text-[#3b241d] sm:text-[28px]">
                        {item.title}
                      </h3>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#5c4036] text-white shadow-[0_8px_24px_rgba(92,64,54,0.18)]">
                      <LocationOnRoundedIcon sx={{ fontSize: 18 }} />
                    </div>

                    <div className="space-y-1 text-[13px] leading-relaxed text-[#7b675f] sm:text-[14px]">
                      <p>{item.address1}</p>
                      <p>{item.address2}</p>
                    </div>
                  </div>

                  <div className="mt-6 overflow-hidden rounded-3xl border border-[#eee4de] bg-white p-2 shadow-[0_20px_60px_rgba(0,0,0,0.05)]">
                    <iframe
                      src={item.map}
                      loading="lazy"
                      className="h-55 w-full rounded-[18px]"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mx-auto flex max-w-425 flex-col gap-10 px-5 py-10 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            <h2 className="text-[34px] font-extralight tracking-[0.18em] text-[#40261f] sm:text-[44px]">
              LUNARA
            </h2>

            <p className="mt-1 text-[10px] tracking-[0.42em] text-[#9a7d71]">
              SPA • LIFESTYLE
            </p>
          </motion.div>

          <motion.a
            href="tel:8666868680"
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="group flex items-center justify-center gap-4 rounded-full border border-[#e6dad3] bg-white px-5 py-4 shadow-[0_14px_40px_rgba(0,0,0,0.04)] transition hover:border-[#d7c4bb]"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#5c4036] text-white transition group-hover:rotate-6">
              <PhoneRoundedIcon sx={{ fontSize: 20 }} />
            </div>

            <div className="text-left">
              <p className="text-[9px] uppercase tracking-[0.3em] text-[#a2877a]">
                Book Appointment
              </p>

              <span className="text-[17px] font-medium tracking-tight text-[#5c4036] sm:text-[18px]">
                (866) 686-8680
              </span>
            </div>
          </motion.a>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3"
          >
            {[
              <FacebookRoundedIcon sx={{ fontSize: 20 }} />,
              <InstagramIcon sx={{ fontSize: 20 }} />,
            ].map((icon, index) => (
              <motion.a
                key={index}
                href="#"
                whileHover={{ y: -4 }}
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#e7ddd7] bg-white text-[#5d4037] shadow-[0_10px_30px_rgba(0,0,0,0.04)] transition hover:bg-[#5d4037] hover:text-white"
              >
                {icon}
              </motion.a>
            ))}
          </motion.div>
        </div>

        <div className="border-t border-[#e8ddd6] bg-white/40 backdrop-blur-sm">
          <div className="mx-auto flex max-w-425 flex-col items-center justify-between gap-3 px-5 py-4 text-center text-[11px] text-[#8b776e] sm:flex-row sm:text-left lg:px-10">
            <p>© 2026 Danbo. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
