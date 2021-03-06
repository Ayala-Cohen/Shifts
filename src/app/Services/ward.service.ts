import { Injectable } from '@angular/core';
import { Ward } from '../Classes/Ward';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { BusinessService } from './business.service';
import { ShiftEmployees } from '../Classes/ShiftEmployee';
import { Shift } from '../Classes/Shift';

@Injectable({
  providedIn: 'root'
})
export class WardService {
  list_wards: Array<Ward> = new Array<Ward>()
  ward: Ward = new Ward()
  url: string = "http://localhost:50744/api/Departments/"
  constructor(private http: HttpClient, private business_service: BusinessService) {
  }
  //פונקציה לשליפת רשימת מחלקות
  public GetAll(): Observable<Array<Ward>> {
    return this.http.get<Array<Ward>>(this.url + "GetAllDepartments/" + this.business_service.business.id)
  }
  //פונקציה לשליפת מחלקה ע"י קוד
  public GetOneById(id: number): Observable<Ward> {
    return this.http.get<Ward>(this.url + "GetDepartmentById/" + id)
  }
  //פונקציה להוספת מחלקה
  public Add(): Observable<Array<Ward>> {
    this.ward.business_id = this.business_service.business.id
    return this.http.put<Array<Ward>>(this.url + "AddDepartment", this.ward)
  }
  //פונקציה לעדכון מחלקה
  public Update(): Observable<Array<Ward>> {
    return this.http.post<Array<Ward>>(this.url + "UpdateDepartment", this.ward)
  }
  //פונקציה למחיקת מחלקה  
  public Delete(id: number): Observable<Array<Ward>> {
    return this.http.delete<Array<Ward>>(this.url + "DeleteDepartment/" + id)
  }
}
