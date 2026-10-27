import type { User } from "../utils/types"

interface UserAvatarProps {
    user: User
}

export default function UserAvatar({ user }: UserAvatarProps) {
    return <img className="size-48" src={user.avatarUrl} alt={user.primeiro} />
}