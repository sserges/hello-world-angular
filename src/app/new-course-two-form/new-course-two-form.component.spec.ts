import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCourseTwoFormComponent } from './new-course-two-form.component';

describe('NewCourseTwoFormComponent', () => {
  let component: NewCourseTwoFormComponent;
  let fixture: ComponentFixture<NewCourseTwoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewCourseTwoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCourseTwoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
