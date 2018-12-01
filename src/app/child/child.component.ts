import { Component, OnInit, Input } from '@angular/core';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  constructor() { }
  ngOnInit() {
  }

  @Input() LoggedIn: boolean;
  // LoggedIn = false;


    /********************Intercept the data from parent component to child component**************************/
  private _LoggedInUser;
  message: string;
  get LoggedInUser(): boolean {
    return this._LoggedInUser;
  }

  //getting data from parent compenent
  @Input()
  set LoggedInUser(value: boolean) {
    this._LoggedInUser = value;
    if (value === true) {
      this.message = 'Welcome back nitin';
    } else { this.message = 'Please Login'; }
  }  
  /*********************************************/

}
