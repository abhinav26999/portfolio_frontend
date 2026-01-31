import { createContext, useContext, useState } from "react"

const SectionContext = createContext()

export function SectionProvider({ children }) {
    const [activeSection, setActiveSection] = useState("hud")

    return (
        <SectionContext.Provider value={{ activeSection, setActiveSection }}>
            {children}
        </SectionContext.Provider>
    )
}

export function useSection() {
    return useContext(SectionContext)
}
