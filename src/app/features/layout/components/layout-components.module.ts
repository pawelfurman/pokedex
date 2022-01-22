import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { AppHeaderComponent } from "./app-header/app-header.component"
import { AppLoaderComponent } from "./app-loader/app-loader.component"
import { BadgeModule } from "primeng/badge"
import { ButtonModule } from "primeng/button"
import { ProgressBarModule } from "primeng/progressbar"
import { RouterModule } from "@angular/router"
import { AppMenuComponent } from './app-menu/app-menu.component'
import { AppMenuAddonComponent } from './app-menu-addon/app-menu-addon.component'
import { RippleModule } from "primeng/ripple"
import { DialogModule } from 'primeng/dialog'
import { AppWishlistDialogComponent } from './app-wishlist-dialog/app-wishlist-dialog.component'
import { AppPossessionDialogComponent } from './app-possession-dialog/app-possession-dialog.component'


@NgModule({
  declarations: [
    AppHeaderComponent,
    AppLoaderComponent,
    AppMenuComponent,
    AppMenuAddonComponent,
    AppWishlistDialogComponent,
    AppPossessionDialogComponent
  ],
  exports: [AppHeaderComponent],
  imports: [
    CommonModule,
    ButtonModule,
    BadgeModule,
    ProgressBarModule,
    RouterModule,
    RippleModule,
    DialogModule
  ]
})
export class LayoutComponentsModule { }
