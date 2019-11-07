import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MbmComponent } from './mbm.component';

describe('MbmComponent', () => {
  let component: MbmComponent;
  let fixture: ComponentFixture<MbmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MbmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MbmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
