import { motion } from "framer-motion"

export default function Contact({ data }) {
    return (
        <section className="py-32 px-6 text-center bg-spotlight">
            <motion.h2
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="text-5xl font-extrabold text-neon neon-text"
            >
                {data.headline}
            </motion.h2>

            <p className="text-muted mt-4">
                {data.subtext}
            </p>

            <motion.a
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.95 }}
                href={`mailto:${data.email || "your.email@example.com"}`}
                className="inline-block mt-10 px-10 py-4 bg-neon text-black font-bold rounded-xl neon-glow"
            >
                {data.action}
            </motion.a>
        </section>
    )
}
