import React from 'react';
import Image from '../assets/avatar.png';
import { FaGithub, FaLinkedin, FaMailBulk, FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import { TypeAnimation } from 'react-type-animation';

const Banner = () => {
  const animationVariants = fadeIn('up', 0.3);

  return (
    <section className='min-h-[87vh] lg:min-h-[78vh] flex items-center' id='home'>
      <div className="container mx-auto justify-center lg:h-screen">
        <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
          <motion.div
            variants={fadeIn('up', 0.3)}
            initial='hidden'
            whileInView='show'
            viewport={{ once: false, amount: 0.7 }}
            className='flex-1 text-center font-secondary lg:text-left mb-3'
          >
            <motion.h1
              variants={animationVariants}
              initial='hidden'
              whileInView='show'
              viewport={{ once: false, amount: 0.7 }}
              className='text-[55px] font-bold leading-[0.8] lg:text-[80px]'
            >
              YAGO<span> SIQUEIRA</span>
              <br />
            </motion.h1>
            <motion.div
              variants={animationVariants}
              initial='hidden'
              whileInView='show'
              viewport={{ once: false, amount: 0.7 }}
              className='mb-6 text-[36px] lg:text-[35px] font-secondary font-semibold uppercase leading-[1]'
            >
              <span className='text-white mr-2'>Eu sou</span>
              <TypeAnimation
                sequence={['UX/UI Design', 2000, 'Desenvolvedor Front-end', 2000]}
                speed={50}
                className='text-accent'
                wrapper='span'
                repeat={Infinity}
              />
            </motion.div>
            <motion.p
              variants={animationVariants}
              initial='hidden'
              whileInView='show'
              viewport={{ once: false, amount: 0.7 }}
              className='mb-8 max-w-lg mx-auto lg:mx-0'
            >
              Acadêmico em Análise e Desenvolvimento de Sistemas pela instituição de ensino FATEC IPIRANGA.
            </motion.p>
            <motion.div
              variants={animationVariants}
              initial='hidden'
              whileInView='show'
              viewport={{ once: false, amount: 0.7 }}
              className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0 items-center'
            >
              <a href="https://github.com/yagosiq" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/yago-siqueira-a551ab1a8/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
              <a href="mailto:yago.yyaaggoo@gmail.com?subject=Assunto do email&body=Entrar em contato :)"
                target="_blank" rel="noopener noreferrer"
              >
                <FaMailBulk />
              </a>
              <a href="https://wa.link/b9s087" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp />
              </a>
            </motion.div>
            <button className='btn btn-sm mt-10'>
                <a href="https://wa.link/b9s087" target="_blank" rel="noopener noreferrer">
                  Me contrata aí!
                </a>
              </button>
          </motion.div>
          <motion.div
            variants={fadeIn('down', 0.5)}
            initial='hidden'
            whileInView='show'
            className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]'
          >
            <img src={Image} alt="Avatar Yago" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
