import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageToLinkComponent } from './image-to-link.component';

describe('ImageToLinkComponent', () => {
  let component: ImageToLinkComponent;
  let fixture: ComponentFixture<ImageToLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ImageToLinkComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageToLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
