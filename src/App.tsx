import { useEffect, useState } from "react";

interface CatTypes {
  image_link: string
  name: string
  inteligence: number
  origin: string
}

// https://api.api-ninjas.com/v1/cats?name=abyssinian

export default function App() {

  //Logica
  const [catData, setCatData] = useState<CatTypes[]>()

  useEffect(() => {
    console.log('useEffect is Open')

    async function fetchCats(): Promise<void> {
      const response: Response = await fetch("https://api.api-ninjas.com/v1/cats?name=persian", {
        headers: { 'X-Api-Key': '2cmvSTrujuShff8fIeITHHkLtzMoWSn8y3psIoU2' },
      });

      if (!response.ok) throw new Error(`HTTP ${response.status}`);

      const data: CatTypes[] = await response.json();
      setCatData(data);
    }
    fetchCats()

  }, [])


  return (
    <>
      <div>
        {catData?.map((item) => (
          <div key={item.name}>
            <img src={item.image_link} alt={item.name} />
            <p>Name: {item.name}</p>
            <p>Intelligence: {item.inteligence}</p>
            <p>Origin: {item.origin}</p>
          </div>
        ))}
      </div>
    </>
  )
}