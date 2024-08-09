import { Menu, X } from "lucide-react";
import { useState } from "react";
import avatar from "../../assets/avatar.png";
import { navItems } from "../../constants/constants";

const Header = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavBar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

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
              <a
                href=""
                className="bg-gradient-to-r text-lg from-blue-500 to-red-800 text-transparent bg-clip-text"
              >
                Login
              </a>
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
                <a href="" className="text-blue-300">
                  Login
                </a>
              </li>
            </ul>
            <div className="flex space-x-6"></div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
