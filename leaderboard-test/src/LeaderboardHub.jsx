import { useState } from "react"
import RankedLeaderboard from "./RankedLeaderboard.jsx"
import { round0Data, round1Data, phase1Data, phase2Data, overallData } from "./leaderboardData.js"
import { FaTrophy } from "react-icons/fa"

const FONT = "'Clash Display', sans-serif"

const TABS = [
    { key: "round0", label: "Round 0 - Top 40", data: round0Data, subtitle: "Round 0 Winners" },
    { key: "round1", label: "Round 1 - Top 25", data: round1Data, subtitle: "Round 1 Winners" },
    { key: "phase1", label: "Phase 1", data: phase1Data, subtitle: "Round 2 · Phase 1 Winners" },
    { key: "phase2", label: "Phase 2", data: phase2Data, subtitle: "Round 2 · Phase 2 Winners" },
    { key: "overall", label: "Final Winners", icon: true, data: overallData, subtitle: "Round 2 · Winners" }
]

const btnStyle = (active) => ({
    display: "flex",
    alignItems: "center",
    gap: "6px",
    background: active ? "rgba(196,125,0,0.25)" : "rgba(0,0,0,0.6)",
    border: `1px solid ${active ? "#c47d00" : "#c47d0033"}`,
    borderRadius: "20px",
    padding: "8px 18px",
    color: active ? "#ffe066" : "#aaa",
    fontFamily: FONT,
    fontSize: "12px",
    fontWeight: "bold",
    letterSpacing: "1px",
    cursor: "pointer",
    textTransform: "uppercase"
})

export default function LeaderboardHub() {
    const [activeTab, setActiveTab] = useState("phase1")
    const current = TABS.find((t) => t.key === activeTab)

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
            <div style={{ color: "#c47d00", fontFamily: FONT, fontSize: "12px", letterSpacing: "4px", textTransform: "uppercase", marginBottom: "8px" }}>
                Clash of Coders
            </div>
            <div style={{ color: "#fff", fontFamily: FONT, fontSize: "24px", fontWeight: "bold", marginBottom: "24px", display: "flex", alignItems: "center", gap: "10px" }}>
                <FaTrophy /> Leaderboard
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", justifyContent: "center", marginBottom: "40px" }}>
                {TABS.map((tab) => (
                    <button key={tab.key} onClick={() => setActiveTab(tab.key)} style={btnStyle(tab.key === activeTab)}>
                        {tab.icon && <FaTrophy />}
                        {tab.label}
                    </button>
                ))}
            </div>

            <RankedLeaderboard
                title={current.label}
                subtitle={current.subtitle}
                entries={current.data}
            />
        </div>
    )
}