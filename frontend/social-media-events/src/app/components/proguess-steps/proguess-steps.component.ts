import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-proguess-steps',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './proguess-steps.component.html',
  styleUrl: './proguess-steps.component.css'
})
export class ProguessStepsComponent {
  steps = [1,2,3];
  currentStep = 0;
}
