import { Injectable } from '@angular/core';
import { Employee } from 'src/app/models/employee';


@Injectable({
  providedIn: 'root'
})

export class EmployeesDataService {

  constructor() { }

  employees: Employee[] =[
    { "empID": 1, "empName": "Ahmed Mohamed", "empCode": "111", "department": "Project Management", "birthDate": "2000-12-13T00:00:00.000Z", "gender": "Male" },
    { "empID": 2, "empName": "Alaa Ezz", "empCode": "222", "department": "Marketing Department", "birthDate": "2000-12-13T00:00:00.000Z", "gender": "Male" },
    { "empID": 3, "empName": "Ahmed Mohamed", "empCode": "333", "department": "Accounting Department", "birthDate": "2000-12-13T00:00:00.000Z", "gender": "Male" },
    { "empID": 4, "empName": "Israa Mohamed", "empCode": "444", "department": "Project Department", "birthDate": "2000-12-13T00:00:00.000Z", "gender": "Female" },
  ]
}
