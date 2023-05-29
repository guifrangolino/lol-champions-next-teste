'use client'

import { ChampionList } from '@/components/ChampionList'
import { Input } from '@/components/Input'

interface Champs {
  id: string
  // image: Object
  key: number
  name: string
  title: string
}

export default async function Home() {
  const res = await fetch(
    'https://ddragon.leagueoflegends.com/cdn/13.10.1/data/pt_BR/champion.json',
  )
  const json = await res.json()
  const data = await json
  const dataList = await data.data
  const champList: Champs[] = Object.values(dataList)

  return (
    <main className="m-auto flex min-h-screen w-full max-w-7xl flex-col items-center justify-center p-2">
      {/* Title */}
      <h1 className="text-center text-4xl font-bold">
        League of Legends Champions
      </h1>

      {/* Search */}
      <Input />

      {/* Champions List */}
      <ChampionList data={champList} />
    </main>
  )
}
