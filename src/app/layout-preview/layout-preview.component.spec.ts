import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutPreviewComponent } from './layout-preview.component';

describe('LayoutPreviewComponent', () => {
  let component: LayoutPreviewComponent;
  let fixture: ComponentFixture<LayoutPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LayoutPreviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayoutPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
