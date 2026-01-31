import { useState } from "react"
import TargetShooter from "./TargetShooter"
import BasketballShot from "./BasketballShot"

export default function PlayOverlay({ onClose }) {
    const [game, setGame] = useState(null)

    return (
        <div className="fixed inset-0 z-[999] bg-black/90 flex items-center justify-center">
            {!game && (
                <div className="space-y-6 text-center">
                    <button onClick={() => setGame("shoot")} className="block text-white text-2xl">
                        🎯 Target Shooter
                    </button>
                    <button onClick={() => setGame("basket")} className="block text-white text-2xl">
                        🏀 Basketball Shot
                    </button>
                    <button onClick={onClose} className="text-gray-400 mt-10">
                        Exit
                    </button>
                </div>
            )}

            {game === "shoot" && <TargetShooter onExit={onClose} />}
            {game === "basket" && <BasketballShot onExit={onClose} />}
        </div>
    )
}
