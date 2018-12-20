import {
    trigger, animateChild, group,
    transition, animate, style, query, state
  } from '@angular/animations';
  
  
  // Routable animations
  export const slideInAnimation =
    trigger('routeAnimations', [
    state('in', style({ transform: 'translateX(0)' })),
    
    
    transition('* => vehicle', [
      style({ transform: 'translateY(100%)' }),
      animate('500ms ease-out')
    ]),
    transition('vehicle => *', [
      style({ transform: 'translateX(-100%)' }),
      animate('500ms ease-out')
    ])
  ]);