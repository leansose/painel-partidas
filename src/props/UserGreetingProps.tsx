export interface User {
    id: string
    primeiro: string
    ultimo: string
}

export interface UserGreetingProps {
    user: User
}