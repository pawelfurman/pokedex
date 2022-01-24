import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core'

/**
 * Displays menu links for application
 */
@Component({
  selector: 'app-app-menu',
  templateUrl: './app-menu.component.html',
  styleUrls: ['./app-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppMenuComponent { }
