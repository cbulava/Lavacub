import { 
    Component,
    trigger,
    state,
    style,
    transition,
    animate,
    keyframes
 } from '@angular/core';
export const slideInOutMenuAnimation =
    // trigger name for attaching this animation to an element using the [@triggerName] syntax
    trigger('slideInOutMenuAnimation', [
 
        state('inactive', style({
                position: 'relative',
                left: '-200px'
            })),
        state('active', style({
                position: 'relative',
                left: '0'
            })),
        transition('inactive => active', animate('400ms ease-out')),
        transition('active => inactive', animate('400ms ease-in'))
    ]);

    export const slideInOutMainAnimation =
    // trigger name for attaching this animation to an element using the [@triggerName] syntax
    trigger('slideInOutMainAnimation', [
 
        state('inactive', style({
                position: 'relative',
                left: '0px'
            })),
        state('active', style({
                position: 'relative',
                left: '0px'
            })),
        transition('inactive => active', animate('400ms ease-out')),
        transition('active => inactive', animate('400ms ease-in'))
    ]);

export const rotateAnimation = 

    trigger('rotateAnimation', [
        state('inactive', style({ transform: 'rotate(0deg)' })),
        state('active', style({transform: 'rotate(180deg)' })),
        transition('inactive => active',  animate('400ms ease-out')),
        transition('active => inactive', animate('400ms ease-in'))
    ]);