import { motion } from "framer-motion"
import useActiveSection from "../../hooks/useActiveSection"

export default function Achievements({ data }) {
    const ref = useActiveSection("achievements")

    return (
        <section
            ref={ref}
            id="achievements"
            className="relative py-28 px-6 max-w-6xl mx-auto"
        >
            {/* header */}
            <div className="mb-16">
                <h2 className="text-4xl font-bold text-neon neon-text mb-4">
                    ACHIEVEMENTS
                </h2>
                <p className="text-muted text-sm tracking-widest">
                    Milestones unlocked during progression
                </p>
            </div>

            {/* grid */}
            <div className="grid md:grid-cols-3 gap-10">
                {data.map((a, i) => (
                    <motion.div
                        key={a.title}
                        initial={{ opacity: 0, scale: 0.6, rotate: -8 }}
                        whileInView={{
                            opacity: 1,
                            scale: [0.6, 1.1, 1],
                            rotate: 0
                        }}
                        whileHover={{ y: -12, scale: 1.04 }}
                        transition={{
                            delay: i * 0.12,
                            duration: 0.6,
                            ease: "easeOut"
                        }}
                        viewport={{ once: true }}
                        className="group relative bg-surface rounded-2xl p-7 text-center overflow-hidden"
                    >
                        {/* ambient pulse */}
                        <motion.div
                            className="absolute inset-0 bg-neon/5"
                            animate={{ opacity: [0.05, 0.15, 0.05] }}
                            transition={{ duration: 4, repeat: Infinity }}
                        />

                        {/* neon border */}
                        <div className="absolute inset-0 rounded-2xl border border-neon/30 group-hover:border-neon transition-all" />

                        {/* scan line */}
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-b from-transparent via-neon/15 to-transparent"
                            initial={{ y: "-120%" }}
                            whileHover={{ y: "120%" }}
                            transition={{ duration: 1.1, ease: "linear" }}
                        />

                        {/* glow burst */}
                        <div className="absolute inset-0 blur-3xl bg-neon/20 opacity-0 group-hover:opacity-100 transition" />

                        {/* icon */}
                        <motion.div
                            className="relative z-10 text-6xl mb-5"
                            whileHover={{
                                scale: 1.25,
                                rotate: [0, -8, 8, 0]
                            }}
                            transition={{ type: "spring", stiffness: 260 }}
                        >
                            {a.icon}
                        </motion.div>

                        {/* title */}
                        <h3 className="relative z-10 text-xl font-semibold tracking-wide">
                            {a.title}
                        </h3>

                        {/* description */}
                        <p className="relative z-10 text-muted mt-2 text-sm leading-relaxed">
                            {a.description}
                        </p>

                        {/* unlocked badge */}
                        <motion.span
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            animate={{ opacity: [0.6, 1, 0.6] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="absolute top-4 right-4 text-[10px] tracking-[0.3em] text-neon border border-neon/40 px-3 py-1 rounded-full"
                        >
                            UNLOCKED
                        </motion.span>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}
