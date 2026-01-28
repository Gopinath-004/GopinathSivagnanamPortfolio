import { motion } from 'framer-motion';
import { ArrowDown, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-industrial-900 via-industrial-950 to-industrial-950">

            {/* Background ambient glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-neon-blue/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="z-10 text-center px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-industrial-50 via-industrial-200 to-industrial-400 glow-text">
                        Gopinath Sivagnanam
                    </h1>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <h2 className="text-2xl md:text-3xl text-neon-blue mb-8 font-mono">
                        Full Stack & IoT Developer
                    </h2>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-lg text-industrial-300 max-w-2xl mx-auto mb-12"
                >
                    Bridging the digital and physical worlds with <span className="text-industrial-50 font-semibold">3 Years</span> of experience building robust web applications and integrating complex Industrial IoT solutions.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="flex justify-center gap-6 mb-16"
                >
                    {/* Social Links */}
                    <a href="https://www.linkedin.com/in/gopinath-sivagnanam-543b981b8/" target="_blank" rel="noopener noreferrer" className="p-3 bg-industrial-800/50 rounded-full hover:bg-neon-blue/20 hover:text-neon-blue transition-all border border-industrial-700 hover:border-neon-blue/50">
                        <Linkedin size={24} />
                    </a>
                    <a href="mailto:gopisiva192@gmail.com" className="p-3 bg-industrial-800/50 rounded-full hover:bg-neon-blue/20 hover:text-neon-blue transition-all border border-industrial-700 hover:border-neon-blue/50">
                        <Mail size={24} />
                    </a>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 animate-bounce cursor-pointer"
            >
                <ArrowDown className="text-industrial-400" size={32} />
            </motion.div>
        </section>
    );
};

export default Hero;
