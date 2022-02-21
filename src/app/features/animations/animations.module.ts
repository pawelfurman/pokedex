import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { PageAnimationsComponent } from './page-animations/page-animations.component'
import { CardModule } from 'primeng/card'
import { FirstAnimationComponent } from './first-animation/first-animation.component'
import { ButtonModule } from 'primeng/button'
import { SecondAnimationComponent } from './second-animation/second-animation.component'
import { ThirdAnimationComponent } from './third-animation/third-animation.component'
import { FourthAnimationComponent } from './fourth-animation/fourth-animation.component'
import { FifthAnimationComponent } from './fifth-animation/fifth-animation.component'
import { SixthAnimationComponent } from './sixth-animation/sixth-animation.component'
import { SeventhAnimationComponent } from './seventh-animation/seventh-animation.component'
import { RouterAnimationComponent } from './router-animation/router-animation.component'
import { FirstViewComponent } from './router-animation/first-view/first-view.component'
import { SecondViewComponent } from './router-animation/second-view/second-view.component'
import { ThirdViewComponent } from './router-animation/third-view/third-view.component'
import { RouterModule } from '@angular/router'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'



@NgModule({
  declarations: [
    PageAnimationsComponent,
    FirstAnimationComponent,
    SecondAnimationComponent,
    ThirdAnimationComponent,
    FourthAnimationComponent,
    FifthAnimationComponent,
    SixthAnimationComponent,
    SeventhAnimationComponent,
    RouterAnimationComponent,
    FirstViewComponent,
    SecondViewComponent,
    ThirdViewComponent
  ],
  imports: [
    CommonModule,
    CardModule,
    ButtonModule,
    RouterModule
  ]
})
export class AnimationsModule { }
