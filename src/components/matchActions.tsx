import { useScoreStore } from "../stores/scoreStore"

export default function MatchActions() {
  const addHome = useScoreStore((state) => state.addHome)
  const addAway = useScoreStore((state) => state.addAway)
  const reset = useScoreStore((state) => state.reset)

  return (
    <div className="flex flex-col gap-4">
      <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={addHome}>
        Golo da casa
      </button>
      <button className="bg-green-500 text-white px-4 py-2 rounded" onClick={addAway}>
        Golo de fora
      </button>
      <button className="bg-red-500 text-white px-4 py-2 rounded" onClick={reset}>
        Reiniciar
      </button>
    </div>
  )
}