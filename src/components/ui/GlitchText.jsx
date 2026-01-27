import { motion } from "framer-motion"

export default function GlitchText({ children }) {
    return (
        <motion.span
            whileHover={{ x: [0, -2, 2, -1, 1, 0] }}
            transition={{ duration: 0.3 }}
            className="relative text-neon neon-text"
        >
            {children}
        </motion.span>
    )
}
