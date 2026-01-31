import { motion } from "framer-motion"
import useActiveSection from "../../hooks/useActiveSection"

const container = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.15 }
    }
}

const item = {
    hidden: { opacity: 0, x: -30 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    }
}

export default function Hero({ data }) {
    const ref = useActiveSection("hud")

    return (
        <section
            ref={ref}
            id="hud"
            className="relative min-h-screen flex items-center justify-center px-6 hero-ambient overflow-hidden"
        >
            {/* subtle overlay */}
            <div className="pointer-events-none absolute inset-0 bg-black/30" />

            <div className="relative z-10 max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">

                {/* LEFT — PLAYER HUD */}
                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.p
                        variants={item}
                        className="text-neon uppercase tracking-widest text-sm"
                    >
                        PLAYER PROFILE
                    </motion.p>

                    <motion.h1
                        variants={item}
                        className="text-5xl md:text-6xl font-extrabold neon-text text-neon mt-4"
                    >
                        {data.username}
                    </motion.h1>

                    <motion.p
                        variants={item}
                        className="text-muted mt-2"
                    >
                        {data.role} • Level {data.level}
                    </motion.p>

                    <motion.div
                        variants={item}
                        className="mt-6 space-y-2"
                    >
                        <p>
                            🏆 Rank: <span className="text-neon">{data.rank}</span>
                        </p>
                        <p>⚡ Experience: {data.experience}</p>
                    </motion.div>

                    {/* system status */}
                    <motion.div
                        variants={item}
                        className="flex items-center gap-2 mt-6 text-xs text-muted"
                        animate={{ opacity: [0.6, 1, 0.6] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        <span className="w-2 h-2 bg-neon rounded-full" />
                        SYSTEM ONLINE
                    </motion.div>

                    {/* CTA */}
                    <motion.div
                        variants={item}
                        className="mt-10 flex gap-4"
                    >
                        <button
                            onClick={() =>
                                document.getElementById("missions")?.scrollIntoView({ behavior: "smooth" })
                            }
                            className="px-6 py-3 rounded-xl bg-neon text-black font-semibold neon-glow"
                        >
                            VIEW MISSIONS
                        </button>

                        <button
                            onClick={() =>
                                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                            }
                            className="px-6 py-3 rounded-xl border border-neon text-neon hover:neon-glow transition"
                        >
                            CONTACT
                        </button>
                    </motion.div>
                </motion.div>

                {/* RIGHT — AVATAR */}
                <motion.div
                    className="relative flex justify-center"
                    animate={{
                        y: [0, -12, 0],
                        rotateZ: [0, 1.5, 0]
                    }}
                    transition={{
                        duration: 6,
                        ease: "easeInOut",
                        repeat: Infinity
                    }}
                    onMouseMove={e => {
                        const x = (e.clientX / window.innerWidth - 0.5) * 8
                        const y = (e.clientY / window.innerHeight - 0.5) * 8
                        e.currentTarget.style.transform = `translate(${x}px, ${y}px)`
                    }}
                    onMouseLeave={e => {
                        e.currentTarget.style.transform = "translate(0,0)"
                    }}
                >
                    {/* glow blob */}
                    <div className="absolute w-72 h-72 bg-neon/20 blur-2xl rounded-full" />

                    <img
                        src="/hero.png"
                        alt="Player Avatar"
                        className="relative w-72 md:w-96 rounded-2xl neon-gradient-border"
                    />
                </motion.div>
            </div>

            {/* scroll hint */}
            <motion.div
                className="absolute bottom-8 text-xs text-muted"
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                ↓ SCROLL
            </motion.div>
        </section>
    )
}
