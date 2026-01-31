import { motion } from "framer-motion"

export default function ArcadeButton() {
    return (
        <motion.button
            onClick={() =>
                document.getElementById("arcade")?.scrollIntoView({ behavior: "smooth" })
            }
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="fixed bottom-6 right-6 z-50 px-5 py-3 rounded-full
                 bg-neon text-black font-bold neon-glow tracking-widest"
        >
            🎮 ARCADE
        </motion.button>
    )
}
