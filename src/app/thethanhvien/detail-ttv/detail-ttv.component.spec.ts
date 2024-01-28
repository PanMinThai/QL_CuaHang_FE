import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailTTVComponent } from './detail-ttv.component';

describe('DetailTTVComponent', () => {
  let component: DetailTTVComponent;
  let fixture: ComponentFixture<DetailTTVComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailTTVComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailTTVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
