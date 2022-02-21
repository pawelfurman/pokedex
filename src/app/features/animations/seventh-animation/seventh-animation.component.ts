import { animate, animateChild, group, query, style, transition, trigger } from '@angular/animations'
import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-seventh-animation',
  templateUrl: './seventh-animation.component.html',
  styleUrls: ['./seventh-animation.component.scss'],
  animations: [
    trigger('moveParent', [
      transition(':increment', [
        group([
          style({ transform: 'rotate(0deg)' }),
          animate('2s', style({
            transform: 'rotate(360deg)'
          })),
          query('@moveChild', animateChild()),
        ])

      ])
    ]),
    trigger('moveChild', [
      transition(':increment', [
        style({ transform: 'rotate(0deg)' }),
        animate('2s', style({
          transform: 'rotate(-720deg)'
        }))
      ])
    ])
  ]
})
export class SeventhAnimationComponent implements OnInit {

  state = 0
  buttonDisabled = false

  constructor() { }

  ngOnInit(): void {
  }


  run() {
    this.state++
  }

}
