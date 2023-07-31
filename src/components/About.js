import React from 'react';
import { fadeIn } from '../variants';
import { motion } from 'framer-motion'

const About = () => {
  return (
    <section className='section h-screen' id='about'>
      <div className="container mx-auto">
        <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen'>
          <motion.div
<<<<<<< HEAD
            variants={fadeIn('left', 0.3)}
=======
            variants={fadeIn('left', 0.5)}
>>>>>>> 8a1f338210c36d5660a9986c8b28ceb1c8f1ad1c
            initial='hidden'
            whileInView={'show'}
            wiewport={{ once: false, amount: 0.3 }}
            className='flex-1 bg-about bg-contain bg-no-repeat h-[560px] mix-blend-lighten bg-top'></motion.div>
          <motion.div
            variants={fadeIn('left', 0.3)}
            initial='hidden'
            whileInView={'show'}
            wiewport={{ once: false, amount: 0.3 }}
            className='flex-1'>
            <h2 className='h2 text-accent'>Este sou eu</h2>
            <h3 className='h3 mb-4'>Sou desenvolvedor front-end, estou em busca de uma nova oportunidade.</h3>
            <p>Nascido no Mato Grosso do Sul, minha paixão pela tecnologia floresceu desde os primeiros momentos em que tive contato com um computador. Nos momentos de lazer, busco explorar novos lugares e experiências, além de nadar e ler bastante. Atualmente, estou cursando Análise e Desenvolvimento de Sistemas, e possuo um ano de experiência como desenvolvedor front-end.</p>
            <div className='flex gap-x-6 lg:gap-x-10 mb-8 mt-4 justify-center'>
              <div className='text-[40px] font-tertiary text-gradient mb-2'>
                1
              </div>
              <div className='font-primary text-sm tracking-[2px]'>
                Ano de <br />
                Experiência
              </div>
            </div>
            <div className='flex gap-x-8 items-center justify-center'>
              <button className='btn btn-lg'>
                <a href="https://wa.link/b9s087"
                  target="_blank"
                  rel="noopener noreferrer">
                  Me contate!
                </a>
              </button>
              <a href="https://github.com/yagosiq"
                className='text-gradient btn-link'
                target="_blank"
                rel="noopener noreferrer">
              Meu Portifólio</a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
