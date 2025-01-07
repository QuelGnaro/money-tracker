import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FamilyDetailPage } from './family-detail.page';

describe('FamilyDetailPage', () => {
  let component: FamilyDetailPage;
  let fixture: ComponentFixture<FamilyDetailPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FamilyDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
