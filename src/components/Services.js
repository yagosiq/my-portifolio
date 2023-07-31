import React from 'react';
import { BsArrowUpRight } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const services = [
  {
    name: 'HTML e CSS',
    description: 'HTML é a linguagem de marcação para criação de páginas web, enquanto CSS é a linguagem de estilo para estilizar e formatar essas páginas.',
    link: 'https://www.treinaweb.com.br/blog/o-que-e-e-como-comecar-com-html-e-css'
  },
  {
    name: 'Javascript',
    description: 'JavaScript é uma linguagem de programação amplamente utilizada para adicionar interatividade e funcionalidades dinâmicas às páginas web.',
    link: 'https://developer.mozilla.org/pt-BR/docs/Web/JavaScript'
  },
  {
    name: 'React',
    description: 'React.js é uma biblioteca JavaScript usada para criar interfaces de usuário interativas e reativas, com reutilização de componentes e renderização eficiente.',
    link: 'https://react.dev/'
  },
  {
    name: 'Tailwind',
    description: 'Tailwind CSS é um framework de CSS altamente configurável e utilitário que permite estilizar rapidamente elementos HTML com classes pré-definidas.',
    link: 'https://tailwindcss.com/'
  },
  {
    name: 'Typescript',
    description: 'TypeScript é uma linguagem de programação de código aberto que adiciona tipagem estática ao JavaScript, tornando o código mais seguro e escalável.',
    link: 'https://www.typescriptlang.org/docs/'
  },
];

const Services = () => {
  return (
    <section className='section py-16 lg:py-60 mt-16 lg:mt-60' id='services'>
      <div className="container mx-auto">
        <div className='flex flex-col lg:flex-row'>
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 h-[300px] lg:h-[800px] mb-12 lg:mb-0 md:h-screen lg:bg-services bg-contain bg-no-repeat mix-blend-lighten'
          >
            <h2 className='h2 text-accent mb-6'>Tecnologias</h2>
            <h3 className='h3 max-w-[455px] mb-0 lg:mb-16 '>Conheça algumas tecnologias em que tenho conhecimento</h3>
          </motion.div>
          <motion.div
            variants={fadeIn('left', 0.5)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1'
          >
            {services.map((service, index) => (
              <div className='border-b border-white/20 h-[146px] mb-[30px] flex' key={index}>
                <div className='max-w-[476px]'>
                  <h4 className='text-[20px] tracking-wider font-primary font-semibold mb-4'>{service.name}</h4>
                  <p className='font-secondary leading-tight'>{service.description}</p>
                </div>
                <div className='flex flex-col flex-1 items-center'>
                  <a className='btn w-9 h-9 mb-[42px] flex justify-center items-center' href={service.link}>
                    <BsArrowUpRight />
                  </a>
                  <a className='text-gradient text-sm' href={service.link} target="_blank" rel="noopener noreferrer">Veja sobre</a>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
