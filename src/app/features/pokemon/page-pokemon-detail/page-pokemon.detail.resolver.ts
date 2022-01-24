import { Injectable } from '@angular/core'
import {
  ActivatedRouteSnapshot, Resolve, Router
} from '@angular/router'
import { Store } from "@ngrx/store"
import { catchError, EMPTY, Observable, of, switchMap, take } from 'rxjs'
import { RequestStatus } from "src/app/app.types"
import { fetchPokemonDetail } from "../store/actions/pokemon-detail.actions"
import { selectRequestStatus } from "../store/reducers/pokemon-detail.reducer"

/**
 * Waits for specific data to resolve the route. Redirect before resolving if there is an error.
 * 
 * TODO: this is error prone, find better way, use Resolve and Guard in order to achive the same effect, or use api service directly
 */
@Injectable({
  providedIn: 'root'
})
export class PagePokemonDetailResolver implements Resolve<boolean> {
  constructor(private store: Store, private router: Router) { }
  resolve(route: ActivatedRouteSnapshot): Observable<boolean> {
    this.store.dispatch(fetchPokemonDetail({ name: route.params['name'] }))

    return this.store.select(selectRequestStatus).pipe(
      switchMap((status) => {
        if (status === RequestStatus.ERROR) {
          throw false
        }
        return of(false)
      }),
      take(2),
      catchError((_) => {
        this.router.navigate(['/', 'error'])
        return EMPTY
      })
    )
  }
}
