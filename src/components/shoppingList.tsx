import { useState } from 'react'
import type { ShoppingItem } from '../utils/shopping'

interface ShoppingListProps {
    ShoppingItem: ShoppingItem[]
}

export default function ShoppingList() {

    const [items, setItems] = useState<ShoppingItem[]>([])

    const breadItem: ShoppingItem = {
        id: "bread",
        name: "Pão",
        quantity: 1,
        picked: false,
    }

    function addItem(newItem: ShoppingItem) {
        setItems((current) => [...current, newItem])
    }

    function toggleItem(itemId: string) {
        setItems((current) =>
            current.map((item) =>
                item.id === itemId ? { ...item, picked: !item.picked } : item
            )
        )
    }

    function removeItem(itemId: string) {
        setItems((current) => current.filter((item) => item.id !== itemId))
    }

    return (

    <main>
      <button onClick={() => addItem(breadItem)}>Adicionar</button>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <span style={{ textDecoration: item.picked ? "line-through" : "none" }}>
              {item.name} · {item.quantity}
            </span>
            <button onClick={() => toggleItem(item.id)}>Comprar</button>
            <button onClick={() => removeItem(item.id)}>Tirar</button>
          </li>
        ))}
      </ul>
    </main>
  )
}