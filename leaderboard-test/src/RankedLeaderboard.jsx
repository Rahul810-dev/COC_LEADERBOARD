import { characterOrder } from "./characterOrder.js"

const FONT = "'Clash Display', sans-serif"
const GRID = "50px 50px 1fr 100px" // S.No · avatar · team name · points

export default function RankedLeaderboard({ title, subtitle, entries, showDivider = true }) {
    return (
        <div style={{ width: "100%", maxWidth: "640px", margin: "0 auto" }}>
            <div style={{
                color: "#c47d00", fontFamily: FONT, fontSize: "13px",
                letterSpacing: "4px", textTransform: "uppercase", marginBottom: "6px", textAlign: "center"
            }}>
                {subtitle}
            </div>
            <div style={{
                color: "#fff", fontFamily: FONT, fontSize: "28px", fontWeight: "bold",
                marginBottom: "20px", textAlign: "center", textShadow: "0 0 20px #c47d0088"
            }}>
                {title}
            </div>

            {/* column header row */}
            <div style={{
                display: "grid",
                gridTemplateColumns: GRID,
                alignItems: "center",
                gap: "14px",
                padding: "0 20px",
                marginBottom: "10px"
            }}>
                <div style={{ color: "#c47d00", fontFamily: FONT, fontSize: "11px", letterSpacing: "1px", textTransform: "uppercase" }}>S.No</div>
                <div />
                <div style={{ color: "#c47d00", fontFamily: FONT, fontSize: "11px", letterSpacing: "1px", textTransform: "uppercase" }}>Team Name</div>
                <div style={{ color: "#c47d00", fontFamily: FONT, fontSize: "11px", letterSpacing: "1px", textTransform: "uppercase", textAlign: "right" }}>Points</div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                {entries.map((entry, i) => {
                    const rank = i + 1
                    const character = characterOrder[i]

                    return (
                        <div key={i}>
                            <div style={{
                                display: "grid",
                                gridTemplateColumns: GRID,
                                alignItems: "center",
                                gap: "14px",
                                padding: "10px 20px",
                                borderRadius: "10px",
                                background: "rgba(0,0,0,0.6)",
                                border: "1px solid #c47d0033"
                            }}>
                                <div style={{ color: "#888", fontFamily: FONT, fontSize: "14px", fontWeight: "bold" }}>
                                    {rank}
                                </div>

                                {character && (
                                    <img
                                        src={`${import.meta.env.BASE_URL}leaderboard-avatars/${character.image}`}
                                        alt={character.name}
                                        onError={(e) => { e.target.style.visibility = "hidden" }}
                                        style={{
                                            width: "36px", height: "36px", borderRadius: "50%",
                                            objectFit: "cover", border: "1px solid #c47d0055"
                                        }}
                                    />
                                )}

                                <div style={{ color: "#fff", fontFamily: FONT, fontSize: "14px", fontWeight: "500" }}>
                                    {entry.teamName}
                                </div>

                                <div style={{ color: "#ffe066", fontFamily: FONT, fontSize: "14px", fontWeight: "bold", textAlign: "right" }}>
                                    {entry.score}
                                </div>
                            </div>

                            {showDivider && rank === 5 && entries.length > 5 && (
                                <div style={{ borderBottom: "1px dashed #c47d0044", margin: "10px 0" }} />
                            )}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}