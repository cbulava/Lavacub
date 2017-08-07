import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LCTableComponent } from './lc-table.component';
import { LCTableService } from './lc-table.service';

import {FormsModule,ReactiveFormsModule} from '@angular/forms';
@NgModule({
    imports: [ CommonModule, FormsModule, ReactiveFormsModule ],
    declarations: [ LCTableComponent  ],
    providers: [LCTableService ],
    exports: [LCTableComponent]
})
export class LCTableModule { 
    static forRoot(): ModuleWithProviders {
    return {
      ngModule: LCTableModule,
      providers: [LCTableService]
    }
  }
}