export default function Home() {
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
            “Merancang dengan rasa, bukan hanya rupa.
            Visual yang bercerita dan karya yang berbicara.”
          </h2>

          <p className="text-gray-400 mb-8">
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
      <section className="bg-black text-white py-20 px-6">
        <div className="max-w-5xl mx-auto">
          
          {/* Judul */}
          <h2 className="text-3xl font-bold mb-10 text-center">
            My Work
          </h2>

          {/* Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            
            {/* Item 1 */}
            <a href="https://www.myfonts.com/collections/abda-bil-qalam-foundry?sort_by=price-ascending&pageType=foundryPage" className="group block bg-gray-900 rounded-xl overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl">
              
              <div className="relative overflow-hidden">
                <img 
                  src="/images/project1.png" 
                  alt="Project 1"
                  className="w-full h-48 object-cover group-hover:scale-110 transition duration-500"
                />

                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition">
                  <span className="text-white text-sm">Lihat Detail</span>
                </div>
              </div>

              <div className="p-4">
                <h3 className="font-semibold mb-2 group-hover:text-purple-400 transition">
                  Instagram Feed Design for Coffee Brand
                </h3>
                <p className="text-gray-400 text-sm">
                  Designed a modern Instagram feed to improve brand consistency and attract more engagement.
                </p>
              </div>

            </a>

            {/* Item 2 */}
            <a href="https://stock.adobe.com/id/contributor/205709091/Ahmad" className="group block bg-gray-900 rounded-xl overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl">
              
              <div className="relative overflow-hidden">
                <img 
                  src="/images/project1.png" 
                  alt="Project 1"
                  className="w-full h-48 object-cover group-hover:scale-110 transition duration-500"
                />

                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition">
                  <span className="text-white text-sm">Lihat Detail</span>
                </div>
              </div>

              <div className="p-4">
                <h3 className="font-semibold mb-2 group-hover:text-purple-400 transition">
                  Event Poster Design
                </h3>
                <p className="text-gray-400 text-sm">
                  Created a visually engaging poster to promote an event and capture audience attention.
                </p>
              </div>

            </a>

            {/* Item 3 */}
            <a href="#" className="group block bg-gray-900 rounded-xl overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl">
              
              <div className="relative overflow-hidden">
                <img 
                  src="/images/project1.png" 
                  alt="Project 1"
                  className="w-full h-48 object-cover group-hover:scale-110 transition duration-500"
                />

                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition">
                  <span className="text-white text-sm">Lihat Detail</span>
                </div>
              </div>

              <div className="p-4">
                <h3 className="font-semibold mb-2 group-hover:text-purple-400 transition">
                  Brand Identity for Local Business
                </h3>
                <p className="text-gray-400 text-sm">
                  Developed a clean and modern visual identity to strengthen brand recognition.
                </p>
              </div>

            </a>

          </div>

        </div>
      </section>

      {/* ABOUT */}
      <section className="bg-black text-white py-20 px-6 border-t border-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          
          <h2 className="text-3xl font-bold mb-6">
            Esensi Diri
          </h2>

          <p className="text-gray-400 leading-relaxed mb-10">
            Seorang penuntut ilmu, desainer grafis, kreator digital, sekaligus pengembang typeface yang berfokus pada perancangan visual berbasis makna dan pesan.
            Bagi saya, desain adalah bahasa sunyi yang berbicara tanpa suara—lahir dari rasa, tumbuh dalam imajinasi, lalu menjelma menjadi bentuk yang dapat ditangkap oleh mata dan dirasakan oleh hati.
            Dalam setiap proses, saya menempatkan konsistensi, presisi, dan perhatian terhadap detail sebagai dasar. Setiap karya berangkat dari pengolahan ide dan referensi, dengan pendekatan yang menekankan kejelasan pesan dan kedalaman makna.
            Saat ini, saya banyak mengeksplorasi tipografi sebagai medium utama, sekaligus mengembangkan kemampuan dalam branding, konten visual, dan penguatan kapasitas diri secara berkelanjutan.
            Berangkat dari latar belakang sebagai santri, saya memandang media dan teknologi sebagai sarana untuk menyampaikan nilai dan pesan kepada generasi masa depan.  
          </p>

        </div>
      </section>

      {/* SKILLS */}
      <section className="bg-black text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          
          <h2 className="text-3xl font-bold mb-10">
            Skills
          </h2>

          <div className="flex flex-wrap justify-center gap-4">
            
            <span className="border border-gray-700 px-4 py-2 rounded-full text-sm">
              Adobe Photoshop
            </span>

            <span className="border border-gray-700 px-4 py-2 rounded-full text-sm">
              Adobe Illustrator
            </span>

            <span className="border border-gray-700 px-4 py-2 rounded-full text-sm">
              Canva
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
      <section className="bg-black text-white py-20 px-6 border-t border-gray-800">
        <div className="max-w-3xl mx-auto text-center">
          
          <h2 className="text-3xl font-bold mb-6">
            Let’s Work Together
          </h2>

          <p className="text-gray-400 mb-8">
            Have a project in mind? Let’s bring your ideas to life with clean and impactful design.
          </p>

          <div className="flex justify-center gap-4">
            
            {/* WhatsApp Button */}
            <a 
              href="https://wa.me/6281259987615" 
              target="_blank"
              className="bg-green-500 text-white px-6 py-3 rounded-full font-medium hover:opacity-80 transition"
            >
              Contact via WhatsApp
            </a>

            {/* Email Button */}
            <a 
              href="mailto:widaahmat@gmail.com"
              className="border border-white px-6 py-3 rounded-full font-medium hover:bg-white hover:text-black transition"
            >
              Send Email
            </a>

          </div>

        </div>
      </section>
    </>
  );
}