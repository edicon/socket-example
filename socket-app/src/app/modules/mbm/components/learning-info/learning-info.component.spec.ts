import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningInfoComponent } from './learning-info.component';

describe('LearningInfoComponent', () => {
  let component: LearningInfoComponent;
  let fixture: ComponentFixture<LearningInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearningInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearningInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
