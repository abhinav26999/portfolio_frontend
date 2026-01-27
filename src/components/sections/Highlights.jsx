import { motion } from "framer-motion"

export default function Highlights({ data }) {
    return (
        <section className="py-24 px-6 max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-6">
                {data.map(stat => (
                    <motion.div
                        key={stat.label}
                        whileHover={{ scale: 1.15 }}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-surface p-6 rounded-xl neon-border text-center"
                    >
                        <p className="text-4xl font-bold text-neon neon-text">
                            {stat.value}
                        </p>
                        <p className="text-muted mt-2 uppercase text-sm">
                            {stat.label}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}
