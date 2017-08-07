import { Component, OnInit, HostListener, ElementRef, ViewChildren , QueryList} from '@angular/core';
import { slideInOutMenuAnimation } from '../shared/animations/animations.component';
import { slideInOutMainAnimation } from '../shared/animations/animations.component';
import { AppComponent } from '../app.component';

@Component({
    moduleId: module.id,
    selector: 'image-gallery',
    templateUrl: 'image-gallery.component.html',
    styleUrls: ['image-gallery.css'],
    animations: [slideInOutMainAnimation,slideInOutMenuAnimation],
})
export class ImageGalleryComponent implements OnInit {
    private state: string = "active";
    private divHeight: number;
    private mainDivWidth: number;
    // private imgWidth: number = 640;
    // private imgHeight: number = 422;
    private numTiles: number = 2;
    private imgHeight: Array<number>;
    private imgWidth: Array<number>;

     @ViewChildren('images1') imageViews1: QueryList<ElementRef>;
     @ViewChildren('images2') imageViews2: QueryList<ElementRef>;

    private tileOptions: Array<number> = [1.0, 2.0, 3.0, 4.0, 5.0];
    private imgUrl1Array: Array<string> = [
        "http://i.imgur.com/vc1O6fV.jpg", "http://i.imgur.com/JTD7hIi.png", "http://i.imgur.com/yX7Bck8.png", "http://i.imgur.com/SPTQcq8.png","http://i.imgur.com/RvntAw2.png",
        "http://i.imgur.com/xXvDRCT.jpg", "http://i.imgur.com/fagFYzb.jpg", "http://i.imgur.com/3Mbmn8E.jpg", "http://i.imgur.com/xstVNHG.jpg", "http://i.imgur.com/zmug33O.jpg"
    ]
    // private imgUrl2Array: Array<string> = [ 
    // ]

    constructor(private apc: AppComponent) {
        
        // this.imgHeight = new Array<number>(this.imgUrlArray.length);
        // this.imgWidth = new Array<number>(this.imgUrlArray.length);

     }

    @HostListener('window:resize', ['$event'])
    onResize(event: any){
        this.modifyDimensions(this.numTiles);
    }

    modifyDimensions(tiles: number){
        this.divHeight = window.innerHeight - 160;
        this.mainDivWidth = window.innerWidth - 220;
    }

    ngOnInit() { 

    }

    ngAfterViewInit(){
        this.modifyDimensions(this.numTiles);
    }

    toggleSideMenu(state: string) {
        this.state = state;
        this.mainDivWidth = window.innerWidth;
        if(state == "active")
            this.mainDivWidth -= 250;
    }
}