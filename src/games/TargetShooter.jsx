import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function TargetShooter({ onExit }) {
    const [targets, setTargets] = useState([])
    const [score, setScore] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setTargets(t => [
                ...t,
                { id: Date.now(), x: Math.random()*80+10, y: Math.random()*80+10 }
            ])
        }, 800)

        return () => clearInterval(interval)
    }, [])

    const hit = id => {
        setTargets(t => t.filter(x => x.id !== id))
        setScore(s => s + 1)
    }

    return (
        <div className="relative w-full h-full">
            <div className="absolute top-6 left-6 text-white text-xl">
                Score: {score}
            </div>

            {targets.map(t => (
                <motion.div
                    key={t.id}
                    onClick={() => hit(t.id)}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute w-12 h-12 rounded-full bg-red-500 cursor-pointer"
                    style={{ left: `${t.x}%`, top: `${t.y}%` }}
                />
            ))}

            <button onClick={onExit} className="absolute bottom-6 right-6 text-white">
                Exit
            </button>
        </div>
    )
}
