const Footer = () => {
  return (
    <footer className="mt-32 pb-10 border-t border-pink-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center pt-8">
          <p className="text-gray-400 text-sm font-medium tracking-wide">
            &copy; {new Date().getFullYear()} <span className="text-pink-400 font-bold">Keisya Shaori</span>. All rights reserved.
          </p>
          <p className="text-[10px] text-gray-300 mt-2 uppercase tracking-[0.2em]">
            Made with ✨ and Passion
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;