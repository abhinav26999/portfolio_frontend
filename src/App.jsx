import { useState } from "react"
import portfolio from "./data/portfolio.json"

import Navbar from "./components/layout/Navbar"
import Footer from "./components/layout/Footer"

import Hero from "./components/sections/Hero"
import Skills from "./components/sections/Skills"
import Projects from "./components/sections/Projects"
import Contact from "./components/sections/Contact"
import Highlights from "./components/sections/Highlights"
import Achievements from "./components/sections/Achievements"
import BootScreen from "./components/sections/BootScreen"

import CustomCursor from "./components/ui/CustomCursor"
import ScrollProgress from "./components/ui/ScrollProgress"
import NoiseOverlay from "./components/ui/NoiseOverlay"
import ScrollSync from "./components/ui/ScrollSync"


import { AnimatePresence, motion } from "framer-motion"
import Particles from "./3d/Particles.jsx";

export default function App() {
    const [booted, setBooted] = useState(false)

    return (
        <>
            {/* ===== GAME BOOT SEQUENCE ===== */}
            {!booted && (
                <BootScreen
                    lines={portfolio.boot.lines}
                    onFinish={() => setBooted(true)}
                />
            )}

            {/* ===== MAIN GAME UI ===== */}
            {booted && (
                <>
                    {/* Background FX */}
                    <Particles />
                    <NoiseOverlay />

                    {/* Input & Scroll FX */}
                    <CustomCursor />
                    <ScrollProgress />
                    <ScrollSync />

                    {/* UI */}
                    <Navbar />

                    <AnimatePresence mode="wait">
                        <motion.main
                            key="main"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -30 }}
                            transition={{ duration: 0.9, ease: "easeOut" }}
                            className="relative z-20"
                        >
                            {/* PLAYER HUD */}
                            <Hero data={portfolio.player} />

                            {/* PLAYER STATS */}
                            <Highlights data={portfolio.stats} />

                            {/* LOADOUT */}
                            <Skills data={portfolio.skills.loadout} />

                            {/* MISSIONS */}
                            <Projects data={portfolio.missions} />

                            {/* ACHIEVEMENTS */}
                            <Achievements data={portfolio.achievements} />

                            {/* FINAL CTA */}
                            <Contact data={portfolio.cta} />

                            <Footer />
                        </motion.main>
                    </AnimatePresence>
                </>
            )}
        </>
    )
}
