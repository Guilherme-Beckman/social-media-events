import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-default-layout-page-login-register',
  standalone: true,
  imports: [],
  templateUrl: './default-layout-page-login-register.component.html',
  styleUrl: './default-layout-page-login-register.component.css'
})
export class DefaultLayoutPageLoginRegisterComponent {
  @Input() title: string ="";
  @Input() label1: string = "";
  @Input() label2: string = "";
  @Input() underLineText: string = "";
  @Input() primaryButtonText: string = "";
  @Input() h4Text: string = "";
  @Input() h4TextSpan: string = "";

  isPasswordVisible: boolean = false;
  password: string ='';
  tooglePasswordVisibility(){
    this.isPasswordVisible = !this.isPasswordVisible;
  }
}
