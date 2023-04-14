import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PickerPagePage } from './picker-page.page';

describe('PickerPagePage', () => {
  let component: PickerPagePage;
  let fixture: ComponentFixture<PickerPagePage>;

  beforeEach(async () => {
    fixture = TestBed.createComponent(PickerPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
