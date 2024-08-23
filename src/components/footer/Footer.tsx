import { ArrowUpRight } from "lucide-react";

const Footer = () => {
  return (
    <>
      <footer className="mt-10 py-8 border-t border-neutral-800 flex flex-col items-center text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold">
          Vamos construir algo incrível juntos!
        </h2>
        <p className="mt-4 text-lg text-neutral-500 max-w-2xl">
          Estou disponível para novos projetos e colaborações. Vamos conversar?
        </p>
        <div className="flex justify-center mt-5">
          <a
            href="https://tally.so/r/3XDdPj"
            target="_blank"
            className="bg-white flex gap-2 text-black text-xl py-1 px-3 rounded-3xl"
          >
            <span>Entre em contato</span>
            <ArrowUpRight />
          </a>
        </div>
        <div className="mt-8 text-neutral-500 text-sm">
          © {new Date().getFullYear()} Antonewton Quima. Todos os direitos
          reservados.
        </div>
      </footer>
    </>
  );
};

export default Footer;
