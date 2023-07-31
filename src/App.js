import React from 'react';
import Banner from './components/Banner';
import Header from './components/Header';
import Nav from './components/Nav';
import About from './components/About';
import Services from './components/Services';
import Work from './components/Work';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className='bg-site bg-no-repeat bg-cover overflow-hidden'>
      <Header />
      <Banner />
      <Nav />
      <About />
      <Services />
      <Work />
      <Contact />
<<<<<<< HEAD
      <div className='h-[110px]'></div>
=======
      <Footer />
>>>>>>> 8a1f338210c36d5660a9986c8b28ceb1c8f1ad1c
    </div>
  );
};

export default App;
