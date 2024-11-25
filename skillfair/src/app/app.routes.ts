import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewestComponent } from './newest/newest.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
     { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'newest', component: NewestComponent },
  { path: 'catalogue', component: CatalogueComponent },
  { path: 'contact', component: ContactComponent },
    ];
