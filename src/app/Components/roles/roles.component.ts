import { Component, OnInit } from '@angular/core';
import { EmployeesRoleService } from 'src/app/Services/employees-role.service';
import { Router } from '@angular/router'
import { EmployeesRole } from 'src/app/Classes/EmployeesRole';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {

  constructor(private employees_role_service: EmployeesRoleService, private router: Router) { }

  ngOnInit() {
  }
  AddOrUpdate() {
    //הוספת תפקיד חדש
    if (this.employees_role_service.role.id == undefined) {
      this.employees_role_service.Add().subscribe(data => this.employees_role_service.list_roles = data)
      this.employees_role_service.role = new EmployeesRole()
    }
    //עריכת תפקיד קיים
    else {

    }
  }
  next() {
    if (this.employees_role_service.role.role != undefined)//הוספת התפקיד האחרון אם לא לחצו על כפתור ההוספה
      this.AddOrUpdate()
    this.router.navigate(['wards-shifts'])
  }

}