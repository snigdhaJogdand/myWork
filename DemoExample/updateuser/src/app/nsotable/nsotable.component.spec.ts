import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NsotableComponent } from './nsotable.component';

describe('NsotableComponent', () => {
  let component: NsotableComponent;
  let fixture: ComponentFixture<NsotableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NsotableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NsotableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
