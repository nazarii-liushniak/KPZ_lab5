import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelsModalComponent } from './hotels-modal.component';

describe('HotelsModalComponent', () => {
  let component: HotelsModalComponent;
  let fixture: ComponentFixture<HotelsModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HotelsModalComponent]
    });
    fixture = TestBed.createComponent(HotelsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
