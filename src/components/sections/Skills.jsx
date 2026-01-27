import { motion } from "framer-motion"

export default function Skills({ data }) {
    return (
        <section
            id="loadout"
            className="py-24 px-6 max-w-6xl mx-auto bg-spotlight"
        >
            <h2 className="text-4xl font-bold text-neon neon-text mb-12">
                LOADOUT
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
                {data.map(group => (
                    <motion.div
                        key={group.category}
                        whileHover={{ rotateX: 6, rotateY: -6 }}
                        className="bg-surface p-6 rounded-xl neon-gradient-border"
                    >
                        <h3 className="text-xl font-semibold mb-4">
                            {group.category}
                        </h3>

                        <ul className="space-y-2 text-muted">
                            {group.items.map(item => (
                                <li key={item}>▸ {item}</li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}
