import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexPhieuphiComponent } from './index-phieuphi.component';

describe('IndexPhieuphiComponent', () => {
  let component: IndexPhieuphiComponent;
  let fixture: ComponentFixture<IndexPhieuphiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexPhieuphiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndexPhieuphiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
