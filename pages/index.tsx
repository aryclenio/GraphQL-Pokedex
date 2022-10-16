import type { NextPage } from 'next'
import PokemonCard from '../components/PokemonCard/PokemonCard';
import { GET_ALL_POKEMON } from '../graphql/queries/GET_ALL_POKEMONS';
import { initializeApollo } from '../lib/apolloClient';
import { GetAllPokemonRequest } from '../types/PokemonRequest';

const Home: NextPage<{ pokemons: GetAllPokemonRequest }> = ({ pokemons }) => {
  return (
    <>
      <header className="flex flex-col items-center justify-center py-10">
        <h1 className="text-2xl text-black font-bold">Johto Pokedex</h1>
      </header>
      <section className='px-20 py-10'>
        <div className='grid grid-cols-4 grid-flow-row gap-5'>
          {pokemons.map((pokemon) => (
            <PokemonCard key={pokemon.id}
              pokemonId={pokemon.id}
              name={pokemon.name}
              sprite={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
            />
          ))}
        </div>
      </section>
    </>
  )
}

export async function getStaticProps() {
  const client = initializeApollo();

  const { data } = await client.query({
    query: GET_ALL_POKEMON,
  });

  return {
    props: {
      pokemons: data.pokemon_v2_pokemon,
    },
  };
};

export default Home
