import { Component} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isSidebarCollapsed : boolean = true;

  toggleSidebar() : void {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
    console.log(this.isSidebarCollapsed);
  }
}

