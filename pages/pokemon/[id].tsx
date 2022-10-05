import { gql } from "@apollo/client";
import Image from "next/image";
import { initializeApollo } from "../../lib/apolloClient";
import { PokemonRequest } from "../../types/PokemonRequest";

export default function Pokemon({ pokemon, sprite }: PokemonRequest) {
  console.log(pokemon, sprite);
  return (
    <>
      <section className="cl-black">
        {pokemon.name}
      </section>
      <Image src={sprite} alt={pokemon.name} width={200} height={200} />
    </>
  );
}

export async function getServerSideProps({ params }: { params: { id: string } }) {
  const sprite = `https://raw.githubusercontent.com/geekygreek7/animated-pokemon-gifs/master/${params.id}.gif`
  const client = initializeApollo();

  const { data } = await client.query({
    query: gql`
                query GetPokemon {
                  pokemon_v2_pokemon(where: {id: {_eq: ${params.id}}}) {
                  id
          name
                pokemon_v2_pokemonstats {
                  base_stat
            pokemon_v2_stat {
                  name
                }
          }
                pokemon_v2_pokemontypes {
                  pokemon_v2_type {
                  name
                }
          }
        }
      }
                `
  });

  return {
    props: {
      pokemon: data.pokemon_v2_pokemon[0],
      sprite
    }
  }
}