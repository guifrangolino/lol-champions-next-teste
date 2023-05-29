'use client'
import { Champion } from './Champion'

interface ChampionListProps {
  data: Array<{
    id: string
    key: number
    name: string
    title: string
  }>
}

export function ChampionList(props: ChampionListProps) {
  return (
    <ul className="grid w-full grid-cols-autoBreak gap-8">
      {props.data.map((champ) => (
        <Champion key={champ.key} data={champ} />
      ))}
    </ul>
  )
}
