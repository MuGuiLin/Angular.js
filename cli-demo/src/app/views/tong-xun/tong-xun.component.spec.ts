import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TongXunComponent } from './tong-xun.component';

describe('TongXunComponent', () => {
  let component: TongXunComponent;
  let fixture: ComponentFixture<TongXunComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TongXunComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TongXunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
