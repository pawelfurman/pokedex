import { environment } from "src/environments/environment"
import { ApiPokemonListResponse, ApiPokemonListResults, StorePokemonListEntry, StorePokemonListItem } from "../pokemon.types"

/**
 * Converts the API response data type to the 'store friendly' data type
 * @param {ApiPokemonListResponse} input  data from the server
 * @returns {StorePokemonListItem} store friendly typed data
 */
export const apiPokemonListConverter = (input: ApiPokemonListResponse): StorePokemonListEntry => {
    const newList: StorePokemonListItem[] = input.results.map((entity: ApiPokemonListResults): StorePokemonListItem => {
        const id = entity.url.split('/').slice(-2)[0]
        return {
            ...entity,
            id,
            imageUrl: `${environment.storage}/${id}.png`
        }
    })
    return { ...input, results: newList }
}