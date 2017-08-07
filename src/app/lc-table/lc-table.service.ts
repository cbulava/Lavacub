import { Injectable } from '@angular/core';

@Injectable()
export class LCTableService {
    //Can sort on one level (simple) or 2 or more levels (complex) ex: obj of an obj of an obj
    private data: Array<any>;
    private objectParamStrings: string[];
    private isComplexData: boolean = false;

    constructor() {
        this.data = new Array<Object>();
     }

     public setData(data: Array<Object>){
         this.data = data;
     }

     public getData(): Array<Object> {
         return this.data;
     }

     public setComplexParamString(objectParamStrings: string[]) {
         this.objectParamStrings = objectParamStrings;
     }

     private getBaseObject(obj: any): any{
         let retObj: any = obj;
         for(let i = 0; i < this.objectParamStrings.length - 1; i++){
             retObj = retObj[this.objectParamStrings[i]];
         }
         return retObj
     }

     //change so complexParams is just an array of Params, the last param being the param to compare against
     public sort(data: Array<any>, direction: string, params: string[]){
         if(params.length == 0){
            return;
         }
         this.data = data;

         if(direction == "asc"){
             this.sortAsc(params);
         }else if(direction == "dsc"){
             this.sortDsc(params);
         }
     }

     public sortAsc(params: string[]): Array<any>{
        let param: string = params[params.length - 1];
        this.objectParamStrings = params;
        this.data.sort((a, b) => {
                if ((<any>this.getBaseObject(a))[param] && (<any>this.getBaseObject(b))[param]) {
                    if (this.isNumber((<any>this.getBaseObject(a))[param])) {
                        return Number((<any>this.getBaseObject(a))[param]) - Number((<any>this.getBaseObject(b))[param]);
                    } else {
                        if ((<string>(<any>this.getBaseObject(a))[param]).toString().toLowerCase() > (<string>(<any>this.getBaseObject(b))[param]).toString().toLowerCase())
                            return 1;
                        else if ((<string>(<any>this.getBaseObject(a))[param]).toString().toLowerCase() < (<string>(<any>this.getBaseObject(b))[param]).toString().toLowerCase())
                            return -1;
                        else
                            return 0;
                    }
                }
                return 0;
            });
         return this.data;
     }

     public sortDsc(params: string[]): Array<any> {
        let param: string = params[params.length - 1];
                this.objectParamStrings = params;
        this.data.sort((a, b) => {
            if ((<any>this.getBaseObject(a))[param] && (<any>this.getBaseObject(b))[param]) {
                if (this.isNumber((<any>this.getBaseObject(a))[param])) {
                    return Number((<any>this.getBaseObject(b))[param]) - Number((<any>this.getBaseObject(a))[param]);
                } else {
                    if ((<string>(<any>this.getBaseObject(b))[param]).toString().toLowerCase() > (<string>(<any>this.getBaseObject(a))[param]).toString().toLowerCase())
                        return 1;
                    else if ((<string>(<any>this.getBaseObject(b))[param]).toString().toLowerCase() < (<string>(<any>this.getBaseObject(a))[param]).toString().toLowerCase())
                        return -1;
                    else
                        return 0;
                }
            }
            return 0;
        });
        return this.data;
     }

     public filter(param: string, filter: string) {

     }

     public filterMultiple(param: string[], filter: string) {

     }

     private isNumber(obj: any) { return !isNaN(parseFloat(obj)) }
}