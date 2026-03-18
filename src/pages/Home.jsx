import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Home = () => {
  const containerRef = useRef(null);
  const titleText = "A Place to display your masterpiece";
  const words = titleText.split(' ');

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

      // 3. After a 2 second duration, spread like a deck of cards
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
    });
  }, { scope: containerRef });

  return (
    <main className="min-h-screen min-w-full flex items-center justify-center bg-light px-6 py-20 overflow-x-hidden" ref={containerRef}>
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
        <div className="relative h-[250px] md:h-[450px] w-full  mb-10 z-10 flex justify-center items-center">
          {Object.values(images).map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Art ${index + 1}`}
              className="absolute inset-0 m-auto w-[160px] md:w-[280px] h-[220px] md:h-[300px] object-cover rounded-2xl gsap-card border-4 border-white/20"
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
    </main>
  );
};

export default Home;
