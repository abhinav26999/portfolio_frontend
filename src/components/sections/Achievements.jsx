import { motion } from "framer-motion"
import useActiveSection from "../../hooks/useActiveSection"

export default function Achievements({ data }) {
    const ref = useActiveSection("achievements")

    return (
        <section
            ref={ref}
            id="achievements"
            className="py-24 px-6 max-w-6xl mx-auto"
        >
            <h2 className="text-4xl font-bold text-neon neon-text mb-4">
                ACHIEVEMENTS
            </h2>
            <p className="text-muted mb-12 text-sm">
                Milestones unlocked during progression
            </p>

            <div className="grid md:grid-cols-3 gap-10">
                {data.map((a, i) => (
                    <motion.div
                        key={a.title}
                        initial={{ opacity: 0, scale: 0.7 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        whileHover={{ y: -8 }}
                        transition={{ delay: i * 0.15, type: "spring" }}
                        viewport={{ once: true }}
                        className="relative bg-surface rounded-2xl p-6 text-center overflow-hidden"
                    >
                        {/* unlock glow */}
                        <motion.div
                            className="absolute inset-0 bg-neon/10 opacity-0"
                            whileHover={{ opacity: 1 }}
                        />

                        {/* badge */}
                        <div className="relative z-10 text-6xl mb-4">
                            {a.icon}
                        </div>

                        <h3 className="relative z-10 text-xl font-semibold">
                            {a.title}
                        </h3>

                        <p className="relative z-10 text-muted mt-2 text-sm">
                            {a.description}
                        </p>

                        {/* unlocked tag */}
                        <span className="absolute top-4 right-4 text-[10px] tracking-widest text-neon">
              UNLOCKED
            </span>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}
