import { useState } from 'react';
import { tracks } from "../data/tracks"
import TrackList from "./trackList"

export default function PlaylistPanel() {
  const [query, setQuery] = useState<string>("")

  const visibleTracks = tracks.filter((track) =>
    track.title.toLocaleLowerCase("pt-PT").includes(query.toLocaleLowerCase("pt-PT"))
  )
  const playedCount = tracks.filter((track) => track.played).length

  return (
    <main>
      <p>{visibleTracks.length} visíveis · {playedCount} ouvidas</p>
      <button onClick={() => setQuery("da")}>Daft</button>
      <button onClick={() => setQuery("")}>Todas</button>
      <TrackList query={query} />
    </main>
  )
}