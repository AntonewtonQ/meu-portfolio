import HeroSection from "../heroSection/HeroSection";
import ServiceSection from "../projectSection/ServiceSection";
import Project from "../Project/Project";

const Home = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto pt-10 px-6">
        <HeroSection />
        <ServiceSection />
        <Project />
      </div>
    </>
  );
};

export default Home;
