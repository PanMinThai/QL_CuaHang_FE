import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhieuchiComponent } from './phieuchi.component';

describe('PhieuchiComponent', () => {
  let component: PhieuchiComponent;
  let fixture: ComponentFixture<PhieuchiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhieuchiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhieuchiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
