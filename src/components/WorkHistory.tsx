import { motion } from 'framer-motion';
import { Briefcase, MapPin, MonitorCheck, Database } from 'lucide-react';

const WorkHistory = () => {
    const experiences = [
        {
            company: "ProcessDrive India",
            role: "Full Stack Developer",
            period: "2021 - Present",
            description: "Core developer for enterprise-grade applications, focusing on reliability and seamless hardware integration.",
            projects: [
                {
                    name: "AIM2C (IoT-Integrated CMMS)",
                    icon: <MonitorCheck size={20} />,
                    details: "A comprehensive Computerized Maintenance Management System integrating real-time IoT sensor data. I led the development of the frontend dashboard and backend data processing pipelines, ensuring 99.9% uptime for critical industry metrics."
                },
                {
                    name: "SYFOL (CRM)",
                    icon: <Database size={20} />,
                    details: "Developed a scalable CRM tailored for industrial clients. Implemented complex reporting modules and automated workflows that improved client sales tracking by 40%."
                }
            ],
            highlights: [
                "Conduct onsite industrial visits to gather direct requirements from plant managers.",
                "Bridge the gap between software capabilities and hardware limitations.",
                "Implement Test-Driven Development (TDD) for critical modules."
            ]
        }
    ];

    return (
        <section className="py-20 bg-industrial-950" id="work">
            <div className="section-container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center gap-3">
                        <span className="w-2 h-8 bg-neon-blue rounded-full"></span>
                        Work History
                    </h2>
                </motion.div>

                <div className="relative border-l-2 border-industrial-800 ml-3 md:ml-6 space-y-12">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="relative pl-8 md:pl-12"
                        >
                            <span className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-industrial-950 border-2 border-neon-blue glow-text"></span>

                            <div className="glass-panel p-6 md:p-8 rounded-xl border-l-4 border-l-neon-blue">
                                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                                    <div>
                                        <h3 className="text-2xl font-bold text-industrial-50 mb-1">{exp.role}</h3>
                                        <div className="flex items-center gap-2 text-industrial-400">
                                            <Briefcase size={16} />
                                            <span className="font-semibold text-neon-blue">{exp.company}</span>
                                        </div>
                                    </div>
                                    <span className="text-sm font-mono text-industrial-500 mt-2 md:mt-0 bg-industrial-900 px-3 py-1 rounded-full border border-industrial-800">
                                        {exp.period}
                                    </span>
                                </div>

                                <p className="text-industrial-300 mb-6">{exp.description}</p>

                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                    {exp.projects.map((proj, idx) => (
                                        <div key={idx} className="bg-industrial-900/50 p-4 rounded-lg border border-industrial-800 hover:border-industrial-600 transition-colors">
                                            <h4 className="font-bold text-industrial-100 mb-2 flex items-center gap-2">
                                                {proj.icon}
                                                {proj.name}
                                            </h4>
                                            <p className="text-sm text-industrial-400">{proj.details}</p>
                                        </div>
                                    ))}
                                </div>

                                <div className="space-y-2">
                                    {exp.highlights.map((highlight, hIdx) => (
                                        <div key={hIdx} className="flex items-start gap-3 text-sm text-industrial-300">
                                            <MapPin size={16} className="text-neon-green shrink-0 mt-1" />
                                            <span>{highlight}</span>
                                        </div>
                                    ))}
                                    <div className="flex items-start gap-3 text-sm text-industrial-300">
                                        <MapPin size={16} className="text-neon-green shrink-0 mt-1" />
                                        <span>Utilize an <strong>AI-First Workflow</strong>: Accelerating development by generating mockups and logic with AI, followed by rigorous human code review and architectural refinement.</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WorkHistory;
