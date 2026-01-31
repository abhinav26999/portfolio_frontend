import { motion } from "framer-motion"
import useActiveSection from "../../hooks/useActiveSection"

export default function Highlights({ data }) {
    const ref = useActiveSection("stats")

    return (
        <section
            ref={ref}
            id="stats"
            className="py-24 px-6 max-w-6xl mx-auto"
        >
            <h2 className="text-3xl font-bold text-neon neon-text mb-12">
                PLAYER STATS
            </h2>

            <div className="grid md:grid-cols-4 gap-8">
                {data.map((stat, i) => (
                    <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        whileHover={{ scale: 1.08 }}
                        transition={{ delay: i * 0.1 }}
                        viewport={{ once: true }}
                        className="relative bg-surface rounded-xl p-6 overflow-hidden"
                    >
                        {/* glow line */}
                        <div className="absolute inset-x-0 top-0 h-[2px] bg-neon" />

                        {/* soft glow */}
                        <div className="absolute inset-0 bg-neon/5 opacity-0 hover:opacity-100 transition" />

                        <p className="text-5xl font-extrabold text-neon neon-text">
                            {stat.value}
                        </p>

                        <p className="mt-2 text-xs uppercase tracking-widest text-muted">
                            {stat.label}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}
