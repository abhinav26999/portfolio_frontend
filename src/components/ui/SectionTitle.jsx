import { motion } from "framer-motion"
import { fadeUp } from "../../utils/motion"

export default function SectionTitle({ children }) {
    return (
        <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl font-semibold mb-10 text-neon neon-text"
        >
            {children}
        </motion.h2>
    )
}
