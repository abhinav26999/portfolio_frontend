import { motion } from "framer-motion"

export default function Hero({ data }) {
    return (
        <section
            id="hud"
            className="min-h-screen flex items-center justify-center px-6 bg-spotlight"
        >
            <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">

                {/* LEFT HUD */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <p className="text-neon uppercase tracking-widest text-sm">
                        PLAYER PROFILE
                    </p>

                    <h1 className="text-5xl md:text-6xl font-extrabold neon-text text-neon mt-4">
                        {data.username}
                    </h1>

                    <p className="text-muted mt-2">
                        {data.role} • Level {data.level}
                    </p>

                    <div className="mt-6 space-y-2">
                        <p>🏆 Rank: <span className="text-neon">{data.rank}</span></p>
                        <p>⚡ Experience: {data.experience}</p>
                    </div>
                </motion.div>

                {/* RIGHT AVATAR */}
                <motion.div
                    animate={{ y: [0, -15, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="relative flex justify-center"
                >
                    <div className="absolute w-72 h-72 bg-neon/20 blur-3xl rounded-full" />
                    <img
                        src="/hero.png"
                        className="relative w-72 rounded-2xl neon-gradient-border"
                        alt="Player Avatar"
                    />
                </motion.div>

            </div>
        </section>
    )
}
