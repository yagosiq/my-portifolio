import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const Contact = () => {
  const animationVariants = fadeIn('right', 0.3);

  return (
    <section className='section pb-64 pt-28 lg:section' id='contact'>
      <div className="container mx-auto">
        <div className='flex flex-col lg:flex-row'>
          <motion.div
            variants={animationVariants}
            initial='hidden'
            whileInView='show'
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 flex justify-start items-center'>
            <div>
              <h4 className='text-xl uppercase text-accent font-medium mb-2 tracking-tighter'>Entrar em contato</h4>
              <h2 className='text-[45px] lg:text-[70px] leading-none mb-12'>Bora trabalhar <br /> juntos!</h2>
            </div>
          </motion.div>

          <motion.form
<<<<<<< HEAD
            action="https://formsubmit.co/yago.yyaaggoo@gmail.com"
            method="POST"
=======
            action="https://formsubmit.co/yago.yyaaggoo@gmail.com" method="POST"
>>>>>>> 8a1f338210c36d5660a9986c8b28ceb1c8f1ad1c
            variants={fadeIn('left', 0.4)}
            initial='hidden'
            whileInView='show'
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 flex border rounded-2xl flex-col gap-y-6 p-6 items-center lg:items-end'>
            <input
<<<<<<< HEAD
              className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all'
              type="text"
              name='nome'
=======
              className='bg-transparent input border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all '
              type='text'
>>>>>>> 8a1f338210c36d5660a9986c8b28ceb1c8f1ad1c
              placeholder='Nome'
              id='nome'
              name='nome'
            />
            <input
              className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all'
<<<<<<< HEAD
              type="text"
              name='email'
=======
              type='email'
>>>>>>> 8a1f338210c36d5660a9986c8b28ceb1c8f1ad1c
              placeholder='E-mail'
              id='email'
              name='email'
            />
            <textarea
              className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all mb-12'
              placeholder='Mensagem'
<<<<<<< HEAD
              name='message'
              id='message'
            ></textarea>
=======
              id='message'
              name='mensagem'
            />
>>>>>>> 8a1f338210c36d5660a9986c8b28ceb1c8f1ad1c
            <button className='btn btn-lg'>
              Enviar mensagem
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
