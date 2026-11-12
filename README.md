# 🏆 Clash of Coders Leaderboard

**A round-by-round leaderboard website** for the Clash of Coders coding competition. Results are released in stages, and each round stays locked until it is unlocked.

**Live demo:** https://rahul810-dev.github.io/COC_LEADERBOARD/

## Features

- **Five result tabs:** Round 0 (Top 40), Round 1 (Top 25), Phase 1, Phase 2 and Final Winners
- **Locked tabs:** unreleased rounds show a lock icon and a "check back soon" message
- **Ranked list** showing rank, team avatar, team name and points
- **Dark, battle-themed design** with a full-screen background

## Tech Stack

**React**, **Vite**, **React Icons**

## Run Locally

```bash
git clone https://github.com/Rahul810-dev/COC_LEADERBOARD.git
cd COC_LEADERBOARD/leaderboard-test
npm install
npm run dev
```

Open `http://localhost:5173/COC_LEADERBOARD/`

## Update Results

**1.** Add the scores in `src/leaderboardData.js`:

```js
export const round1Data = [
    { teamName: "Team Name", score: 2790 },
]
```

**2.** Unlock the round in `src/leaderboardConfig.js`:

```js
export const UNLOCKED_ROUNDS = ["round0", "round1"]
```

Valid keys: `round0`, `round1`, `phase1`, `phase2`, `overall`

## Author

**Rahul N**, final-year CSE student
[LinkedIn](https://linkedin.com/in/rahul-n-a0b5b9314) | [Portfolio](https://rahul810-dev.github.io/MyPortfolio)
