import { Component, OnInit } from '@angular/core'

@Component({
  templateUrl: './page-lifecycle.component.html',
  styleUrls: ['./page-lifecycle.component.scss']
})
export class PageLifecycleComponent implements OnInit {

  country: string = 'Poland'

  constructor() { }

  ngOnInit(): void {
  }

  simpleClickEvent(): void {
    this.country = 'UK'
  }



  ngDoCheck() {
    // console.log('=== Page Lifccle Component: Do Check')
  }



}
