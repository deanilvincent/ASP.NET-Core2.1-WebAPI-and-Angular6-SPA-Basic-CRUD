import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from '../../../node_modules/rxjs';
import { Employee } from '../_models/iemployee';
import { AntixsrfService } from './antixsrf.service';

@Injectable()
export class EmployeeService {

    antiXsrfToken: string;

    constructor(private http: HttpClient, private antiXsrfService: AntixsrfService) { }

    getEmployees(): Observable<Employee[]> {
        return this.http.get<Employee[]>(`${environment.baseUrl}employees`);
    }

    getEmployeeById(id: number): Observable<Employee> {
        return this.http.get<Employee>(`${environment.baseUrl}employees/${id}`);
    }

    createEmployee(employee: any) {
        this.antiXsrfService.saveTokenToLocalStorage();
        return this.http.post(`${environment.baseUrl}employees`, employee, {
            headers: {
                'XSRF-TOKEN': localStorage.getItem('antixsrftoken')
            }
        });
    }

    updateEmployee(id: number, employee: any) {
        return this.http.put(`${environment.baseUrl}employees/${id}`, employee);
    }

    deleteEmployee(id: number) {
        return this.http.delete(`${environment.baseUrl}employees/${id}`);
    }
}
