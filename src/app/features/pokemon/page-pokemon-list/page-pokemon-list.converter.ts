import { ApiPokemonListResponse, ApiPokemonListResults, StorePokemonListEntry, StorePokemonListItem } from "../pokemon.types"

export const apiPokemonListConverter = (input: ApiPokemonListResponse): StorePokemonListEntry => {
    const newList: StorePokemonListItem[] = input.results.map((entity: ApiPokemonListResults): StorePokemonListItem => {
        const id = entity.url.split('/').slice(-2)[0]
        return {
            ...entity,
            id,
            imageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
        }
    })
    return { ...input, results: newList }
}