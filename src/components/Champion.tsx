'use client'
import Image from 'next/image'
import Link from 'next/link'

interface ChampionProps {
  data: {
    id: string
    key: number
    name: string
    title: string
  }
}

export const blurDataURL =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAA1JREFUGFdjsLGx+Q8AAyABtBnMkywAAAAASUVORK5CYII='

export function Champion(props: ChampionProps) {
  function checkError(champId: string): string {
    if (champId === 'Fiddlesticks') {
      return 'FiddleSticks'
    }

    return champId
  }

  return (
    <li
      key={props.data.key}
      className="group h-72 max-w-[250px] flex-1 flex-col space-y-7 overflow-hidden rounded-md border transition-colors"
    >
      <Link
        href={`/champion/${props.data.id}`}
        className="relative block h-full"
      >
        <Image
          src={`https://ddragon.leagueoflegends.com/cdn/img/champion/centered/${checkError(
            props.data.id,
          )}_0.jpg`}
          alt={`${props.data.name} pic`}
          width={500}
          height={280}
          priority={props.data.id === 'Aatrox'}
          className="h-full rounded-md object-cover transition-transform group-hover:scale-110"
          placeholder="blur"
          blurDataURL={blurDataURL}
        />
        <h2 className="blur-full absolute bottom-0 w-full rounded-b-md bg-black py-2 text-center font-bold opacity-80">
          {props.data.name}
        </h2>
      </Link>
    </li>
  )
}
