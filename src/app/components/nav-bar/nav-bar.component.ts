import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {


  public dropDownButtonItems: Array<any> = [{
      text: 'My Profile'
  }, {
      text: 'Friend Requests'
  }, {
      text: 'Account Settings'
  }, {
      text: 'Support'
  }, {
      text: 'Log Out'
  }];


  public onSplitButtonItemClick(dataItem: any): void {
      if (dataItem) {
          console.log(dataItem.text);
      }
  }

  public onButtonClick() {
      console.log('click');
  }
  constructor() { }
  date;
  ngOnInit(): void {
    var today = new Date();   
    this.date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
  }


}
