import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { slideInUpAnimation } from 'src/animation';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { MainComponent } from './main/main.component';
import { ContactComponent } from './contact/contact.component';
import { ErrorComponent } from './error/error.component';
import { Error404Component } from './error404/error404.component';


const routes: Routes = [
  { path: '', component: HomeComponent }, // Default route
  { path: 'main', component: MainComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'error', component: ErrorComponent },
  { path: '**', component: Error404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [],
  // animations: [slideInUpAnimation],

})
export class AppRoutingModule { 
  
}
