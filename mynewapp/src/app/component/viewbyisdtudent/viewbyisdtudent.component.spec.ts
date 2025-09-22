import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewbyisdtudentComponent } from './viewbyisdtudent.component';

describe('ViewbyisdtudentComponent', () => {
  let component: ViewbyisdtudentComponent;
  let fixture: ComponentFixture<ViewbyisdtudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewbyisdtudentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewbyisdtudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
