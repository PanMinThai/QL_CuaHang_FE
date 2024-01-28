import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailPhieuphiComponent } from './detail-phieuphi.component';

describe('DetailPhieuphiComponent', () => {
  let component: DetailPhieuphiComponent;
  let fixture: ComponentFixture<DetailPhieuphiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailPhieuphiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailPhieuphiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
