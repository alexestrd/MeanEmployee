import { Component } from '@angular/core';
import { Employee } from 'src/app/models/employee';
import {EmployeeService} from '../../services/employee.service'
import {NgForm} from '@angular/forms'

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
  

  constructor(public employeeService:EmployeeService){}

  ngOnInit(): void{
   this.getEmployee();
    
  }

  getEmployee(){
    this.employeeService.getEmployees().subscribe(
      res => this.employeeService.employees = res,
    err=> console.error(err) 
    )
  }

  addEmployee(form: NgForm){
    if(form.value._id){
      this.employeeService.editEmployee(form.value).subscribe(
        res => console.log(res),
        err => console.error(err)
      )
    }else{
      this.employeeService.createEmployee(form.value).subscribe(
        res=>{
          this.getEmployee();
          form.reset();
        },
        err => console.error(err)
      )
    }
  }

  deleteEmployee(id: any){
    if(confirm('Are you sure you want to delete it?')){
      this.employeeService.deleteEmployee(id).subscribe(
        res => {
          this.getEmployee();
        },
        err => console.error(err)
      )
    }
    
  }

  editEmployee(employee: Employee){
   this.employeeService.selectedEmployee = employee; 
  }

  resetForm(form: NgForm){
    form.reset();
  }

}
