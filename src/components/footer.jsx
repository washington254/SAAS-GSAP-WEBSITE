import React from 'react'

const Footer = () => {
    const navLinks = [
        { title: "Get Started", path: "/" },
        { title: "Create Strategy", path: "/create-strategy" },
        { title: "Pricing", path: "/pricing" },
        { title: "Contact", path: "/contact" },
        { title: "Solution", path: "/solution" },
        { title: "E-commerce", path: "/e-commerce" }
    ]

    const socialIcons = [
        {
            name: "Twitter",
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
            ),
        },
        {
            name: "Instagram",
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.01 3.71.054 1.14.051 1.918.27 2.634.54a4.894 4.894 0 011.72 1.12c.465.465.816.974 1.12 1.72.276.716.495 1.494.546 2.634.044.926.054 1.28.054 3.71s-.01 2.784-.054 3.71c-.051 1.14-.27 1.918-.54 2.634a4.894 4.894 0 01-1.12 1.72c-.465.465-.974.816-1.72 1.12-.716.276-1.494.495-2.634.546-.926.044-1.28.054-3.71.054s-2.784-.01-3.71-.054c-1.14-.051-1.918-.27-2.634-.54a4.894 4.894 0 01-1.12-1.12 4.894 4.894 0 01-1.12-1.72c-.27-.716-.495-1.494-.546-2.634C2.01 14.784 2 14.43 2 12s.01-2.784.054-3.71c.051-1.14.27-1.918.54-2.634a4.894 4.894 0 011.12-1.72 4.894 4.894 0 011.72-1.12c.716-.276 1.494-.495 2.634-.546.926-.044 1.28-.054 3.71-.054zM12 4.318c-4.242 0-4.293.018-5.96.094-.144.006-.243.025-.333.059-.208.082-.359.18-.518.34-.16.158-.258.309-.34.517-.034.09-.053.189-.06.333-.076 1.666-.094 1.718-.094 5.96s.018 4.293.094 5.96c.006.144.025.243.06.333.081.208.18.359.34.518.158.16.309.258.517.34.09.034.189.053.333.06 1.666.076 1.718.094 5.96.094s4.293-.018 5.96-.094c.144-.006.243-.025.333-.06.208-.081.359-.18.518-.34.16-.158.258-.309.34-.517.034-.09.053-.189.06-.333.076-1.666.094-1.718.094-5.96s-.018-4.293-.094-5.96c-.006-.144-.025-.243-.06-.333-.082-.208-.18-.359-.34-.518-.158-.16-.309-.258-.517-.34-.09-.034-.189-.053-.333-.06-1.666-.076-1.718-.094-5.96-.094zM12 7.182a4.818 4.818 0 100 9.636 4.818 4.818 0 000-9.636zM12 14.82a2.818 2.818 0 110-5.636 2.818 2.818 0 010 5.636zM17.506 6.494a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z" clipRule="evenodd" />
                </svg>
            ),
        },
        {
            name: "LinkedIn",
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                </svg>
            ),
        },
        {
            name: "Github",
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
            ),
        },
    ]

    return (
        <footer className="bg-secondary text-muted py-16 px-6 border-t border-zinc-200/50">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
                    {/* Column 1 */}
                    <div className="flex flex-col gap-6">
                        <h2 className="text-xl font-bold text-primary tracking-tight">
                            Our Platform, Your Art
                        </h2>
                        <p className="text-sm leading-relaxed max-w-xs text-muted">
                            Experience the future of digital creativity with our cutting-edge tools designed for creators worldwide.
                        </p>
                        <div className="flex items-center gap-4">
                            {socialIcons.map((social) => (
                                <a
                                    key={social.name}
                                    href="#"
                                    className="p-2 bg-light rounded-full text-muted hover:text-accent hover:shadow-md transition-all duration-300 border border-zinc-200/50"
                                    aria-label={social.name}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Column 2 */}
                    <div className="flex flex-col gap-6">
                        <h3 className="text-sm font-semibold text-primary uppercase tracking-wider">
                            Navigation
                        </h3>
                        <ul className="flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <li key={link.title}>
                                    <a
                                        href={link.path}
                                        className="text-sm hover:text-primary transition-colors duration-300"
                                    >
                                        {link.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3 */}
                    <div className="flex flex-col gap-6">
                        <h3 className="text-sm font-semibold text-primary uppercase tracking-wider">
                            Services
                        </h3>
                        <ul className="flex flex-col gap-4">
                            {["your story", "create story", "sell fast"].map((item) => (
                                <li key={item} className="text-sm capitalize hover:text-primary transition-colors duration-300 cursor-default">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4 */}
                    <div className="flex flex-col gap-6">
                        <h3 className="text-sm font-semibold text-primary uppercase tracking-wider">
                            Legal & Info
                        </h3>
                        <ul className="flex flex-col gap-4">
                            {["Privacy Policy", "Terms of Service", "API"].map((item) => (
                                <li key={item}>
                                    <a
                                        href="#"
                                        className="text-sm hover:text-primary transition-colors duration-300"
                                    >
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                        <div className="mt-auto pt-4 border-t border-zinc-200">
                            <p className="text-xs text-muted/80">
                                © {new Date().getFullYear()} Art Vista. All rights reserved.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
