import { Component, OnChanges, OnInit } from '@angular/core'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit, OnChanges {

  constructor() { }

  ngOnInit(): void {
  }


  ngOnChanges(): void {
    console.log('=== User Componet: OnChanges')
  }

  ngDoCheck(): void {
    // console.log('=== User Component: Do Check')
  }

}
