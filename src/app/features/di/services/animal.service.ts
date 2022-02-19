import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  kind: string = "Default: Monkey"

  constructor() { }
}
