import { AfterContentInit, Component, ContentChildren, EventEmitter, Input, OnInit, Output, QueryList, TemplateRef } from '@angular/core'
import { ControlValueAccessor, FormArray, FormBuilder, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms'

@Component({
  selector: 'app-pf-repeater-accessor',
  templateUrl: './pf-repeater-accessor.component.html',
  styleUrls: ['./pf-repeater-accessor.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: PfRepeaterAccessorComponent
    }
  ]
})
export class PfRepeaterAccessorComponent implements AfterContentInit {

  constructor(private fb: FormBuilder) { }

  @Input() template!: TemplateRef<{ groupNumber: number }>
  @Input() formArray!: FormArray

  @Output() groupCreator: EventEmitter<void> = new EventEmitter();


  @ContentChildren('inputs') inputs!: QueryList<any>


  ngAfterContentInit(): void {
    console.log(this.template)

  }

  addRow() {
    this.groupCreator.emit()

  }

  removeRow(idx: number) {
    this.formArray.removeAt(idx)
  }

}
