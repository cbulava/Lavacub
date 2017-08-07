import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule} from '@angular/http';

import { AppComponent }  from './app.component';
import { HomeComponent } from './home/home.component';
import { FeatureComponent } from './feature/feature.component';
import { ImageGalleryComponent } from './image-gallery/image-gallery.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome'
import { LCTableModule } from './lc-table/lc-table.module';
import {FormControl,FormGroup} from '@angular/forms';

import {ReactiveFormsModule} from '@angular/forms';
// import { PerfectScrollbarModule } from 'angular2-perfect-scrollbar';
// import { PerfectScrollbarConfigInterface } from 'angular2-perfect-scrollbar';
 

import { app_routing } from './app.routing';
import { DataService } from './shared/data.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule, app_routing, LCTableModule.forRoot() ],
  declarations: [ AppComponent, HomeComponent, FeatureComponent, ImageGalleryComponent, NavbarComponent],
  providers:    [ DataService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }