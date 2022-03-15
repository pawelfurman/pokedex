import { Component, OnInit } from '@angular/core'
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms'




export declare class FormGroupValue<T> extends FormGroup {
  value: T
  setValue(value: Partial<T>,
    options?: {
      onlySelf?: boolean
      emitEvent?: boolean
    }): void

  patchValue(value: Partial<T>, options?: {
    onlySelf?: boolean
    emitEvent?: boolean
    emitModelToViewChange?: boolean
    emitViewToModelChange?: boolean
  }): void
}

type RecursivePartial<T> = {
  [P in keyof T]?: T[P] extends object ? RecursivePartial<T[P]> : T[P]
}


@Component({
  selector: 'app-pf-repeater',
  templateUrl: './pf-repeater.component.html',
  styleUrls: ['./pf-repeater.component.scss']
})
export class PfRepeaterComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  public form!: FormGroupValue<RecursivePartial<{ users: { firstName: string, lastName: string, age: number } }>>


  ngOnInit(): void {
    this.form = this.fb.group({
      users: this.fb.array([])
    })

    this.form.setValue({ users: { firstName: '' } })

  }

  get users(): FormArray {
    return this.form.controls['users'] as FormArray
  }


  sendForm() {
    console.log(this.form)
    console.log(this.form.value)
  }

  createGroup() {
    this.users.push(this.fb.group({
      firstName: ['', Validators.required],
      secondName: ['', Validators.required],
      age: ['', Validators.required]
    }))
  }
}
