import { useState, useEffect } from "react"
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
import Timeline from "./components/sections/Timeline"
import Arsenal from "./components/sections/Arsenal"

import ScrollProgress from "./components/ui/ScrollProgress"
import ScrollSync from "./components/ui/ScrollSync"
import MiniMap from "./components/ui/MiniMap"
import MouseGradient from "./components/ui/MouseGradient"

import PlayButton from "./components/ui/PlayButton"

import { AnimatePresence, motion } from "framer-motion"
import PlayOverlay from "./games/PlayOverlay.jsx";

export default function App() {
    const [booted, setBooted] = useState(false)
    const [playOpen, setPlayOpen] = useState(false)

    const navSections = portfolio.navigation

    // Keyboard shortcut: press "P" to play
    useEffect(() => {
        const onKey = e => {
            if (e.key.toLowerCase() === "p") {
                setPlayOpen(true)
            }
        }
        window.addEventListener("keydown", onKey)
        return () => window.removeEventListener("keydown", onKey)
    }, [])

    return (
        <>
            {/* ================= BOOT SCREEN ================= */}
            {!booted && (
                <BootScreen
                    lines={portfolio.boot.lines}
                    onFinish={() => setBooted(true)}
                />
            )}

            {/* ================= MAIN APP ================= */}
            {booted && (
                <>
                    {/* Background effects */}
                    <MouseGradient />
                    <div className="cursor-gradient" />

                    {/* UI utilities */}
                    <ScrollProgress />
                    <ScrollSync />

                    {/* Navigation */}
                    <Navbar navItems={navSections} />
                    <MiniMap sections={navSections} />

                    {/* Floating PLAY button */}
                    <PlayButton onOpen={() => setPlayOpen(true)} />

                    {/* Games Overlay */}
                    {playOpen && (
                        <PlayOverlay onClose={() => setPlayOpen(false)} />
                    )}

                    {/* Portfolio Content */}
                    <AnimatePresence mode="wait">
                        <motion.main
                            key="main"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -30 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="relative z-20"
                        >
                            <Hero data={portfolio.player} />
                            <Highlights data={portfolio.stats} />
                            <Skills data={portfolio.skills.loadout} />
                            <Arsenal data={portfolio.arsenal} />
                            <Projects data={portfolio.missions} />
                            <Timeline data={portfolio.timeline} />
                            <Achievements data={portfolio.achievements} />
                            <Contact data={portfolio.cta} />
                            <Footer />
                        </motion.main>
                    </AnimatePresence>
                </>
            )}
        </>
    )
}
