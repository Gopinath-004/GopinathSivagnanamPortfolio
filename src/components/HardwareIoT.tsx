import { motion } from 'framer-motion';
import { Cpu, Settings, Zap } from 'lucide-react';

const HardwareIoT = () => {
    return (
        <section id="hardware" className="py-24 relative overflow-hidden bg-industrial-950 text-industrial-50">
            {/* Industrial Grid Background */}
            <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

            <div className="section-container relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 font-mono tracking-tighter">
                            HARDWARE <span className="text-neon-orange">&</span> IoT
                            <br />
                            INTEGRATION
                        </h2>
                        <div className="h-1 w-20 bg-neon-orange mb-8"></div>

                        <p className="text-industrial-300 text-lg mb-6 leading-relaxed">
                            My expertise goes beyond code. I understand the physical layer. I've spent hours on factory floors, debugging serial connections, and ensuring that software logic aligns perfectly with hardware reality.
                        </p>

                        <ul className="space-y-4">
                            <li className="flex items-center gap-3">
                                <Cpu className="text-neon-orange" />
                                <span>Real-time Sensor Data Processing</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Settings className="text-neon-orange" />
                                <span>Modbus/TCP & Serial Communication</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Zap className="text-neon-orange" />
                                <span>MQTT Protocol & Data Flow Control</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Cpu className="text-neon-orange" />
                                <span>Test-Driven Hardware Debugging</span>
                            </li>
                        </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="absolute -inset-1 bg-gradient-to-r from-neon-orange to-red-600 rounded-2xl blur opacity-25"></div>
                        <div className="relative bg-industrial-900 border border-industrial-800 p-8 rounded-2xl shadow-2xl">
                            <div className="flex justify-between items-start mb-6 border-b border-industrial-800 pb-4">
                                <div>
                                    <h3 className="text-xl font-bold text-industrial-50">System Status</h3>
                                    <p className="text-xs text-neon-green font-mono">● ONLINE - TDD ACTIVE</p>
                                </div>
                                <div className="font-mono text-xs text-industrial-500">
                                    V 2.4.0
                                </div>
                            </div>

                            <div className="space-y-4 font-mono text-sm">
                                <div className="flex justify-between">
                                    <span className="text-industrial-400">Connection</span>
                                    <span className="text-neon-blue">ESTABLISHED</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-industrial-400">Latency</span>
                                    <span className="text-white">12ms</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-industrial-400">Packets/s</span>
                                    <span className="text-white">2,405</span>
                                </div>
                                <div className="h-24 bg-industrial-950 rounded border border-industrial-800 mt-4 flex items-end p-2 gap-1">
                                    {/* Fake Chart Bars */}
                                    {[40, 60, 45, 70, 85, 60, 75, 50, 65, 90, 80, 70, 60].map((h, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ height: 0 }}
                                            whileInView={{ height: `${h}%` }}
                                            transition={{ delay: i * 0.05, duration: 0.5 }}
                                            className="flex-1 bg-neon-orange/80 rounded-t-sm"
                                        />
                                    ))}
                                </div>
                                <div className="text-center text-xs text-industrial-500 mt-2">
                                    Real-time throughput analysis
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default HardwareIoT;
