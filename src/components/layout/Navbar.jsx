import { motion } from "framer-motion"
import { useSection } from "../../context/SectionContext"

export default function Navbar({ navItems }) {
    const { activeSection } = useSection()

    const scrollTo = id => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
    }

    return (
        <nav className="fixed top-0 w-full z-50 backdrop-blur bg-black/40 border-b border-white/10">
            <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

                {/* LOGO */}
                <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-neon rounded-full animate-pulse" />
                    <span className="text-neon font-bold tracking-widest neon-text">
            PLAYER_UI
          </span>
                </div>

                {/* HUD NAV */}
                <div className="hidden md:flex gap-8 text-xs tracking-widest">
                    {navItems.map(item => {
                        const isActive = activeSection === item.id

                        return (
                            <button
                                key={item.id}
                                onClick={() => scrollTo(item.id)}
                                className={`relative transition ${
                                    isActive
                                        ? "text-neon neon-text"
                                        : "text-muted hover:text-neon"
                                }`}
                            >
                                {item.label}

                                {isActive && (
                                    <motion.span
                                        layoutId="nav-indicator"
                                        className="absolute -bottom-2 left-0 w-full h-[2px] bg-neon"
                                    />
                                )}
                            </button>
                        )
                    })}
                </div>

                {/* STATUS */}
                <div className="text-xs text-muted">
                    STATUS: <span className="text-neon">ONLINE</span>
                </div>
            </div>
        </nav>
    )
}
