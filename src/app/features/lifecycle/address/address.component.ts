import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ContentChild, DoCheck, ElementRef, Input, OnChanges, OnDestroy, OnInit, QueryList, SimpleChange, SimpleChanges, ViewChild, ViewChildren } from '@angular/core'


type MySimpleChanges<T extends string[]> = {
  [P in T[number]]?: SimpleChange
}

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit, DoCheck, OnChanges, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  @Input() country?: string

  dates: Date[] = [new Date(), new Date()]

  @ContentChild('street', { static: true }) contentStreet!: ElementRef
  @ContentChild('city') contentCity!: ElementRef
  @ViewChild('title') viewTitle!: ElementRef

  @ViewChildren('dateItem') dateItem!: QueryList<ElementRef>

  constructor() {
  }

  ngOnInit(): void {
    console.log("=== Address Component: OnInit", { ...this.contentStreet })


  }


  ngOnChanges(changes: MySimpleChanges<['country']>): void {
    console.log('=== Address Component: On Changes', changes.country?.isFirstChange())
  }


  ngDoCheck() {
    console.log('=== Address Component: Do Check')
  }

  ngAfterContentInit(): void {
    console.log('=== Address Component: After Content Init')
  }

  ngAfterContentChecked(): void {
    console.log('=== Address Component: After Content Checked')
  }

  ngAfterViewInit(): void {
    console.log('=== Address Component: After View Init')
    console.log('viewChildren', this.dateItem)
    this.dateItem.changes.subscribe(element => {
      console.log('element', element)
    })
  }
  ngAfterViewChecked(): void {
    console.log('=== Address Component: After View Checked')
  }
  ngOnDestroy(): void {
    console.log('=== Address Component: After Content Checked')
  }



  simpleClickEvent(): void {
    console.log('Address simple click event')
  }


  addNewDate(): void {
    this.dates = [new Date(), ...this.dates]
  }
}
