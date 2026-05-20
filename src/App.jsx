import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { Outlet } from "react-router-dom";
import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";

const App = () => {
  const [visible, setVisible] = useState(false);
  // const [popupStep, setPopupStep] = useState(1);
  // const [isModalOpen, setIsModalOpen] = useState(false);

  // const popupImages = [
  //   // "https://i.ibb.co/0jyGrLHP/z7795020552581-68088b912f4a38e29c2456b0b717ad68.jpg",
  //   "https://i.ibb.co/prh9qRrB/img-Pop-Up-Ch-Vk-ZQ6p.jpg",
  // ];

  useEffect(() => {
    const handleScroll = () => {
      requestAnimationFrame(() => {
        setVisible(window.scrollY > 300);
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsModalOpen(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // const handlePopupClick = () => {
  //   setIsModalOpen(false);

  //   setTimeout(() => {
  //     if (popupStep < popupImages.length) {
  //       setPopupStep((prev) => prev + 1);
  //       setIsModalOpen(true);
  //     }
  //   }, 300);
  // };

  return (
    <div className="w-full">
      <Header />
      <Outlet />
      <Footer />

      {/* {isModalOpen && popupStep <= popupImages.length && (
        <div
          onClick={handlePopupClick}
          className="fixed inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center z-50 animate-fadeIn"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative p-2 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-[0_10px_40px_rgba(0,0,0,0.6)] animate-scaleIn"
          >
            <img
              src={popupImages[popupStep - 1]}
              alt={`popup-${popupStep}`}
              onClick={handlePopupClick}
              className="w-87 md:w-120 rounded-2xl cursor-pointer transition duration-300 hover:scale-105"
            />
          </div>
        </div>
      )} */}

      <button
        onClick={scrollToTop}
        className={`fixed bottom-10 right-5 p-3 bg-[#C6A25A] brightness-90 text-black rounded-full shadow-lg transition-opacity duration-300 cursor-pointer ${
          visible ? "opacity-40 hover:opacity-100" : "opacity-0"
        }`}
        aria-label="Scroll to Top"
      >
        <ArrowUp size={24} />
      </button>
    </div>
  );
};

export default App;
