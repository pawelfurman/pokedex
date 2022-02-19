import { Injectable } from '@angular/core'
import { AnimalService } from './animal.service'

@Injectable({
  providedIn: 'root'
})
export class EmojiService {

  constructor(private animalService: AnimalService) {

    console.log("Emoji Service animal kind: ", this.animalService.kind)
  }

  name: string = "Default: Joy"
}