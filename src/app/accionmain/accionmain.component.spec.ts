import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccionmainComponent } from './accionmain.component';

describe('AccionmainComponent', () => {
  let component: AccionmainComponent;
  let fixture: ComponentFixture<AccionmainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccionmainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccionmainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
