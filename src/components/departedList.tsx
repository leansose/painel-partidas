import type { Departure } from "../utils/types"

interface DepartureProps {
    departures: Departure[]
}

export default function DepartureList({departures}: DepartureProps) {

    return (
        <ul className="flex flex-col gap-2.5 max-w-sm rounded-xl border border-slate-200 bg-red-400 p-5">
            {departures.map((departure) => (
                <li className="border-4 border-dashed p-4 drop-shadow-amber-600" key={departure.id}>
                    Destination: {departure.destination} {departure.time}
                    <p className="font-bold">Plataforma</p>
                    {departure.platform}
                </li>
            ))}
        </ul>
    )

}