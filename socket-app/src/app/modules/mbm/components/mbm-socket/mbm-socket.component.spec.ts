import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MbmSocketComponent } from './mbm-socket.component';

describe('MbmSocketComponent', () => {
  let component: MbmSocketComponent;
  let fixture: ComponentFixture<MbmSocketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MbmSocketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MbmSocketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
