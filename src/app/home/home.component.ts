import { Component, OnInit } from '@angular/core';

import { DataService } from '../shared/data.service';
import { AppComponent } from '../app.component';

@Component({
    moduleId: module.id,
    selector: 'home',
    templateUrl: 'home.component.html'
})
export class HomeComponent implements OnInit {
    
    input: string;
    functionNum: number;
    functionNumbers: Array<number>;
    functions: Array<Function>;

    constructor(private apc: AppComponent) { 
        this.functionNumbers = new Array<number>();
        this.functions = new Array<Function>();
        this.functionNumbers = [0, 1, 2, 3, 4, 5, 6, 7];
        this.functions.push(this.function1, this.function2)
    }

    ngOnInit() { 
        
    }

    runScript() {
        this.functions[this.functionNum](this.input);
    }

    function1(input?: string) {

    }

    function2(input?: string) {

    }
}