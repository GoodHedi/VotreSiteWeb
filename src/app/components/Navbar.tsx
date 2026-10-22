import { useState } from "react";
import { ChevronDown, ChevronRight, Menu, ShoppingCart, X } from "lucide-react";

const PETALS = Array.from({ length: 8 }, (_, i) => {
  const angle = (i * Math.PI) / 4;
  return { cx: 16 + 10 * Math.cos(angle), cy: 16 + 10 * Math.sin(angle) };
});

function Logo() {
  return (
    <svg
      viewBox="0 0 32 32"
      className="w-7 h-7 sm:w-8 sm:h-8"
      fill="#ef4d23"
      aria-label="votresiteweb"
      role="img"
    >
      {PETALS.map((p, i) => (
        <circle key={i} cx={p.cx} cy={p.cy} r={3.5} />
      ))}
      <circle cx={16} cy={16} r={3.5} />
    </svg>
  );
}

type NavItem = { label: string; href: string; active?: boolean; dropdown?: boolean };

const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "#", active: true },
  { label: "Features", href: "#features" },
  { label: "About", href: "#about" },
  { label: "Pages", href: "#pages", dropdown: true },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex justify-center pt-4 sm:pt-6 px-3 sm:px-4">
      <nav className="bg-white rounded-full shadow-sm border border-neutral-200 pl-2 pr-2 py-2 w-full max-w-[760px] relative">
        <div className="flex items-center gap-4">
          <a href="#" className="shrink-0 pl-1" aria-label="votresiteweb — accueil">
            <Logo />
          </a>

          <ul className="hidden md:flex items-center gap-6 text-[14px] ml-4">
            {NAV_ITEMS.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className={`flex items-center gap-1.5 ${
                    item.dropdown ? "text-[#ef4d23]" : "text-neutral-900"
                  }`}
                >
                  {item.active && (
                    <span className="w-1.5 h-1.5 rounded-full bg-black" />
                  )}
                  {item.label}
                  {item.dropdown && <ChevronDown className="w-3.5 h-3.5" />}
                </a>
              </li>
            ))}
          </ul>

          <div className="ml-auto flex items-center gap-2 sm:gap-3">
            <button
              type="button"
              aria-label="Cart"
              className="hidden md:inline-flex items-center justify-center w-9 h-9 rounded-full text-neutral-800 hover:bg-neutral-100"
            >
              <ShoppingCart className="w-[18px] h-[18px]" />
            </button>

            <a
              href="#"
              className="inline-flex items-center gap-2 bg-[#ef4d23] text-white rounded-full pl-4 pr-1.5 py-1.5 text-[13px] sm:text-[14px] font-medium whitespace-nowrap"
            >
              <span className="hidden md:inline">Get early access</span>
              <span className="md:hidden">Early access</span>
              <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                <ChevronRight className="w-4 h-4" />
              </span>
            </a>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className="md:hidden inline-flex items-center justify-center w-9 h-9 rounded-full text-neutral-900 hover:bg-neutral-100"
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {open && (
          <div className="md:hidden absolute top-full left-2 right-2 mt-2 bg-white rounded-2xl shadow-lg border border-neutral-200 p-3 z-20">
            <ul className="flex flex-col text-[14px]">
              {NAV_ITEMS.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`flex items-center gap-2 px-3 py-2.5 rounded-xl hover:bg-neutral-100 ${
                      item.dropdown ? "text-[#ef4d23]" : "text-neutral-900"
                    }`}
                  >
                    {item.active && (
                      <span className="w-1.5 h-1.5 rounded-full bg-black" />
                    )}
                    {item.label}
                    {item.dropdown && <ChevronDown className="w-3.5 h-3.5" />}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
}
