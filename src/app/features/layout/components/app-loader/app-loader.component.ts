import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core'
import { Store } from "@ngrx/store"
import { Observable } from "rxjs"
import { selectGlobalLoading } from "../../store/selectors/layout.selectors"

/**
 * Decides wheather to display loader or no
 * 
 * isProcessing$ combines RequestStatus from all http request available in the applications
 * 
 * TODO: Refactor - it will be easier to use global interceptor and to keep the app loading state in store directly 
 */
@Component({
  selector: 'app-app-loader',
  templateUrl: './app-loader.component.html',
  styleUrls: ['./app-loader.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppLoaderComponent {

  isProcessing$: Observable<boolean> = this.store.select(selectGlobalLoading)

  constructor(private store: Store) { }
}
