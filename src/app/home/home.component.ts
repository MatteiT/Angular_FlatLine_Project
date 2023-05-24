import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  clickMessage = '';

  user = {
    firstName: 'John',
    lastName: 'Doe'
  };

  onClickMe() {
    this.clickMessage = 'Welcome to the App!';
  }


}
