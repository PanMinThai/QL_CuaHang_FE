import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexnhacungcapComponent } from './indexnhacungcap.component';

describe('IndexnhacungcapComponent', () => {
  let component: IndexnhacungcapComponent;
  let fixture: ComponentFixture<IndexnhacungcapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexnhacungcapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndexnhacungcapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
