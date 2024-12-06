import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyZoomComponent } from './body-zoom.component';

describe('BodyZoomComponent', () => {
  let component: BodyZoomComponent;
  let fixture: ComponentFixture<BodyZoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BodyZoomComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BodyZoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
