
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); 
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const title = 'Вітаю! Мене звати Лідія Перелигіна';

  const projects = [
    {
      url: 'https://sp-fitness-eb42cc.gitlab.io/',
      img: './images/fitness-project.jpg',
      position: 'top',
      alt: 'Інформативний сайт для фітнес-центру',
      description: 'Сторінка для фітнес-центру з динамічними функціями сортування та фільтрації. JavaScript, HTML5, CSS3',
    },
    {
      url: 'https://sporty-steel.vercel.app/',
      img: './images/shop-project.jpg',
      position: 'top',
      alt: 'Інтернет-магазин спортивних товарів',
      description: 'Магазин зі сторінками товарів і корзиною. React, Redux, React Router, Axios, MUI, Emotion, Formik, Yup, Vite, Sass, Jest, Node.js, MongoDB',
    },
    {
      url: 'https://step-project2-f47290.gitlab.io/',
      img: './images/diane-project2.jpg',
      position: 'bottom',
      alt: 'Сайт-візитка творчої особи',
      description: 'Проєкт зібрано за допомогою Gulp, реалізовано адаптивний дизайн для трьох розмірів екранів. HTML5, SCSS, Gulp',
    },
    {
      url: 'https://tinyurl.com/4ejr5ner',
      img: './images/education-project.jpg',
      position: 'top',
      alt: 'Адаптивний вебсайт для освітнього центру',
      description: 'Використано медіа-запити для оптимізації на різних пристроях, включаючи мобільні телефони, планшети та десктопи. HTML5, CSS3, CSS Grid',
    },
    {
      url: 'https://react-hw6-nine.vercel.app/',
      img: './images/fruit-world-project.jpg',
      position: 'top',
      alt: 'Інтернет-магазин фруктів',
      description: 'Магазин зі сторінкою товарів, обраних товарів та корзиною. React, Redux, React Router, Jest',
    },
  ];

  return (
    <section className="hero">
      <div className="glass-box">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
       
          style={{
            fontSize: window.innerWidth <= 768 ? '2.25rem' : '3rem',
              marginBottom: '16px' }}
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
          style={{ fontSize: '1.2rem', marginBottom: '24px',   fontWeight: 'bold', color:'#1976d2'}}
        >
          Я створюю сучасні веб-рішення для вашого бізнесу
        </motion.p>

        <div
          className="wrapper"
          style={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            gap: '12px',
          }}
        >
          <div
            className="options"
            style={{
              display: 'flex',
              flexDirection: isMobile ? 'column' : 'row',
              flexWrap: isMobile ? 'nowrap' : 'wrap',
              gap: '12px',
              width: '100%',
            }}
          >
            {projects.map((project, index) => {
              const isActive = index === activeIndex;

              return (
                <motion.div
                  key={index}
                  className={`option ${isActive ? 'active' : ''}`}
                  onClick={() => setActiveIndex(index)}
                  initial={{ flex: 1 }}
                  animate={{
                    flex: isMobile ? undefined : isActive ? 6 : 1,
                    height: isMobile ? (isActive ? 400 : 200) : 300,
                  }}
                  /*transition={{ duration: 0.5 }}*/
                  transition={{ duration: isMobile ? 3 : 0.5,  ease: "easeInOut", }
                }
                  style={{
                    flex: isMobile ? 'none' : '1 1 200px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    backgroundImage: `url(${project.img})`,
                    backgroundSize: 'cover',
                    backgroundPosition: project.position || 'left',
                    cursor: 'pointer',
                    position: 'relative',
                    color: '#fff',
                    borderRadius: '8px',
                    overflow: 'hidden',
                    boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
                  }}
                  title={project.alt}
                >
                  {isActive && (
                    <div
                      style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                       // top: '65%',
                        top: window.innerWidth <= 768 ? '55%' : '65%',
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
                          fontFamily: '"Rouge Script", cursive'
                        }}
                      >
                        Перейти
                      </a>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        <div className="rotating-text">
          Телеграм:@l122_937 lidiia.perelyhina@gmail.com
        </div>
      </div>
    </section>
  );
}
