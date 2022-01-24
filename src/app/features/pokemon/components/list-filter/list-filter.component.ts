import { Component, EventEmitter, OnInit, Output } from '@angular/core'


/**
 * Displays simple input field taken from PrimeNg library.
 * Emits event after any input value change.
 */
@Component({
  selector: 'app-list-filter',
  templateUrl: './list-filter.component.html',
  styleUrls: ['./list-filter.component.scss']
})
export class ListFilterComponent implements OnInit {

  /**
   * Emits current state of input field, in lowercase, on input any change.
   */
  @Output() filter: EventEmitter<string> = new EventEmitter<string>()

  constructor() { }

  value: string = ''

  ngOnInit(): void {
  }

  onInput(event: any) {
    this.filter.emit(event.target.value.toLowerCase())
  }

}
