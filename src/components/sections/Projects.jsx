import { motion } from "framer-motion"
import "swiper/css"
import useActiveSection from "../../hooks/useActiveSection"

const difficultyStyles = {
    Easy: "text-green-400",
    Medium: "text-yellow-400",
    Hard: "text-red-400"
}

export default function Projects({ data }) {
    const ref = useActiveSection("missions")

    return (
        <section
            ref={ref}
            id="missions"
            className="py-24 px-6 max-w-7xl mx-auto hud-grid"
        >
            {/* header */}
            <div className="mb-14">
                <h2 className="text-4xl font-bold text-neon neon-text mb-3">
                    MISSIONS
                </h2>
                <p className="text-muted text-sm tracking-widest uppercase">
                    Active & Completed Quests
                </p>
            </div>

            {/* missions grid */}
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {data.map((mission, i) => (
                    <motion.div
                        key={mission.title}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        whileHover={{ scale: 1.04 }}
                        transition={{ duration: 0.4, delay: i * 0.08 }}
                        viewport={{ once: true }}
                        className="group relative bg-surface rounded-2xl p-6 overflow-hidden border border-white/5"
                    >
                        {/* scanline glow */}
                        <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-neon/15 via-transparent to-transparent" />

                        {/* image */}
                        <div className="relative mb-4 overflow-hidden rounded-lg">
                            <img
                                src={mission.image}
                                alt={mission.title}
                                className="w-full h-48 transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/40" />
                        </div>

                        {/* meta */}
                        <p className="text-xs uppercase tracking-widest text-neon">
                            {mission.type} •{" "}
                            <span className={difficultyStyles[mission.difficulty]}>
              {mission.difficulty}
            </span>
                        </p>

                        {/* title */}
                        <h3 className="text-2xl font-semibold mt-2 text-white">
                            {mission.title}
                        </h3>

                        {/* description */}
                        <p className="text-muted mt-2 text-sm leading-relaxed">
                            {mission.description}
                        </p>

                        {/* impact */}
                        <div className="mt-4 text-sm text-neon">
                            Impact: <span className="text-white/90">{mission.impact}</span>
                        </div>
                        {mission.link && (
                            <a
                                href={mission.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 mt-4 text-sm text-neon border border-neon/40 px-4 py-2 rounded-lg hover:bg-neon/10 transition"
                            >
                                🌐 VISIT PROJECT
                            </a>
                        )}
                        {/* tech stack chips */}
                        <div className="mt-5 flex flex-wrap gap-2">
                            {mission.tech.map((tech) => (
                                <span
                                    key={tech}
                                    className="text-xs px-3 py-1 rounded-full border border-neon/30 text-neon bg-neon/5"
                                >
                {tech}
              </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    )

}
