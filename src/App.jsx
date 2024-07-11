import React from "react";
import Links from "./Links";
import "./App.css";
import TomImage from "./assets/img/Tom.jpg";

function App() {
  // Fonction pour gérer le partage
  const handleShare = () => {
    if (navigator.share) {
      // Vérifie sir l'API web share est supportée
      navigator
        .share({
          title: "Partager",
          text: "Partager",
          url: window.location.href, // URL à partager, dans ce cas : l'url de la page actuelle
        })
        .then(() => console.log("Partagé avec succés")) // Message de succès
        .catch((error) => console.log("Echec de partage", error)); // Message d'erreur
    } else {
      // Si l'API Web Share n'est pas supportée
      alert("API Web Share non prise en charge dans votre navigateur.");
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="share-button" onClick={handleShare}>
          <i className="fas fa-share-alt"></i>
        </div>
        <div className="card">
          <img src={TomImage} alt="Thomas Chevron" className="profile-image" />
          <h1>Thomas Chevron</h1>
          <p>
            Développeur Web Junior <br></br>JavaScript - React
          </p>
          <Links />
          <div className="footer">
            <p>Created by Thomas Chevron</p>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
