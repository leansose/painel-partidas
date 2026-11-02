import { useScoreStore } from "../stores/scoreStore"

export default function ScorePanel() {
  const home = useScoreStore((state) => state.home)
  const away = useScoreStore((state) => state.away)
  const total = home + away

  return <p className="bg-blue-800 text-3xl text-amber-200 p-5 text-center">
    Casa {home} · Fora {away} · Total {total}
    </p>
}