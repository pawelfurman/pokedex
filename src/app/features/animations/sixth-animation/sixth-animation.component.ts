import { animate, group, query, stagger, style, transition, trigger } from '@angular/animations'
import { Component, OnInit } from '@angular/core'

const op = (x: number) => style({
  opacity: x
})



@Component({
  selector: 'app-sixth-animation',
  templateUrl: './sixth-animation.component.html',
  styleUrls: ['./sixth-animation.component.scss'],
  animations: [
    trigger('list', [
      transition(':increment', [
        query('li', [
          op(0)
        ]),
        group([


          group([
            query('li:nth-child(-n + 5)', [
              stagger('.05s', [
                animate('.1s', op(1))
              ])
            ]),
            query('li:nth-child(5n + 1):not(li:first-child)', [
              stagger('.05s', [
                animate('.1s .05s', op(1))
              ])
            ])
          ]),

          group([
            query('li:nth-child(-n + 10):not(li:nth-child(-n + 6))', [
              stagger('.05s', [
                animate('.1s .1s', op(1))
              ])
            ]),
            query('li:nth-child(5n + 12)', [
              stagger('.05s', [
                animate('.1s .15s', op(1))
              ])
            ])
          ]),

          group([
            query('li:nth-child(-n + 15):not(li:nth-child(-n + 12))', [
              stagger('.05s', [
                animate('.1s .2s', op(1))
              ])
            ]),
            query('li:nth-child(5n + 18)', [
              stagger('.05s', [
                animate('.1s .25s', op(1))
              ])
            ])
          ]),

          group([
            query('li:nth-child(-n + 20):not(li:nth-child(-n + 18))', [
              stagger('.05s', [
                animate('.1s .3s', op(1))
              ])
            ]),
            query('li:nth-child(24)', [
              stagger('.05s', [
                animate('.1s .35s', op(1))
              ])
            ])
          ]),
          group([
            query('li:nth-child(25)', [
              stagger('.05s', [
                animate('.1s .4s', op(1))
              ])
            ]),
          ]),

        ])
      ])
    ])
  ]
})
export class SixthAnimationComponent implements OnInit {
  items: any[] = []

  constructor() { }

  ngOnInit(): void {
  }

  addItems(number: number) {
    if (this.items.length) {
      this.items = []
      return
    }
    for (let x = 0; x < number; x++) {
      const size = this.items.length
      this.items.push(size + 1)
    }
  }
}
