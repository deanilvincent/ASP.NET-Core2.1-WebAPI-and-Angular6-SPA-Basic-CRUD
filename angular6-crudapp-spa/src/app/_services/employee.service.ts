import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from '../../../node_modules/rxjs';
import { Employee } from '../_models/iemployee';

@Injectable()
export class EmployeeService {

    constructor(private http: HttpClient) { }

    getEmployees(): Observable<Employee[]> {
        return this.http.get<Employee[]>(`${environment.baseUrl}employees`);
    }

    getEmployeeById(id: number): Observable<Employee> {
        return this.http.get<Employee>(`${environment.baseUrl}employees/${id}`);
    }

    createEmployee(employee: any) {
        return this.http.post(`${environment.baseUrl}employees`, employee);
    }

    updateEmployee(id: number, employee: any) {
        return this.http.put(`${environment.baseUrl}employees/${id}`, employee);
    }

    deleteEmployee(id: number) {
        return this.http.delete(`${environment.baseUrl}employees/${id}`);
    }
}
