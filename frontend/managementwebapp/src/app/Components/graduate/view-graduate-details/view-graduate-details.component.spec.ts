import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewGraduateDetailsComponent } from './view-graduate-details.component';

describe('ViewGraduateDetailsComponent', () => {
  let component: ViewGraduateDetailsComponent;
  let fixture: ComponentFixture<ViewGraduateDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewGraduateDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewGraduateDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
