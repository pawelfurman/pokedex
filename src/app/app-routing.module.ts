import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { DashboardComponent } from "./features/dashboard/dashboard.component"
import { PageDiComponent } from './features/di/page-di/page-di.component'
import { PageErrorComponent } from "./features/error/page-error/page-error.component"
import { PagePokemonDetailComponent } from "./features/pokemon/page-pokemon-detail/page-pokemon-detail.component"
import { PagePokemonDetailResolver } from "./features/pokemon/page-pokemon-detail/page-pokemon.detail.resolver"
import { PagePokemonListComponent } from "./features/pokemon/page-pokemon-list/page-pokemon-list.component"
import { PagePokemonListResolver } from "./features/pokemon/page-pokemon-list/page-pokemon-list.resolver"

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
  {
    path: 'pokemon',
    component: PagePokemonListComponent,
    resolve: [PagePokemonListResolver]
  },
  {
    path: 'pokemon/:name',
    component: PagePokemonDetailComponent,
    resolve: [PagePokemonDetailResolver]
  },
  {
    path: 'error',
    component: PageErrorComponent
  },
  {
    path: 'di',
    component: PageDiComponent
  },
  {
    path: '**',
    redirectTo: 'error',
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
