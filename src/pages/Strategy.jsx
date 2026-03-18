import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const brandImages = [
    "/images/b2.png",
    "/images/b3.png",
    "/images/b4.png",
    "/images/b5.png",
    "/images/b6.png",
    "/images/b7.png",
];

const Strategy = () => {
    const sectionRef = useRef(null);

    useGSAP(() => {
        // Text fade in with opacity + y
        gsap.from('.strategy-text', {
            scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top 60%',
            },
            opacity: 0,
            y: 30,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power3.out',
        });

        // Box translate Y only (no opacity change)
        gsap.from('.strategy-box', {
            scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top 50%',
            },
            y: 120,
            duration: 1.2,
            ease: 'power3.out',
        });

        // Sponsor text fade in
        gsap.from('.sponsor-text', {
            scrollTrigger: {
                trigger: '.sponsor-section',
                start: 'top 75%',
            },
            opacity: 0,
            y: 30,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power3.out',
        });
    }, { scope: sectionRef });

    return (
        <section
            ref={sectionRef}
            className="min-h-screen flex flex-col justify-start px-6 py-20 bg-white overflow-hidden"
        >
            <div className="max-w-6xl mx-auto w-full">
                {/* Top left titles */}
                <p className="strategy-text text-sm font-bold text-accent mb-3 uppercase tracking-widest">
                    Class by Madam Musyoki
                </p>
                <h2 className="strategy-text text-4xl md:text-7xl font-bold text-primary leading-[1.1] mb-10">
                    Gateway to artist people
                </h2>

                {/* Accent box */}
                <div className="strategy-box w-full bg-accent rounded-3xl relative overflow-hidden flex flex-col items-center justify-end"
                    style={{ minHeight: '65vh' }}
                >
                    {/* Left-aligned image */}
                    <img
                        src="/images/b1.png"
                        alt="Madam Musyoki"
                        className="absolute bottom-0 left-0 z-10 w-auto max-h-[65vh] object-contain -mb-1 drop-shadow-2xl"
                    />

                    {/* Bottom bar */}
                    <div className="absolute bottom-0 left-0 right-0 flex items-center justify-end gap-8 px-6 md:px-10 py-5 z-20">
                        {/* Watch button with ripple */}
                        <button className="relative group px-8 py-3 bg-white text-primary font-semibold rounded-full overflow-hidden transition-transform duration-300 hover:scale-105">
                            <span className="relative z-10">Watch</span>
                            {/* Ripple rings */}
                            <span className="absolute inset-0 rounded-full border-2 border-white/40 animate-ping pointer-events-none" />
                            <span className="absolute -inset-1 rounded-full border border-white/20 animate-pulse pointer-events-none" />
                        </button>

                        {/* Arrow navigation */}
                        <div className="flex items-center gap-3">
                            <button className="w-12 h-12 rounded-full border-2 border-white/60 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                                </svg>
                            </button>
                            <button className="w-12 h-12 rounded-full border-2 border-white/60 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* ====== SPONSOR CAROUSEL ====== */}
            <div className="sponsor-section max-w-6xl mx-auto w-full mt-32">
                <div className="text-center mb-12">
                    <h3 className="sponsor-text text-3xl md:text-5xl font-bold text-primary mb-4">
                        Trusted By The Best
                    </h3>
                    <p className="sponsor-text text-lg text-lightDark">
                        We have worked with major brands
                    </p>
                </div>

                {/* Carousel with fog edges */}
                <div
                    className="relative overflow-hidden py-8"
                    style={{
                        maskImage: 'linear-gradient(to right, transparent 0%, white 15%, white 85%, transparent 100%)',
                        WebkitMaskImage: 'linear-gradient(to right, transparent 0%, white 15%, white 85%, transparent 100%)',
                    }}
                >
                    <div className="flex animate-scroll-left w-max">
                        {/* Duplicate the brands twice for seamless loop */}
                        {[...brandImages, ...brandImages].map((src, index) => (
                            <div key={index} className="flex-shrink-0 mx-8 md:mx-12 flex items-center justify-center">
                                <img
                                    src={src}
                                    alt={`Brand ${(index % brandImages.length) + 1}`}
                                    className="h-12 md:h-16 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Strategy;

