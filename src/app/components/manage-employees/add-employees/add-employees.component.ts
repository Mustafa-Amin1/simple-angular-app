import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { EmployeesDataService } from 'src/app/services/employees-data.service';
declare var $: any;

@Component({
  selector: 'app-add-employees',
  templateUrl: './add-employees.component.html',
  styleUrls: ['./add-employees.component.scss']
})
export class AddEmployeesComponent implements OnInit {
  public Departments: Array<string> = [
    'Accounting Department', 'Marketing Department', 'Production Department', 'Quality  Department',
    'Account Department', 'Project Management', 'Maintenance Department', 'Security Department'
  ];

  public form: FormGroup;

  public today: Date;

  //date picker min and max values
  public minDate: Date = new Date(1917, 0, 1);
  public maxDate: Date = new Date(2000, 11, 31);

  formStatue: boolean = true;

  constructor(
    private formBuilder: FormBuilder,
    private empService: EmployeesDataService
  ) {
    const today = new Date();
    this.today = new Date(today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate())


  }

  public get showSuccess(): boolean {
    if (this.form.controls) {
      const formControl = this.form.controls.name;
      return formControl.value && formControl.value.length > 3;
    }
  }


  ngOnInit(): void {
    this.form = this.formBuilder.group({
      empName: new FormControl('', [Validators.required, Validators.minLength(3)]),
      empCode: new FormControl('', [Validators.required, Validators.minLength(3), Validators.pattern('^[1-9]+[0-9]*$')]),
      department: new FormControl('Project Management', [Validators.required]),
      birthDate: new FormControl(new Date(this.today)),
      gender: new FormControl(null, [Validators.required])

    });


  }
  public submitForm(): void {
    if (this.form.valid) {
      this.formStatue = false
      this.empService.employees.push(this.form.value)

      this.form.reset();

    } else {
      this.form.markAllAsTouched();
    }
  }


}
