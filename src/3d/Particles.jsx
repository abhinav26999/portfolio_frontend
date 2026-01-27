import { Canvas } from "@react-three/fiber"
import { Points, PointMaterial } from "@react-three/drei"
import { useMemo } from "react"
import * as THREE from "three"

export default function Particles() {
    const points = useMemo(() => {
        const p = []
        for (let i = 0; i < 1500; i++) {
            p.push(
                (Math.random() - 0.5) * 10,
                (Math.random() - 0.5) * 10,
                (Math.random() - 0.5) * 10
            )
        }
        return new Float32Array(p)
    }, [])

    return (
        <Canvas className="fixed inset-0 z-0">
            <Points positions={points}>
                <PointMaterial color="#22f7dd" size={0.03} />
            </Points>
        </Canvas>
    )
}
