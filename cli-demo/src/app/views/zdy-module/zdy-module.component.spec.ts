import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZdyModuleComponent } from './zdy-module.component';

describe('ZdyModuleComponent', () => {
  let component: ZdyModuleComponent;
  let fixture: ComponentFixture<ZdyModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZdyModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZdyModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
