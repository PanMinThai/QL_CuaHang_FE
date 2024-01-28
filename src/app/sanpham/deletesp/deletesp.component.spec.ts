import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletespComponent } from './deletesp.component';

describe('DeletespComponent', () => {
  let component: DeletespComponent;
  let fixture: ComponentFixture<DeletespComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletespComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeletespComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
