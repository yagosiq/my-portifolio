import React from 'react';
import Logo from '../assets/logo.svg.png';

const Header = () => {
  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = '/cv-front.pdf';
    link.download = 'cv-front.pdf';
    link.click();
  };

  return (
    <header className='py-6'>
      <div className="container mx-auto">
        <div className='flex justify-between items-center'>
          <a href="https://yagosiqportifolio.netlify.app/">
            <img className='w-20' src={Logo} alt="Logo da imagem"/>
          </a>
          <button className='btn btn-sm' onClick={downloadCV}>
            Download CV
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
