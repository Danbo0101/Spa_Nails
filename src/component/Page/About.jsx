const About = () => {
  return (
    <div>
      <section
        className="relative h-[64vh] overflow-hidden"
        style={{
          backgroundImage:
            'url("https://i.ibb.co/SXkxtFpf/Chat-GPT-Image-May-21-2026-at-04-06-48-AM.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className="absolute inset-0 md:hidden"
          style={{
            backgroundImage:
              'url("https://i.ibb.co/nM3QsL4V/Chat-GPT-Image-May-21-2026-at-04-13-54-AM.png")',
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </section>
      <section className="bg-[#f8f4ef] py-24 px-6 md:px-12 lg:px-20 overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-start">
          <div>
            <span
              className="uppercase tracking-[0.3em] text-[12px] text-[#9b8b7a] block mb-5"
              style={{ fontFamily: '"Montserrat", sans-serif' }}
            >
              Luxury Wellness Experience
            </span>

            <h2
              className="text-[44px] md:text-[64px] leading-[1.05] text-[#1f1f1f] mb-8"
              style={{
                fontFamily: '"Cormorant Garamond", serif',
                fontWeight: 600,
              }}
            >
              Welcome to <br />
              Lunara Spa
            </h2>

            <div
              className="space-y-7 text-[#666666]"
              style={{
                fontFamily: '"Montserrat", sans-serif',
              }}
            >
              <p className="text-[17px] leading-loose max-w-190">
                At Lunara Spa, we believe self-care should feel luxurious,
                calming, and accessible — not something reserved for special
                occasions.
              </p>

              <p className="text-[17px] leading-loose max-w-190">
                We created Lunara Spa to offer{" "}
                <span className="font-semibold text-[#444]">
                  a peaceful sanctuary with premium treatments
                </span>{" "}
                where every guest can relax, recharge, and reconnect with
                themselves at an{" "}
                <span className="font-semibold text-[#444]">
                  honest and welcoming experience.
                </span>
              </p>

              <p className="text-[17px] leading-loose max-w-190">
                From soothing massages to rejuvenating skincare rituals, every
                detail at Lunara Spa is designed to help you slow down, restore
                balance, and leave feeling renewed in both body and mind.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white/70 backdrop-blur-sm border border-[#e8ddd2] rounded-4xl p-8 md:p-10 shadow-[0_10px_40px_rgba(0,0,0,0.04)]">
              <h3
                className="text-[32px] text-[#1f1f1f] mb-8"
                style={{
                  fontFamily: '"Cormorant Garamond", serif',
                  fontWeight: 600,
                }}
              >
                Our Philosophy
              </h3>

              <ul
                className="space-y-5 text-[#5f5f5f]"
                style={{
                  fontFamily: '"Montserrat", sans-serif',
                }}
              >
                {[
                  "Create moments of deep relaxation and calm",
                  "Restore natural beauty through mindful care",
                  "Encourage balance between body, mind, and soul",
                  "Help every guest feel refreshed and confident",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <div className="w-2 h-2 rounded-full bg-[#b89b7a] mt-3 shrink-0" />

                    <span className="text-[16px] leading-[1.9] font-medium">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="w-full h-px bg-[#eadfd5] my-8" />

              <p
                className="text-[16px] leading-loose text-[#6a6a6a]"
                style={{
                  fontFamily: '"Montserrat", sans-serif',
                }}
              >
                At Lunara Spa, wellness is more than beauty — it’s about
                creating a space where you can pause, breathe, and reconnect
                with your inner peace.
              </p>
            </div>

            <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#efe2d5] rounded-full blur-3xl opacity-60" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#f3ebe3] rounded-full blur-3xl opacity-60" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
