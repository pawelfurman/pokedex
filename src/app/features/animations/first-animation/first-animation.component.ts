import { animate, state, style, transition, trigger } from '@angular/animations'
import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-first-animation',
  templateUrl: './first-animation.component.html',
  styleUrls: ['./first-animation.component.scss'],
  animations: [
    trigger('leftRight', [
      state('left', style({
        left: '0px'
      })),
      state('right', style({
        left: '300px'
      })),
      transition('left => right', [
        animate('1s 0s ease-in')
      ]),
      transition('right => left', [
        animate('1s 0s ease-out')
      ])
    ])
  ]
})
export class FirstAnimationComponent implements OnInit {

  moveSquareState = 'left'

  constructor() { }

  ngOnInit(): void {
  }

  moveSquare() {
    this.moveSquareState = this.moveSquareState === 'left' ? 'right' : 'left'
  }

}
