import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EmployeeService } from './_services/employee.service';
import { CreateEmployeeComponent } from './employee/create-employee/create-employee.component';
import { HomePageComponent } from './home-page/home-page.component';
import { RouterModule } from '../../node_modules/@angular/router';
import { appRoutes } from './route';
import { NavigationComponent } from './navigation/navigation.component';
import { ListOfEmployeeComponent } from './employee/list-of-employee/list-of-employee.component';
import { HttpClientModule } from '../../node_modules/@angular/common/http';
import { EditEmployeeComponent } from './employee/edit-employee/edit-employee.component';
import { DeleteEmployeeModalComponent } from './employee/delete-employee-modal/delete-employee-modal.component';
import { AntixsrfService } from './_services/antixsrf.service';

@NgModule({
    declarations: [
        AppComponent,
        CreateEmployeeComponent,
        ListOfEmployeeComponent,
        HomePageComponent,
        NavigationComponent,
        EditEmployeeComponent,
        DeleteEmployeeModalComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        RouterModule.forRoot(appRoutes),
        FormsModule,
    ],
    providers: [
        EmployeeService,
        AntixsrfService
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }
