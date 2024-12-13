import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Reydon-admin';
  constructor(private router:Router){}


  isLoginPage():boolean{
    return this.router.url==="/login";
  }
}
