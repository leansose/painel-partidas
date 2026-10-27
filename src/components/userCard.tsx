//IMPORTS

import UserGreeting from "./userGreeting"
import UserAvatar from "./userAvatar"
import type { User } from "../utils/types"
import Panel from "./panel"


interface UserCardProps {
    user: User
    onSelect: (userId: string) => void
}

export default function UserCard({ user, onSelect }: UserCardProps) {
    //LOGICA

    return (
        //HTML
        <Panel title="Perfil">
            <UserGreeting user={user} />
            <UserAvatar user={user} />
            <button type="button" onClick={() => onSelect(user.id)}>
                Selecionar {user.primeiro}
            </button>
        </Panel>
    )
}