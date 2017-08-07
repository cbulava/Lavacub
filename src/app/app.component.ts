import { Component } from '@angular/core';

@Component({ 
  moduleId: module.id,
  selector: 'app-container',
  templateUrl: `app.component.html`
})
export class AppComponent {
  public sideMenuState: string = "active";

  constructor() {

  }

  toggleMenu(state: string){
    this.sideMenuState = state;
  }
  
}