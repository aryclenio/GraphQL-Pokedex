import { gql } from "@apollo/client";

export const GET_ALL_POKEMON = gql`
  query getAllPokemon {
    pokemon_v2_pokemon(limit: 251) {
      id
      name
    }
  }
`;