import { Component, Host, OnInit, Optional, Self, SkipSelf } from '@angular/core'
import { AnimalService } from '../../services/animal.service'
import { EmojiService } from '../../services/emoji.service'

@Component({
  selector: 'app-grandchild',
  templateUrl: './grandchild.component.html',
  styleUrls: ['./grandchild.component.scss'],
  providers: [
    {
      provide: AnimalService,
      useValue: { kind: 'GrandChild - Dog' }
    },
    // {
    //   provide: EmojiService,
    //   useValue: { kind: 'GrandChild - Happy' }
    // }
  ],
  viewProviders: [
    // {
    //   provide: AnimalService,
    //   useValue: { kind: 'GrandChild - Zebra' }
    // }
  ]
})
export class GrandchildComponent implements OnInit {


  constructor(
    @Host() public animals: AnimalService,
    public emojis: EmojiService
  ) { }

  animal?: string
  emoji?: string

  ngOnInit(): void {

  }


}
