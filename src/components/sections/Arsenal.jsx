import { motion } from "framer-motion"
import useActiveSection from "../../hooks/useActiveSection"

const rarityStyles = {
    common: "border-white/20 text-muted",
    epic: "border-accent text-accent shadow-[0_0_12px_rgba(124,124,255,0.4)]",
    legendary: "border-neon text-neon shadow-[0_0_16px_rgba(34,247,221,0.6)]"
}

export default function Arsenal({ data }) {
    const ref = useActiveSection("arsenal")

    return (
        <section
            ref={ref}
            id="arsenal"
            className="py-24 px-6 max-w-6xl mx-auto"
        >
            <h2 className="text-4xl font-bold text-neon neon-text mb-4">
                TECH ARSENAL
            </h2>
            <p className="text-muted mb-12 text-sm">
                Equipped tools & technologies
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {data.map((tool, i) => (
                    <motion.div
                        key={tool.name}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        whileHover={{ y: -6, scale: 1.05 }}
                        transition={{ delay: i * 0.05 }}
                        viewport={{ once: true }}
                        className={`relative bg-surface rounded-xl p-4 border ${rarityStyles[tool.rarity]}`}
                    >
                        {/* rarity indicator */}
                        <span className="absolute top-2 right-3 text-[10px] uppercase tracking-widest opacity-70">
              {tool.rarity}
            </span>

                        <div className="mt-4 text-center font-semibold">
                            {tool.name}
                        </div>

                        {/* subtle hover glow */}
                        <div className="pointer-events-none absolute inset-0 opacity-0 hover:opacity-100 transition bg-gradient-to-br from-neon/10 to-transparent" />
                    </motion.div>
                ))}
            </div>
        </section>
    )
}
