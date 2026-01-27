import { useState } from "react"

export default function SpotlightCard({ children }) {
    const [pos, setPos] = useState({ x: 0, y: 0 })

    return (
        <div
            onMouseMove={e =>
                setPos({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY })
            }
            className="relative overflow-hidden rounded-2xl bg-surface p-6"
        >
            <div
                className="pointer-events-none absolute inset-0 opacity-0 hover:opacity-100 transition"
                style={{
                    background: `radial-gradient(300px at ${pos.x}px ${pos.y}px, rgba(34,247,221,0.15), transparent 40%)`
                }}
            />
            {children}
        </div>
    )
}
