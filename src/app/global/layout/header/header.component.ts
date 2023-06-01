import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { APP_ROUTES } from 'src/routes';
import { ROUTES } from 'src/routes';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private router: Router) {}

  public readonly ROUTES = ROUTES;
  
  private _appRoutes: string[] = [
    APP_ROUTES.main,
    APP_ROUTES.about,
    APP_ROUTES.contact,
    APP_ROUTES.notFound,
  ];

  user = {
    firstName: 'John',
    lastName: 'Doe'
  };
    

  ngOnInit() {
console.log(this.router.url);
  }

  public get hasHeader(): boolean {
    return this._appRoutes.includes(this.router.url);
  }

  }
