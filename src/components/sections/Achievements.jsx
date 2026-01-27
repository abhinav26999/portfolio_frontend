import { motion } from "framer-motion"

export default function Achievements({ data }) {
    return (
        <section
            id="achievements"
            className="py-24 px-6 max-w-6xl mx-auto"
        >
            <h2 className="text-4xl font-bold text-neon neon-text mb-12">
                ACHIEVEMENTS
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
                {data.map((a, i) => (
                    <motion.div
                        key={a.title}
                        initial={{ opacity: 0, scale: 0.6 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.2, type: "spring" }}
                        viewport={{ once: true }}
                        className="bg-surface p-6 rounded-xl neon-border text-center"
                    >
                        <div className="text-5xl mb-4">{a.icon}</div>
                        <h3 className="text-xl font-semibold">{a.title}</h3>
                        <p className="text-muted mt-2">{a.description}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}
