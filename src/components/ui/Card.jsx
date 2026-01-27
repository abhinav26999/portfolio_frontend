import { motion } from "framer-motion"
import { scaleHover } from "../../utils/motion"

export default function Card({ children }) {
    return (
        <motion.div
            {...scaleHover}
            className="bg-surface p-6 rounded-xl neon-gradient-border hover:neon-glow transition-all"
        >
            {children}
        </motion.div>
    )
}
