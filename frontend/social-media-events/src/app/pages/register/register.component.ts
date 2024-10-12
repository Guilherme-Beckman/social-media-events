import { Component, Input, Output } from '@angular/core';
import { ProguessStepsComponent } from '../../components/proguess-steps/proguess-steps.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ProguessStepsComponent, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  currentStep=2;
}
