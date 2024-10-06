import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DefaultLayoutPageLoginRegisterComponent } from "./components/default-layout-page-login-register/default-layout-page-login-register.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'social-media-events';
}
