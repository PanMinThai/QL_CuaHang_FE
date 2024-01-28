import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteTTVComponent } from './delete-ttv.component';

describe('DeleteTTVComponent', () => {
  let component: DeleteTTVComponent;
  let fixture: ComponentFixture<DeleteTTVComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteTTVComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteTTVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
