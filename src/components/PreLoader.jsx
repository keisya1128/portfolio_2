import { useState, useEffect } from "react";

const PreLoader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Memberikan waktu loading sedikit lebih lama (2.5 detik) agar animasi lucunya terlihat
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer); // Membersihkan timer saat komponen di-unmount
  }, []);

  return (
    loading && (
      <div className="w-screen h-screen fixed inset-0 flex flex-col items-center justify-center bg-[#FDFBF6] z-[999]">
        {/* Container untuk Blob Decor di Sudut (Opsional, untuk nuansa desain tadi) */}
        <div className="absolute top-0 left-0 w-48 h-48 bg-purple-200/50 rounded-full -translate-x-1/2 -translate-y-1/2 blur-2xl"></div>
        <div className="absolute bottom-0 right-0 w-60 h-60 bg-yellow-100/60 rounded-full translate-x-1/3 translate-y-1/3 blur-2xl"></div>

        {/* --- Area Animasi Lucu (Bouncing Balls) --- */}
        <div className="flex gap-3 mb-6 relative z-10">
          {/* Bola 1 (Ungu) */}
          <div className="w-6 h-6 bg-[#A78BFA] rounded-full animate-bounce [animation-delay:-0.3s]"></div>
          {/* Bola 2 (Biru Muda) */}
          <div className="w-6 h-6 bg-[#A5F3FC] rounded-full animate-bounce [animation-delay:-0.15s]"></div>
          {/* Bola 3 (Pink Creamy) */}
          <div className="w-6 h-6 bg-[#FBCFE8] rounded-full animate-bounce"></div>
        </div>

        {/* --- Teks Pemuatan yang Halus --- */}
        
      </div>
    )
  );
};

export default PreLoader;