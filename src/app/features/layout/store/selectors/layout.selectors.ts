import { createSelector } from "@ngrx/store"
import { RequestStatus } from "src/app/app.types"
import { selectRequestStatus as detailStatus } from "src/app/features/pokemon/store/reducers/pokemon-detail.reducer"
import { selectRequestStatus as listStatus } from "src/app/features/pokemon/store/reducers/pokemon-list.reducer"

/**
 * Combines all RequestStatuses and if any of them is in PROCESSING state - return true
 */
export const selectGlobalLoading = createSelector(
    detailStatus,
    listStatus,
    (detailStatus, listStatus) => {
        return [detailStatus, listStatus].indexOf(RequestStatus.PROCESSING) !== -1
    }
)