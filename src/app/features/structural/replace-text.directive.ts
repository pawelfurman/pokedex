import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core'

@Directive({
  selector: '[appReplaceText]'
})
export class ReplaceTextDirective implements OnInit {

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {

  }

  @Input() set appReplaceText(value: number) {
    this.viewContainer.clear()
    for (let x = 0; x < this.appReplaceText; x++) {
      this.viewContainer.createEmbeddedView(this.templateRef)
    }
  }


  ngOnInit(): void {
    console.log(this.templateRef)
    console.log(this.viewContainer)

  }


}
