import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="hero">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Вітаємо на нашому сайті!
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        Ми створюємо сучасні веб-рішення для вашого бізнесу.
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
}