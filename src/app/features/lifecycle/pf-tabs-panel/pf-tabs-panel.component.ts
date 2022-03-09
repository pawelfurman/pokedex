import { AfterContentInit, Component, ContentChildren, Input, OnInit, QueryList, TemplateRef } from '@angular/core'
import { PfTabComponent } from '../pf-tab/pf-tab.component'

@Component({
  selector: 'app-pf-tabs-panel',
  templateUrl: './pf-tabs-panel.component.html',
  styleUrls: ['./pf-tabs-panel.component.scss']
})
export class PfTabsPanelComponent implements OnInit, AfterContentInit {

  @ContentChildren(PfTabComponent) tabs!: QueryList<PfTabComponent>

  @Input() buttonsTemplate?: TemplateRef<any>

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterContentInit(): void {
    console.log(this.tabs)
  }

  selectTab(tab: PfTabComponent) {
    this.tabs.forEach(t => t.active = false)
    tab.active = true
  }

}
