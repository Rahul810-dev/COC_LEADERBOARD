import { useState } from "react"
import RankedLeaderboard from "./RankedLeaderboard.jsx"
import { round0Data, round1Data, phase1Data, phase2Data, overallData } from "./leaderboardData.js"
import { UNLOCKED_ROUNDS } from "./leaderboardConfig.js"
import { FaTrophy, FaLock } from "react-icons/fa"

const TABS = [
    { key: "round0", label: "Round 0 — Top 40", data: round0Data, subtitle: "Shortlist" },
    { key: "round1", label: "Round 1 — Top 25", data: round1Data, subtitle: "Shortlist" },
    { key: "phase1", label: "Phase 1", data: phase1Data, subtitle: "Round 2 · Phase 1" },
    { key: "phase2", label: "Phase 2", data: phase2Data, subtitle: "Round 2 · Phase 2" },
    { key: "overall", label: "🏆 Final Winners", data: overallData, subtitle: "Round 2 · Overall (Phases 1-3 combined)" }
]

const btnStyle = (active, locked) => ({
    background: active ? "rgba(196,125,0,0.25)" : "rgba(0,0,0,0.6)",
    border: `1px solid ${active ? "#c47d00" : "#c47d0033"}`,
    borderRadius: "20px",
    padding: "8px 18px",
    color: locked ? "#666" : (active ? "#ffe066" : "#aaa"),
    fontFamily: "sans-serif",
    fontSize: "12px",
    fontWeight: "bold",
    letterSpacing: "1px",
    cursor: "pointer",
    textTransform: "uppercase",
    display: "flex",
    alignItems: "center",
    gap: "6px",
    opacity: locked ? 0.6 : 1
})

export default function LeaderboardHub() {
    const firstUnlocked = TABS.find((t) => UNLOCKED_ROUNDS.includes(t.key))
    const [activeTab, setActiveTab] = useState(firstUnlocked ? firstUnlocked.key : null)
    const [lockedMessage, setLockedMessage] = useState(null)

    const current = TABS.find((t) => t.key === activeTab)

    const handleTabClick = (tab) => {
        if (UNLOCKED_ROUNDS.includes(tab.key)) {
            setActiveTab(tab.key)
            setLockedMessage(null)
        } else {
            setLockedMessage(tab.label)
            setTimeout(() => setLockedMessage(null), 3000)
        }
    }

    return (
        <div style={{
            minHeight: "100vh",
            padding: "50px 20px 60px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            backgroundImage: `linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.85)), url(${import.meta.env.BASE_URL}backgrounds/leaderboard-bg.webp)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed"
        }}>
            <div style={{ color: "#c47d00", fontFamily: "'Georgia', serif", fontSize: "12px", letterSpacing: "4px", textTransform: "uppercase", marginBottom: "8px" }}>
                Clash of Coders
            </div>
            <div style={{ color: "#fff", fontFamily: "'Georgia', serif", fontSize: "24px", fontWeight: "bold", marginBottom: "24px", display: "flex", alignItems: "center", gap: "10px" }}>
                <FaTrophy /> Leaderboard
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", justifyContent: "center", marginBottom: "16px" }}>
                {TABS.map((tab) => {
                    const locked = !UNLOCKED_ROUNDS.includes(tab.key)
                    return (
                        <button key={tab.key} onClick={() => handleTabClick(tab)} style={btnStyle(tab.key === activeTab, locked)}>
                            {locked && <FaLock size={10} />}
                            {tab.label}
                        </button>
                    )
                })}
            </div>

            {lockedMessage && (
                <div style={{
                    color: "#ff8888", fontFamily: "sans-serif", fontSize: "13px",
                    marginBottom: "24px", textAlign: "center"
                }}>
                    🔒 {lockedMessage} isn't released yet — check back soon.
                </div>
            )}

            {current ? (
                <RankedLeaderboard
                    title={current.label}
                    subtitle={current.subtitle}
                    entries={current.data}
                />
            ) : (
                <div style={{ color: "#888", fontFamily: "sans-serif", fontSize: "14px", marginTop: "40px" }}>
                    No results have been released yet. Check back soon.
                </div>
            )}
        </div>
    )
}