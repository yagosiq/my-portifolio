import React from 'react';
import Image from '../assets/avatar.png';
import { FaGithub, FaLinkedin, FaMailBulk } from 'react-icons/fa';
import { motion } from 'framer-motion'
import { fadeIn } from '../variants';
import { TypeAnimation } from 'react-type-animation';


const Banner = () => {
  return (
    <section className='section' id='home'>
      <div className="container mx-auto">
        <div>
          <div>
            <h2>
              YAGO <span>SIQUEIRA</span>
            </h2>
            <div className='mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]'>
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
            <p>Acadêmico em Análise e Desenvolvimento de Sistemas pela instituição de ensino FATEC</p>
            <button className='btn btn-lg'>Me contate</button>
            <a href="#" className='text-gradient btn-link'>Meu Portifólio</a>

            <div>
              <a href="#">
                <FaGithub />
              </a>
              <a href="#">
                <FaLinkedin />
              </a>
              <a href="#">
                <FaMailBulk />
              </a>
            </div>
            
          </div>
          <div>
            <img src={Image} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}


export default Banner;
