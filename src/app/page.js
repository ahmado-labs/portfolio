"use client";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const elements = document.querySelectorAll(".fade-section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach((el) => observer.observe(el));
  }, []);

  return (
    <>
      {/* HERO */}
      <main className="relative min-h-screen bg-black text-white flex items-center justify-center px-6 overflow-hidden">
        
        <div className="absolute w-[500px] h-[500px] bg-purple-500/30 rounded-full blur-3xl top-[-100px] left-[-100px]"></div>
        <div className="absolute w-[400px] h-[400px] bg-blue-500/20 rounded-full blur-3xl bottom-[-100px] right-[-100px]"></div>

        <div className="text-center max-w-2xl relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            @ahmadoe
          </h1>

          <h2 className="text-xl md:text-2xl text-gray-300 mb-6">
            “The visible carries the invisible”
          </h2>

          <p className="text-gray-300 mb-8">
            Mengolah gagasan menjadi visual yang dapat dipahami, dengan perhatian pada detail, struktur, dan pesan yang ingin disampaikan.
          </p>

          <div className="flex justify-center gap-4">
            <button className="bg-white text-black px-6 py-3 rounded-full font-medium hover:opacity-80 transition">
              View Portfolio
            </button>

            <button className="border border-white px-6 py-3 rounded-full font-medium hover:bg-white hover:text-black transition">
              Contact Me
            </button>
          </div>
        </div>
      </main>

      {/* PORTFOLIO */}
      <section className="bg-black text-white py-28 px-6 border-t border-gray-800 fade-section">
        <div className="max-w-6xl mx-auto">
          
          {/* Judul */}
          <h2 className="text-4xl font-bold mb-12 text-center">
            Jejak Visual
          </h2>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Item 1 */}
            <a href="https://stock.adobe.com/id/contributor/205709091/Ahmad"
                target="_blank"
                className="group block bg-gray-900 rounded-2xl overflow-hidden transform transition duration-300 hover:scale-[1.03] hover:shadow-[0_0_30px_rgba(168,85,247,0.2)]">
              
              <div className="relative overflow-hidden">
                <img 
                  src="/images/Adobe.png" 
                  alt="Project 1"
                  className="w-full h-48 object-cover group-hover:scale-110 transition duration-500"
                />

                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition">
                  <span className="text-white text-sm">Lihat Detail</span>
                </div>
              </div>

              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2 group-hover:text-purple-400 transition">
                  Adobe Stock Contributor
                </h3>
                <p className="text-gray-300 text-sm">
                  Membuat dan mengunggah aset visual yang dirancang untuk kebutuhan komersial, dengan fokus pada konsistensi visual, kualitas, dan kegunaan.
                </p>
              </div>

            </a>

            {/* Item 2 */}
            <a href="https://www.myfonts.com/collections/abda-bil-qalam-foundry?sort_by=price-ascending&pageType=foundryPage" 
                target="_blank"
                className="group block bg-gray-900 rounded-2xl overflow-hidden transform transition duration-300 hover:scale-[1.03] hover:shadow-[0_0_30px_rgba(168,85,247,0.2)]">
              
              <div className="relative overflow-hidden">
                <img 
                  src="/images/myfont.png" 
                  alt="Project 1"
                  className="w-full h-48 object-cover group-hover:scale-110 transition duration-500"
                />

                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition">
                  <span className="text-white text-sm">Lihat Detail</span>
                </div>
              </div>

              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2 group-hover:text-purple-400 transition">
                  Foundry “Abda bil Qalam” — MyFonts (Monotype)
                </h3>
                <p className="text-gray-300 text-sm">
                  Menghadirkan karya tipografi melalui platform MyFonts sebagai bagian dari pengembangan dan eksplorasi desain huruf.
                </p>
              </div>

            </a>

            {/* Item 3 */}
            <a href="https://www.youtube.com/watch?v=8VJ8xalz5mA" 
                target="_blank"
                className="group block bg-gray-900 rounded-2xl overflow-hidden transform transition duration-300 hover:scale-[1.03] hover:shadow-[0_0_30px_rgba(168,85,247,0.2)]">
              
              <div className="relative overflow-hidden">
                <img 
                  src="/images/videolead.png" 
                  alt="Project 1"
                  className="w-full h-48 object-cover group-hover:scale-110 transition duration-500"
                />

                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition">
                  <span className="text-white text-sm">Lihat Detail</span>
                </div>
              </div>

              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2 group-hover:text-purple-400 transition">
                  Video Production Team Lead
                </h3>
                <p className="text-gray-300 text-sm">
                  Terlibat dalam proses produksi video, mencakup penyusunan konsep, pengambilan gambar, hingga penyuntingan, dengan pendekatan yang terarah dan kolaboratif.
                </p>
              </div>

            </a>

          </div>

        </div>
      </section>

      {/* ABOUT */}
      <section className="bg-black text-white py-28 px-6 border-t border-gray-800 fade-section">
        <div className="max-w-4xl mx-auto text-center">
          
          <h2 className="text-3xl font-bold mb-6">
            Esensi Diri
          </h2>

          <p className="text-gray-300 leading-relaxed mb-10 max-w-2xl mx-auto">
            Seorang penuntut ilmu yang mendedikasikan diri pada perancangan visual berbasis makna dan pesan. Bagi saya, desain adalah bahasa sunyi yang berbicara tanpa suara—lahir dari rasa, tumbuh dalam imajinasi, lalu menjelma menjadi bentuk yang dapat ditangkap oleh mata dan dirasakan oleh hati.
            Perjalanan kreatif ini bermula dari perancangan desain grafis dan aset visual untuk pasar microstock, serta pengembangan berbagai media publikasi digital maupun cetak yang kemudian berkembang ke ranah produksi video secara utuh—dari tahap pra hingga pascaproduksi, bersamaan dengan pengelolaan operasional live streaming serta strategi konten dan branding di media sosial. Dalam setiap prosesnya, saya menempatkan konsistensi, presisi, dan perhatian terhadap detail sebagai dasar. Setiap karya berangkat dari pengolahan ide dan referensi, dengan pendekatan yang menekankan kejelasan pesan dan kedalaman makna.
            Saat ini, saya banyak mengeksplorasi tipografi sebagai medium utama dalam pengembangan typeface, sekaligus terus memperkuat kapasitas diri dalam membangun narasi visual yang berdampak.
            Berangkat dari latar belakang sebagai santri, saya memandang media dan teknologi sebagai sarana untuk menyampaikan nilai dan pesan kepada generasi masa depan.  
          </p>

        </div>
      </section>

      {/* SKILLS */}
      <section className="bg-black text-white py-28 px-6 border-t border-gray-800 fade-section">
        <div className="max-w-4xl mx-auto text-center">
          
          <h2 className="text-3xl font-bold mb-10">
            Experience
          </h2>

          <div className="flex flex-wrap justify-center gap-4">
            
            <span className="border border-gray-700 px-4 py-2 rounded-full text-sm">
              Inkscape
            </span>
            
            <span className="border border-gray-700 px-4 py-2 rounded-full text-sm">
              Adobe Photoshop
            </span>

            <span className="border border-gray-700 px-4 py-2 rounded-full text-sm">
              Adobe Illustrator
            </span>

            <span className="border border-gray-700 px-4 py-2 rounded-full text-sm">
              Affinity
            </span>

            <span className="border border-gray-700 px-4 py-2 rounded-full text-sm">
              Canva
            </span>

            <span className="border border-gray-700 px-4 py-2 rounded-full text-sm">
              Adobe Premiere Pro
            </span>

            <span className="border border-gray-700 px-4 py-2 rounded-full text-sm">
              Capcut
            </span>

            <span className="border border-gray-700 px-4 py-2 rounded-full text-sm">
              Visual Studio Code
            </span>

            <span className="border border-gray-700 px-4 py-2 rounded-full text-sm">
              Typeface Designer
            </span>

            <span className="border border-gray-700 px-4 py-2 rounded-full text-sm">
              Social Media Design
            </span>

            <span className="border border-gray-700 px-4 py-2 rounded-full text-sm">
              Branding
            </span>

            <span className="border border-gray-700 px-4 py-2 rounded-full text-sm">
              UI Design
            </span>

          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="bg-black text-white py-28 px-6 border-t border-gray-800  fade-section">
        <div className="max-w-3xl mx-auto text-center">
          
          <h2 className="text-3xl font-bold mb-6">
            Let's Connect Together
          </h2>

          <p className="text-gray-300 mb-8">
            Setiap ide memiliki potensi untuk menjadi karya.
            Melalui pendekatan yang tepat, gagasan dapat diterjemahkan menjadi visual yang bermakna.
          </p>

          <div className="flex justify-center gap-4">
            
            {/* WhatsApp Button */}
            <a 
              href="https://wa.me/6281259987615" 
              target="_blank"
              className="bg-green-600 hover:bg-green-500 text-white px-6 py-3 rounded-full font-medium hover:opacity-80 transition"
            >
              WhatsApp
            </a>

            {/* Email Button */}
            <a 
              href="mailto:widaahmat@gmail.com"
              className="border border-white px-6 py-3 rounded-full font-medium hover:bg-white hover:text-black transition duration-300"
            >
              Email
            </a>

          </div>

        </div>
      </section>
      
      {/* FOOTER */}
      <footer className="bg-black text-gray-600 text-center py-6 border-t border-gray-800">
        © {new Date().getFullYear()} Ahmad. Dari awal yang kecil, menjadi sesuatu yang berarti.
      </footer>
    </>
  );
}