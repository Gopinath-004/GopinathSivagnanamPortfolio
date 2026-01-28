import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

const Navbar = () => {
    const { theme, toggleTheme } = useTheme();
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'Work', href: '#work' },
        { name: 'Hardware', href: '#hardware' },
        { name: 'Skills', href: '#skills' },
        { name: 'Education', href: '#education' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-industrial-950/80 backdrop-blur-md border-b border-industrial-800 py-3' : 'bg-transparent py-5'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
                <a href="#home" className="text-xl font-bold font-mono tracking-tighter text-white">
                    GS<span className="text-neon-blue">.</span>
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-industrial-300 hover:text-neon-blue transition-colors relative group"
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-neon-blue transition-all group-hover:w-full"></span>
                        </a>
                    ))}

                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-full hover:bg-industrial-800 transition-colors text-industrial-300 hover:text-neon-blue ml-4"
                        aria-label="Toggle Theme"
                    >
                        {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <div className="flex items-center gap-4 md:hidden">
                    <button
                        onClick={toggleTheme}
                        className="text-industrial-300 hover:text-white"
                    >
                        {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                    </button>
                    <button
                        className="text-industrial-300 hover:text-white"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-industrial-900/95 backdrop-blur-lg border-b border-industrial-800 overflow-hidden"
                    >
                        <div className="px-4 py-4 space-y-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="block text-center text-industrial-300 hover:text-white py-2"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
