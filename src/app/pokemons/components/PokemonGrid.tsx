import Image from "next/image";
import { SimplePokemon } from "../interfaces/simple-pokemon";

interface Props {
  pokemons: SimplePokemon[];
}

export const PokemonGrid = ({ pokemons }: Props) => {
  return (
    <div className="flex flex-wrap gap-10 items-center justify-center">
      {pokemons.map((pokemon) => (
        <Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
          width={100}
          height={100}
          alt={pokemon.name}
          key={pokemon.id}
        />
      ))}
    </div>
  );
};
