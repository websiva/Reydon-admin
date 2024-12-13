import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private router:Router){

  }

  username: string = ''; password: string = '';

  login() {
    console.log('Username:', this.username);
    console.log('Password:', this.password);

    this.router.navigate(['/home']);
  }
}