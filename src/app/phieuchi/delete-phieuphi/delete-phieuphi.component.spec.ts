import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletePhieuphiComponent } from './delete-phieuphi.component';

describe('DeletePhieuphiComponent', () => {
  let component: DeletePhieuphiComponent;
  let fixture: ComponentFixture<DeletePhieuphiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletePhieuphiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeletePhieuphiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
