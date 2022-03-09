import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PfTabComponent } from './pf-tab.component';

describe('PfTabComponent', () => {
  let component: PfTabComponent;
  let fixture: ComponentFixture<PfTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PfTabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PfTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
