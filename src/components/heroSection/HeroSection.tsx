import { ArrowUpRight } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-left mt-6 lg:mt-20">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-left tracking-wide">
        Olá, Eu sou Antonewton
        <span className="bg-gradient-to-r from-blue-500 to-red-800 text-transparent bg-clip-text">
          {" "}
          Quima{" "}
        </span>
        Desenvolvedor
      </h1>
      <p className="mt-4 text-3xl text-left text-neutral-500 max-w-4xl">
        Unindo design e código, sigo criando projetos únicos.
      </p>
      <div className="flex justify-left mt-5">
        <a
          href="https://tally.so/r/3XDdPj"
          target="_blank"
          className="bg-white flex gap-2 text-black text-xl py-1 px-3  rounded-3xl"
        >
          <span>Vamos construir algo juntos?</span>
          <ArrowUpRight />
        </a>
      </div>

      <div className="flex mt-10 justify-center"></div>
    </div>
  );
};

export default HeroSection;
