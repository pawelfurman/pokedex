import { Injectable } from '@angular/core'
import { Resolve, Router } from '@angular/router'
import { Store } from "@ngrx/store"
import { catchError, EMPTY, Observable, of, switchMap, take } from 'rxjs'
import { RequestStatus } from "src/app/app.types"
import { fetchPokemonList } from "../store/actions/pokemon-list.actions"
import { selectRequestStatus } from "../store/reducers/pokemon-list.reducer"
@Injectable({
  providedIn: 'root'
})
export class PagePokemonListResolver implements Resolve<boolean> {
  constructor(private router: Router, private store: Store) { }
  resolve(): Observable<boolean> {
    this.store.dispatch(fetchPokemonList())
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
