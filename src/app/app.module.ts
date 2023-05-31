import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './global/layout/header/header.component';
import { FooterComponent } from './global/layout/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MainComponent } from './pages/main/main.component';
import { ErrorComponent } from './global/layout/error/error.component';
import { AboutComponent } from './pages/about/about.component';
import { Error404Component } from './global/layout/error404/error404.component';
import { ContactComponent } from './pages/contact/contact.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    MainComponent,
    ErrorComponent,
    AboutComponent,
    Error404Component,
    ContactComponent,
    NavbarComponent,
    DashboardComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

}

