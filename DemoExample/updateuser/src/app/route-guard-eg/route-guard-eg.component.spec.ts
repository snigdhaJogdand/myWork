import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteGuardEgComponent } from './route-guard-eg.component';

describe('RouteGuardEgComponent', () => {
  let component: RouteGuardEgComponent;
  let fixture: ComponentFixture<RouteGuardEgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouteGuardEgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteGuardEgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
