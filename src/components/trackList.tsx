import { tracks } from "../data/tracks"

interface TrackListProps {
    query: string
}

export default function TrackList({ query }: TrackListProps) {
    const visibleTracks = tracks.filter((track) =>
        track.title.toLocaleLowerCase("pt-PT").includes(
            query.toLocaleLowerCase("pt-PT")
        )
    )

    return (
        <ul>
            {visibleTracks.map((track) => (
                <li key={track.id}>
                    <span style={{ textDecoration: track.played ? "line-through" : "none" }}>
                        {track.title} — {track.artist}
                    </span>
                </li>
            ))}
        </ul>
    )
}