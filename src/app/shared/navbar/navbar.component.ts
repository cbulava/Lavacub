import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { rotateAnimation } from '../animations/animations.component';

@Component({
    moduleId: module.id,
    selector: 'navbar',
    templateUrl: 'navbar.component.html',
    styleUrls: ['navbar.css'],
    animations: [rotateAnimation,],
    host: { '[@rotateAnimation]': '' }
})


export class NavbarComponent implements OnInit {
    private active: Array<boolean>;
    private urls: Array<string> = [ "home", "feature", "image-gallery"];
    
    @Input('showMenu') showMenu: boolean = true;

    private menuState: string = "active";
   @Output() onMenuStateChange= new EventEmitter<string>();

    constructor() {
        this.active = new Array<boolean>(3);
        this.active = [false, false, false];
     }

    ngOnInit() { 
        this.showMenu = false;
        for(let i = 0; i < this.urls.length; i++){
            if(window.document.URL.includes(this.urls[i])){
                this.active[i] = true;
                if(i == 2)
                    this.showMenu = true;
            }
        }
    }

    setActive(index: number) {
        for(let i = 0; i < this.active.length; i++){
            if(i == index)
                this.active[i] = true;
            else
                this.active[i] = false;
        }
    }

    toggleMenu(){
        this.menuState = (this.menuState === 'inactive' ? 'active' : 'inactive');
        this.onMenuStateChange.emit(this.menuState);
    }

}