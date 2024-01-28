import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTTVComponent } from './add-ttv.component';

describe('AddTTVComponent', () => {
  let component: AddTTVComponent;
  let fixture: ComponentFixture<AddTTVComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTTVComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddTTVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
