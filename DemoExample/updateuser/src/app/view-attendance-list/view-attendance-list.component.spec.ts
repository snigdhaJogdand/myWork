import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAttendanceListComponent } from './view-attendance-list.component';

describe('ViewAttendanceListComponent', () => {
  let component: ViewAttendanceListComponent;
  let fixture: ComponentFixture<ViewAttendanceListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAttendanceListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAttendanceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
