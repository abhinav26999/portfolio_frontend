import { motion } from "framer-motion"

const navItems = [
    { label: "HUD", href: "#hud" },
    { label: "LOADOUT", href: "#loadout" },
    { label: "MISSIONS", href: "#missions" },
    { label: "ACHIEVEMENTS", href: "#achievements" }
]

export default function Navbar() {
    return (
        <nav className="fixed top-0 w-full z-50 backdrop-blur bg-black/40 border-b border-white/10">
            <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

                {/* LEFT: LOGO / PLAYER TAG */}
                <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-neon rounded-full animate-pulse" />
                    <span className="text-neon font-bold tracking-widest neon-text">
            PLAYER_UI
          </span>
                </div>

                {/* CENTER: NAV HUD */}
                <div className="hidden md:flex gap-8 text-xs tracking-widest">
                    {navItems.map(item => (
                        <motion.a
                            key={item.label}
                            href={item.href}
                            whileHover={{ scale: 1.1 }}
                            className="relative group text-muted hover:text-neon transition"
                        >
                            {item.label}

                            <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-neon transition-all group-hover:w-full" />
                        </motion.a>

                    ))}
                </div>

                {/* RIGHT: STATUS */}
                <div className="text-xs text-muted">
                    STATUS: <span className="text-neon">ONLINE</span>
                </div>
            </div>
        </nav>
    )
}
