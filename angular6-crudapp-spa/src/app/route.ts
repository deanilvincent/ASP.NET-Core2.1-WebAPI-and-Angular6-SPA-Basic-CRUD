import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { CreateEmployeeComponent } from './employee/create-employee/create-employee.component';
import { ListOfEmployeeComponent } from './employee/list-of-employee/list-of-employee.component';
import { EditEmployeeComponent } from './employee/edit-employee/edit-employee.component';

export const appRoutes: Routes = [
    { path: '', component: HomePageComponent },
    {
        path: '',
        children: [
            { path: 'employee', component: ListOfEmployeeComponent },
            { path: 'employee/create', component: CreateEmployeeComponent },
            { path: 'employee/edit/:id', component: EditEmployeeComponent } // expects parameters
        ]
    },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];
