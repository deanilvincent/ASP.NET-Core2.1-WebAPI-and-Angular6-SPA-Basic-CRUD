import { Component, OnInit, Input } from '@angular/core';
import { EmployeeService } from '../../_services/employee.service';
import { Router } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-list-of-employee',
  templateUrl: './list-of-employee.component.html',
  styleUrls: ['./list-of-employee.component.css']
})
export class ListOfEmployeeComponent implements OnInit {
  valuesToDeleteModal: any = {};

  employees: any = [];

  constructor(private empService: EmployeeService, private router: Router) { }

  ngOnInit() {
    this.getEmployees();
  }

  getEmployees() {
    this.empService.getEmployees().subscribe(response => {
      this.employees = response;
    }, error => {
      console.log('Something went wrong');
    });
  }

  editEmployee(id: number) {
    this.router.navigate(['employee/edit', id]);
  }

  openDeleteModal(id: number) {
    this.valuesToDeleteModal.isShowDeleteModal = true;
    this.valuesToDeleteModal.employeeId = id;
  }

  closeDeleteModal(value: boolean) {
    this.valuesToDeleteModal.isShowDeleteModal = value;
  }

  reloadTable() {
    this.getEmployees();
  }
}
