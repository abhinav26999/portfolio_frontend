import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"

/* ================= CONFIG ================= */
const GRAVITY = 0.9
const TICK = 16

const HOOP = {
    x: 50,   // %
    y: 22,   // %
    width: 16
}

const BALL_START = { x: 50, y: 78 }

/* ================= COMPONENT ================= */
export default function BasketballShot({ onExit }) {
    const startRef = useRef({ x: 0, y: 0 })

    const [ball, setBall] = useState({
        x: BALL_START.x,
        y: BALL_START.y,
        vx: 0,
        vy: 0,
        flying: false
    })

    const [aim, setAim] = useState(null)
    const [score, setScore] = useState(0)
    const [best, setBest] = useState(
        () => Number(localStorage.getItem("basket-best")) || 0
    )
    const [swish, setSwish] = useState(false)

    /* ========== SAVE BEST SCORE ========== */
    useEffect(() => {
        if (score > best) {
            setBest(score)
            localStorage.setItem("basket-best", score)
        }
    }, [score, best])

    /* ========== PHYSICS LOOP ========== */
    useEffect(() => {
        if (!ball.flying) return

        const loop = setInterval(() => {
            setBall(b => {
                let nx = b.x + b.vx
                let ny = b.y + b.vy
                let nvy = b.vy + GRAVITY

                const dx = nx - HOOP.x
                const dy = ny - HOOP.y

                /* ---- CLEAN SWISH ---- */
                const isSwish =
                    Math.abs(dx) < 2 &&
                    dy > 0 &&
                    dy < 4 &&
                    b.vy > 2

                if (isSwish) {
                    setScore(s => s + 1)
                    setSwish(true)
                    setTimeout(() => setSwish(false), 500)
                    return resetBall()
                }

                /* ---- RIM BOUNCE ---- */
                const hitRim =
                    Math.abs(dx) < HOOP.width / 2 &&
                    Math.abs(dy) < 2 &&
                    b.vy > 0

                if (hitRim) {
                    return {
                        ...b,
                        vx: -b.vx * 0.6 + (Math.random() - 0.5),
                        vy: -b.vy * 0.45
                    }
                }

                /* ---- MISS ---- */
                if (ny > 100 || nx < 0 || nx > 100) {
                    return resetBall()
                }

                return { ...b, x: nx, y: ny, vy: nvy }
            })
        }, TICK)

        return () => clearInterval(loop)
    }, [ball.flying])

    /* ========== HELPERS ========== */
    const resetBall = () => ({
        x: BALL_START.x,
        y: BALL_START.y,
        vx: 0,
        vy: 0,
        flying: false
    })

    const getPoint = e => {
        if (e.touches) return e.touches[0]
        return e
    }

    const onStart = e => {
        const p = getPoint(e)
        startRef.current = { x: p.clientX, y: p.clientY }
        setAim({ x: p.clientX, y: p.clientY })
    }

    const onRelease = e => {
        if (ball.flying) return

        const p = getPoint(e)
        setAim(null)

        const dx = (startRef.current.x - p.clientX) * 0.05
        const dy = (startRef.current.y - p.clientY) * 0.08

        setBall(b => ({
            ...b,
            vx: dx,
            vy: dy,
            flying: true
        }))
    }

    /* ================= RENDER ================= */
    return (
        <div className="relative w-full h-full bg-black overflow-hidden touch-none">

            {/* HUD */}
            <div className="absolute top-4 left-4 text-xs text-white tracking-widest">
                SCORE <span className="text-neon">{score}</span>
                <br />
                BEST <span className="text-neon">{best}</span>
            </div>

            {/* HOOP */}
            <div
                className="absolute bg-red-500 h-[3px]"
                style={{
                    left: `${HOOP.x - HOOP.width / 2}%`,
                    top: `${HOOP.y}%`,
                    width: `${HOOP.width}%`
                }}
            />

            {/* NET */}
            <div
                className={`absolute left-1/2 -translate-x-1/2 top-[24%] w-8 h-10
          transition-transform duration-300
          ${swish ? "scale-y-125" : "scale-y-100"}`}
            >
                {[...Array(5)].map((_, i) => (
                    <span
                        key={i}
                        className={`absolute top-0 bottom-0 w-px bg-white/40
              transition-transform duration-300
              ${swish ? "translate-y-2" : ""}`}
                        style={{ left: `${i * 20}%` }}
                    />
                ))}
            </div>

            {/* AIM LINE */}
            {aim && (
                <svg className="absolute inset-0 pointer-events-none">
                    <line
                        x1={aim.x}
                        y1={aim.y}
                        x2={aim.x}
                        y2={aim.y - 80}
                        stroke="rgba(34,247,221,0.6)"
                        strokeWidth="2"
                        strokeDasharray="4"
                    />
                </svg>
            )}

            {/* SWISH TEXT */}
            {swish && (
                <div className="absolute top-14 left-1/2 -translate-x-1/2
                        text-green-400 font-bold tracking-widest">
                    SWISH
                </div>
            )}

            {/* BALL */}
            <motion.div
                onMouseDown={onStart}
                onMouseUp={onRelease}
                onTouchStart={onStart}
                onTouchEnd={onRelease}
                animate={{
                    left: `${ball.x}%`,
                    top: `${ball.y}%`
                }}
                transition={{ type: "linear", duration: TICK / 1000 }}
                className="
          absolute w-14 h-14 rounded-full
          bg-orange-500
          shadow-[0_0_25px_rgba(255,165,0,0.8)]
          cursor-grab active:cursor-grabbing
          hover:scale-105 active:scale-90
          transition-transform
        "
            />

            {/* EXIT */}
            <button
                onClick={onExit}
                className="absolute bottom-4 right-4 text-xs text-white"
            >
                EXIT
            </button>

            {/* INSTRUCTION */}
            {!ball.flying && (
                <p className="absolute bottom-6 left-1/2 -translate-x-1/2
                      text-xs text-muted tracking-widest">
                    DRAG BACK & RELEASE TO SHOOT
                </p>
            )}
        </div>
    )
}
