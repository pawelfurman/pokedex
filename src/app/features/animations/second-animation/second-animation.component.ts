import { animate, sequence, state, style, transition, trigger } from '@angular/animations'
import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-second-animation',
  templateUrl: './second-animation.component.html',
  styleUrls: ['./second-animation.component.scss'],
  animations: [
    trigger('screen', [

      state('screen', style({
        left: '0%',
        top: '0%',
        width: '100%',
        height: '100%',
        backgroundColor: '#ddd',
        borderRadius: 0,
        transform: 'translate(0, 0)'
      })),

      state('dot', style({
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        width: '10px',
        height: '10px',
        backgroundColor: 'red',
        borderRadius: '10px',
      })),
      transition('dot=>screen', [
        sequence([
          style({ left: '50%', top: '50%' }),
          animate('.15s', style({
            left: '0%',
            top: '0%',
            transform: 'translate(0, 0)',

          })),
          animate('.15s', style({
            width: '100%',
            height: '100%',
            backgroundColor: '#ddd',
            borderRadius: '0',
          }))
        ])
      ]),
      transition('screen=>dot', [
        style({
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
        }),
        animate('.1s 0s linear', style({

          width: '10px',
          height: '10px',
          backgroundColor: 'red',
          borderRadius: '10px',
        }))
      ]),


    ])
  ]
})
export class SecondAnimationComponent implements OnInit {

  state = 'dot'

  constructor() { }

  ngOnInit(): void {
  }


  click() {
    this.state = this.state === 'dot' ? 'screen' : 'dot'
  }

}
