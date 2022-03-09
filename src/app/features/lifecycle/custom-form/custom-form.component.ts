import { AfterViewInit, Component, ElementRef, OnInit, TemplateRef, ViewChild } from '@angular/core'
import { Header } from 'primeng/api'

@Component({
  selector: 'app-custom-form',
  templateUrl: './custom-form.component.html',
  styleUrls: ['./custom-form.component.scss']
})
export class CustomFormComponent implements OnInit, AfterViewInit {

  @ViewChild('testTemplate') template!: TemplateRef<{}>

  constructor() { }

  ngOnInit(): void {
    let x: Header
  }

  ngAfterViewInit() {
    console.log(this.template.elementRef)
  }

}
