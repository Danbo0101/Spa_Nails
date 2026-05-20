import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { Bounce, ToastContainer } from "react-toastify";
import FuzzyText from "./utils/FuzzyText.jsx";
import App from "./App.jsx";
import ScrollToTop from "./routes/ScrollToTop.jsx";
import HomePage from "./component/Page/HomePage.jsx";
import About from "./component/Page/About.jsx";
import GiftCards from "./component/Page/GiftCards.jsx";
import Memberships from "./component/Page/Memberships.jsx";
// import Services from "./component/Page/Services.jsx";
// import Gallery from "./component/Page/Gallery.jsx";
// import Contact from "./component/Page/Contact.jsx";
// import Policies from "./component/Page/Policies.jsx";

const NotFound = () => {
  return (
    <div className="bg-black h-screen flex items-center justify-center">
      <FuzzyText baseIntensity={0.2}>404 Not Found</FuzzyText>
    </div>
  );
};

const Layout = () => {
  return (
    <Suspense fallback="...is loading">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<About />} />
          <Route path="gift-cards" element={<GiftCards />} />
          <Route path="memberships" element={<Memberships />} />
          {/*<Route path="services" element={<Services />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="contact" element={<Contact />} />
          <Route path="privacy" element={<Policies />} /> */}
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </Suspense>
  );
};

export default Layout;
