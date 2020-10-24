import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Employee } from 'src/app/models/employee';
import { EmployeesDataService } from 'src/app/services/employees-data.service';
import { PageChangeEvent, SelectAllCheckboxState, DataBindingDirective } from '@progress/kendo-angular-grid';
import { process } from '@progress/kendo-data-query';

@Component({
  selector: 'app-search-employees',
  templateUrl: './search-employees.component.html',
  styleUrls: ['./search-employees.component.scss']
})
export class SearchEmployeesComponent implements OnInit {
  @ViewChild(DataBindingDirective) dataBinding: DataBindingDirective;

  public Departments: Array<string> = [
    'Accounting Department', 'Marketing Department', 'Production Department', 'Quality  Department',
    'Account Department', 'Project Management', 'Maintenance Department', 'Security Department'
  ];
  public gridData: Employee[] = this.empService.employees;

  public searchForm: FormGroup;

  //checkbox
  public gridView: any[];
  public items: Employee[] = this.empService.employees;
  public mySelection: number[] = [];
  public selectAllState: SelectAllCheckboxState = 'unchecked';
  public pageSize = 10;
  public skip = 0;

  constructor(
    private fb: FormBuilder,
    private empService: EmployeesDataService

  ) {
  }

  ngOnInit(): void {
    this.searchForm = this.fb.group({
      empName: new FormControl('', [Validators.required, Validators.minLength(3)]),
      department: new FormControl('Project Management', [Validators.required]),
    });
    this.gridView = this.gridData;

  }
  public submitForm(): void {
    if (this.searchForm.valid) {
      this.onSearch(this.searchForm.controls.empName.value, this.searchForm.controls.department.value)
    } else {
      this.searchForm.markAllAsTouched();
    }
  }

  //selection events 
  public onSelectedKeysChange(e) {
    const len = this.mySelection.length;

    if (len === 0) {
      this.selectAllState = 'unchecked';
    } else if (len > 0 && len < this.items.length) {
      this.selectAllState = 'indeterminate';
    } else {
      this.selectAllState = 'checked';
    }
  }
  public onSelectAllChange(checkedState: SelectAllCheckboxState) {
    if (checkedState === 'checked') {
      this.mySelection = this.items.map((item) => item.empID);
      this.selectAllState = 'checked';
    } else {
      this.mySelection = [];
      this.selectAllState = 'unchecked';
    }
  }

  public pageChange(event: PageChangeEvent): void {
    this.skip = event.skip;
  }

  //search in table
  public onSearch(inputValue: string, inputValue2: string): void {
    this.gridView = process(this.gridData, {
      filter: {
        logic: "and",
        filters: [
          {
            field: 'empName',
            operator: 'contains',
            value: inputValue
          },
          {
            field: 'department',
            operator: 'contains',
            value: inputValue2
          }
        ],
      }
    }).data;

    this.dataBinding.skip = 0;
  }
  public onClear(): void {
    this.gridView = this.gridData
  }
}
