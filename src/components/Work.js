import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import Img1 from '../assets/portifolio-img1.png';
import Img2 from '../assets/portifolio-img2.png';
import Img3 from '../assets/portifolio-img3.png';

const Work = () => {
  return (
    <section className='section' id='work'>
      <div className="container mx-auto">
        <div className='flex flex-col lg:flex-row gap-x-10 text-center items-center'>
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0'
          >
            <div className='h2 leading-tight text-accent justify-center'>
              <h2>Mini projetos</h2>
            </div>
            <p>Aqui estão três exemplos de páginas web desenvolvidas com o framework Tailwind, desenvolvidos durante o curso na plataforma Udemy. Clique no botão abaixo e entre em contato comigo!</p>
            <button className='btn btn-lg'>
              <a href="https://wa.link/b9s087">
                Me contrata aí!
              </a>
            </button>
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              <div>
                <a href="https://clone-fc-ysc30082002.netlify.app/">
                  <img className='group-hover:scale-125 transition-all duration-500' src={Img1} alt="" />
                  <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                    <span className='text-gradient'>Visitar Projeto</span>
                  </div>
                  <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                    <span className='text-3xl text-white'>Clone - Amazon</span>
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
            className='flex-1 flex flex-col gap-y-10'
          >
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
                <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
                <div>
                  <a href="#">
                    <img className='group-hover:scale-125 transition-all duration-500' src={Img2} alt="" />
                    <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                      <span className='text-gradient'>Visitar Projeto</span>
                    </div>
                    <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                      <span className='text-3xl text-white'>Clone - Facebook</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              <div>
                <a href="https://exemplo.com/projeto-spotify">
                  <img className='group-hover:scale-125 transition-all duration-500' src={Img3} alt="" />
                  <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                    <span className='text-gradient'>Visitar Projeto</span>
                  </div>
                  <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                    <span className='text-3xl text-white'>Clone - Spotify</span>
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
