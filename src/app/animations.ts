import {
    trigger, animateChild, group,
    transition, animate, style, query, state
  } from '@angular/animations';
  
  
  // Routable animations
  export const slideInAnimation =
    trigger('routeAnimations', [
    state('in', style({ transform: 'translateX(0)' })),
    transition('* <=> vehicle', [
      style({ transform: 'translateY(100%)' }),
      animate(300)
    ]),
    transition('vehicle => home', [
      animate(100, style({ transform: 'translateY(-100%)' }))
    ])
  ]);