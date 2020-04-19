import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DishinfoComponent } from './dishinfo.component';

describe('DishinfoComponent', () => {
  let component: DishinfoComponent;
  let fixture: ComponentFixture<DishinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DishinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DishinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
