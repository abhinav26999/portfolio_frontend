import { useEffect, useState } from "react"

export default function CustomCursor() {
    const [pos, setPos] = useState({ x: 0, y: 0 })

    useEffect(() => {
        const move = e => setPos({ x: e.clientX, y: e.clientY })
        window.addEventListener("mousemove", move)
        return () => window.removeEventListener("mousemove", move)
    }, [])

    return (
        <div
            className="fixed top-0 left-0 w-6 h-6 rounded-full pointer-events-none z-50"
            style={{
                transform: `translate(${pos.x - 12}px, ${pos.y - 12}px)`,
                background: "rgba(34,247,221,0.8)",
                boxShadow: "0 0 20px rgba(34,247,221,0.8)"
            }}
        />
    )
}
