import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"

export default function Projects({ data }) {
    return (
        <section
            id="missions"
            className="py-24 px-6 max-w-6xl mx-auto"
        >
            <h2 className="text-4xl font-bold text-neon neon-text mb-12">
                MISSIONS
            </h2>

            <Swiper spaceBetween={40} slidesPerView={1.2}>
                {data.map(mission => (
                    <SwiperSlide key={mission.title}>
                        <div className="bg-surface rounded-xl p-6 neon-border">
                            <img
                                src={mission.image}
                                className="rounded-lg mb-4"
                                alt={mission.title}
                            />

                            <p className="text-sm text-neon uppercase">
                                {mission.type} • {mission.difficulty}
                            </p>

                            <h3 className="text-2xl font-semibold mt-2">
                                {mission.title}
                            </h3>

                            <p className="text-muted mt-2">
                                {mission.description}
                            </p>

                            <p className="text-neon mt-4">
                                Impact: {mission.impact}
                            </p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    )
}
