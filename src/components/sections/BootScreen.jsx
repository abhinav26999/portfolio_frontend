import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function BootScreen({ lines, onFinish }) {
    const [index, setIndex] = useState(0)

    useEffect(() => {
        if (index < lines.length) {
            const t = setTimeout(() => setIndex(i => i + 1), 700)
            return () => clearTimeout(t)
        } else {
            setTimeout(onFinish, 1200)
        }
    }, [index, lines, onFinish])

    return (
        <AnimatePresence>
            <motion.div
                className="fixed inset-0 z-[999] bg-black flex items-center justify-center"
                exit={{ opacity: 0 }}
            >
                <div className="font-mono text-neon text-lg space-y-2">
                    {lines.slice(0, index).map((l, i) => (
                        <motion.p key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                            ▶ {l}
                        </motion.p>
                    ))}
                    <span className="animate-pulse">█</span>
                </div>
            </motion.div>
        </AnimatePresence>
    )
}
