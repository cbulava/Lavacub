import { Component, OnInit, Input, ChangeDetectorRef, ApplicationRef } from '@angular/core';
import { LCTableService } from './lc-table.service';

@Component({
    moduleId: module.id,
    selector: 'lc-table',   
    templateUrl: './lc-table.component.html',
    styleUrls: ['./lc-table.css'],
    providers: [LCTableService]
})
export class LCTableComponent implements OnInit {
    @Input() data: Array<any>;
    @Input() colKeyVals: Array<string>;
    @Input() colDisplayVals: Array<string>;
    @Input() width: number;
    @Input() scrollable: string = "scroll";
    @Input() height: number;
    @Input() rowsPerPage: number = 5;

    private sortDir: Array<boolean>;

    private widthToChangeTo: number;

    private pages: Array<Array<any>>;
    private currentPage: Array<any>;
    private currentPageNumber: number; //1+, subtract 1 for index
    private currentPageArray: Array<number>;
    private maxPages: number;

    constructor(private lctService: LCTableService, private cdr: ChangeDetectorRef, private appRef: ApplicationRef) {
        this.width = window.innerWidth - 100;
        this.scrollable = "scroll";
     }

    ngOnInit() { 
        // if(!this.height || !this.scrollable){
        //     this.height = 36 + 37 * this.rowsPerPage + 45;
        // }
        this.initPages();
        this.sortDir = new Array<boolean>(this.colKeyVals.length);
        for(let i = 0; i < this.sortDir.length; i++){
            this.sortDir[i] = false;
        }

        this.checkScrollable();
    }

    ngAfterViewInit(){

    }

    initPages(){
        this.maxPages =  Math.floor(this.data.length / this.rowsPerPage) + 1;
        this.pages = new Array<Array<any>>(this.maxPages);
        this.currentPageArray = Array(this.maxPages).fill(1).map((x, i)=>i+1);
        

        let c: number = 0;
        for(let i = 0; i < this.maxPages; i++){
            let a: Array<any>;
            a = this.data.slice(c, (this.rowsPerPage) * (i + 1));
            this.pages[i] = a;
            c += (this.rowsPerPage)
        }

        this.currentPage = new Array<any>();
        this.currentPage = this.pages[0];
    }

    checkScrollable() {
        if(this.height > (36 + 37 * this.rowsPerPage)){
            this.scrollable = "none";
        }
    }

    setDataSource(source: Array<Object>){
        this.data = source;
    }

    setKeyValues(values: Array<string>){
        this.colKeyVals = values;
    }

    setDisplayValues(values: Array<string>){
        this.colDisplayVals = values;
    }

    setCurrentPage(value: number){
        this.currentPageNumber = value;
        this.currentPage = this.pages[value-1]; 
    }

    getObjectValue(key: string, index: number){
        let retObj = this.currentPage[index];
        return retObj[key];
    }

    changeWidth(){
        this.width = this.widthToChangeTo;
    }

    sort(index: number) {
        if(this.sortDir[index]){
            this.lctService.sort(this.data, "asc", [this.colKeyVals[index]]);
            this.sortDir[index] = false;
        }else{
            this.lctService.sort(this.data, "dsc", [this.colKeyVals[index]]);
            this.sortDir[index] = true;
        }
    }

}