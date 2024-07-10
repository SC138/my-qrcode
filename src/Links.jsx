import React from "react";

const Links = () => {
  const links = [
    { name: "GitHub", url: "https://github.com/tonpseudo" },
    { name: "LinkedIn", url: "https://linkedin.com/in/tonpseudo" },
    { name: "Email", url: "mailto:tonemail@example.com" },
  ];

  return (
    <div>
      {links.map((link, index) => (
        <div key={index}>
          <a href={link.url} target="_blank" rel="noopener noreferrer">
            {link.name}
          </a>
        </div>
      ))}
    </div>
  );
};

export default Links;
