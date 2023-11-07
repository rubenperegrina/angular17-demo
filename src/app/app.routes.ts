import { Routes } from '@angular/router';
import { PropertiesComponent } from './components/properties/properties.component';
import { PropertyDetailComponent } from './pages/property-detail/property-detail.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    {path: '', pathMatch: 'full', redirectTo: '/properties'},
    {path: 'home', component: HomeComponent, data: {animation: 'Home'}},
    {path: 'properties', component: PropertiesComponent, data: {animation: 'Properties'}},
    {path: 'property/:id', component: PropertyDetailComponent},
  ];
