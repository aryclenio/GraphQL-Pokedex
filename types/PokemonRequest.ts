export type GetAllPokemonRequest =
  {
    __typename: string;
    id: number;
    name: string;
  }[];

export type PokemonRequest = {
  pokemon: {
    __typename: string;
    id: number;
    name: string;
    "pokemon_v2_pokemonstats": PokemonStats[];
    "pokemon_v2_pokemontypes": PokemonTypes[];
  },
  sprite: string;
}

export type PokemonStats = {
  __typename: string;
  base_stat: number;
  pokemon_v2_stat: {
    __typename: string;
    name: string;
  }
}

export type PokemonTypes = {
  __typename: string;
  pokemon_v2_type: {
    __typename: string;
    name: string;
  }
}