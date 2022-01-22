import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core'
import { Store } from "@ngrx/store"
import { Observable } from "rxjs"
import { selectEntities } from "../store/reducers/pokemon-list.reducer"

@Component({
  selector: 'app-page-pokemon-list',
  templateUrl: './page-pokemon-list.component.html',
  styleUrls: ['./page-pokemon-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PagePokemonListComponent {


  entities$: Observable<any> = this.store.select(selectEntities)
  filterValue: string = ''

  constructor(private store: Store) { }

  onFilter(event: string) {
    this.filterValue = event
  }

}
