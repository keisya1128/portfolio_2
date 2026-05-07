import { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Deteksi scroll untuk efek glassmorphism
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Beranda", href: "#beranda" },
    { name: "Tentang", href: "#tentang" },
    { name: "Experience", href: "#experience" },
    { name: "Project", href: "#proyek" },
    { name: "Kontak", href: "#kontak" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
        scrolled || isOpen
          ? "bg-white/90 backdrop-blur-lg shadow-[0_4px_30px_rgba(255,182,193,0.2)] py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        
        {/* --- LOGO KEISYA (Cute but Firm) --- */}
        <div className="relative group cursor-pointer">
          <h1 className="text-3xl md:text-4xl font-black tracking-tight transition-transform duration-300 group-hover:scale-105">
            <span className="bg-gradient-to-br from-[#FF6B95] via-[#FF8DA1] to-[#FFB6C1] bg-clip-text text-transparent">
              Keisya
            </span>
            <span className="text-[#FF4D80] drop-shadow-sm">.</span>
          </h1>
          {/* Variasi hiasan bawah logo */}
          <div className="absolute -bottom-1 left-0 w-0 h-1 bg-[#FF6B95] rounded-full transition-all duration-300 group-hover:w-full opacity-50"></div>
        </div>

        {/* --- DESKTOP MENU --- */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="text-sm lg:text-base font-bold text-gray-600 hover:text-[#FF6B95] transition-all duration-300 flex flex-col items-center group"
              >
                {link.name}
                {/* Dot indicator yang muncul saat hover */}
                <span className="w-1.5 h-1.5 bg-[#FF6B95] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-1"></span>
              </a>
            </li>
          ))}
          {/* Tombol Call to Action kecil di ujung navbar */}
        </ul>

        {/* --- HAMBURGER BUTTON (Mobile) --- */}
        <button
          className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-[#FFF0F3] text-[#FF6B95] focus:outline-none transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="relative w-6 h-5">
            <span className={`absolute block h-0.5 w-6 bg-current transform transition duration-500 ease-in-out ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`absolute block h-0.5 w-6 bg-current transform transition duration-500 ease-in-out ${isOpen ? 'opacity-0' : 'translate-y-2'}`}></span>
            <span className={`absolute block h-0.5 w-6 bg-current transform transition duration-500 ease-in-out ${isOpen ? '-rotate-45 translate-y-2' : 'translate-y-4'}`}></span>
          </div>
        </button>
      </div>

      {/* --- MOBILE MENU OVERLAY --- */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl border-t border-[#FFB6C1]/20 overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col p-6 gap-2">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="text-lg font-bold text-gray-700 hover:text-[#FF6B95] hover:bg-[#FFF0F3] px-4 py-3 rounded-2xl flex items-center justify-between transition-all"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
                <span className="text-xl">🌸</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;