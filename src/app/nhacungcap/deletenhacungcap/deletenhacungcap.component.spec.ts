import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletenhacungcapComponent } from './deletenhacungcap.component';

describe('DeletenhacungcapComponent', () => {
  let component: DeletenhacungcapComponent;
  let fixture: ComponentFixture<DeletenhacungcapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletenhacungcapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeletenhacungcapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
