import { Component, OnInit } from '@angular/core'
import { AnimalService } from '../services/animal.service'
import { EmojiService } from '../services/emoji.service'

@Component({
  templateUrl: './page-di.component.html',
  styleUrls: ['./page-di.component.scss'],
  providers: [
    {
      provide: AnimalService,
      useValue: { kind: 'page-di: Fish' }
    }
  ]
})
export class PageDiComponent implements OnInit {

  constructor(
    public animals: AnimalService,
    public emojis: EmojiService
  ) { }


  ngOnInit(): void {
  }

}
