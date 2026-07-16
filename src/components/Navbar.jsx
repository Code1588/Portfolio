import { Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-4 left-1/2 z-50 w-[min(92%,80rem)] -translate-x-1/2">
      <div className="glass flex items-center justify-between px-4 py-3 sm:px-6">
        <a href="#home" className="text-xl font-black tracking-tight sm:text-2xl">
          <span className="text-teal-300"></span>
                Hîmånshµ
          <span className="text-orange-300"></span>
        </a>

        <ul className="hidden items-center gap-7 text-sm font-semibold text-slate-300 lg:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <a className="transition hover:text-teal-300" href={item.href}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          aria-label={isOpen ? "Close navigation" : "Open navigation"}
          onClick={() => setIsOpen((current) => !current)}
          className="icon-link lg:hidden"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {isOpen && (
        <div className="glass mt-2 grid gap-1 p-2 lg:hidden">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="rounded-lg px-4 py-3 text-sm font-semibold text-slate-200 transition hover:bg-white/10 hover:text-teal-300"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
