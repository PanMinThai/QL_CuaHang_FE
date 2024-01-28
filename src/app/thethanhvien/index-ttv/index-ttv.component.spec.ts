import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexTTVComponent } from './index-ttv.component';

describe('IndexTTVComponent', () => {
  let component: IndexTTVComponent;
  let fixture: ComponentFixture<IndexTTVComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexTTVComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndexTTVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
