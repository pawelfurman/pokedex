import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { PageLifecycleComponent } from './page-lifecycle/page-lifecycle.component'
import { CardModule } from 'primeng/card'
import { AddressComponent } from './address/address.component'
import { ButtonModule } from 'primeng/button'
import { UserComponent } from './user/user.component'
import { CustomFormComponent } from './custom-form/custom-form.component'
import { PfTabsPanelComponent } from './pf-tabs-panel/pf-tabs-panel.component'
import { PfTabComponent } from './pf-tab/pf-tab.component'
import { TabsComponent } from './tabs/tabs.component'
import { PfRepeaterComponent } from './form/pf-repeater/pf-repeater.component'
import { ReactiveFormsModule } from '@angular/forms'
import { PfRepeaterAccessorComponent } from './form/pf-repeater-accessor/pf-repeater-accessor.component'
import { InputTextModule } from 'primeng/inputtext'


@NgModule({
  declarations: [
    PageLifecycleComponent,
    AddressComponent,
    UserComponent,
    CustomFormComponent,
    PfTabsPanelComponent,
    PfTabComponent,
    TabsComponent,
    PfRepeaterComponent,
    PfRepeaterAccessorComponent
  ],
  imports: [
    CommonModule,
    CardModule,
    ButtonModule,
    ReactiveFormsModule,
    InputTextModule
  ]
})
export class LifecycleModule { }
