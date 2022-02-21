import { animate, query, sequence, stagger, style, transition, trigger } from '@angular/animations'
import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-fifth-animation',
  templateUrl: './fifth-animation.component.html',
  styleUrls: ['./fifth-animation.component.scss'],
  animations: [
    trigger('list', [
      transition(':increment', [

        query(':enter', [
          style({
            opacity: 0,
            transform: 'translateX(30px)',
            backgroundColor: '#eee'
          }),
          stagger('.1s', [
            sequence([
              animate('.3s', style({
                opacity: 1,
                transform: 'translateX(0px)'
              })),
              animate('.3s', style({
                backgroundColor: '#ddd'
              }))
            ]),

          ]),

        ])
      ])

    ])
  ]
})
export class FifthAnimationComponent implements OnInit {

  items: any[] = []

  constructor() { }

  ngOnInit(): void {
  }

  addItems(number: number) {
    for (let x = 0; x < number; x++) {
      const size = this.items.length
      this.items.push(size + 1)
    }
  }
}
