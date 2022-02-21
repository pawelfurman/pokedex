import { animate, query, sequence, state, style, transition, trigger } from '@angular/animations'
import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-third-animation',
  templateUrl: './third-animation.component.html',
  styleUrls: ['./third-animation.component.scss'],
  animations: [
    trigger('screen', [

      state('screen', style({
        left: '50%',
        top: '0%',
        width: '100%',
        height: '100%',
        backgroundColor: '#ddd',
        borderRadius: 0,
        transform: 'translate(-50%, 0)'
      })),

      state('dot', style({
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        width: '10px',
        height: '10px',
        backgroundColor: '#aaa',
        borderRadius: '10px',
      })),
      transition('dot=>screen', [
        query('p', style({
          opacity: 0
        })),
        sequence([
          style({ top: '50%' }),
          animate('.15s', style({

            top: '0%',
            transform: 'translate(-50%, 0)',

          })),
          animate('.15s', style({
            width: '100%',
            height: '100%',
            backgroundColor: '#ddd',
            borderRadius: '0',
          })),

          query('p', [
            style({
              transform: 'translateY(-40px)'
            }),
            animate('.1s', style({
              opacity: '1',
              transform: 'translateY(0px)'
            })),

          ])
        ])
      ]),
      transition('screen=>dot', [
        query('p', style({
          opacity: 1
        })),
        // query('p', animate('.2', style({
        //   opacity: 0
        // }))),
        sequence([

          query('p', animate('.1s', style({
            opacity: '0',
            transform: 'translateY(-40px)'
          }))),

          style({
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
          }),

          animate('.1s .1s linear', style({
            width: '10px',
            height: '10px',
            backgroundColor: '#aaa',
            borderRadius: '10px',
          }))
        ])

      ]),


    ])
  ]
})
export class ThirdAnimationComponent implements OnInit {

  state = 'dot'
  show = false
  buttonDisabled = false

  constructor() { }

  ngOnInit(): void {
  }


  click() {
    this.state = this.state === 'dot' ? 'screen' : 'dot'
    this.show = this.state === 'screen'
  }

}
