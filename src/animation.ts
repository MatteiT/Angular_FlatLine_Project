import { trigger, transition, style, animate } from '@angular/animations';

export const slideInUpAnimation = 
  trigger('routeAnimation', [
    transition(':enter', [
      style({ transform: 'translateY(100%)', opacity: 0 }),
      animate('0.5s cubic-bezier(0.35, 0, 0.25, 1)', style({ transform: 'translateY(0)', opacity: 1}))
    ]),
    transition(':leave', [
      style({ transform: 'translateY(0)', opacity: 1 }),
      animate('0.5s cubic-bezier(0.35, 0, 0.25, 1)', style({ transform: 'translateY(100%)', opacity: 0}))
    ])
  ]);