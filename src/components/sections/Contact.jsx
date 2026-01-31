import { motion } from "framer-motion"
import useActiveSection from "../../hooks/useActiveSection"

export default function Contact({ data }) {
    const ref = useActiveSection("contact")

    return (
        <section
            ref={ref}
            id="contact"
            className="relative py-32 px-6 text-center overflow-hidden"
        >
            {/* ambient glow */}
            <div className="absolute inset-0 bg-spotlight opacity-80" />

            <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="relative z-10 text-5xl md:text-6xl font-extrabold text-neon neon-text"
            >
                {data.headline}
            </motion.h2>

            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="relative z-10 text-muted mt-6 max-w-xl mx-auto"
            >
                {data.subtext}
            </motion.p>

            <motion.a
                href={`mailto:${data.email || "abhinav.official168@gmail.com"}`}
                whileHover={{ scale: 1.12 }}
                whileTap={{ scale: 0.95 }}
                className="relative z-10 inline-block mt-12 px-12 py-5 bg-neon text-black font-bold rounded-2xl neon-glow tracking-widest"
            >
                {data.action}
            </motion.a>

            {/* footer hint */}
            <motion.p
                animate={{ opacity: [0.4, 0.8, 0.4] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="relative z-10 mt-10 text-xs tracking-widest text-muted"
            >
                FINAL MISSION READY
            </motion.p>
        </section>
    )
}
