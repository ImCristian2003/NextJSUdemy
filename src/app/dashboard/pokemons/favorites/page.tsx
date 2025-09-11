import { PokemonGrid } from "@/pokemons/components/PokemonGrid";

export const metadata = {
  title: "Pk - Favorites",
  description: "Pk - Favorites",
};

export default async function PokemonsPage() {
  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-5xl">Favorites</h1>
      <PokemonGrid pokemons={[]} />
    </div>
  );
}
