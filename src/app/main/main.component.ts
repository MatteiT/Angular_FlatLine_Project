import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { slideInUpAnimation } from 'src/animation';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  isHomePage = false;

  prepareRouteTransition(outlet : any) {
    const animation = outlet.activatedRouteData['animation'] || {};
    return animation['value'] || null;
  }

}
