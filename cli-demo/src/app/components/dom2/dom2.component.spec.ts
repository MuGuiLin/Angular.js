import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Dom2Component } from './dom2.component';

describe('Dom2Component', () => {
  let component: Dom2Component;
  let fixture: ComponentFixture<Dom2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dom2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Dom2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
