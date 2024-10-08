import { Hammer } from "lucide-react";

const About = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto pt-10 px-6 flex flex-col items-center justify-center h-screen text-center">
        <Hammer className="w-16 h-16 text-blue-600 mb-4" />
        <h1 className="text-3xl font-bold text-gray-800">Em construção</h1>
        <p className="text-gray-600 mt-2">
          Esta página estará disponível em breve. Fique atento!
        </p>
      </div>
    </>
  );
};

export default About;
