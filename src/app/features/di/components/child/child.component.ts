import { Component, OnInit } from '@angular/core'
import { AnimalService } from '../../services/animal.service'
import { EmojiService } from '../../services/emoji.service'

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
  providers: [
    // {
    //   provide: AnimalService,
    //   useValue: { kind: 'Dog' }
    // },
  ],
  viewProviders: [
    {
      provide: AnimalService,
      useValue: { kind: 'Child - Cat' }
    },
  ]
})
export class ChildComponent implements OnInit {


  constructor(
    public animals: AnimalService,
    public emojis: EmojiService
  ) { }

  ngOnInit(): void { }


}
