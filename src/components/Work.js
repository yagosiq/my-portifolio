import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import Img1 from '../assets/portifolio-img1.png';
import Img2 from '../assets/portifolio-img2.png';
import Img3 from '../assets/portifolio-img3.png';

const Work = () => {
  return (
    <section className='section py-16 lg:py-60 mt-16 lg:mt-60 h-screen' id='work'>
      <div className="container mx-auto flex justify-center items-center">
        <div className='flex flex-col md:flex-row text-center items-center justify-center'>
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 flex flex-col gap-y-6 mb-10 md:mb-0 text-center items-center justify-center'
          >
            <div className='pb-2'>
              <h2 className='text-2xl md:text-3xl lg:text-4xl text-accent'>Mini projetos</h2>
              <p className='text-base md:text-lg lg:text-xl'>Aqui estão três exemplos de páginas web desenvolvidas com o framework Tailwind, desenvolvidos durante o curso na plataforma Udemy. Clique no botão abaixo e entre em contato comigo!</p>
              <button className='btn btn-lg m-4'>
                <a href="https://wa.link/b9s087"
                  target="_blank"
                  rel="noopener noreferrer">
                  Me contrata aí!
                </a>
              </button>
            </div>

            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl lg:w-[400px] justify-center items-center'>
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              <div>
                <a href="https://master--ysc30082004.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer">
                  <img className='group-hover:scale-125 transition-all duration-500 md:w-80 lg:w-full' src={Img1} alt="" />
                  <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                    <span className='text-gradient text-sm md:text-base'>Visitar Projeto</span>
                  </div>
                  <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                    <span className='text-xl md:text-2xl text-white'>Clone - Amazon</span>
                  </div>
                </a>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn('left', 0.4)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 flex flex-col gap-y-6 text-center items-center justify-center'
          >
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl lg:w-[400px]'>
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              <div>
                <a href="https://cloneysc30082002.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer">
                  <img className='group-hover:scale-125 transition-all duration-500 md:w-80 lg:w-full' src={Img2} alt="" />
                  <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                    <span className='text-gradient text-sm md:text-base'>Visitar Projeto</span>
                  </div>
                  <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                    <span className='text-xl md:text-2xl text-white'>Clone - Facebook</span>
                  </div>
                </a>
              </div>
            </div>
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl lg:w-[400px]'>
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              <div>
                <a href="https://cloneysc30082003.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer">
                  <img className='group-hover:scale-125 transition-all duration-500 md:w-80 lg:w-full' src={Img3} alt="" />
                  <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                    <span className='text-gradient text-sm md:text-base'>Visitar Projeto</span>
                  </div>
                  <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                    <span className='text-xl md:text-2xl text-white'>Clone - Spotify</span>
                  </div>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work;
