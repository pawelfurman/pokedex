import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from "@angular/platform-browser/animations"
import { EffectsModule } from "@ngrx/effects"
import { StoreModule } from "@ngrx/store"
import { StoreDevtoolsModule } from "@ngrx/store-devtools"
import { RippleModule } from 'primeng/ripple'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { DashboardModule } from "./features/dashboard/dashboard.module"
import { PageErrorModule } from "./features/error/page-error/page-error.module"
import { LayoutModule } from "./features/layout/layout.module"
import { PokemonModule } from "./features/pokemon/pokemon.module"

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PokemonModule,
    RippleModule,
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument({}),
    EffectsModule.forRoot([]),
    BrowserAnimationsModule,
    LayoutModule,
    DashboardModule,
    PageErrorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
