import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../_services/employee.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  employee: any = {};

  constructor(private empService: EmployeeService) { }

  ngOnInit() {
  }

  submitEmployee() {
    this.empService.createEmployee(this.employee).subscribe(() => {
      alert('Successfully saved');
      this.employee = {};
    }, error => {
      console.log(error);
    });
  }
}
