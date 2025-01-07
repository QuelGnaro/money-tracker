import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AspectPage } from './aspect.page';

describe('AspectPage', () => {
  let component: AspectPage;
  let fixture: ComponentFixture<AspectPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AspectPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
