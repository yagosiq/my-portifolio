import React from 'react';
import Image from '../assets/avatar.png';
import { FaGithub, FaLinkedin, FaMailBulk, FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion'
import { fadeIn } from '../variants';
import { TypeAnimation } from 'react-type-animation';


const Banner = () => {
  return (
    <section className='section' id='home'>
      <div className="container mx-auto">
        <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center'>
          <div className='flex-1 text-center font-secondary lg:text-left'>
            <h1 className='text-[55px] font-bold leadind-[0.8] lg:text-[90px]'>
              YAGO<span> SIQUEIRA</span>
            </h1>
            <div className='mb-6 text-[36px] lg:text-[40px] font-secondary font-semibold uppercase leading-[1]'>
              <span className='text-white mr-2'>Eu sou</span>
              <TypeAnimation sequence={[
                'UX/UI Design',
                2000,
                'Desenvolvedor Front-end',
                2000,
              ]}
                speed={50}
                className='text-accent'
                wrapper='span'
                repeat={Infinity}
              />
            </div>
            <p className='mb-8 max-w-lg mx-auto lg:mx-0'>Acadêmico em Análise e Desenvolvimento de Sistemas pela instituição de ensino FATEC.</p>
            <div className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>
              <button className='btn btn-lg'>Me contate</button>
              <a href="#" className='text-gradient btn-link'>Meu Portifólio</a>
            </div>

            <div className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'>
              <a href="https://github.com/yagosiq">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/yago-siqueira-a551ab1a8/">
                <FaLinkedin />
              </a>
              <a href="mailto:yago.yyaaggoo@gmail.com?subject=Assunto do email&body=Corpo do email">
                <FaMailBulk />
              </a>
              <a href="https://wa.link/b9s087">
                < FaWhatsapp />
              </a>
            </div>

          </div>
          <div>
            <img src={Image} className='lg:w-[480px]' alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}


export default Banner;
