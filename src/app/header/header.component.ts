import { Component } from '@angular/core';
import { Router, ActivatedRoute  } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor( private router: Router, private route: ActivatedRoute) { }

  showComponent: boolean = false;
  

  ngOnInit() {
    this.route.params.subscribe(params => {
      // Access the URL parameters and determine whether to show or hide the component
      // For example, if your URL contains a parameter named 'showComponent' with a value of 'true'
      this.showComponent = params['showComponent'] === 'true';
    });
  }
  
}
