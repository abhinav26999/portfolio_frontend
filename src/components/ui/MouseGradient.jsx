import { useEffect } from "react"

export default function MouseGradient() {
    useEffect(() => {
        const move = e => {
            document.documentElement.style.setProperty(
                "--mouse-x",
                `${e.clientX}px`
            )
            document.documentElement.style.setProperty(
                "--mouse-y",
                `${e.clientY}px`
            )
        }

        window.addEventListener("mousemove", move, { passive: true })
        return () => window.removeEventListener("mousemove", move)
    }, [])

    return null
}
