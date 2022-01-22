import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core'
import { Store } from "@ngrx/store"
import { Observable } from "rxjs"
import { selectGlobalLoading } from "../../store/selectors/layout.selectors"

@Component({
  selector: 'app-app-loader',
  templateUrl: './app-loader.component.html',
  styleUrls: ['./app-loader.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppLoaderComponent implements OnInit {

  isProcessing$: Observable<boolean> = this.store.select(selectGlobalLoading)

  constructor(private store: Store) { }

  ngOnInit(): void {
  }

}
