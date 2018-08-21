import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../_services/employee.service';
import { ActivatedRoute } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {
  employee: any = {};

  constructor(private empService: EmployeeService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.employeeById();
  }

  employeeById() {
    this.empService.getEmployeeById(this.activatedRoute.snapshot.params.id).subscribe(response => {
      this.employee = response;
    }, error => { console.log(error); });
  }

  updateEmployee() {
    if (this.employee.employeeId) {
      this.empService.updateEmployee(this.employee.employeeId, this.employee).subscribe(() => {
        alert('Successfully updated');
      }, error => {
        console.log(error);
      });
    }
  }

}
