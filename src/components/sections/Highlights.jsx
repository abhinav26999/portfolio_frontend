import { motion } from "framer-motion"
import useActiveSection from "../../hooks/useActiveSection"

export default function Highlights({ data }) {
    const ref = useActiveSection("stats")

    return (
        <section
            ref={ref}
            id="stats"
            className="relative py-28 px-6 max-w-6xl mx-auto"
        >
            {/* header */}
            <div className="mb-16">
                <h2 className="text-3xl font-bold text-neon neon-text mb-3">
                    PLAYER STATS
                </h2>
                <p className="text-muted text-sm tracking-widest">
                    Performance overview
                </p>
            </div>

            {/* stats grid */}
            <div className="grid md:grid-cols-4 gap-10">
                {data.map((stat, i) => (
                    <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, scale: 0.7, rotateX: 20 }}
                        whileInView={{
                            opacity: 1,
                            scale: 1,
                            rotateX: 0
                        }}
                        whileHover={{
                            y: -12,
                            scale: 1.05
                        }}
                        transition={{
                            delay: i * 0.12,
                            duration: 0.6,
                            ease: "easeOut"
                        }}
                        viewport={{ once: true }}
                        className="group relative bg-surface rounded-2xl p-7 overflow-hidden"
                    >
                        {/* ambient pulse */}
                        <motion.div
                            className="absolute inset-0 bg-neon/5"
                            animate={{ opacity: [0.05, 0.15, 0.05] }}
                            transition={{ duration: 3.5, repeat: Infinity }}
                        />

                        {/* animated border ring */}
                        <motion.div
                            className="absolute inset-0 rounded-2xl border border-neon/30"
                            animate={{ opacity: [0.3, 0.6, 0.3] }}
                            transition={{ duration: 2.5, repeat: Infinity }}
                        />

                        {/* scan sweep */}
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-neon/15 to-transparent"
                            initial={{ x: "-120%" }}
                            whileHover={{ x: "120%" }}
                            transition={{ duration: 1.2, ease: "linear" }}
                        />

                        {/* value */}
                        <motion.p
                            className="relative z-10 text-5xl font-extrabold text-neon neon-text"
                            initial={{ scale: 0.8 }}
                            whileInView={{ scale: 1 }}
                            transition={{ type: "spring", stiffness: 200 }}
                        >
                            {stat.value}
                        </motion.p>

                        {/* divider */}
                        <div className="relative z-10 w-10 h-[2px] bg-neon my-3" />

                        {/* label */}
                        <p className="relative z-10 text-xs uppercase tracking-[0.25em] text-muted">
                            {stat.label}
                        </p>

                        {/* corner accents */}
                        <span className="absolute top-3 left-3 w-2 h-2 bg-neon rounded-full" />
                        <span className="absolute bottom-3 right-3 w-2 h-2 bg-neon rounded-full" />
                    </motion.div>
                ))}
            </div>
        </section>
    )
}
