import { useState } from 'react';
import { motion } from 'framer-motion';

export default function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const title = 'Вітаю! Мене звати Лідія Перелигіна';

  const projects = [
    {
      url: 'https://step-project2-f47290.gitlab.io/',
      img: './images/diane-project.jpg',
      position: 'bottom',
      alt: 'Сайт-візитка творчої особи',
      description: 'Проєкт зібрано за допомогою Gulp, реалізовано адаптивний дизайн для трьох розмірів екранів. HTML5, SCSS, Gulp',
    },
    {
      url: 'https://sp-fitness-eb42cc.gitlab.io/',
      img: './images/fitness-project.jpg',
      position: 'top',
      alt: 'Інформативний сайт для фітнес-центру',
      description: 'Сторінка для фітнес-центру з динамічними функціями сортування та фільтрації. JavaScript, HTML5, CSS3',
    },
    {
      url: 'https://project-shop-sigma.vercel.app/',
      img: './images/shop-project.jpg',
      position: 'top',
      alt: 'Інтернет-магазин спортивних товарів',
      description: 'Магазин зі сторінками товарів і корзиною. React, Redux, React Router, Axios, MUI, Emotion, Formik, Yup, Vite, Sass, Jest, Node.js, MongoDB',
    },
    {
      url: 'https://tinyurl.com/4ejr5ner',
      img: './images/education-project.jpg',
      position: 'top',
      alt: 'Адаптивний вебсайт для освітнього центру',
      description: 'Використано медіа-запити для оптимізації на різних пристроях, включаючи мобільні телефони, планшети та десктопи. HTML5, CSS3, CSS Grid',
    },
  ];

  return (
    <section className="hero" style={{ padding: '40px' }}>
      <div className="glass-box">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          style={{ fontSize: '2rem', marginBottom: '16px' }}
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
          style={{ fontSize: '1.2rem', marginBottom: '24px' }}
        >
          Я створюю сучасні веб-рішення для вашого бізнесу
        </motion.p>

        <div className="wrapper" style={{ display: 'flex', gap: '12px' }}>
          <div className="options" style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', width: '100%' }}>
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className={`option ${index === activeIndex ? 'active' : ''}`}
                onClick={() => setActiveIndex(index)}
                initial={{ flex: 1 }}
               animate={{ flex: index === activeIndex ? 5 : 1 }}
                transition={{ duration: 0.5 }}
                style={{
                  flex: '1 1 200px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  backgroundImage: `url(${project.img})`,
                  backgroundSize: 'cover',
                  backgroundPosition: project.position || 'left',
                 // backgroundPosition: 'center',
                  height: '300px',
                  cursor: 'pointer',
                  position: 'relative',
                  color: '#fff',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
                }}
                title={project.alt}
              >
                {index === activeIndex && (
                  <div
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      top: '65%',
                      background: 'rgba(0, 0, 0, 0.6)',
                      padding: '12px',
                      textAlign: 'center',
                    }}
                  >
                    <h3 style={{ margin: '0 0 8px' }}>{project.alt}</h3>
                    <p style={{ fontSize: '14px', marginBottom: '10px' }}>{project.description}</p>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'inline-block',
                        padding: '6px 12px',
                        backgroundColor: '#1976d2',
                        color: '#fff',
                        borderRadius: '4px',
                        textDecoration: 'none',
                        fontWeight: 'bold',
                        fontSize: '14px',
                      }}
                    >
                      Перейти
                    </a>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

