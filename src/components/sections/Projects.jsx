import { Swiper, SwiperSlide } from "swiper/react"
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
            className="py-24 px-6 max-w-6xl mx-auto hud-grid"
        >
            <h2 className="text-4xl font-bold text-neon neon-text mb-4">
                MISSIONS
            </h2>
            <p className="text-muted mb-12 text-sm">
                Active & completed quests
            </p>

            <Swiper
                spaceBetween={32}
                slidesPerView={1.1}
                breakpoints={{
                    768: { slidesPerView: 2 }
                }}
            >
                {data.map((mission, i) => (
                    <SwiperSlide key={mission.title}>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ scale: 1.03 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="relative bg-surface rounded-2xl p-6 overflow-hidden"
                        >
                            {/* image */}
                            <div className="relative mb-4 overflow-hidden rounded-lg">
                                <img
                                    src={mission.image}
                                    alt={mission.title}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="absolute inset-0 bg-black/30" />
                            </div>

                            {/* meta */}
                            <p className="text-xs uppercase tracking-widest text-neon">
                                {mission.type} •{" "}
                                <span className={difficultyStyles[mission.difficulty]}>
                  {mission.difficulty}
                </span>
                            </p>

                            <h3 className="text-2xl font-semibold mt-2">
                                {mission.title}
                            </h3>

                            <p className="text-muted mt-2 text-sm">
                                {mission.description}
                            </p>

                            {/* impact */}
                            <div className="mt-4 text-sm text-neon">
                                Impact: {mission.impact}
                            </div>

                            {/* glow */}
                            <div className="pointer-events-none absolute inset-0 opacity-0 hover:opacity-100 transition bg-gradient-to-br from-neon/10 to-transparent" />
                        </motion.div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    )
}
