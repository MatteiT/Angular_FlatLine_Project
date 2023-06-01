import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { slideInUpAnimation } from 'src/animation';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { MainComponent } from './pages/main/main.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ErrorComponent } from './global/layout/error/error.component';
import { Error404Component } from './global/layout/error404/error404.component';


export const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'main', component: MainComponent,pathMatch: 'full' },
  { path: 'about', component: AboutComponent, pathMatch: 'full' },
  { path: 'contact', component: ContactComponent, pathMatch: 'full' },
  { path: 'error', component: ErrorComponent, pathMatch: 'full' },
  { path: '**', component: Error404Component, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [],
  // animations: [slideInUpAnimation],

})
export class AppRoutingModule { 
  
}
