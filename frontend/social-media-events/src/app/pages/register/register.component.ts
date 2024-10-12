import { Component } from '@angular/core';
import { DefaultLayoutPageLoginRegisterComponent } from '../../components/default-layout-page-login-register/default-layout-page-login-register.component';
import { ProguessStepsComponent } from '../../components/proguess-steps/proguess-steps.component';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ProguessStepsComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

}
