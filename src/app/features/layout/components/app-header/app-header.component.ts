import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core'
import { Store } from "@ngrx/store"

/**
 * Entry Point for all headers componnets
 * 
 * Contains app-app-loader, app-app-menu, app-app-menu-addon components
 */
@Component({
  selector: 'app-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppHeaderComponent {
  constructor() { }
}
