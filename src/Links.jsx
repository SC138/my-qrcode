// import React from "react";

// const Links = () => {
// // Déclaration d'un tableau de liens avec leurs noms et URL correspondantes
//   const links = [
//     { name: "LinkedIn", url: "https://www.linkedin.com/in/thomas-chevron/" },
//     { name: "GitHub", url: "https://github.com/SC138" },
//     { name: "Mon CV", url: "/documents/cv.pdf" },
//     { name: "Email", url: "mailto:chevron.thomas33@gmail.com" },
//     { name: "Téléphone", url: "tel:+33698422922" },
//   ];

//   // Retourne le JSX pour afficher les liens
//   return (
//     <div className="links">
//       {links.map((link, index) => (
//         // Crée un div pour chaque lien, en utilisant l'index comme clé unique
//         <div className="link" key={index}>
//         {/* Lien cliquable avec son URL et son nom */}
//           <a href={link.url} target="_blank" rel="noopener noreferrer">
//             {link.name}
//           </a>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Links;

import React, { useState } from "react";

const Links = () => {
  // Déclaration d'un tableau de liens avec leurs noms et URL correspondantes
  const links = [
    { name: "LinkedIn", url: "https://www.linkedin.com/in/thomas-chevron/" },
    { name: "GitHub", url: "https://github.com/SC138" },
    { name: "Mon CV", url: "/documents/cv.pdf" },
    { name: "Email", url: "mailto:chevron.thomas33@gmail.com" },
    { name: "Téléphone", url: "tel:+33698422922" },
  ];

  // État pour gérer l'affichage du numéro de téléphone
  const [showPhoneNumber, setShowPhoneNumber] = useState(false);

  // Détecte si l'utilisateur est sur mobile
  const isMobile = /Mobi|Android/i.test(navigator.userAgent);

  // Gestionnaire de clic pour le lien Téléphone
  const handlePhoneClick = (e) => {
    if (!isMobile) {
      e.preventDefault(); // Empêche l'action par défaut du lien sur desktop
      setShowPhoneNumber(true); // Affiche le numéro de téléphone sur desktop
    }
  };

  // Retourne le JSX pour afficher les liens
  return (
    <div className="links">
      {links.map((link, index) => (
        // Crée un div pour chaque lien, en utilisant l'index comme clé unique
        <div className="link" key={index}>
          {/* Lien cliquable avec son URL et son nom */}
          {link.name === "Téléphone" && showPhoneNumber ? (
            <span>{link.url.replace("tel:", "")}</span>
          ) : (
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={link.name === "Téléphone" ? handlePhoneClick : undefined}
            >
              {link.name}
            </a>
          )}
        </div>
      ))}
    </div>
  );
};

export default Links;
