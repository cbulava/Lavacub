import { RouterModule, Routes } from '@angular/router';

import { HomeComponent }     from './home/home.component';
import { FeatureComponent }   from './feature/feature.component';
import { ImageGalleryComponent } from './image-gallery/image-gallery.component';

const app_routes: Routes = [
  { path: '',  pathMatch:'full', redirectTo: '/home' },
  { path: 'home',  component: HomeComponent },
  { path: 'feature', component: FeatureComponent },
  { path: 'image-gallery', component: ImageGalleryComponent }
];

export const app_routing = RouterModule.forRoot(app_routes);