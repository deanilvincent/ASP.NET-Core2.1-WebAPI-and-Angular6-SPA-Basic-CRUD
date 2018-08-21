import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-delete-employee-modal',
  templateUrl: './delete-employee-modal.component.html',
  styleUrls: ['./delete-employee-modal.component.css']
})
export class DeleteEmployeeModalComponent implements OnInit {
  @Input() valuesFromListOfEmployee: any = {};

  constructor() { }

  ngOnInit() {
    alert(this.valuesFromListOfEmployee.employeeId);
  }

}
