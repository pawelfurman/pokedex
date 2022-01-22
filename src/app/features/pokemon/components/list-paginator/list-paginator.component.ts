import { Component, OnInit } from '@angular/core';
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { updateSearchParams } from "../../store/actions/pokemon-list.actions";
import { selectEntitiesCount } from "../../store/reducers/pokemon-list.reducer";
import { selectPokemonSearchParamsLimit, selectPokemonSearchParamsOffset } from "../../store/selectors/pokemon-list.selectors";

@Component({
  selector: 'app-list-paginator',
  templateUrl: './list-paginator.component.html',
  styleUrls: ['./list-paginator.component.scss']
})
export class ListPaginatorComponent implements OnInit {


  limit$: Observable<number> = this.store.select(selectPokemonSearchParamsLimit)
  offset$: Observable<number> = this.store.select(selectPokemonSearchParamsOffset)
  totalRecords$: Observable<number> = this.store.select(selectEntitiesCount)

  constructor(private store: Store) { }

  ngOnInit(): void {
  }


  paginate(event:any){
    this.store.dispatch(updateSearchParams({
      limit: event.rows,
      offset: event.first
    }))
  }
}
