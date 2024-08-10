import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import HeroSection from "./components/heroSection/HeroSection";
import ServiceSection from "./components/projectSection/ServiceSection";

function App() {
  return (
    <>
      <div className="max-w-7xl mx-auto pt-10 px-6">
        <Header />
        <HeroSection />
        <ServiceSection />
        <Footer />
      </div>
    </>
  );
}

export default App;
