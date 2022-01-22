export type ApiPokemonListResults = {
    name: string,
    url: string
}


export type ApiPokemonListResponse = {
    count: number,
    next: string,
    previous: string
    results: ApiPokemonListResults[]
}

export type StorePokemonListEntry = {
    count: number,
    next: string,
    previous: string
    results: StorePokemonListItem[] 
}

export type StorePokemonListItem = {
    name: string,
    id: string,
    url: string,
    imageUrl: string
}


export type ApiPokemonDetailResponse = {
    abilities: {ability: {name: string}}[]
    height: number
    weight: number
    sprites: {
        back_default: string,
        back_shiny: string,
        front_default: string,
        front_shiny: string
    },
    moves: {move: {name: string}}[],
    name: string
    id: number
    stats: {base_stat: number, effort: number, stat: {name: string}}[]
}

export type StorePokemonDetailEntry = {
    abilities: {name: string}[]
    height: number
    weight: number
    imageUrlFront: string
    imageUrlBack: string
    imageUrlFrontShiny: string
    imageUrlBackShiny: string
    moves: string[]
    name: string
    id: string
    stats: {
        name: string,
        base: number,
        effort: number
    }[]
}



