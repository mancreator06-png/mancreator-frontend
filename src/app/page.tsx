"use client";
import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Smooth scroll pour tous les liens internes
  useEffect(() => {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = link.getAttribute("href")?.substring(1);
        const targetElement = document.getElementById(targetId!);
        targetElement?.scrollIntoView({ behavior: "smooth" });
        setMenuOpen(false); // Fermer menu mobile après clic
      });
    });
  }, []);

  return (
    <main className="bg-black text-white min-h-screen font-sans scroll-smooth">
      {/* HEADER */}
      <header className="fixed top-0 left-0 w-full bg-black bg-opacity-80 backdrop-blur-sm z-50 border-b border-gray-800">
        <div className="flex items-center justify-between px-6 py-4 md:justify-center relative">
          {/* Logo à gauche */}
          <div className="flex items-center space-x-2 absolute left-6">
            <img
              src="/logo.png"
              alt="Mancreatot Logo"
              className="h-10 w-10 object-contain rounded-full"
            />
            <span className="text-xl font-bold text-yellow-400">Mancreator</span>
          </div>

          {/* Menu desktop */}
          <nav className="hidden md:flex space-x-6 lg:space-x-10">
            <a href="#home" className="hover:text-yellow-400 transition-colors">
              Accueil
            </a>
            <a href="#about" className="hover:text-yellow-400 transition-colors">
              À propos
            </a>
            <a href="#services" className="hover:text-yellow-400 transition-colors">
              Services
            </a>
            <a href="#contact" className="hover:text-yellow-400 transition-colors">
              Contact
            </a>
          </nav>

          {/* Burger menu mobile */}
          <button
            className="md:hidden text-white text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Menu overlay mobile */}
        {menuOpen && (
          <nav className="md:hidden absolute top-full left-0 w-full bg-black border-t border-gray-800 flex flex-col items-center space-y-4 py-6">
            <a href="#home" className="text-white hover:text-yellow-400 text-lg">
              Accueil
            </a>
            <a href="#about" className="text-white hover:text-yellow-400 text-lg">
              À propos
            </a>
            <a href="#services" className="text-white hover:text-yellow-400 text-lg">
              Services
            </a>
            <a href="#contact" className="text-white hover:text-yellow-400 text-lg">
              Contact
            </a>
          </nav>
        )}
      </header>

      {/* SECTIONS */}
      <section id="home" className="h-screen flex flex-col justify-center items-center text-center px-6 pt-24 md:pt-32">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-yellow-400 mb-4">
          Bienvenue chez Mancreator
        </h1>
        <p className="max-w-2xl text-gray-300 text-sm sm:text-base md:text-lg">
          Mancreator offre des solutions informatiques et des services associés, couvrant le numérique, le commerce, l’assistance à la personne, la communication, la formation et l’innovation.
        </p>
        <a
          href="#contact"
          className="mt-6 sm:mt-8 bg-yellow-400 text-black font-semibold py-3 px-6 rounded-full hover:scale-105 transition-transform"
        >
          Contactez-nous
        </a>
      </section>

      <section id="about" className="min-h-screen flex flex-col justify-center items-center text-center px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-yellow-400 mb-6">À propos</h2>
        <p className="max-w-3xl text-gray-300 leading-relaxed text-sm sm:text-base">
          Mancreator propose une large gamme de services dans le numérique, le commerce, la communication, la formation et l’innovation, ainsi que des activités connexes et de l’aide à la personne. Notre objectif est d’accompagner nos clients avec des solutions modernes, fiables et adaptées à leurs besoins.
        </p>
      </section>

      <section id="services" className="min-h-screen flex flex-col justify-center items-center text-center px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-yellow-400 mb-6">Nos Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl text-left">
          <div className="bg-gray-900 p-4 sm:p-6 rounded-xl border border-gray-800 hover:border-yellow-400 transition">
            <h3 className="text-lg sm:text-xl font-semibold text-yellow-400 mb-2">🌐 Services Informatiques</h3>
            <p className="text-gray-300 text-sm sm:text-base">
              Développement web, applications, maintenance et solutions numériques adaptées à votre entreprise.
            </p>
          </div>
          <div className="bg-gray-900 p-4 sm:p-6 rounded-xl border border-gray-800 hover:border-yellow-400 transition">
            <h3 className="text-lg sm:text-xl font-semibold text-yellow-400 mb-2">🎨 Communication & Design</h3>
            <p className="text-gray-300 text-sm sm:text-base">
              Identité visuelle, création graphique, supports de communication et marketing digital.
            </p>
          </div>
          <div className="bg-gray-900 p-4 sm:p-6 rounded-xl border border-gray-800 hover:border-yellow-400 transition">
            <h3 className="text-lg sm:text-xl font-semibold text-yellow-400 mb-2">📚 Formation & Innovation</h3>
            <p className="text-gray-300 text-sm sm:text-base">
              Formation professionnelle, ateliers, et accompagnement à l’innovation et à la transformation digitale.
            </p>
          </div>
          <div className="bg-gray-900 p-4 sm:p-6 rounded-xl border border-gray-800 hover:border-yellow-400 transition">
            <h3 className="text-lg sm:text-xl font-semibold text-yellow-400 mb-2">🤝 Aide à la personne & Commerce</h3>
            <p className="text-gray-300 text-sm sm:text-base">
              Services connexes dans le commerce et assistance à la personne pour faciliter vos projets et activités.
            </p>
          </div>
        </div>
      </section>

      <section id="contact" className="min-h-screen flex flex-col justify-center items-center text-center px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-yellow-400 mb-6">Contactez-nous</h2>
        <p className="text-gray-300 mb-6 text-sm sm:text-base">
          Pour toute demande de services ou collaboration, contactez-nous par WhatsApp ou email.
        </p>

        {/* <form className="max-w-md w-full space-y-4 mb-6 sm:mb-8">
          <input
            type="text"
            placeholder="Votre nom"
            className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 focus:border-yellow-400 focus:outline-none text-sm sm:text-base"
          />
          <input
            type="email"
            placeholder="Votre email"
            className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 focus:border-yellow-400 focus:outline-none text-sm sm:text-base"
          />
          <textarea
            placeholder="Votre message"
            rows={4}
            className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 focus:border-yellow-400 focus:outline-none text-sm sm:text-base"
          ></textarea>
          <button
            type="submit"
            className="bg-yellow-400 text-black font-semibold py-3 px-6 rounded-full hover:scale-105 transition-transform text-sm sm:text-base"
          >
            Envoyer
          </button>
        </form> */}

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
          <a
            href="mailto:mancreator06@gmail.com"
            className="bg-yellow-400 text-black font-semibold py-3 px-6 rounded-full hover:scale-105 transition-transform text-sm sm:text-base"
          >
            Email
          </a>
          <a
            href="https://wa.me/22997329640"
            target="_blank"
            className="bg-yellow-400 text-black font-semibold py-3 px-6 rounded-full hover:scale-105 transition-transform text-sm sm:text-base"
          >
            WhatsApp
          </a>
        </div>
      </section>

      <footer className="py-6 border-t border-gray-800 text-gray-500 text-sm text-center">
        © {new Date().getFullYear()} <span className="text-yellow-400">Mancreator</span> — Tous droits réservés.
      </footer>
    </main>
  );
}





// "use client";
// import { useEffect } from "react";

// export default function Home() {
//   // Smooth scroll pour tous les liens internes
//   useEffect(() => {
//     const links = document.querySelectorAll('a[href^="#"]');
//     links.forEach((link) => {
//       link.addEventListener("click", (e) => {
//         e.preventDefault();
//         const targetId = link.getAttribute("href")?.substring(1);
//         const targetElement = document.getElementById(targetId!);
//         targetElement?.scrollIntoView({ behavior: "smooth" });
//       });
//     });
//   }, []);

//   return (
//     <main className="bg-black text-white min-h-screen font-sans scroll-smooth">
//       {/* HEADER */}
//       <header className="fixed top-0 left-0 w-full bg-black bg-opacity-80 backdrop-blur-sm z-50 flex items-center justify-center px-8 py-4 border-b border-gray-800 space-x-8">
//   {/* Logo + Titre à gauche */}
//   <div className="absolute left-8 flex items-center space-x-2">
//     <img
//       src="/logo.png"
//       alt="Mancreatot Logo"
//       className="h-10 w-10 object-contain rounded-full"
//     />
//     <span className="text-xl font-bold text-yellow-400">Mancreatot</span>
//   </div>

//   {/* Menu centré */}
//   <nav className="flex space-x-10">
//     <a href="#home" className="hover:text-yellow-400 transition-colors">
//       Accueil
//     </a>
//     <a href="#about" className="hover:text-yellow-400 transition-colors">
//       À propos
//     </a>
//     <a href="#services" className="hover:text-yellow-400 transition-colors">
//       Services
//     </a>
//     <a href="#contact" className="hover:text-yellow-400 transition-colors">
//       Contact
//     </a>
//   </nav>
// </header>


//       {/* SECTIONS */}
//       <section id="home" className="h-screen flex flex-col justify-center items-center text-center px-6">
//         <h1 className="text-5xl md:text-6xl font-bold text-yellow-400 mb-4">
//           Bienvenue chez Mancreator
//         </h1>
//         <p className="max-w-2xl text-gray-300 text-lg">
//           Activités informatiques et activités connexes. Prestations de services diverses dans les secteurs du numérique, du commerce, de l’aide à la personne, de la communication, de la formation et de l’innovation.
//         </p>
//         <a
//           href="#contact"
//           className="mt-8 bg-yellow-400 text-black font-semibold py-3 px-6 rounded-full hover:scale-105 transition-transform"
//         >
//           Contactez-nous
//         </a>
//       </section>

//       <section id="about" className="min-h-screen flex flex-col justify-center items-center text-center px-6">
//         <h2 className="text-3xl font-bold text-yellow-400 mb-6">À propos</h2>
//         <p className="max-w-3xl text-gray-300 leading-relaxed">
//           Mancreator propose une large gamme de services dans le numérique, le commerce, la communication, la formation et l’innovation, ainsi que des activités connexes et de l’aide à la personne. Notre objectif est d’accompagner nos clients avec des solutions modernes, fiables et adaptées à leurs besoins.
//         </p>
//       </section>

//       <section id="services" className="min-h-screen flex flex-col justify-center items-center text-center px-6">
//         <h2 className="text-3xl font-bold text-yellow-400 mb-6">Nos Services</h2>
//         <div className="grid md:grid-cols-2 gap-8 max-w-4xl text-left">
//           <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-yellow-400 transition">
//             <h3 className="text-xl font-semibold text-yellow-400 mb-2">🌐 Services Informatiques</h3>
//             <p className="text-gray-300">
//               Développement web, applications, maintenance et solutions numériques adaptées à votre entreprise.
//             </p>
//           </div>
//           <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-yellow-400 transition">
//             <h3 className="text-xl font-semibold text-yellow-400 mb-2">🎨 Communication & Design</h3>
//             <p className="text-gray-300">
//               Identité visuelle, création graphique, supports de communication et marketing digital.
//             </p>
//           </div>
//           <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-yellow-400 transition">
//             <h3 className="text-xl font-semibold text-yellow-400 mb-2">📚 Formation & Innovation</h3>
//             <p className="text-gray-300">
//               Formation professionnelle, ateliers, et accompagnement à l’innovation et à la transformation digitale.
//             </p>
//           </div>
//           <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-yellow-400 transition">
//             <h3 className="text-xl font-semibold text-yellow-400 mb-2">🤝 Aide à la personne & Commerce</h3>
//             <p className="text-gray-300">
//               Services connexes dans le commerce et assistance à la personne pour faciliter vos projets et activités.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* <section id="contact" className="min-h-screen flex flex-col justify-center items-center text-center px-6">
//         <h2 className="text-3xl font-bold text-yellow-400 mb-6">Contactez-nous</h2>
//         <p className="text-gray-300 mb-6">
//           Pour toute demande de services ou collaboration, contactez-nous.
//         </p>
//         <form className="max-w-md w-full space-y-4">
//           <input
//             type="text"
//             placeholder="Votre nom"
//             className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 focus:border-yellow-400 focus:outline-none"
//           />
//           <input
//             type="email"
//             placeholder="Votre email"
//             className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 focus:border-yellow-400 focus:outline-none"
//           />
//           <textarea
//             placeholder="Votre message"
//             rows={4}
//             className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 focus:border-yellow-400 focus:outline-none"
//           ></textarea>
//           <button
//             type="submit"
//             className="bg-yellow-400 text-black font-semibold py-3 px-6 rounded-full hover:scale-105 transition-transform"
//           >
//             Envoyer
//           </button>
//         </form>
//       </section> */}
// <section
//   id="contact"
//   className="min-h-screen flex flex-col justify-center items-center text-center px-6"
// >
//   <h2 className="text-3xl font-bold text-yellow-400 mb-6">Contactez-nous</h2>
//   <p className="text-gray-300 mb-6">
//     Pour toute demande de services ou collaboration, contactez-nous par WhatsApp ou email.
//   </p>

//   <form className="max-w-md w-full space-y-4 mb-8">
//     <input
//       type="text"
//       placeholder="Votre nom"
//       className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 focus:border-yellow-400 focus:outline-none"
//     />
//     <input
//       type="email"
//       placeholder="Votre email"
//       className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 focus:border-yellow-400 focus:outline-none"
//     />
//     <textarea
//       placeholder="Votre message"
//       rows={4}
//       className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 focus:border-yellow-400 focus:outline-none"
//     ></textarea>
//     <button
//       type="submit"
//       className="bg-yellow-400 text-black font-semibold py-3 px-6 rounded-full hover:scale-105 transition-transform"
//     >
//       Envoyer
//     </button>
//   </form>

//   <div className="flex flex-col sm:flex-row gap-6">
//     <a
//       href="mailto:mancreator06@gmail.com"
//       className="bg-yellow-400 text-black font-semibold py-3 px-6 rounded-full hover:scale-105 transition-transform"
//     >
//       Email
//     </a>
//     <a
//       href="https://wa.me/22997329640"
//       target="_blank"
//       className="bg-yellow-400 text-black font-semibold py-3 px-6 rounded-full hover:scale-105 transition-transform"
//     >
//       WhatsApp
//     </a>
//   </div>
// </section>

//       <footer className="py-6 border-t border-gray-800 text-gray-500 text-sm text-center">
//         © {new Date().getFullYear()} <span className="text-yellow-400">Mancreator</span> — Tous droits réservés.
//       </footer>
//     </main>
//   );
// }
