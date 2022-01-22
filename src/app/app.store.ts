import { pokemonCacheFeature, PokemonCacheState } from "./features/pokemon/store/reducers/pokemon-cache.reducer";
import { pokemonDetailFeature, PokemonDetailState } from "./features/pokemon/store/reducers/pokemon-detail.reducer";
import { pokemonListFeature, PokemonListState } from "./features/pokemon/store/reducers/pokemon-list.reducer";
import { pokemonPossessionFeature, PokemonPossessionState } from "./features/pokemon/store/reducers/pokemon-possession.reducer";
import { pokemonWishlistFeature, PokemonWishlistState } from "./features/pokemon/store/reducers/pokemon-wishlist.reducer";

export type AppState = {
    [pokemonListFeature.name]: PokemonListState,
    [pokemonWishlistFeature.name]: PokemonWishlistState,
    [pokemonPossessionFeature.name]: PokemonPossessionState,
    [pokemonDetailFeature.name]: PokemonDetailState

    [pokemonCacheFeature.name]: PokemonCacheState
}