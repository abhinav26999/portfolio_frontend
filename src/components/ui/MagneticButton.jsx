import { useRef } from "react"
import { motion } from "framer-motion"

export default function MagneticButton({ children, ...props }) {
    const ref = useRef(null)

    const handleMouseMove = e => {
        const rect = ref.current.getBoundingClientRect()
        const x = e.clientX - rect.left - rect.width / 2
        const y = e.clientY - rect.top - rect.height / 2
        ref.current.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`
    }

    const reset = () => {
        ref.current.style.transform = "translate(0,0)"
    }

    return (
        <motion.button
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={reset}
            className="px-6 py-3 rounded-xl bg-neon text-black font-semibold neon-glow transition-transform"
            {...props}
        >
            {children}
        </motion.button>
    )
}
