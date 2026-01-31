import { motion } from "framer-motion"

export default function PlayButton({ onOpen }) {
    return (
        <motion.button
            onClick={onOpen}
            whileHover={{ scale: 1.1 }}
            className="fixed bottom-6 left-6 z-50
                 px-6 py-4 rounded-full
                 bg-white text-black font-bold shadow-lg"
        >
            ▶ PLAY
        </motion.button>
    )
}
