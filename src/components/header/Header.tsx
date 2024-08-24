import { Menu, X } from "lucide-react";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import avatar from "../../assets/avatar.png";
import { navItems } from "../../constants/constants";

const Header = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loginInput, setLoginInput] = useState(Array(10).fill(""));

  const inputRefs = useRef<Array<HTMLInputElement | null>>([]);

  const toggleNavBar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);

    // Limpa as caixas de entrada ao fechar o modal e foca na primeira caixa ao abrir o modal
    if (!isModalOpen) {
      setLoginInput(Array(10).fill(""));
      setTimeout(() => {
        inputRefs.current[0]?.focus();
      }, 0);
    } else {
      setLoginInput(Array(10).fill(""));
    }
  };

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const newLoginInput = [...loginInput];
    newLoginInput[index] = e.target.value.slice(0, 1); // Limita a 1 caractere
    setLoginInput(newLoginInput);

    // Move o foco para o próximo input se houver um próximo
    if (e.target.value && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1]?.focus();
    }

    // Mover o foco para o campo anterior se o usuário apagar o caractere
    if (!e.target.value && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  useEffect(() => {
    // Verifica se todos os campos foram preenchidos
    if (loginInput.every((char) => char !== "")) {
      handleLogin();
    }
  }, [loginInput]);

  const handleLogin = () => {
    // Lógica para tratar o login
    console.log("Login Input:", loginInput.join(""));
    // Aqui você pode adicionar a lógica de autenticação ou enviar o loginInput para o backend.
    setIsModalOpen(false);
  };

  // Fechar modal ao pressionar Esc
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsModalOpen(false);
        // Limpa as caixas de entrada ao fechar o modal
        if (isModalOpen) {
          setLoginInput(Array(10).fill(""));
        }
      }
    };

    if (isModalOpen) {
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isModalOpen]);

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border my-4 rounded-full border-neutral-700/80">
      <div className="container px-5 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <img className="h-10 w-10 mr-2" src={avatar} alt="logo" />
            <span className="text-xl tracking-tight">antonewton</span>
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => (
              <li key={index}>
                <a className="text-lg" href={item.href}>
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <button
                onClick={toggleModal}
                className="bg-gradient-to-r text-lg from-blue-500 to-red-800 text-transparent bg-clip-text"
              >
                Login
              </button>
            </li>
          </ul>

          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavBar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 border border-t-0 mt-2 rounded-xl border-neutral-700/80 bg-neutral-900 w-64 p-8 flex flex-col justify-center items-center lg:hidden">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-4 px-5">
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
              <li className="py-4 px-5">
                <a onClick={toggleModal} href="" className="text-blue-300">
                  Login
                </a>
              </li>
            </ul>
            <div className="flex space-x-6"></div>
          </div>
        )}

        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-neutral-800 p-8 rounded-lg shadow-lg text-white">
              <h2 className="text-lg font-semibold mb-4">
                Digite sua palavra de login
              </h2>
              <div className="flex justify-center space-x-2">
                {loginInput.map((value, index) => (
                  <input
                    key={index}
                    ref={(el) => (inputRefs.current[index] = el)}
                    type="text"
                    value={value}
                    onChange={(e) => handleInputChange(e, index)}
                    maxLength={1}
                    className="w-10 h-10 text-center border border-gray-600 rounded-lg bg-neutral-700 text-white"
                  />
                ))}
              </div>
              <div className="mt-6 flex justify-center space-x-4">
                <button
                  onClick={handleLogin}
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg"
                >
                  Login
                </button>
                <button
                  onClick={toggleModal}
                  className="px-4 py-2 bg-red-500 text-white rounded-lg"
                >
                  Cancelar
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
