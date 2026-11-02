import { useState } from 'react';

export default function CoffeeMachine() {
    const [coffeeServed, setCoffeeServed] = useState<number>(0);

    function serveCoffee() {
        setCoffeeServed(coffeeServed + 1);
    }

    function serveThree() {
        setCoffeeServed((currentCoffe) => currentCoffe + 1);
        setCoffeeServed((currentCoffe) => currentCoffe + 1);
        setCoffeeServed((currentCoffe) => currentCoffe + 1);
    }

    return (
        <div className="flex flex-col">
            <button onClick={serveCoffee}>
                {coffeeServed} cafés
            </button>
            <p>------------</p>
            <button onClick={serveThree}>
                Servir 3 cafés
            </button>
        </div >
    )
}