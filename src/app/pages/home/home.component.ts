import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderComponent } from '../../global/layout/header/header.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  user = {
    firstName: 'John',
    lastName: 'Doe'
  };

  constructor(private router: Router) { }

  ngOninit() {
  }

  redirectToMainPage() {
    this.router.navigate(['/main']);
  }

  isHomePage = true;
}
