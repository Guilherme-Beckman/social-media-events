import { Component } from '@angular/core';
import { DefaultLayoutPageLoginRegisterComponent } from '../../components/default-layout-page-login-register/default-layout-page-login-register.component';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [DefaultLayoutPageLoginRegisterComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

}
