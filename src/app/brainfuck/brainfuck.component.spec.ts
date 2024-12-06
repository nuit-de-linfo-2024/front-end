import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrainfuckComponent } from './brainfuck.component';

describe('BrainfuckComponent', () => {
  let component: BrainfuckComponent;
  let fixture: ComponentFixture<BrainfuckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrainfuckComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrainfuckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
