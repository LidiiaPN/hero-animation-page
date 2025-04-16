/*import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="hero">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Вітаю! Мене звати Лідія 
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        Я створюю сучасні веб-рішення для вашого бізнесу.
      </motion.p>

      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        Дізнатися більше
      </motion.button>
    </section>
  );
}*/
/*
import { motion } from 'framer-motion';

export default function HeroSection() {
  const title = 'Вітаю! Мене звати Лідія ';

  return (
    <section className="hero">
       <div className="glass-box">
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {title.split('').map((char, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            style={{ display: 'inline-block', whiteSpace: 'pre' }}
  >
    {char === ' ' ? '\u00A0' : char}
           
          </motion.span>
        ))}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        Я створюю сучасні веб-рішення для вашого бізнесу.
      </motion.p>

      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: [1, 1.05, 1] }}
        transition={{
          duration: 1.5,
          delay: 0.6,
          repeat: Infinity,
          repeatType: 'loop',
        }}
      >
        Дізнатися більше
      </motion.button>
      </div>
    </section>
  );
}
*/
import { motion } from 'framer-motion';

export default function HeroSection() {
  const title = 'Вітаю! Мене звати Лідія ';

  const projects = [
    {
      url: 'https://step-project2-f47290.gitlab.io/',
      img: '/images/diane-project.jpg',
      alt: 'Step Project',
    },
    {
      url: 'https://sp-fitness-eb42cc.gitlab.io/',
      img: '/images/fitness-project.jpg',
      alt: 'Fitness Project',
    },
    {
      url: 'https://project-shop-sigma.vercel.app/',
      img: '/images/shop-project.jpg',
      alt: 'Online Shop',
    },
    {
      url: 'https://tinyurl.com/4ejr5ner',
      img: '/images/education-project.jpg',
      alt: 'education center Project',
    },
  ];

  return (
    <section className="hero">
     
      <div className="glass-box">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {title.split('').map((char, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              style={{ display: 'inline-block', whiteSpace: 'pre' }}
            >
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          ))}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Я створюю сучасні веб-рішення для вашого бізнесу.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: [1, 1.05, 1] }}
          transition={{
            duration: 1.5,
            delay: 0.6,
            repeat: Infinity,
            repeatType: 'loop',
          }}
        >
          Дізнатися більше
        </motion.button>
      </div>
    </section>
  );
}
