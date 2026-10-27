export interface User {
    id: string;
    primeiro: string;
    ultimo: string;
    avatarUrl: string;
    prefix?: string
}

export interface Departure {
    id: string
    destination: string
    time: string
    platform: number
}