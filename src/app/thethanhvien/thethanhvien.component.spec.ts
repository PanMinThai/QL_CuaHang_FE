import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThethanhvienComponent } from './thethanhvien.component';

describe('ThethanhvienComponent', () => {
  let component: ThethanhvienComponent;
  let fixture: ComponentFixture<ThethanhvienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThethanhvienComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThethanhvienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
