import { motion } from "framer-motion"
import useActiveSection from "../../hooks/useActiveSection"

export default function Skills({ data }) {
    const ref = useActiveSection("loadout")

    return (
        <section
            ref={ref}
            id="loadout"
            className="py-24 px-6 max-w-6xl mx-auto hud-grid"
        >
            <h2 className="text-4xl font-bold text-neon neon-text mb-12">
                LOADOUT
            </h2>

            <div className="grid md:grid-cols-3 gap-10">
                {data.map((group, i) => (
                    <motion.div
                        key={group.category}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        whileHover={{ y: -6 }}
                        transition={{ delay: i * 0.15 }}
                        viewport={{ once: true }}
                        className="relative bg-surface rounded-2xl p-6 overflow-hidden"
                    >
                        {/* gradient edge */}
                        <div className="absolute inset-0 border border-neon/40 rounded-2xl" />

                        {/* category header */}
                        <div className="mb-6 flex items-center justify-between">
                            <h3 className="text-xl font-semibold">
                                {group.category}
                            </h3>
                            <span className="text-xs text-neon tracking-widest">
                EQUIPPED
              </span>
                        </div>

                        {/* divider */}
                        <div className="h-px bg-neon/30 mb-4" />

                        {/* items */}
                        <ul className="space-y-3">
                            {group.items.map(item => (
                                <li
                                    key={item}
                                    className="flex items-center gap-3 text-sm text-muted"
                                >
                                    <span className="w-2 h-2 bg-neon rounded-full" />
                                    {item}
                                </li>
                            ))}
                        </ul>

                        {/* hover glow */}
                        <div className="pointer-events-none absolute inset-0 opacity-0 hover:opacity-100 transition bg-gradient-to-br from-neon/10 to-transparent" />
                    </motion.div>
                ))}
            </div>
        </section>
    )
}
