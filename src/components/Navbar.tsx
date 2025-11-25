'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const NeonCatIcon = () => (
    <svg
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-white"
    >
        <path
            d="M1 21H3V19H1V21ZM5 17H3V19H5V17ZM5 15H7V17H5V15ZM9 13H7V15H9V13ZM9 11H11V13H9V11ZM13 11H11V13H13V11ZM13 13H15V15H13V13ZM17 15H15V17H17V15ZM17 17H19V19H17V17ZM21 17H19V19H21V17ZM21 21H23V19H21V21ZM17 9H19V7H17V9ZM15 9H17V11H15V9ZM13 7H15V9H13V7ZM5 9H3V7H5V9ZM7 9H5V11H7V9ZM9 7H7V9H9V7Z"
            fill="currentColor"
        />
    </svg>
);

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const navLinks = [
        { name: 'About', href: '/about' },
        { name: 'Projects', href: '/projects' },
        { name: 'Services', href: '/services' },
        { name: 'Certificates', href: '/certificates' },
        { name: 'Contact', href: '/contact' },
    ];

    return (
        <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/60 border-b border-white/5">
            <nav className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-3">
                    <NeonCatIcon />
                    <span className="font-semibold text-base text-white">
                        Celeste Navarro
                    </span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-10">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-white text-sm font-medium hover:text-gray-300 transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setMenuOpen((o) => !o)}
                    className="md:hidden p-2 rounded-md hover:bg-white/5 text-white"
                >
                    {menuOpen ? <X size={22} /> : <Menu size={22} />}
                </button>
            </nav>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden bg-black/95 backdrop-blur-xl border-t border-white/5 absolute w-full">
                    <div className="flex flex-col p-6 space-y-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-white hover:text-gray-300 transition py-2 text-center text-sm font-medium"
                                onClick={() => setMenuOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </header>
    );
}
