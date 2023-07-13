import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { fadeIn } from '../variants';
import { motion } from 'framer-motion'


const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  return (
    <section className='section' id='about' ref={ref}>
      <div className="container mx-auto">
        <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen'>
          <motion.div
            variants={fadeIn('rigth', 0.5)}
            initial='hidden'
            whileInView={'show'}
            wiewport={{ once: false, amount: 0.3 }}
            className='flex-1 bg-about bg-contain bg-no-repeat h-[400px] mix-blend-lighten bg-top'></motion.div>
          <motion.div
            variants={fadeIn('left', 0.5)}
            initial='hidden'
            whileInView={'show'}
            wiewport={{ once: false, amount: 0.3 }}
            className='flex-1'>
            <h2 className='h2 text-accent'>Sobre mim</h2>
            <h3 className='h3 mb-4'>Sou desenvolvedor front-end, estou em busca de uma nova oportunidade no mercado.</h3>
            <p>Nascido no Mato Grosso do Sul, minha paixão pela tecnologia floresceu desde os primeiros momentos em que tive contato com um computador. Nos momentos de lazer, busco explorar novos lugares e experiências, além de nadar e dedicar-me à leitura. Atualmente, estou cursando Análise e Desenvolvimento de Sistemas, e possuo um ano de experiência como desenvolvedor front-end.</p>
            <div className='flex gap-x-6 lg:gap-x-10 mb-8 mt-4 justify-center'>
              <div className='text-[40px] font-tertiary text-gradient mb-2'>
                {inView ? <CountUp start={0} end={1} duration={6} /> : null}
              </div>
              <div className='font-primary text-sm tracking-[2px]'>
                Ano de <br />
                Experiência
              </div>
            </div>
            <div className='flex gap-x-8 items-center justify-center'>
              <button className='btn btn-lg'>Me Contate</button>
              <a href="https://github.com/yagosiq" className='text-gradient btn-link'> Meu Portifólio</a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
