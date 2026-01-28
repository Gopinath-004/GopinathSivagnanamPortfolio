import { motion } from 'framer-motion';

const skills = [
    { name: "HTML5", category: "Frontend", description: "Semantic structure & SEO best practices." },
    { name: "CSS3", category: "Frontend", description: "Advanced animations, Flexbox/Grid layouts." },
    { name: "JavaScript", category: "Language", description: "Modern ES6+ syntax, Async/Await patterns." },
    { name: "TypeScript", category: "Language", description: "Type-safe development for scalable apps." },
    { name: "Vue.js", category: "Frontend", description: "Options/Composition API, State Management." },
    { name: "Vuetify", category: "Frontend", description: "Material Design component framework implementation." },
    { name: "React.js", category: "Frontend", description: "Hooks, Context API, and Performance optimization." },
    { name: "Tailwind CSS", category: "Frontend", description: "Utility-first custom design systems." },
    { name: ".NET / C#", category: "Backend", description: "Enterprise-grade REST APIs & Microservices." },
    { name: "Python", category: "Language", description: "Scripting, Automation, and Data Analysis." },
    { name: "Database Design (MSSQL)", category: "Database", description: "Normalized schemas, Stored Procedures, & Optimization." },
    { name: "MongoDB", category: "Database", description: "NoSQL document modeling & Aggregations." },
    { name: "SQL", category: "Database", description: "Complex queries, Joins, and Indexing strategies." },
    { name: "API Integration", category: "Integration", description: "Seamless consumption of Third-party Services (e.g., Stripe, Maps)." },
    { name: "N8n", category: "Automation", description: "Low-code workflow automation & integration." },
];

const SkillsCloud = () => {
    return (
        <section className="py-20 bg-industrial-900" id="skills">
            <div className="section-container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12 text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Arsenal</h2>
                    <p className="text-industrial-400 max-w-2xl mx-auto">
                        A robust stack built for scalability, covering every layer of the application lifecycle.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            whileHover={{ y: -5 }}
                            className="bg-industrial-800/50 p-6 rounded-xl border border-industrial-700 hover:border-neon-blue/50 transition-colors group"
                        >
                            <div className="flex justify-between items-start mb-3">
                                <h3 className="text-lg font-bold text-industrial-100 group-hover:text-neon-blue transition-colors">
                                    {skill.name}
                                </h3>
                                <span className="text-xs font-mono text-industrial-500 bg-industrial-900 px-2 py-1 rounded">
                                    {skill.category}
                                </span>
                            </div>
                            <p className="text-sm text-industrial-400 leading-relaxed">
                                {skill.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SkillsCloud;
