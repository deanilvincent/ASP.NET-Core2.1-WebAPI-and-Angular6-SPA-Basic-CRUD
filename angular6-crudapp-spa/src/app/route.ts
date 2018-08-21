import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { CreateEmployeeComponent } from './employee/create-employee/create-employee.component';

export const appRoutes: Routes = [
    { path: '', component: HomePageComponent },
    {
        path: '',
        children: [
            { path: 'employee/create', component: CreateEmployeeComponent }
        ]
    },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];
