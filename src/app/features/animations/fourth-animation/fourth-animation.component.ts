import { animate, group, query, sequence, style, transition, trigger } from '@angular/animations'
import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-fourth-animation',
  templateUrl: './fourth-animation.component.html',
  styleUrls: ['./fourth-animation.component.scss'],
  animations: [
    trigger('move', [
      transition('* => 0', []),
      transition('* => *', [
        sequence([
          query('.point', [
            group([
              animate('2s', style({
                left: '100%'
              })),
              animate('1s', style({
                borderRadius: '0px'
              })),
              animate('1s 1s', style({
                width: '40px',
                height: '40px',
              }))
            ])
          ]),
          query('.point', [
            animate('1s', style({
              top: '100%'
            }))
          ]),
          query('.point', [
            style({
              transform: 'translate(-50%, -50%) rotate(0deg)'
            }),
            group([
              animate('2s', style({
                left: '0%'
              })),
              animate('2s', style({
                transform: 'translate(-50%, -50%) rotate(-720deg)'
              }))
            ])

          ]),
          query('.point', [
            group([
              animate('1s', style({
                top: '0%'
              })),
              animate('0.5s', style({
                borderRadius: '10px'
              })),
              animate('.5s .5s', style({
                width: '10px',
                height: '10px',
              }))
            ])

          ])
        ])

      ]),
      transition('move => *', [])
    ])
  ]
})
export class FourthAnimationComponent implements OnInit {

  state = 0
  buttonDisabled = false

  constructor() { }

  ngOnInit(): void {
  }


  click() {
    this.state++
  }

}
