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
            <h1 className="bg-red-900 rounded-b-2xl font-extrabold">Resultado da Soma</h1>
            <p>{a} + {b} = {soma}</p>
        </div>
    )
}