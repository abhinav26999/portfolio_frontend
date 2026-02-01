import { motion } from "framer-motion"
import useActiveSection from "../../hooks/useActiveSection"

const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } }
}

const item = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    }
}

export default function Hero({ data }) {
    const ref = useActiveSection("hud")

    return (
        <section
            ref={ref}
            id="hud"
            className="relative min-h-screen px-6 flex items-center overflow-hidden"
        >
            {/* cyber grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />

            {/* vignette */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70" />

            {/* scan lines */}
            <motion.div
                className="pointer-events-none absolute inset-0 bg-[linear-gradient(transparent_90%,rgba(0,255,255,0.06)_100%)] bg-[size:100%_4px]"
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
            />

            <div className="relative z-10 max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-20 items-center">

                {/* LEFT HUD */}
                <motion.div variants={container} initial="hidden" animate="visible">
                    <motion.p variants={item} className="text-neon tracking-[0.4em] text-xs">
                        PLAYER PROFILE
                    </motion.p>

                    {/* glitch title */}
                    <motion.h1
                        variants={item}
                        className="relative text-5xl md:text-6xl font-extrabold text-neon neon-text mt-6"
                    >
            <span className="absolute inset-0 text-pink-500 opacity-50 -translate-x-1">
              {data.username}
            </span>
                        <span className="absolute inset-0 text-cyan-400 opacity-50 translate-x-1">
              {data.username}
            </span>
                        <span className="relative">{data.username}</span>
                    </motion.h1>

                    <motion.p variants={item} className="text-muted mt-3">
                        {data.role} • Level {data.level}
                    </motion.p>

                    {/* stats bars */}
                    <motion.div variants={item} className="mt-6 space-y-3 text-sm">
                        <div>
                            🏆 Rank: <span className="text-neon">{data.rank}</span>
                        </div>
                        <div>⚡ Experience</div>
                        <div className="h-2 w-56 bg-white/10 rounded-full overflow-hidden">
                            <motion.div
                                className="h-full bg-neon"
                                initial={{ width: 0 }}
                                animate={{ width: "75%" }}
                                transition={{ duration: 1.5 }}
                            />
                        </div>
                    </motion.div>

                    {/* system online */}
                    <motion.div
                        variants={item}
                        className="mt-8 flex items-center gap-3 text-xs tracking-widest text-muted"
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        <span className="w-2.5 h-2.5 bg-neon rounded-full" />
                        SYSTEM ONLINE
                    </motion.div>

                    {/* CTA */}
                    <motion.div variants={item} className="mt-12 flex gap-6">
                        <button className="px-7 py-3 rounded-xl bg-neon text-black font-semibold neon-glow">
                            VIEW MISSIONS
                        </button>
                        <button className="px-7 py-3 rounded-xl border border-neon text-neon hover:neon-glow transition">
                            CONTACT
                        </button>
                    </motion.div>
                </motion.div>

                {/* RIGHT AVATAR */}
                <motion.div
                    className="relative flex justify-center"
                    animate={{ y: [0, -14, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                >
                    {/* target reticle */}
                    <motion.div
                        className="absolute w-[22rem] h-[22rem] rounded-full border border-neon/40"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    />

                    {/* glow */}
                    <div className="absolute w-80 h-80 bg-neon/30 blur-3xl rounded-full" />

                    <motion.img
                        src="/hero.png"
                        alt="Player Avatar"
                        className="relative w-72 md:w-96 rounded-2xl neon-gradient-border"
                        whileHover={{ scale: 1.05 }}
                    />
                </motion.div>
            </div>

            {/* scroll hint */}
            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-xs tracking-widest text-muted"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                ↓ SCROLL
            </motion.div>
        </section>
    )
}
