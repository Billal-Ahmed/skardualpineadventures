import { useEffect } from "react";
import { HashRouter, Routes, Route, useLocation, Navigate } from "react-router-dom";
import { AppProvider } from "./context/AppContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import CatalogPage from "./pages/CatalogPage";
import TripDetailPage from "./pages/TripDetailPage";
import ServicesPage from "./pages/ServicesPage";
import ServiceDetailPage from "./pages/ServiceDetailPage";

import AboutPage from "./pages/AboutPage";
import FaqPage from "./pages/FaqPage";
import VisaInfoPage from "./pages/VisaInfoPage";
import PartnershipPage from "./pages/PartnershipPage";
import ContactPage from "./pages/ContactPage";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <HashRouter>
      <AppProvider>
        <ScrollToTop />
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/tours" element={<CatalogPage mode="tours" />} />
              <Route path="/treks" element={<CatalogPage mode="treks" />} />
              <Route path="/tour/:id" element={<TripDetailPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/services/:id" element={<ServiceDetailPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/faq" element={<FaqPage />} />
              <Route path="/visa-info" element={<VisaInfoPage />} />
              <Route path="/partnership" element={<PartnershipPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </AppProvider>
    </HashRouter>
  );
}
