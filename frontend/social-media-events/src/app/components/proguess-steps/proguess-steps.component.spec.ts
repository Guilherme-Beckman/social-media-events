import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProguessStepsComponent } from './proguess-steps.component';

describe('ProguessStepsComponent', () => {
  let component: ProguessStepsComponent;
  let fixture: ComponentFixture<ProguessStepsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProguessStepsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProguessStepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
