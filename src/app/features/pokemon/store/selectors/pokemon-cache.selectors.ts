import { createSelector } from "@ngrx/store";
import { selectAllCacheItems, selectPokemonCacheState } from "../reducers/pokemon-cache.reducer";
import { selectPokemonPossessionState } from "../reducers/pokemon-possession.reducer";
import { selectPokemonWishlistState } from "../reducers/pokemon-wishlist.reducer";

export const selectAllItemsToCache = createSelector(
    selectPokemonWishlistState,
    selectPokemonPossessionState,
    (wishlist, possession) => [...wishlist, ...possession]
)

export const selectAllCachedItems = createSelector(
    selectPokemonCacheState,
    selectAllCacheItems,   
)

export const selectFullWishlist = createSelector(
    selectPokemonWishlistState,
    selectAllCachedItems,
    (wishlist, items) => {
        return items.filter((cacheItem) => wishlist.indexOf(cacheItem.id) !== -1)
    }
)

export const selectFullPossession = createSelector(
    selectPokemonPossessionState,
    selectAllCachedItems,
    (possession, items) => {
        return items.filter((cacheItem) => possession.indexOf(cacheItem.id) !== -1)
    }
)