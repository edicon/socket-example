import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MbmInfoComponent } from './mbm-info.component';

describe('DeviceInfoComponent', () => {
  let component: MbmInfoComponent;
  let fixture: ComponentFixture<MbmInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MbmInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MbmInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
