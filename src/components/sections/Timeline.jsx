import { motion } from "framer-motion"
import useActiveSection from "../../hooks/useActiveSection"

export default function Timeline({ data }) {
    const ref = useActiveSection("timeline")

    return (
        <section
            ref={ref}
            id="timeline"
            className="py-24 px-6 max-w-4xl mx-auto"
        >
            <h2 className="text-4xl font-bold text-neon neon-text mb-4">
                XP PROGRESSION
            </h2>
            <p className="text-muted mb-12 text-sm">
                Career milestones & growth
            </p>

            <div className="relative space-y-10">
                {/* vertical line */}
                <div className="absolute left-2 top-0 bottom-0 w-px bg-neon/30" />

                {data.map((item, i) => (
                    <motion.div
                        key={item.year}
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.15 }}
                        viewport={{ once: true }}
                        className="relative pl-10"
                    >
                        {/* node */}
                        <div className="absolute left-0 top-1 w-4 h-4 rounded-full bg-neon neon-glow" />

                        <div className="bg-surface rounded-xl p-4">
              <span className="text-neon font-bold text-sm">
                {item.year}
              </span>
                            <p className="text-muted mt-1 text-sm">
                                {item.event}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}
