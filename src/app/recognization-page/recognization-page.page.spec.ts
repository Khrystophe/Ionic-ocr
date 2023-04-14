import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecognizationPagePage } from './recognization-page.page';

describe('RecognizationPagePage', () => {
  let component: RecognizationPagePage;
  let fixture: ComponentFixture<RecognizationPagePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RecognizationPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
