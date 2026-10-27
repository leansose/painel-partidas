import { useState } from "react"

export default function PlatformOccupancy() {
    const [passengerCount, SetPassengerCount] = useState(0)

    function increment() {
        SetPassengerCount(passengerCount + 1)
    }

    return (
        <button type="button" onClick={increment}>
            Passageiros: {passengerCount}
        </button>
    )
}