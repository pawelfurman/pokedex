import { Component, EventEmitter, OnInit, Output } from '@angular/core'

@Component({
  selector: 'app-list-filter',
  templateUrl: './list-filter.component.html',
  styleUrls: ['./list-filter.component.scss']
})
export class ListFilterComponent implements OnInit {

  @Output() filter: EventEmitter<string> = new EventEmitter<string>()

  constructor() { }

  value: string = ''

  ngOnInit(): void {
  }

  onInput(event: any) {
    this.filter.emit(event.target.value.toLowerCase())
  }

}
