import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestsModalComponent } from './guests-modal.component';

describe('GuestsModalComponent', () => {
  let component: GuestsModalComponent;
  let fixture: ComponentFixture<GuestsModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GuestsModalComponent]
    });
    fixture = TestBed.createComponent(GuestsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
