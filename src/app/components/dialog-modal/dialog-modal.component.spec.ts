import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DialogModalComponent } from './dialog-modal.component';

describe('DialogModalComponent', () => {
  let component: DialogModalComponent;
  let fixture: ComponentFixture<DialogModalComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [DialogModalComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DialogModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
