import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isSidebarCollapsed: boolean;
  
  constructor(private router: Router) {
    this.isSidebarCollapsed = false;
  }
  
  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd && window.innerWidth < 992) {
        this.isSidebarCollapsed = true; // Automatically collapse sidebar on route change for mobile devices
      }
    });
  }
  
  toggleSidebar() {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
  }
}
