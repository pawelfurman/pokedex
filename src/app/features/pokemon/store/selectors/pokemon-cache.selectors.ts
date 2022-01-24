import { createSelector } from "@ngrx/store"
import { selectAllCacheItems, selectPokemonCacheState } from "../reducers/pokemon-cache.reducer"
import { selectPokemonPossessionState } from "../reducers/pokemon-possession.reducer"
import { selectPokemonWishlistState } from "../reducers/pokemon-wishlist.reducer"

export const selectAllItemsToCache = createSelector(
    selectPokemonWishlistState,
    selectPokemonPossessionState,
    (wishlist, possession) => [...wishlist, ...possession]
)

/**
 * Returns pokemonCache items using ngrx adapter selector
 */
export const selectAllCachedItems = createSelector(
    selectPokemonCacheState,
    selectAllCacheItems,
)

/**
 * Maps ids from wishlist to data from pokemonCache
 */
export const selectFullWishlist = createSelector(
    selectPokemonWishlistState,
    selectAllCachedItems,
    (wishlist, items) => {
        return items.filter((cacheItem) => wishlist.indexOf(cacheItem.id) !== -1)
    }
)

/**
 * Maps ids from possession list to data from pokemonCache
 */
export const selectFullPossession = createSelector(
    selectPokemonPossessionState,
    selectAllCachedItems,
    (possession, items) => {
        return items.filter((cacheItem) => possession.indexOf(cacheItem.id) !== -1)
    }
)