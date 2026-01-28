import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

const Education = () => {
    return (
        <section className="py-20 bg-industrial-950 border-t border-industrial-900" id="education">
            <div className="section-container max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl font-bold mb-8">Education</h2>

                    <div className="grid md:grid-cols-2 gap-6">
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="glass-panel p-6 rounded-xl text-left border-t-2 border-t-neon-blue"
                        >
                            <div className="flex items-start justify-between mb-4">
                                <div>
                                    <h3 className="text-xl font-bold text-industrial-50">MCA</h3>
                                    <p className="text-sm text-industrial-400">Master of Computer Applications</p>
                                </div>
                                <GraduationCap className="text-neon-blue" size={24} />
                            </div>
                            <p className="font-semibold text-industrial-200">SRM Institute of Science and Technology, Chennai</p>
                            <p className="text-sm text-industrial-500 mt-2">Specialized in Advanced Computing & Network Security</p>
                        </motion.div>

                        <motion.div
                            whileHover={{ y: -5 }}
                            className="glass-panel p-6 rounded-xl text-left border-t-2 border-t-neon-green"
                        >
                            <div className="flex items-start justify-between mb-4">
                                <div>
                                    <h3 className="text-xl font-bold text-industrial-50">BCA</h3>
                                    <p className="text-sm text-industrial-400">Bachelor of Computer Applications</p>
                                </div>
                                <GraduationCap className="text-neon-green" size={24} />
                            </div>
                            <p className="font-semibold text-industrial-200">VIT, Vellore</p>
                            <p className="text-sm text-industrial-500 mt-2">Foundation in Algorithms & Software Engineering</p>
                        </motion.div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default Education;
