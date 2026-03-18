import React, { useState, useEffect } from 'react'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setScrolled(true)
            } else {
                setScrolled(false)
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navLinks = [
        { title: "Get Started", path: "/" },
        { title: "Create Strategy", path: "/create-strategy" },
        { title: "Pricing", path: "/pricing" },
        { title: "Contact", path: "/contact" },
        { title: "Solution", path: "/solution" },
        { title: "E-commerce", path: "/e-commerce" }
    ]

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

    return (
        <div className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled
            ? 'py-3 bg-white/80 backdrop-blur-md shadow-sm border-b border-zinc-100'
            : 'py-5 bg-transparent'
            }`}>
            <nav className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                {/* Logo Section */}
                <div className="flex items-center gap-3 group cursor-pointer">
                    <img
                        src="/vite.svg"
                        alt="saas logo"
                        width="32"
                        height="32"
                        className="transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110"
                    />
                    <h1 className="text-xl font-bold tracking-tight text-dark  bg-clip-text ">
                        Art Vista
                    </h1>
                </div>

                {/* Desktop Nav Links */}
                <div className="hidden lg:flex items-center">
                    <ul className="flex items-center gap-8">
                        {navLinks.map((link) => (
                            <li key={link.title}>
                                <a
                                    href={link.path}
                                    className="text-sm font-medium text-muted hover:text-primary transition-colors relative group"
                                >
                                    {link.title}
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Right Side Actions */}
                <div className="flex items-center gap-4">
                    {/* User Icon (Login Replacement) */}
                    <button
                        className="p-2 text-muted hover:text-primary hover:bg-secondary rounded-full transition-all"
                        aria-label="User Profile"
                    >
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                            <circle cx="12" cy="7" r="4"></circle>
                        </svg>
                    </button>

                    {/* Sun Icon (Sign Up Replacement) */}
                    <button
                        className="p-2 text-muted hover:text-primary hover:bg-secondary rounded-full transition-all"
                        aria-label="Theme Toggle"
                    >
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="5"></circle>
                            <line x1="12" y1="1" x2="12" y2="3"></line>
                            <line x1="12" y1="21" x2="12" y2="23"></line>
                            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                            <line x1="1" y1="12" x2="3" y2="12"></line>
                            <line x1="21" y1="12" x2="23" y2="12"></line>
                            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                        </svg>
                    </button>

                    {/* Mobile Toggle */}
                    <button
                        className="lg:hidden  p-2 text-primary"
                        onClick={toggleMenu}
                        aria-label="Toggle Menu"
                    >
                        <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            {isMenuOpen ? (
                                <path d="M18 6L6 18M6 6l12 12" />
                            ) : (
                                <path d="M3 12h18M3 6h18M3 18h18" />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Dropdown Menu */}
                <div className={`absolute top-full left-0 w-full bg-light border-b border-secondary shadow-xl lg:hidden transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-[500px] opacity-100 py-8' : 'max-h-0 opacity-0 py-0'
                    }`}>
                    <ul className="flex flex-col items-center gap-6">
                        {navLinks.map((link) => (
                            <li key={link.title} className="w-full text-center">
                                <a
                                    href={link.path}
                                    className="text-lg font-medium text-muted hover:text-primary block w-full py-2"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {link.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar