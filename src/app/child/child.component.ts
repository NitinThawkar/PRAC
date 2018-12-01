import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnChanges {
  constructor() { }
  ngOnChanges(changes: SimpleChanges) {
    const MyLoginvalue = changes["LoggedInUser"];
    console.log(changes);
   // console.log(MyLoginValue);
    if (MyLoginvalue.currentValue === true) {
      this.message = 'Welcome back nitin from NgOnchanges';
    } else { this.message = 'Please Login NgOnchanges'; }

  }

  @Input() LoggedIn: boolean;
  // LoggedIn = false;
  @Input() LoggedInChild: boolean;

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
