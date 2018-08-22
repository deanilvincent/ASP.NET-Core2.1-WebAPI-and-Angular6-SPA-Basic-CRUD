import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { EmployeeService } from '../../_services/employee.service';

@Component({
  selector: 'app-delete-employee-modal',
  templateUrl: './delete-employee-modal.component.html',
  styleUrls: ['./delete-employee-modal.component.css']
})
export class DeleteEmployeeModalComponent implements OnInit {
  @Input() valuesFromListOfEmployee: any = {};
  @Output() cancelDeleteModal = new EventEmitter();
  @Output() loadEmployeesTable = new EventEmitter();

  constructor(private empService: EmployeeService) { }

  ngOnInit() {
  }

  close() {
    this.cancelDeleteModal.emit(false);
  }

  delete() {
    this.empService.deleteEmployee(this.valuesFromListOfEmployee.employeeId).subscribe(() => {
      alert('Successfully deleted');
      this.loadEmployeesTable.emit();
      this.cancelDeleteModal.emit(false);
    }, error => {
      console.log(`Something went wrong ${error}`);
    });
  }
}
