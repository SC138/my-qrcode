import React from 'react';

const Links = () => {
  const links = [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/thomas-chevron/' },
    { name: 'GitHub', url: 'https://github.com/SC138' },
    { name: 'Mon CV', url: '/documents/cv.pdf' },
    { name: 'Email', url: 'mailto:chevron.thomas33@gmail.com' },
    { name: 'Téléphone', url: 'tel:+33698422922' },
  ];

  return (
    <div className="links">
      {links.map((link, index) => (
        <div className="link" key={index}>
          <a href={link.url} target="_blank" rel="noopener noreferrer">{link.name}</a>
        </div>
      ))}
    </div>
  );
};

export default Links;