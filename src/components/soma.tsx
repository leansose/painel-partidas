interface SomaProps {
    a: number
    b: number
}

export default function Soma({a, b}: SomaProps) {
    //LOGICA
    const soma = a + b
    return (
        //HTML
        <div className="bg-blue-800 p-7 text-7xl text-amber-200">
            <h1>Resultado da Soma de {a} + {b} = {soma}</h1>
        </div>
    )
}