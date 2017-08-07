import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

export class Row {
    display1: string;
    display2: string;
    display3: string;
    display4: string;
}

@Component({
    moduleId: module.id, 
    selector: 'feature',
    templateUrl: 'feature.component.html'
})


export class FeatureComponent implements OnInit {
    myArray: Array<Row>;
    displayNames: Array<String>;
    keyNames: Array<String>;

    constructor(private apc: AppComponent) {
        this.myArray = new Array<Row>();
        this.displayNames = new Array<String>();
        this.keyNames = new Array<String>();
        this.keyNames = ["display1", 'display2', 'display3', 'display4'];
        this.displayNames = ['display 1', 'display 2', 'display 3', 'display 4']

     }

    ngOnInit() { 
        let r: Array<Row> = new Array<Row>(10);
        let j = 0;
        for(let i = 0; i < r.length; i++){
            r[i] = new Row();
            r[i].display1 = (j++).toString();
            r[i].display2 = (j++).toString();
            r[i].display3 = (j++).toString();
            r[i].display4 = (j++).toString();                                    
        }
        this.myArray = r;
    }

}