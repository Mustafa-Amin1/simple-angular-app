import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddEmployeesComponent } from './components/manage-employees/add-employees/add-employees.component';
import { SearchEmployeesComponent } from './components/manage-employees/search-employees/search-employees.component';
const routes: Routes = [
  {
    path:"",
    component: AddEmployeesComponent,
  },
  {
    path:"add-employee",
    component: AddEmployeesComponent,
  },
  {
    path:"search-employee",
    component: SearchEmployeesComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
