import React from 'react';
import stackImage from '../assets/about/image.png';
import { aboutContent } from '../data/portfolioData';

// Tech stack SVG icons rendered inline for crisp rendering
const PythonIcon = () => (
  <div className="flex flex-col items-center gap-2">
    <svg className="w-14 h-14 md:w-16 md:h-16" viewBox="0 0 128 128">
      <path fill="#3776AB" d="M62.613 2c-29.839 0-28.005 12.943-28.005 12.943l.035 13.411h28.487v4.032H23.513S2 30.6 2 60.841c0 30.241 18.749 29.14 18.749 29.14h11.205V73.874s-.607-19.141 18.749-19.141h28.452s17.534.28 17.534-16.924V18.924S96.953 2 62.613 2zm-15.05 9.176a4.896 4.896 0 1 1 0 9.791 4.896 4.896 0 0 1 0-9.791z"/>
      <path fill="#FFD43B" d="M65.387 126c29.839 0 28.005-12.943 28.005-12.943l-.035-13.411H64.87v-4.032h39.617s21.513 1.786 21.513-28.455c0-30.241-18.749-29.14-18.749-29.14h-11.205v16.107s.607 19.141-18.749 19.141H48.845s-17.534-.28-17.534 16.924v19.889S31.047 126 65.387 126zm15.05-9.176a4.896 4.896 0 1 1 0-9.791 4.896 4.896 0 0 1 0 9.791z"/>
    </svg>
    <span className="text-xs font-bold text-white/80 uppercase tracking-wider">Python</span>
  </div>
);

const JavaIcon = () => (
  <div className="flex flex-col items-center gap-2">
    <svg className="w-14 h-14 md:w-16 md:h-16" viewBox="0 0 128 128">
      <path fill="#EA2D2E" d="M47.617 98.12c-19.192 5.362 11.677 16.439 36.115 5.969-4.003-1.556-6.874-3.391-6.874-3.391-10.897 5.163-31.934 2.759-25.932-2.097 4.501-3.631 0 0-3.309-.481zM65.856 86.36c-11.756 6.392-26.996 7.086-18.907 1.186 0 0-7.915 5.163-16.747 9.202 0 0-2.31 2.259 8.003 2.981 17.168 1.199 43.879-.749 45.026-8.065 0 0 1.243-3.178-17.375-5.304z"/>
      <path fill="#EA2D2E" d="M83.528 71.122s5.58 5.784-6.154 10.372c-22.342 8.725-46.496.666-29.911-6.023 6.238-2.515 9.738-2.728 9.738-2.728s-3.397-2.4-11.715 2.103c-24.692 13.36 11.12 19.441 39.654 8.366 5.363-2.077 8.162-5.965 8.162-5.965-.001.001-9.774-6.125-9.774-6.125zM91.625 96.106c-.198.395-.461.781-.791 1.159 0 0 13.189-3.404 8.545-11.964-4.591-8.454-8.145-12.625 10.927-27.179 0 0-29.855 7.447-18.681 37.984z"/>
      <path fill="#EA2D2E" d="M76.203 0s11.752 11.752-11.146 29.835c-18.359 14.499-4.187 22.754-.005 32.198-10.7-9.662-18.555-18.159-13.29-26.074C59.003 24.494 80.823 18.793 76.203 0zM66.414 113.085c21.023 1.345 53.358-.745 54.156-10.672 0 0-1.473 3.777-17.441 6.776-18.02 3.384-40.215 2.988-53.367.819 0 .001 2.695 2.228 16.652 3.077z"/>
    </svg>
    <span className="text-xs font-bold text-white/80 uppercase tracking-wider">Java</span>
  </div>
);

const CppIcon = () => (
  <div className="flex flex-col items-center gap-2">
    <svg className="w-14 h-14 md:w-16 md:h-16" viewBox="0 0 128 128">
      <path fill="#00599C" d="M117.5 37.8L66.7 8.5c-1.6-.9-3.7-.9-5.3 0L10.5 37.8c-1.6.9-2.6 2.6-2.6 4.5v58.6c0 1.9 1 3.6 2.6 4.5l50.8 29.3c1.6.9 3.7.9 5.3 0l50.8-29.3c1.6-.9 2.6-2.6 2.6-4.5V42.3c.1-1.9-.9-3.6-2.5-4.5zM64 115L18.4 88.7V39.3L64 13l45.6 26.3v49.4L64 115z"/>
      <path fill="#00599C" d="M66 43h-8c-1.1 0-2 .9-2 2v38c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V45c0-1.1-.9-2-2-2zM88 59h-6v-6c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v6h-6c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h6v6c0 1.1.9 2 2 2h4c1.1 0 2-.9 2-2v-6h6c1.1 0 2-.9 2-2v-4c0-1.1-.9-2-2-2z"/>
    </svg>
    <span className="text-xs font-bold text-white/80 uppercase tracking-wider">C / C++</span>
  </div>
);

const SqlIcon = () => (
  <div className="flex flex-col items-center gap-2">
    <svg className="w-14 h-14 md:w-16 md:h-16" viewBox="0 0 128 128">
      <ellipse cx="64" cy="24" rx="48" ry="16" fill="#336791" />
      <path fill="#336791" d="M16 24v32c0 8.8 21.5 16 48 16s48-7.2 48-16V24H16z" opacity="0.8" />
      <path fill="#336791" d="M16 56v32c0 8.8 21.5 16 48 16s48-7.2 48-16V56H16z" opacity="0.9" />
      <path fill="#336791" d="M16 88v16c0 8.8 21.5 16 48 16s48-7.2 48-16V88H16z" />
    </svg>
    <span className="text-xs font-bold text-white/80 uppercase tracking-wider">SQL</span>
  </div>
);

const OpenCvIcon = () => (
  <div className="flex flex-col items-center gap-2">
    <svg className="w-14 h-14 md:w-16 md:h-16" viewBox="0 0 128 128">
      <circle cx="64" cy="36" r="22" fill="#5C8DFF" />
      <circle cx="36" cy="84" r="22" fill="#FF5C5C" />
      <circle cx="92" cy="84" r="22" fill="#5CFF70" />
    </svg>
    <span className="text-xs font-bold text-white/80 uppercase tracking-wider">OpenCV</span>
  </div>
);

const About = () => {
  return (
    <section id="about" className="bg-[#ff2a2a] pt-20 pb-40 px-6 md:px-12 w-full relative overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-start">
        
        {/* Left Side: ID Badge and Image */}
        <div className="flex flex-col items-center w-full md:w-[350px] shrink-0 mt-12 md:mt-0">
          
          <div data-aos="drop-bounce" className="relative flex justify-center w-full">
            {/* Lanyard string */}
            <div className="absolute -top-32 left-1/2 w-3 h-40 bg-black transform -translate-x-1/2 shadow-inner z-0"></div>
            {/* Lanyard clip */}
            <div className="absolute -top-6 left-1/2 w-6 h-12 bg-gray-300 rounded border border-gray-400 transform -translate-x-1/2 z-10 shadow-[0_2px_10px_rgba(0,0,0,0.3)]"></div>
            
            {/* Badge Card */}
            <div className="bg-gray-900 w-full max-w-[280px] rounded-2xl p-3 shadow-[0_20px_40px_rgba(0,0,0,0.4)] relative z-20 transform -rotate-3 hover:rotate-0 transition-transform duration-500">
              {/* Cutout Hole */}
              <div className="absolute -top-3 left-1/2 w-16 h-6 bg-gray-900 rounded-t-xl transform -translate-x-1/2 flex justify-center items-center">
                <div className="w-8 h-2 bg-black/30 rounded-full shadow-inner"></div>
              </div>
              {/* Image Container */}
              <div className="w-full aspect-[3/4] overflow-hidden rounded-xl bg-gray-800 border-2 border-transparent">
                <img 
                  src={stackImage} 
                  alt="Asma Tamkeen — Computer Science & Engineering Student" 
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </div>

        </div>

        {/* Right Side: Info Content */}
        <div data-aos="fade-left" data-aos-delay="200" className="flex-1 text-white mt-8 md:mt-0 relative z-20">
          
          <h2 className="text-4xl md:text-5xl font-black text-black mb-4">{aboutContent.heading}</h2>
          <p 
            className="text-lg font-bold mb-12 leading-relaxed max-w-3xl text-red-50"
            dangerouslySetInnerHTML={{ __html: aboutContent.bio }}
          />

          {/* Horizontal Skills Row */}
          <div className="flex flex-wrap items-center gap-8 md:gap-10 mt-8">
            <div data-aos="zoom-in" data-aos-delay="300" className="hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-2xl">
              <PythonIcon />
            </div>
            <div data-aos="zoom-in" data-aos-delay="400" className="hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-2xl">
              <JavaIcon />
            </div>
            <div data-aos="zoom-in" data-aos-delay="500" className="hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-2xl">
              <CppIcon />
            </div>
            <div data-aos="zoom-in" data-aos-delay="600" className="hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-2xl">
              <SqlIcon />
            </div>
            <div data-aos="zoom-in" data-aos-delay="700" className="hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-2xl">
              <OpenCvIcon />
            </div>
          </div>

        </div>
      </div>

      {/* Torn paper divider at bottom */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none z-30 transform translate-y-1">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-20 fill-white">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z"></path>
        </svg>
      </div>

      {/* Decorative stars */}
      <div className="absolute top-10 right-10 md:right-20 text-black opacity-30 animate-pulse">
        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"/></svg>
      </div>
      <div className="absolute bottom-32 left-4 md:left-20 text-black opacity-30 animate-pulse" style={{ animationDelay: '1s' }}>
        <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"/></svg>
      </div>
    </section>
  );
};

export default About;
