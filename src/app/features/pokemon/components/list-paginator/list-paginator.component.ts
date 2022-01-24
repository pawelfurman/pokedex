import { Component, OnInit } from '@angular/core'
import { Store } from "@ngrx/store"
import { Observable } from "rxjs"
import { updateSearchParams } from "../../store/actions/pokemon-list.actions"
import { selectEntitiesCount } from "../../store/reducers/pokemon-list.reducer"
import { selectPokemonSearchParamsLimit, selectPokemonSearchParamsOffset } from "../../store/selectors/pokemon-list.selectors"

/**
 * Displays pagination component from PrimeNg library.
 * Takes necessary data from NgRx store
 * 
 * TODO: resolve problem with passing current state into p-paginator component
 */
@Component({
  selector: 'app-list-paginator',
  templateUrl: './list-paginator.component.html',
  styleUrls: ['./list-paginator.component.scss']
})
export class ListPaginatorComponent {

  limit$: Observable<number> = this.store.select(selectPokemonSearchParamsLimit)
  offset$: Observable<number> = this.store.select(selectPokemonSearchParamsOffset)
  totalRecords$: Observable<number> = this.store.select(selectEntitiesCount)

  constructor(private store: Store) { }

  paginate(event: any) {
    this.store.dispatch(updateSearchParams({
      limit: event.rows,
      offset: event.first
    }))
  }
}
