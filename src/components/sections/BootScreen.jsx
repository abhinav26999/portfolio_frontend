import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const glitchChars = ["#", "@", "%", "&", "*", "+", "?", "!"]

const modules = [
    "Auth Module",
    "API Gateway",
    "Database Pool",
    "Cache Layer",
    "Payment Engine",
    "Admin Console"
]

export default function BootScreen({ lines, onFinish }) {
    const [index, setIndex] = useState(0)
    const [progress, setProgress] = useState(0)
    const [memory, setMemory] = useState(128)

    useEffect(() => {
        if (index < lines.length) {
            const t = setTimeout(() => setIndex(i => i + 1), 600)
            return () => clearTimeout(t)
        }
    }, [index, lines])

    useEffect(() => {
        if (progress < 100) {
            const t = setTimeout(() => {
                setProgress(p => Math.min(p + Math.random() * 12, 100))
                setMemory(m => m + Math.floor(Math.random() * 32))
            }, 180)
            return () => clearTimeout(t)
        } else {
            setTimeout(onFinish, 800)
        }
    }, [progress, onFinish])

    const glitchify = (text) =>
        text
            .split("")
            .map((c) => (Math.random() < 0.04 ? glitchChars[Math.floor(Math.random() * glitchChars.length)] : c))
            .join("")

    return (
        <AnimatePresence>
            <motion.div
                className="fixed inset-0 z-[999] bg-black flex items-center justify-center"
                exit={{ opacity: 0 }}
            >
                <div className="w-full max-w-xl font-mono text-neon text-sm space-y-4">

                    {/* boot lines */}
                    <div className="space-y-1">
                        {lines.slice(0, index).map((l, i) => (
                            <motion.p
                                key={i}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                            >
                                ▶ {glitchify(l)}
                            </motion.p>
                        ))}
                    </div>

                    {/* modules */}
                    <div className="text-xs text-white/60">
                        Initializing: {modules[index % modules.length]}
                    </div>

                    {/* progress bar */}
                    <div className="h-2 w-full bg-white/10 rounded overflow-hidden">
                        <motion.div
                            className="h-full bg-neon"
                            initial={{ width: 0 }}
                            animate={{ width: `${progress}%` }}
                        />
                    </div>

                    {/* system stats */}
                    <div className="flex justify-between text-xs text-white/50">
                        <span>GPU LOAD: {Math.floor(progress)}%</span>
                        <span>MEMORY: {memory} MB</span>
                    </div>

                </div>
            </motion.div>
        </AnimatePresence>
    )
}
