import Image from "next/image";
import Link from "next/link";

interface PokemonCardProps {
  pokemonId: number;
  name: string;
  sprite: string;
}

export default function PokemonCard({ pokemonId, name, sprite }: PokemonCardProps) {
  return (
    <Link href={`/pokemon/${pokemonId}`}>
      <div className="bg-gray-100 rounded-lg flex flex-col 
                    items-center justify-center p-2 w-56 h-56 justify-self-center">
        <div className="w-full flex justify-around items-center">
          <h1 className="text-black capitalize text-xl">{name}</h1>
          <span className="text-slate-400 font-thin text-xl">{`#${pokemonId}`}</span>
        </div>
        <Image src={sprite} alt={name} width="150" height="150" />
      </div>
    </Link>
  )
}
