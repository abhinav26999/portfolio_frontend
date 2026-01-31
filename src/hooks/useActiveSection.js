import { useEffect, useRef } from "react"
import { useSection } from "../context/SectionContext"

export default function useActiveSection(id) {
    const ref = useRef(null)
    const { setActiveSection } = useSection()

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setActiveSection(id)
                }
            },
            { threshold: 0.6 }
        )

        if (ref.current) observer.observe(ref.current)

        return () => observer.disconnect()
    }, [id, setActiveSection])

    return ref
}
