import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StateCarouselComponent } from './state-carousel.component';

describe('StateCarouselComponent', () => {
  let component: StateCarouselComponent;
  let fixture: ComponentFixture<StateCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StateCarouselComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StateCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
