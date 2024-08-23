import { BrowserRouter } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import HeroSection from "./components/heroSection/HeroSection";
import Project from "./components/Project/Project";
import ServiceSection from "./components/projectSection/ServiceSection";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="max-w-7xl mx-auto pt-10 px-6">
          <Header />
          <HeroSection />
          <ServiceSection />
          <Project />
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
