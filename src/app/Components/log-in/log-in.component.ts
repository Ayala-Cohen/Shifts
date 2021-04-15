import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Employee } from 'src/app/Classes/Employee';
import { EmployeeWithWholeData } from 'src/app/Classes/EmployeeWithWholeData';
import { BusinessService } from 'src/app/Services/business.service';
import { EmployeesRoleService } from 'src/app/Services/employees-role.service';
import { EmployeesService } from 'src/app/Services/employees.service';
import { IntegrationService } from 'src/app/Services/integration.service';
import { ShiftsService } from 'src/app/Services/shifts.service';
import { WardService } from 'src/app/Services/ward.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogINComponent implements OnInit {

  constructor(private employees_roles_service: EmployeesRoleService, private employee_service: EmployeesService, private integration_service: IntegrationService, private business_service: BusinessService, private ward_service: WardService, private shift_service: ShiftsService, private router: Router) { }

  ngOnInit() {
  }
  getAllData() {
    if (this.employee_service.employee.id != undefined) {//ההתחברות התבצעה על ידי עובד ולא על ידי מנהל
      this.integration_service.GetAll().subscribe(data => this.integration_service.list_rating = data)//שליפת רשימת הדירוגים של העובד
    }
    this.employee_service.GetAll().subscribe(x => {
      this.employee_service.list_employees = x
    })
    this.shift_service.GetAll().subscribe(data => this.shift_service.list_shifts = data)
    this.employees_roles_service.GetAll().subscribe(data => this.employees_roles_service.list_roles = data)
    this.ward_service.GetAll().subscribe(data => this.ward_service.list_wards = data)
    this.shift_service.getAllShiftsInDay().subscribe(data => this.shift_service.list_shifts_in_day = data)
  }
  logIn() {
    this.employee_service.CheckEmployee().subscribe(data => {
      if (data) {
        this.employee_service.employee = data
        this.business_service.GetOneById(data.business_id).subscribe(result => {
          if (result)
            this.business_service.business = result
        })
        this.getAllData()
        this.router.navigate(['integration'])
      }
      else {
        this.business_service.getBusinessBydirectorDetails(this.employee_service.employee.email, this.employee_service.employee.password).subscribe(x => {
          if (x) {
            this.business_service.business = x
            this.employee_service.is_director = true
            // this.business_service.director_email = this.employee_service.employee.email
            // this.business_service.director_name = this.employee_service.employee.name
            this.employee_service.employee = new Employee()
            this.getAllData()
            this.router.navigate(['wards-shifts'])
          }
          else
            alert("לא מוכר במערכת")
        })
      }
    }),
      err => alert("כשל בגישה לשרת")
  }
}
