import { Component } from '@angular/core';
import { DefaultLayoutPageLoginRegisterComponent } from '../../components/default-layout-page-login-register/default-layout-page-login-register.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [DefaultLayoutPageLoginRegisterComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

}
