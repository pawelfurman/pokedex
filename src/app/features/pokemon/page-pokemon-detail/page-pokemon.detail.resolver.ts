import { Injectable } from '@angular/core'
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router'
import { Store } from "@ngrx/store"
import { catchError, EMPTY, empty, filter, map, mergeMap, NEVER, never, Observable, of, switchMap, take } from 'rxjs'
import { RequestStatus } from "src/app/app.types"
import { fetchPokemonDetail } from "../store/actions/pokemon-detail.actions"
import { selectRequestStatus } from "../store/reducers/pokemon-detail.reducer"
@Injectable({
  providedIn: 'root'
})
export class PagePokemonDetailResolver implements Resolve<boolean> {
  constructor(private store: Store, private router: Router) { }
  resolve(route: ActivatedRouteSnapshot): Observable<boolean> {
    this.store.dispatch(fetchPokemonDetail({ name: route.params['name'] }))

    //TODO: share responsibility between resolve and guard
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
