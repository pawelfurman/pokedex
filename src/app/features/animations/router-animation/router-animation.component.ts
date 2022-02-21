import { animate, query, style, transition, trigger } from '@angular/animations'
import { Component, OnInit } from '@angular/core'
import { RouterOutlet } from '@angular/router'

@Component({
  selector: 'app-router-animation',
  templateUrl: './router-animation.component.html',
  styleUrls: ['./router-animation.component.scss'],
  animations: [
    trigger('routeAnimations', [
      transition('* <=> *', [
        style({ position: 'relative', overflow: 'hidden' }),
        query(':enter', [
          style({ opacity: 0, display: 'block', top: '20px', position: 'relative' }),
          animate('.2s', style({ opacity: 1, top: '0px' }))
        ])
      ])
    ])
  ]
})
export class RouterAnimationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  prepareRoute(outlet: RouterOutlet) {
    console.log(outlet?.activatedRouteData?.['animation'])
    return outlet?.activatedRouteData?.['animation']
  }

}
