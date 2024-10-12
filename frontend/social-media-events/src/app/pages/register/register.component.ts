import { Component } from '@angular/core';
import { ProguessStepsComponent } from '../../components/proguess-steps/proguess-steps.component';
import { CommonModule } from '@angular/common';
import { GenderSelectComponent } from '../../components/gender-select/gender-select.component';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ProguessStepsComponent, CommonModule, GenderSelectComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  currentStep=0;
}
