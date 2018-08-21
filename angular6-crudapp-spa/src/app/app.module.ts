import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EmployeeService } from './_services/employee.service';
import { CreateEmployeeComponent } from './employee/create-employee/create-employee.component';
import { HomePageComponent } from './home-page/home-page.component';
import { RouterModule } from '../../node_modules/@angular/router';
import { appRoutes } from './route';

@NgModule({
   declarations: [
      AppComponent,
      CreateEmployeeComponent,
      HomePageComponent
   ],
   imports: [
      BrowserModule,
      RouterModule.forRoot(appRoutes)
   ],
   providers: [
       EmployeeService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
