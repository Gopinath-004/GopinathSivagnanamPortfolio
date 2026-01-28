import { motion } from 'framer-motion';
import { Send, Phone, Mail, User } from 'lucide-react';

const Contact = () => {
    const inputClasses = "w-full bg-industrial-900/50 border border-industrial-700 rounded-lg px-4 py-3 text-industrial-100 focus:outline-none focus:border-neon-blue focus:ring-1 focus:ring-neon-blue transition-all";
    const labelClasses = "block text-sm font-medium text-industrial-400 mb-2";

    return (
        <section id="contact" className="py-24 bg-industrial-950 relative overflow-hidden">
            {/* Background glow for depth */}
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-neon-blue/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="section-container max-w-4xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
                    <p className="text-industrial-400">
                        Have a project in mind or need expert IoT integration? Let's build something scalable.
                    </p>
                </motion.div>

                <div className="glass-panel p-8 md:p-10 rounded-2xl border-t border-t-industrial-700">
                    <form className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className={labelClasses}><User size={16} className="inline mr-2" /> Name</label>
                                <input type="text" className={inputClasses} />
                            </div>
                            <div>
                                <label className={labelClasses}><Phone size={16} className="inline mr-2" /> Phone</label>
                                <input type="tel" className={inputClasses} />
                            </div>
                        </div>

                        <div>
                            <label className={labelClasses}><Mail size={16} className="inline mr-2" /> Email</label>
                            <input type="email" className={inputClasses} />
                        </div>

                        <div>
                            <label className={labelClasses}>Message</label>
                            <textarea rows={4} className={inputClasses}></textarea>
                        </div>

                        <div className="text-center pt-4">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                type="submit"
                                className="bg-neon-blue text-industrial-950 px-8 py-3 rounded-full font-bold hover:bg-white transition-colors shadow-[0_0_20px_rgba(0,243,255,0.3)] hover:shadow-[0_0_30px_rgba(0,243,255,0.5)] flex items-center gap-2 mx-auto"
                            >
                                <Send size={18} />
                                Send Message
                            </motion.button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
