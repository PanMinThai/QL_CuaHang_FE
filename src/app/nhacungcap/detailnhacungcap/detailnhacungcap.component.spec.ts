import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailnhacungcapComponent } from './detailnhacungcap.component';

describe('DetailnhacungcapComponent', () => {
  let component: DetailnhacungcapComponent;
  let fixture: ComponentFixture<DetailnhacungcapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailnhacungcapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailnhacungcapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
