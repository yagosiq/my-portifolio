import React from 'react';
import Image from '../assets/avatar.png';
import { FaGithub, FaLinkedin, FaMailBulk, FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion'
import { fadeIn } from '../variants';
import { TypeAnimation } from 'react-type-animation';


const Banner = () => {
  return (
    <section className='min-h-[85vh] lg:min-h-[78vh] flex items-center' id='home'>
      <div className="container mx-auto">
        <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
          <div className='flex-1 text-center font-secondary lg:text-left'>
            <motion.h1
              variants={fadeIn('up', 0.3)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='text-[55px] font-bold leadind-[0.8] lg:text-[80px]'>
              YAGO<span> SIQUEIRA</span>
            </motion.h1>
            <motion.div
              variants={fadeIn('up', 0.4)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='mb-6 text-[36px] lg:text-[35px] font-secondary font-semibold uppercase leading-[1]'>
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
            </motion.div>
            <motion.p
              variants={fadeIn('up', 0.5)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='mb-8 max-w-lg mx-auto lg:mx-0'>Acadêmico em Análise e Desenvolvimento de Sistemas pela instituição de ensino FATEC IPIRANGA.
            </motion.p>
            <motion.div
              variants={fadeIn('up', 0.6)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>
              <button className='btn btn-lg'>
                <a href="https://wa.link/b9s087">
                  Me contrata aí!
                </a>
              </button>
              <a href="https://github.com/yagosiq" className='text-gradient btn-link'>Meu Portifólio</a>
            </motion.div>

            <motion.div
              variants={fadeIn('up', 0.7)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'>
              <a href="https://github.com/yagosiq">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/yago-siqueira-a551ab1a8/">
                <FaLinkedin />
              </a>
              <a href="mailto:yago.yyaaggoo@gmail.com?subject=Assunto do email&body= Entrar em contato :)">
                <FaMailBulk />
              </a>
              <a href="https://wa.link/b9s087">
                < FaWhatsapp />
              </a>
            </motion.div>

          </div>
          <motion.div
            variants={fadeIn('down', 0.5)}
            initial='hidden'
            whileInView={'show'}
            className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]'>
            <img src={Image} alt="Avatar Yago" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}


export default Banner;
