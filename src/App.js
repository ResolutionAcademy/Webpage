import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./landingpage/header";
import Footer from "./landingpage/footer";
import HomePage from "./landingpage/home/homepage";
import ContactPage from "./landingpage/contact/contactpage";
import CocurricularPage from "./landingpage/cocurricular/cocurricularpage";
import AdmissionPage from "./landingpage/admission/AdmissionPage";
import AcademicsPage from "./landingpage/academics/academicspage";
import AboutUsPage from "./landingpage/aboutus/AboutUsPage";
import Notfound from "./landingpage/Notfound";
import AdmissionFaqPage from "./landingpage/admission/AdmissionFaqPage";
import AptituteTestPage from "./landingpage/admission/AptituteTestPage";
import FeeStructurePage from "./landingpage/admission/FeeStructurePage";



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
            <Route path="/cocurricula" element={<CocurricularPage />} />
            <Route path="/admissions/faq" element={<AdmissionFaqPage />} />
            <Route path="/admissions/test" element={<AptituteTestPage/>}/>
            <Route path="/admissions/journey" element={<AdmissionPage/>}/>
            <Route path="/admissions/fees" element={<FeeStructurePage/>}/>
            <Route path="/academics" element={<AcademicsPage />} />
            <Route path="/about" element={<AboutUsPage />} />
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
