import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { PageAnimationsComponent } from './features/animations/page-animations/page-animations.component'
import { FirstViewComponent } from './features/animations/router-animation/first-view/first-view.component'
import { SecondViewComponent } from './features/animations/router-animation/second-view/second-view.component'
import { ThirdViewComponent } from './features/animations/router-animation/third-view/third-view.component'
import { DashboardComponent } from "./features/dashboard/dashboard.component"
import { PageDiComponent } from './features/di/page-di/page-di.component'
import { PageErrorComponent } from "./features/error/page-error/page-error.component"
import { PageLifecycleComponent } from './features/lifecycle/page-lifecycle/page-lifecycle.component'
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
    path: 'animations',
    component: PageAnimationsComponent,
    children: [
      {
        path: 'first-view',
        component: FirstViewComponent,
        data: {
          animation: 'firstViewPage'
        }
      },
      {
        path: 'second-view',
        component: SecondViewComponent,
        data: {
          animation: 'secondViewPage'
        }
      },
      {
        path: 'third-view',
        component: ThirdViewComponent,
        data: {
          animation: 'thirdViewPage'
        }
      }
    ]

  },
  {
    path: 'lifecycle',
    component: PageLifecycleComponent
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
