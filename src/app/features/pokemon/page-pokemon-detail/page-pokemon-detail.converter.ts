import { ApiPokemonDetailResponse, StorePokemonDetailEntry } from "../pokemon.types"

export const apiPokemonDetailConverter = (input: ApiPokemonDetailResponse): StorePokemonDetailEntry => {
    return {
        abilities: input.abilities.map((ability: any) => ({ name: ability.ability.name })),
        height: input.height,
        weight: input.weight,
        imageUrlFront: input.sprites.front_default,
        imageUrlBack: input.sprites.back_default,
        imageUrlFrontShiny: input.sprites.front_shiny,
        imageUrlBackShiny: input.sprites.back_shiny,
        moves: input.moves.map((move) => move.move.name),
        name: input.name,
        id: input.id + '',
        stats: input.stats.map((stat) => ({
            name: stat.stat.name,
            base: stat.base_stat,
            effort: stat.effort
        })),

    }



}