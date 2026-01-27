import { motion } from "framer-motion"

export default function NeonButton({ children, ...props }) {
    return (
        <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 rounded-xl bg-neon text-black font-semibold neon-glow"
            {...props}
        >
            {children}
        </motion.button>
    )
}
