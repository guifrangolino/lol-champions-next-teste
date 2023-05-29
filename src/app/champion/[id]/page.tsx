'use client'

import Image from 'next/image'
import Link from 'next/link'

const blurDataURL =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAA1JREFUGFdjsLGx+Q8AAyABtBnMkywAAAAASUVORK5CYII='

export default async function Champion({ params }: { params: { id: string } }) {
  const res = await fetch(
    `https://ddragon.leagueoflegends.com/cdn/13.10.1/data/pt_BR/champion/${params.id}.json`,
  )
  const json = await res.json()
  const data = await json
  const champData = await data.data[params.id]

  return (
    <main className="m-auto flex min-h-screen w-full max-w-7xl flex-col items-center justify-center p-2">
      <div>
        <Image
          src={`https://ddragon.leagueoflegends.com/cdn/img/champion/centered/${champData.id}_0.jpg`}
          alt="pic"
          width={1280}
          height={720}
          className="bottomGradient m-auto max-w-[1000px]"
          placeholder="blur"
          blurDataURL={blurDataURL}
        />
        <div className="relative mt-[-20px] text-center">
          <h2 className="text-xl">{champData.title}</h2>
          <h1 className="text-5xl">{champData.name}</h1>
        </div>
      </div>
      <p className="mt-5 text-center">{champData.lore}</p>
      <button className="mt-2 bg-white px-6 py-2 font-bold text-black transition-opacity hover:opacity-80">
        <Link href={'/'}>Voltar</Link>
      </button>
    </main>
  )
}
