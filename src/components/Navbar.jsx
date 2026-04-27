import { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // State untuk buka/tutup menu mobile

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { name: "Beranda", href: "#beranda" },
    { name: "Tentang", href: "#tentang" },
    { name: "Experience", href: "#experience" },
    { name: "Project", href: "#proyek" },
    { name: "Kontak", href: "#kontak" },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled || isOpen ? "bg-white/90 backdrop-blur-lg shadow-md py-4" : "bg-transparent py-7"
    }`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="logo">
          <h1 className="text-3xl font-bold text-black">Keisya</h1>
        </div>

        {/* Menu Navigasi Desktop - Muncul di layar md ke atas */}
        <ul className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a 
                href={link.href} 
                className="text-lg font-medium hover:text-blue-600 transition-colors"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Tombol Hamburger - Muncul hanya di layar kecil (HP) */}
        <button 
          className="md:hidden text-black focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            )}
          </svg>
        </button>
      </div>

      {/* Menu Navigasi Mobile - Muncul saat diklik (isOpen) */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-white ${
        isOpen ? "max-h-screen opacity-100 border-t" : "max-h-0 opacity-0"
      }`}>
        <ul className="flex flex-col p-6 gap-4">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a 
                href={link.href} 
                className="text-lg font-medium block hover:text-blue-600"
                onClick={() => setIsOpen(false)} // Otomatis tutup menu saat link diklik
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;