"use client";
import { useState } from "react";
import DataImage from "./data";
import { listTools, listProyek } from "./data";
import RabbitEmoji from "/assets/rabbit-emoji.png";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeTab, setActiveTab] = useState("tech"); // State untuk pilih Tech/Tools
  const [activeTabExp, setActiveTabExp] = useState("magang");
  const [modalExp, setModalExp] = useState(null); // Untuk menyimpan data yang muncul di pop-up
  const [currentImageIndex, setCurrentImageIndex] = useState(0);


  const bukaModal = (proyek) => {
    setSelectedProject(proyek);
    setShowModal(true);
    document.body.style.overflow = 'hidden'; 
  };

  const tutupModal = () => {
      setShowModal(false);
      setSelectedProject(null);
      document.body.style.overflow = 'auto';
      setCurrentImageIndex(0);
  };

  
  return (
    <> 
      {/* Tambahkan min-h-screen agar hero memenuhi satu layar penuh dan pt-32 untuk jarak dari navbar */}
      <div className="hero min-h-screen grid md:grid-cols-2 items-center pt-32 pb-10 xl:gap-0 gap-10 grid-cols-1 relative overflow-hidden">
        
        {/* Hiasan Background (Tetap lembut) */}
        <div className="absolute top-20 right-10 w-64 h-64 bg-pink-100/50 rounded-full blur-3xl -z-10 animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-purple-100/50 rounded-full blur-3xl -z-10"></div>

        <div className="animate__animated animate__fadeInUp animate__delay-1s">
          {/* Quote box yang lebih kecil sedikit */}
          <div className="flex items-center gap-3 mb-6 bg-white/60 backdrop-blur-md border border-pink-100 w-fit p-2 px-4 rounded-full shadow-sm shadow-pink-100">
            <img
              src={DataImage.HeroImage}
              alt="Hero Image"
              className="w-7 h-7 rounded-full object-cover border border-pink-200"
              loading="lazy"
            />
            <q className="text-[13px] font-medium text-pink-600 italic">Kode yang indah lahir dari ketekunan. :D</q>
          </div>

          {/* Judul: Dikecilkan dari text-5xl/6xl ke text-4xl/5xl */}
          <h1 className="text-4xl md:text-5xl font-extrabold mb-5 text-gray-800 leading-tight">
            Hi, Saya <span className="text-pink-500">Keisya Shaori Nianindra Putri</span>{" "}
            <span className="inline-block align-middle">
              <img
                src={RabbitEmoji}
                alt="Kelinci lucu"
                 className="inline-block w-10 h-10 ml-2 animate-bounce-small"
              />
            </span>
          </h1>

          {/* Deskripsi: Dikecilkan dari text-lg ke text-base dan max-width dikurangi agar lebih rapi */}
          <p className="text-base leading-relaxed mb-8 text-gray-500 max-w-md">
            Saya memiliki ketertarikan dalam bidang <span className="text-pink-400 font-semibold">Programming</span>. 
            Proses belajar selama dua tahun terakhir telah membentuk cara saya berpikir logis 
            dan menciptakan antarmuka yang menyenangkan bagi pengguna.
          </p>

          {/* Tombol: Diperkecil paddingnya (px-6 py-3) agar tidak terlalu besar */}
          <div className="flex items-center sm:gap-4 gap-3">
            <a
              href=""
              download="CV_Keisya S.N.P.pdf"
              className="bg-pink-400 text-white px-6 py-3 rounded-xl hover:bg-pink-500 transition-all shadow-lg shadow-pink-100 hover:-translate-y-1 flex items-center gap-2 text-sm font-bold"
            >
              Download CV <i className="ri-download-line text-lg"></i>
            </a>
            <a
              href="#proyek"
              className="bg-white px-6 py-3 rounded-xl hover:bg-pink-50 border border-pink-200 text-pink-400 transition-all hover:-translate-y-1 flex items-center gap-2 text-sm font-bold"
            >
              Lihat Proyek <i className="ri-arrow-down-line text-lg"></i>
            </a>
          </div>
        </div>

        {/* Area Foto (Ukuran tetap untuk menjaga balance) */}
        <div className="relative flex justify-center items-center animate__animated animate__fadeInRight animate__delay-1s">
          <div className="absolute inset-0 bg-gradient-to-tr from-pink-200 to-purple-100 rounded-3xl rotate-6 scale-95 opacity-50"></div>
          
          <div className="relative group">
            <img
              src={DataImage.HeroImage}
              alt="Hero Image"
              className="relative w-[320px] md:w-[420px] rounded-3xl shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]"
              loading="lazy"
            />
          </div>
          <div className="absolute -top-4 -right-4 bg-white p-2 rounded-lg shadow-md rotate-12"> 
            <span className="text-xl">✨</span> 
          </div> 
          <div className="absolute -bottom-4 -left-4 bg-white p-2 rounded-lg shadow-md -rotate-12"> 
            <span className="text-xl">🎀</span> 
          </div>
        </div>
      </div>

      {/* tentang */}
{/* --- BAGIAN TENTANG (ABOUT SECTION) --- */}
<div className="tentang mt-24 py-8 container mx-auto px-4" id="tentang">
  {/* --- 1. KARTU PROFIL & EDUKASI --- */}
  <div
    className="w-full p-6 md:p-10 bg-white border-2 border-pink-50 rounded-[35px] shadow-xl shadow-pink-50/50 flex flex-col lg:flex-row gap-10 items-start"
    data-aos="fade-up"
  >
    {/* FOTO PROFIL */}
    <div className="flex-shrink-0 mx-auto lg:mx-0">
      <div className="relative group">
        <div className="absolute inset-0 bg-pink-100 rounded-[25px] rotate-6 group-hover:rotate-3 transition-transform duration-300"></div>
        <img
          src={DataImage.HeroImage}
          alt="Keisya Shaori"
          className="relative w-44 h-56 md:w-52 md:h-64 object-cover rounded-[25px] border-4 border-white shadow-md"
          loading="lazy"
        />
        <div className="absolute -bottom-3 -right-3 bg-white p-2.5 rounded-xl shadow-lg animate-bounce [animation-duration:3s]">
          <span className="text-xl">✨</span>
        </div>
      </div>
    </div>

    {/* DESKRIPSI & STATISTIK */}
    <div className="flex-[1.5]">
      <div className="flex items-center gap-2.5 mb-5">
        <span className="text-2xl">👋</span>
        <h2 className="text-2xl font-black text-gray-800 tracking-tight">Kenalan, Yuk!</h2>
      </div>
      <p className="text-sm text-gray-600 leading-relaxed mb-8 italic">
        Halo, Nama saya <span className="font-bold text-pink-500 not-italic">Keisya Shaori N.P</span>. 
        Sebagai <span className="font-semibold text-purple-500 not-italic text-[12px] bg-purple-50 px-2 py-0.5 rounded-md">junior Web Developer</span>, 
        saya sangat suka merakit kode dari awal hingga menjadi aplikasi yang utuh. 
        Membangun logika di backend serta mempercantik tampilan di frontend adalah keahlian utama saya.
      </p>
      
      <div className="flex gap-4">
        <div className="bg-pink-50/50 p-3 rounded-2xl border border-pink-100 flex-1 text-center">
          <h3 className="text-2xl font-black text-pink-500">4+</h3>
          <p className="text-gray-500 font-bold uppercase text-[9px] tracking-widest mt-0.5">Proyek Selesai</p>
        </div>
        <div className="bg-purple-50/50 p-3 rounded-2xl border border-purple-100 flex-1 text-center">
          <h3 className="text-2xl font-black text-purple-400">1+</h3>
          <p className="text-gray-500 font-bold uppercase text-[9px] tracking-widest mt-0.5">Tahun Belajar</p>
        </div>
      </div>
    </div>

    {/* EDUKASI (SIDEBAR KANAN) */}
    <div className="flex-1 w-full lg:max-w-[260px] bg-gray-50/50 p-5 rounded-[25px] border border-dashed border-pink-200">
      <h3 className="text-md font-bold mb-5 text-gray-800 flex items-center gap-2">
        <span className="text-pink-400 text-sm">🎓</span> Edukasi
      </h3>
      <div className="space-y-5 relative before:absolute before:left-[9px] before:top-2 before:bottom-2 before:w-[1.5px] before:bg-pink-100">
        <div className="relative pl-7">
          <div className="absolute left-0 top-1 w-5 h-5 bg-white border-[3px] border-pink-200 rounded-full z-10"></div>
          <h4 className="font-bold text-gray-800 text-[13px]">SD Negeri 1 Pamarican</h4>
          <p className="text-[11px] text-gray-500 italic">Lulus Tahun 2020</p>
        </div>
        <div className="relative pl-7">
          <div className="absolute left-0 top-1 w-5 h-5 bg-white border-[3px] border-purple-200 rounded-full z-10"></div>
          <h4 className="font-bold text-gray-800 text-[13px]">MtsN 7 Ciamis</h4>
          <p className="text-[11px] text-gray-500 italic">Lulus Tahun 2023</p>
        </div>
        <div className="relative pl-7">
          <div className="absolute left-0 top-1 w-5 h-5 bg-pink-400 border-[3px] border-pink-100 rounded-full z-10 animate-pulse"></div>
          <h4 className="font-bold text-pink-600 text-[13px]">SMK Negeri 1 Banjar</h4>
          <p className="text-[10px] text-gray-400 mt-0.5 uppercase font-bold tracking-tighter">Sekarang — PPLG</p>
        </div>
      </div>
    </div>
  </div>

  {/* --- 2. BAGIAN KEAHLIAN & TEKNOLOGI --- */}
  <div className="mt-20">
    <div className="text-center mb-8" data-aos="fade-up">
      <h2 className="text-2xl md:text-3xl font-black text-gray-800 mb-1 italic">Keahlian & Teknologi ✨</h2>
      <p className="text-xs text-gray-500 italic">Perangkat lunak dan bahasa pemrograman yang saya gunakan.</p>
    </div>

    {/* TOMBOL PEMILIH (TAB SWITCHER) */}
    <div className="flex justify-center mb-10" data-aos="fade-up">
      <div className="flex bg-pink-50/50 p-1.5 rounded-2xl border border-pink-100 shadow-sm">
        <button
          onClick={() => setActiveTab("tech")}
          className={`px-6 py-2 rounded-xl text-sm font-bold transition-all flex items-center gap-2 ${
            activeTab === "tech"
              ? "bg-white text-pink-500 shadow-md scale-105"
              : "text-gray-400 hover:text-pink-400"
          }`}
        >
          <i className="ri-code-s-slash-line"></i> Skills
        </button>
        <button
          onClick={() => setActiveTab("tools")}
          className={`px-6 py-2 rounded-xl text-sm font-bold transition-all flex items-center gap-2 ${
            activeTab === "tools"
              ? "bg-white text-purple-500 shadow-md scale-105"
              : "text-gray-400 hover:text-purple-400"
          }`}
        >
          <i className="ri-tools-line"></i> Tools
        </button>
      </div>
    </div>

    {/* GRID SKILLS (MENGAMBIL DATA DARI data.js) */}
    <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4 md:gap-5 animate__animated animate__fadeIn">
      {listTools
        .filter((t) => {
          if (activeTab === "tech") {
            return ["Language", "Framework", "Javascript Runtime", "Database"].includes(t.ket);
          } else {
            return ["Code Editor", "Repository", "Design App", "Tools"].includes(t.ket);
          }
        })
        .map((tool) => (
          <div
            key={tool.id}
            className={`p-4 bg-white border-2 rounded-[22px] flex items-center gap-3 transition-all duration-300 hover:-translate-y-1.5 shadow-sm group ${
              activeTab === "tech" ? "border-pink-50 hover:border-pink-200" : "border-purple-50 hover:border-purple-200"
            }`}
          >
            <div className={`p-2.5 rounded-xl group-hover:rotate-12 transition-transform duration-300 ${
              activeTab === "tech" ? "bg-pink-50" : "bg-purple-50"
            }`}>
              <img src={tool.gambar} className="w-9 h-9 object-contain" alt={tool.nama} />
            </div>
            <div>
              <h4 className="font-bold text-gray-800 text-[13px] md:text-sm leading-tight">{tool.nama}</h4>
              <p className={`text-[9px] font-bold uppercase tracking-widest mt-0.5 ${
                activeTab === "tech" ? "text-pink-400" : "text-purple-400"
              }`}>
                {tool.ket}
              </p>
            </div>
          </div>
        ))}
    </div>
  </div>
</div>
{/*tentang*/}



{/* --- SECTION EXPERIENCE --- */}
<section id="experience" className="py-20 px-6 bg-white flex flex-col items-center scroll-mt-24">
  <div className="text-center mb-10">
    <h2 className="text-3xl font-bold text-gray-800 flex items-center justify-center gap-2">
      Experience <span className="text-2xl">✨</span>
    </h2>
    <p className="text-gray-400 italic text-xs mt-2">
      Klik tombol untuk melihat detail kegiatanku!
    </p>
  </div>

  {/* Tab Switcher */}
  <div className="flex bg-gray-50 p-1 rounded-2xl border border-pink-50 mb-8 shadow-sm">
    <button
      onClick={() => setActiveTabExp("magang")}
      className={`px-6 py-2 rounded-xl text-xs font-bold transition-all duration-300 ${
        activeTabExp === "magang" 
        ? "bg-white text-pink-500 shadow-sm" 
        : "text-gray-400 hover:text-gray-500"
      }`}
    >
      Magang
    </button>
    <button
      onClick={() => setActiveTabExp("organisasi")}
      className={`px-6 py-2 rounded-xl text-xs font-bold transition-all duration-300 ${
        activeTabExp === "organisasi" 
        ? "bg-white text-pink-500 shadow-sm" 
        : "text-gray-400 hover:text-gray-500"
      }`}
    >
      Organisasi
    </button>
  </div>

  {/* Experience Card - Ukuran diperkecil (max-w-lg) */}
  <div className="w-full max-w-lg">
    {activeTabExp === "magang" ? (
      <div className="border border-pink-50 rounded-[35px] p-8 bg-white shadow-[0_10px_30px_-15px_rgba(255,182,193,0.2)] text-center transition-all hover:shadow-pink-100">
        <span className="bg-pink-50 text-pink-500 px-3 py-1 rounded-full text-[9px] font-black tracking-widest uppercase mb-4 inline-block">
          2 FEB 2026 - 30 MEI 2026
        </span>
        <h3 className="text-xl font-black text-gray-800 mb-1">Web Developer Intern</h3>
        <p className="text-pink-400 text-sm font-medium mb-3">Access Media</p>
        
        {/* Deskripsi Singkat */}
        <p className="text-gray-500 text-xs leading-relaxed mb-6 px-4">
        Membangun fitur aplikasi berbasis Laravel dan optimasi sistem sesuai standar industri.        </p>
        
        <button
          onClick={() => {
            setModalExp({
              title: "Access Media",
              role: "Web Developer Intern",
              tasks: [
                "Membangun web responsif menggunakan laravel.",
                "Slicing desain dari Figma ke komponen kode.",
                "Bekerja sama dalam tim ",
                "Melakukan testing dan debugging fitur aplikasi."
              ],
              images: ["/assets/proyek/intern1.png", "/assets/proyek/intern2.png"]
            });
            document.body.style.overflow = 'hidden';
          }}
          className="bg-[#FF4D91] text-white px-8 py-3 rounded-2xl text-sm font-bold hover:brightness-110 active:scale-95 transition-all mx-auto shadow-md shadow-pink-100"
        >
          Lihat Detail ✨
        </button>
      </div>
    ) : (
      /* Card Organisasi */
      <div className="border border-blue-50 rounded-[35px] p-8 bg-white shadow-[0_10px_30px_-15px_rgba(182,193,255,0.2)] text-center transition-all hover:shadow-blue-100">
        <span className="bg-blue-50 text-blue-500 px-3 py-1 rounded-full text-[9px] font-black tracking-widest uppercase mb-4 inline-block">
          AKTIF ORGANISASI
        </span>
        <h3 className="text-xl font-black text-gray-800 mb-1">Anggota OSIS</h3>
        <p className="text-blue-400 text-sm font-medium mb-3">SMKN 1 Banjar</p>

        {/* Deskripsi Singkat */}
        <p className="text-gray-500 text-xs leading-relaxed mb-6 px-4">
          Berperan aktif dalam koordinasi kegiatan kesiswaan serta membantu pelaksanaan event besar tahunan di sekolah.
        </p>
        
        <button
          onClick={() => {
            setModalExp({
              title: "OSIS SMKN 1 Banjar",
              role: "Anggota Organisasi",
              tasks: [
                "Menyusun proposal kegiatan sekolah.",
                "Mengatur jalannya event kesiswaan.",
                "Melatih komunikasi dan manajemen waktu.",
                "Membangun relasi antar organisasi sekolah."
              ],
              images: ["/assets/proyek/osis1.png", "/assets/proyek/osis2.png"]
            });
            document.body.style.overflow = 'hidden';
          }}
          className="bg-blue-500 text-white px-8 py-3 rounded-2xl text-sm font-bold hover:brightness-110 active:scale-95 transition-all mx-auto shadow-md shadow-blue-100"
        >
          Lihat Detail 👥
        </button>
      </div>
    )}
  </div>

  {/* --- MODAL DETAIL (Tetap sama seperti sebelumnya namun pastikan class-nya benar) --- */}
  {modalExp && (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => { setModalExp(null); document.body.style.overflow = 'auto'; }}></div>
      <div className="bg-white w-full max-w-3xl rounded-[35px] overflow-hidden shadow-2xl relative z-10 flex flex-col max-h-[85vh]">
        {/* Header Modal */}
        <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-white sticky top-0 z-20">
          <div>
            <h3 className="text-lg font-black text-gray-800 leading-none">Detail Kegiatan</h3>
            <p className="text-pink-500 font-bold text-[10px] mt-1 uppercase tracking-widest">@ {modalExp.title}</p>
          </div>
          <button onClick={() => { setModalExp(null); document.body.style.overflow = 'auto'; }} className="p-2 bg-gray-50 hover:bg-pink-50 rounded-full text-gray-400">✕</button>
        </div>

        {/* Body Modal Scrollable */}
        <div className="p-8 overflow-y-auto custom-scrollbar">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-1/2">
              <div className="relative aspect-video bg-gray-100 rounded-[25px] overflow-hidden group shadow-md">
                <img src={modalExp.images[currentImageIndex]} className="w-full h-full object-cover" alt="Documentation" />
                <button onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(prev => prev === 0 ? modalExp.images.length - 1 : prev - 1); }} className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all text-gray-600">←</button>
                <button onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(prev => (prev + 1) % modalExp.images.length); }} className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all text-gray-600">→</button>
              </div>
            </div>
            <div className="w-full md:w-1/2 text-left">
              <p className="font-bold text-[10px] text-gray-400 uppercase tracking-[0.2em] mb-4">Pengalaman Saya:</p>
              <ul className="space-y-3">
                {modalExp.tasks.map((task, index) => (
                  <li key={index} className="flex gap-3 text-sm text-gray-600 leading-relaxed font-medium">
                    <span className="text-pink-400 font-bold">•</span> {task}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )}
</section>


      {/* proyek */}
      <div className="proyek mt-32 py-10 container mx-auto px-4" id="proyek">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl font-black text-gray-800 mb-4 tracking-tight">Portfolio <span className="text-pink-400">Showcase</span> 🎀</h2>
          <p className="text-gray-400 max-w-2xl mx-auto italic text-sm text-opacity-80">Kumpulan karya terbaik saya dalam pengembangan aplikasi web.</p>
        </div>

        {/* Grid Proyek: Dibuat 3 kolom supaya ukuran kartu pas (tidak raksasa) */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10">
          {listProyek.map((proyek) => (
            <div key={proyek.id} className="group bg-white border border-pink-100 rounded-[40px] overflow-hidden hover:shadow-[0_20px_50px_rgba(255,192,203,0.2)] transition-all duration-500 hover:-translate-y-3">
              <div className="relative h-52 overflow-hidden">
                <img src={proyek.gambar} alt={proyek.nama} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              </div>
              <div className="p-8 text-center">
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-pink-400 transition-colors">{proyek.nama}</h3>
                <p className="text-gray-400 text-xs mb-6 line-clamp-2 leading-relaxed">{proyek.desk}</p>
                <div className="flex items-center gap-3">
                  <button onClick={() => bukaModal(proyek)} className="flex-[2] bg-pink-400 text-white py-3 rounded-2xl font-bold text-xs hover:bg-pink-500 shadow-md shadow-pink-100 transition-all active:scale-95">Details <i className="ri-arrow-right-line ml-1"></i></button>
                  {proyek.link && <a href={proyek.link} target="_blank" className="flex-1 p-3 bg-gray-50 text-gray-400 rounded-2xl hover:bg-pink-50 hover:text-pink-400 transition-all border border-gray-100"><i className="ri-external-link-line"></i></a>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

       {/* --- MODAL DETAIL (Persegi Panjang & Aesthetic) --- */}
 {showModal && selectedProject && (
  <div className="fixed inset-0 z-[999] flex items-center justify-center p-2 md:p-4">
    {/* Overlay - Klik di luar untuk tutup */}
    <div 
      className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm transition-opacity" 
      onClick={tutupModal}
    ></div>
    
    {/* Container Modal Utama */}
    <div className="relative bg-white w-full max-w-5xl h-fit max-h-[95vh] rounded-[30px] md:rounded-[40px] shadow-2xl border-[4px] md:border-[6px] border-pink-50 flex flex-col animate__animated animate__zoomIn overflow-hidden">
      
      {/* Header Modal - Tetap di atas (Fixed) */}
      <div className="sticky top-0 z-20 p-4 md:p-5 flex justify-between items-center bg-white/80 backdrop-blur-md border-b border-pink-50">
        <button 
          onClick={tutupModal} 
          className="bg-white p-2 px-5 rounded-full border border-pink-100 text-pink-500 text-[10px] font-bold flex items-center gap-2 hover:bg-pink-500 hover:text-white transition-all shadow-sm active:scale-95"
        >
          <i className="ri-arrow-left-line"></i> BACK
        </button>
      </div>

      {/* Scroll Area - Bagian yang bisa di-scroll */}
      <div className="flex-1 overflow-y-auto p-6 md:p-10 custom-scrollbar bg-white">
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* --- SISI KIRI: TEKS DETAIL --- */}
          <div className="lg:col-span-7 flex flex-col">
            <h2 className="text-2xl md:text-3xl font-black text-gray-800 mb-4 leading-tight">
              {selectedProject.nama}
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed text-sm md:text-base opacity-90">
              {selectedProject.desk}
            </p>

            

            <div>
              <h4 className="font-bold text-gray-400 mb-3 text-[10px] uppercase tracking-widest flex items-center gap-2">
                🛠️ Technologies
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.tools.map((tool, index) => (
                  <span key={index} className="px-4 py-1.5 bg-purple-50 text-purple-400 rounded-xl text-[10px] font-bold border border-purple-100 italic">
                    #{tool}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* --- SISI KANAN: IMAGE SLIDER --- */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="relative group overflow-hidden rounded-[30px] border-4 border-white shadow-xl bg-gray-50">
              <div className="relative h-[250px] md:h-[320px] w-full flex items-center justify-center bg-gray-100">
                {selectedProject.detailGambar && selectedProject.detailGambar.length > 0 ? (
                  <>
                    <img 
                      src={selectedProject.detailGambar[currentImageIndex]} 
                      alt="Preview" 
                      className="max-w-full max-h-full object-contain" 
                    />
                    
                    {selectedProject.detailGambar.length > 1 && (
                      <>
                        <button 
                          onClick={() => setCurrentImageIndex((prev) => (prev === 0 ? selectedProject.detailGambar.length - 1 : prev - 1))}
                          className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/90 p-2 rounded-full text-pink-500 shadow-md z-10"
                        >
                          <i className="ri-arrow-left-s-line text-lg"></i>
                        </button>

                        <button 
                          onClick={() => setCurrentImageIndex((prev) => (prev === selectedProject.detailGambar.length - 1 ? 0 : prev + 1))}
                          className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/90 p-2 rounded-full text-pink-500 shadow-md z-10"
                        >
                          <i className="ri-arrow-right-s-line text-lg"></i>
                        </button>
                      </>
                    )}
                  </>
                ) : (
                  <img src={selectedProject.gambar} className="max-w-full max-h-full object-contain" />
                )}
              </div>
            </div>
            
            {/* Tombol Aksi - Tetap terlihat di bawah slider */}
            <div className="grid grid-cols-2 gap-3 pb-4">
              {selectedProject.link && (
                <a href={selectedProject.link} target="_blank" className="bg-pink-500 text-white py-3 rounded-2xl font-bold text-center text-xs flex items-center justify-center gap-2">
                  Demo 🚀
                </a>
              )}
              <a href="https://github.com/shaori-nianindra" target="_blank" className="bg-gray-900 text-white py-3 rounded-2xl font-bold text-center text-xs flex items-center justify-center gap-2">
                Github <i className="ri-github-fill"></i>
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
)}
      {/* proyek */}

      {/* kontak */}
<div className="kontak mt-20 container mx-auto px-4 max-w-4xl" id="kontak">
  {/* Header Section - Dibuat lebih simpel */}
  <div className="mb-8 text-left">
    <h1
      className="text-3xl font-black text-gray-800"
      data-aos="fade-right"
      data-aos-duration="1000"
      data-aos-once="true"
    >
      Kontak
    </h1>
    <p
      className="text-sm opacity-50 italic mt-1"
      data-aos="fade-right"
      data-aos-duration="1000"
      data-aos-delay="300"
      data-aos-once="true"
    >
      Mari Terhubung & Berkolaborasi ✨
    </p>
  </div>

  {/* Main Layout: 2 Kolom dengan gap yang lebih kecil */}
  <div className="grid lg:grid-cols-2 gap-4 items-center">
    
    {/* KOLOM KIRI: FOTO (Tanpa Background & Border) */}
    

    {/* KOLOM KANAN: DAFTAR KONTAK (Gaya Form Tanpa Kotak Luar) */}
    <div 
      className="flex flex-col gap-3"
      data-aos="fade-left"
      data-aos-duration="1000"
      data-aos-once="true"
    >
      {/* Email */}
      <div className="bg-white border border-pink-100 p-4 rounded-[20px] flex items-center gap-4 shadow-sm">
        <div className="w-10 h-10 bg-pink-100 rounded-xl flex items-center justify-center text-pink-500">
          <i className="ri-mail-line ri-lg"></i>
        </div>
        <div className="flex flex-col">
          <span className="text-[10px] font-bold text-pink-300 uppercase tracking-widest leading-none mb-1">Email Saya</span>
          <span className="text-sm font-bold text-gray-700">keisyashaori678@gmail.com</span>
        </div>
      </div>

      {/* WhatsApp Link */}
      <a 
        href="https://wa.me/62xxxxxxxxxxx" 
        target="_blank" 
        rel="noreferrer"
        className="bg-white border border-pink-100 p-4 rounded-[20px] flex items-center gap-4 shadow-sm hover:shadow-md hover:border-pink-200 transition-all group"
      >
        <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center text-green-500 group-hover:bg-green-500 group-hover:text-white transition-all">
          <i className="ri-whatsapp-line ri-lg"></i>
        </div>
        <div className="flex flex-col">
          <span className="text-[10px] font-bold text-green-300 uppercase tracking-widest leading-none mb-1">Whatsapp</span>
          <span className="text-sm font-bold text-gray-700 italic">Chat Sekarang</span>
        </div>
      </a>

      {/* Instagram Link */}
      <a 
        href="https://instagram.com/keisya_shaori" 
        target="_blank" 
        rel="noreferrer"
        className="bg-white border border-pink-100 p-4 rounded-[20px] flex items-center gap-4 shadow-sm hover:shadow-md hover:border-pink-200 transition-all group"
      >
        <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center text-purple-500 group-hover:bg-purple-500 group-hover:text-white transition-all">
          <i className="ri-instagram-line ri-lg"></i>
        </div>
        <div className="flex flex-col">
          <span className="text-[10px] font-bold text-purple-300 uppercase tracking-widest leading-none mb-1">Instagram</span>
          <span className="text-sm font-bold text-gray-700 italic">@yourname__k</span>
        </div>
      </a>

      {/* Github Link */}
      <a 
        href="https://github.com/shaori-nianindra" 
        target="_blank" 
        rel="noreferrer"
        className="bg-white border border-pink-100 p-4 rounded-[20px] flex items-center gap-4 shadow-sm hover:shadow-md hover:border-pink-200 transition-all group"
      >
        <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center text-gray-800 group-hover:bg-gray-800 group-hover:text-white transition-all">
          <i className="ri-github-line ri-lg"></i>
        </div>
        <div className="flex flex-col">
          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-none mb-1">Github</span>
          <span className="text-sm font-bold text-gray-700 italic">keisya1128</span>
        </div>
      </a>
    </div>

  </div>
</div>
      {/* Modal Pop-up */}
      
    </>
  );
}

export default App;
