//IMPORTS

import type { User } from "../utils/types"

//TYPES / INTERFACE

/*
interface User {
    id: string
    primeiro: string
    ultimo: string
}

interface UserGreetingProps {
    user: User
}
*/

interface UserGreetingProps {
    user: User
}

export default function UserGreeting({ user }: UserGreetingProps) {
    //LOGICA
    return (
        //HTML
        <div className="bg-red-500 p-4">
            <h1>{user.prefix || 'Olá'}, {user.primeiro} {user.ultimo}</h1>
        </div>
    )
}