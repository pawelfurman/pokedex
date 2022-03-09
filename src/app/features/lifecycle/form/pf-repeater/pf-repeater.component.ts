import { Component, OnInit } from '@angular/core'
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-pf-repeater',
  templateUrl: './pf-repeater.component.html',
  styleUrls: ['./pf-repeater.component.scss']
})
export class PfRepeaterComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  public form!: FormGroup


  ngOnInit(): void {
    this.form = this.fb.group({
      users: this.fb.array([])
    })

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
