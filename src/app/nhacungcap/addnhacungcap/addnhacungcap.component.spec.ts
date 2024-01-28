import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddnhacungcapComponent } from './addnhacungcap.component';

describe('AddnhacungcapComponent', () => {
  let component: AddnhacungcapComponent;
  let fixture: ComponentFixture<AddnhacungcapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddnhacungcapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddnhacungcapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
