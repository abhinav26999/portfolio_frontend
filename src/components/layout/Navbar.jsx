import { motion } from "framer-motion"
import { useSection } from "../../context/SectionContext"

export default function Navbar({ navItems }) {
    const { activeSection } = useSection()

    const scrollTo = id => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
    }

    return (
        <nav className="fixed top-0 w-full z-50">
            {/* background shell */}
            <div className="relative backdrop-blur-xl bg-black/60 border-b border-neon/20">

                {/* radar sweep */}
                <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-neon/10 to-transparent"
                    animate={{ x: ["-100%", "100%"] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                />

                <div className="relative max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

                    {/* ENERGY CORE LOGO */}
                    <div className="flex items-center gap-4">
                        <motion.div
                            className="relative w-8 h-8 rounded-full border border-neon/40"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                        >
                            <div className="absolute inset-1 rounded-full bg-neon/30 blur-md" />
                            <div className="absolute inset-2 rounded-full bg-neon" />
                        </motion.div>

                        <span className="text-neon font-bold tracking-[0.3em] neon-text text-sm">
              PLAYER_CORE
            </span>
                    </div>

                    {/* COMMAND NAV */}
                    <div className="hidden md:flex gap-5 ml-7">
                        {navItems.map(item => {
                            const isActive = activeSection === item.id

                            return (
                                <motion.button
                                    key={item.id}
                                    onClick={() => scrollTo(item.id)}
                                    whileHover={{ scale: 1.08 }}
                                    whileTap={{ scale: 0.95 }}
                                    className={`relative px-6 py-2.5 text-xs tracking-[0.3em] rounded-full border transition-all
                    ${
                                        isActive
                                            ? "text-neon border-neon bg-neon/10"
                                            : "text-muted border-white/10 hover:border-neon/60 hover:text-neon"
                                    }`}
                                >
                                    {item.label}

                                    {/* active lock ring */}
                                    {isActive && (
                                        <motion.span
                                            layoutId="nav-lock"
                                            className="absolute inset-0 rounded-full border border-neon"
                                            animate={{ opacity: [0.6, 1, 0.6] }}
                                            transition={{ duration: 2, repeat: Infinity }}
                                        />
                                    )}
                                </motion.button>
                            )
                        })}
                    </div>

                    {/* SYSTEM STATUS */}
                    <div className="flex items-center gap-3 text-xs tracking-widest ml-4">
                        <motion.span
                            className="w-3 h-3 rounded-full bg-neon"
                            animate={{ opacity: [0.4, 1, 0.4] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                        />
                        <span className="text-muted">
              SYSTEM <span className="text-neon">ONLINE</span>
            </span>
                    </div>
                </div>
            </div>
        </nav>
    )
}
