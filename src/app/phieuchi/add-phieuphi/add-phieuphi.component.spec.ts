import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPhieuphiComponent } from './add-phieuphi.component';

describe('AddPhieuphiComponent', () => {
  let component: AddPhieuphiComponent;
  let fixture: ComponentFixture<AddPhieuphiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPhieuphiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddPhieuphiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
