import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./landingpage/header";
import Footer from "./landingpage/footer";
import HomePage from "./landingpage/home/homepage";
import ContactPage from "./landingpage/contact/contactpage";
import CocurricularPage from "./landingpage/cocurricular/cocurricularpage";
import AdmissionPage from "./landingpage/admission/AdmissionPage";
import AcademicsPage from "./landingpage/academics/academicspage";
import AboutPage from "./landingpage/about/aboutpage";
import Notfound from "./landingpage/Notfound";

import "./App.css";
function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <div>
          <Header />
        </div>
        <div className="body">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/cocurricular" element={<CocurricularPage />} />
            <Route path="/admissions" element={<AdmissionPage />} />
            <Route path="/academics" element={<AcademicsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="*" element={<Notfound />} />
          </Routes>
        </div>
        <div>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
