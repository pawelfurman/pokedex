import { Component, DoCheck, Input, OnInit } from '@angular/core'

@Component({
  selector: 'app-pf-tab',
  templateUrl: './pf-tab.component.html',
  styleUrls: ['./pf-tab.component.scss']
})
export class PfTabComponent {

  @Input() title!: string
  @Input() active: boolean = false

  constructor() { }

}
