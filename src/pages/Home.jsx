import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const containerRef = useRef(null);

  const titleText = "A Place to display your masterpiece";
  const words = titleText.split(' ');

  const section2Words = [
    { word: "Showcase," },
    { word: "Sell" },
    { word: "&", accent: true },
    { word: "acquire", accent: true },
    { word: "arts", accent: true },
    { word: "to", accent: true },
    { word: "Artvista" }
  ];

  const images = {
    A1: "/images/A1.jpg",
    A2: "/images/A2.png",
    A3: "/images/A3.jpg",
    A4: "/images/A4.png",
    A5: "/images/A5.jpg",
    A6: "/images/A6.png",
    A7: "/images/A7.jpg",
  };

  useGSAP(() => {
    let mm = gsap.matchMedia();

    mm.add({
      isDesktop: "(min-width: 768px)",
      isMobile: "(max-width: 767px)"
    }, (context) => {
      let { isDesktop } = context.conditions;
      let spreadX = isDesktop ? 140 : 45;

      const tl = gsap.timeline();

      // Set initial states for cards: from bottom, rotated in X-axis
      gsap.set('.gsap-card', {
        y: window.innerHeight,
        rotationX: 65,
        transformPerspective: 1000,
      });

      // 1. Animated H1 showing each individual word
      tl.from('.gsap-word', {
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
      });

      // 2. Images translate from bottom and rotate X to 0, stacking nicely
      tl.to('.gsap-card', {
        y: 0,
        rotationX: 0,
        duration: 1.5,
        ease: 'power3.out',
      }, "<0.2");

      //spread like a deck of cards
      tl.to('.gsap-card', {
        x: (index) => (index - 3) * spreadX,
        y: (index) => Math.abs(index - 3) * 15, // Slight curved arc for the spread
        rotation: (index) => (index - 3) * 5, // Fanning out like cards
        duration: 1.5,
        ease: 'power3.inOut',
      });

      // 4. Fade in the rest of the text and buttons
      tl.from('.gsap-fade-in', {
        opacity: 0,
        y: 20,
        duration: 1,
        stagger: 0.2,
        ease: 'power2.out',
      }, "-=1.5");

      // ====== SECTION 2 ANIMATIONS ========

      // Text word-by-word fade in
      gsap.from('.section2-word', {
        scrollTrigger: {
          trigger: '#section-2',
          start: "top 60%",
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
      });

      // Other text details fade in
      gsap.from('.section2-fade', {
        scrollTrigger: {
          trigger: '#section-2',
          start: "top 60%",
        },
        opacity: 0,
        y: 20,
        duration: 1,
        stagger: 0.2,
        delay: 0.5,
        ease: 'power2.out',
      });

      // Cards Animation: Move to Section 2 and spread automatically
      const cardsTl = gsap.timeline({
        scrollTrigger: {
          trigger: '#section-2',
          start: 'top 60%', // when arriving at section 2
          onEnter: (self) => self.animation.timeScale(1).play(), // Play at normal speed
          onLeaveBack: (self) => self.animation.timeScale(2.2).reverse(), // Reverse at double speed (half duration)
          invalidateOnRefresh: true,
        }
      });

      cardsTl.to('.gsap-card', {
        x: () => {
          const s1 = document.querySelector('.section1-images');
          const s2 = document.querySelector('.section2-images');
          if (!s1 || !s2) return 0;
          return (s2.getBoundingClientRect().left + s2.getBoundingClientRect().width / 2) -
            (s1.getBoundingClientRect().left + s1.getBoundingClientRect().width / 2);
        },
        y: () => {
          const s1 = document.querySelector('.section1-images');
          const s2 = document.querySelector('.section2-images');
          if (!s1 || !s2) return 0;
          return (s2.getBoundingClientRect().top + s2.getBoundingClientRect().height / 2) -
            (s1.getBoundingClientRect().top + s1.getBoundingClientRect().height / 2);
        },
        rotation: 0,
        duration: 1.2,
        ease: 'power3.inOut',
      });

      // South East Spread Phase
      cardsTl.to('.gsap-card', {
        x: (index) => {
          const s1 = document.querySelector('.section1-images');
          const s2 = document.querySelector('.section2-images');
          if (!s1 || !s2) return 0;
          const baseX = (s2.getBoundingClientRect().left + s2.getBoundingClientRect().width / 2) -
            (s1.getBoundingClientRect().left + s1.getBoundingClientRect().width / 2);
          return baseX + ((index - 3) * 35);
        },
        y: (index) => {
          const s1 = document.querySelector('.section1-images');
          const s2 = document.querySelector('.section2-images');
          if (!s1 || !s2) return 0;
          const baseY = (s2.getBoundingClientRect().top + s2.getBoundingClientRect().height / 2) -
            (s1.getBoundingClientRect().top + s1.getBoundingClientRect().height / 2);
          return baseY + ((index - 3) * 35);
        },
        duration: 1.5,
        ease: 'power3.out',
      });

    });
  }, { scope: containerRef });

  return (
    <main className="min-w-screen w-full  overflow-x-hidden" ref={containerRef}>

      {/* ====== SECTION 1 ====== */}
      <section className="min-h-screen  flex items-center justify-center px-6 py-20 relative">
        <div className="max-w-6xl mx-auto flex flex-col items-center text-center w-full">
          {/* Animated H1 */}
          <h1 className="text-4xl md:text-7xl font-bold tracking-tight text-primary leading-[1.1] mb-2 overflow-hidden z-20">
            {words.map((word, index) => (
              <span key={index} className="inline-block mr-[0.25em] gsap-word">
                {word}
              </span>
            ))}
          </h1>

          {/* Animated Images (Deck of Cards) */}
          <div className="section1-images relative h-[250px] md:h-[450px] w-full mb-10 z-10 flex justify-center items-center">
            {Object.values(images).map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Art ${index + 1}`}
                className="absolute inset-0 m-auto w-[160px] md:w-[280px] h-[220px] md:h-[300px] object-cover rounded-2xl gsap-card border-4 border-white/20 "
              />
            ))}
          </div>

          {/* Animated Paragraph */}
          <p className="text-lg md:text-xl text-lightDark max-w-2xl mb-12 gsap-fade-in leading-relaxed z-20">
            Artists can display their masterpieces, and buyers can discover and purchase works that resonate with them. Experience a premium platform for the modern art world.
          </p>

          {/* Animated Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 gsap-fade-in z-20">
            <button className="px-8 py-4 bg-primary text-secondary font-semibold rounded-full hover:scale-105 hover:shadow-xl transition-all duration-300">
              Join for $9.99/m
            </button>
            <button className="px-8 py-4 bg-grey text-primary font-semibold border border-primary/20 rounded-full hover:bg-secondary transition-all duration-300">
              Read more
            </button>
          </div>
        </div>
      </section>

      {/* ====== SECTION 2 ====== */}
      <section id="section-2" className="min-h-screen flex items-center justify-center px-6 py-20 relative bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-15 items-center">

          {/* Left Column: Text */}
          <div className="flex flex-col text-left z-20">
            <h1 className="text-sm font-bold text-accent mb-4 uppercase tracking-widest section2-fade">E-COMMERCE..</h1>
            <h2 className="text-4xl md:text-7xl font-bold text-primary leading-[1.1] mb-6 overflow-hidden">
              {section2Words.map((wordObj, index) => (
                <span key={index} className={`inline-block mr-[0.25em] section2-word ${wordObj.accent ? 'text-accent' : ''}`}>
                  {wordObj.word}
                </span>
              ))}
            </h2>
            <p className="text-lg md:text-xl text-lightDark mb-12 section2-fade leading-relaxed">
              We have a dynamic community where Artist and Buyers seemlessly merge, we bring together Creators and Enthuthiast to share in creativity
            </p>

            <div className="flex flex-col sm:flex-row items-start justify-start gap-5 section2-fade z-20">
              <button className="px-8 py-4 bg-primary text-secondary font-semibold rounded-full hover:scale-105 hover:shadow-xl transition-all duration-300">
                Join for $9.99/m
              </button>
              <button className="px-8 py-4 bg-grey text-primary font-semibold border border-primary/20 rounded-full hover:bg-secondary transition-all duration-300">
                Read more
              </button>
            </div>
          </div>

          {/* Right Column: Empty Placeholder for GSAP cards */}
          {/* This matches the dimensions of section1-images to provide a precise target. It has opacity-0 so it doesn't render visually but still holds space. */}
          <div className="section2-images mt-15 md:mt-0 relative h-[250px] md:h-[450px] w-full flex justify-center items-center pointer-events-none opacity-0">
          </div>

        </div>
      </section>

    </main>
  );
};

export default Home;
