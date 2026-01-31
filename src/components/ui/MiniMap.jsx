import { useCallback } from "react"
import { useSection } from "../../context/SectionContext"

export default function MiniMap({ sections }) {
    const { activeSection } = useSection()

    const scrollTo = useCallback(id => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
    }, [])

    return (
        <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-4">
            {sections.map(({ id }) => {
                const isActive = activeSection === id

                return (
                    <button
                        key={id}
                        onClick={() => scrollTo(id)}
                        className={`w-3 h-3 rounded-full transition-transform duration-200 ${
                            isActive
                                ? "bg-neon neon-glow scale-125"
                                : "bg-white/20 hover:bg-neon/60"
                        }`}
                    />
                )
            })}
        </div>
    )
}
