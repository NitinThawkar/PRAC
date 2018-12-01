// Parent Component

import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  myNameProperty = 'My First Property Binding';
  title = 'app';
  Apptitle: String = 'App Title';

  // Apptitle2: String ;
  Apptitle2 = 'App Title 2';
  /**********************************************/

  imageurl = 'http://www.111ideas.com/wp-content/uploads/2017/08/image-of-yellow-rose.jpg';
  Image = 'image-of-yellow-rose.jpg';
  /**********************************************/

  count = 0;

  incrementCount() {
    this.count++;
    console.log(this.count);
  }

  /**********************************************/
  isdisabled = false;

  toggleButton() {
    this.isdisabled = !this.isdisabled;
  }


  /**********************************************/

  firstName: string = 'Tom';
  lastName: string = 'Hopkins';
  gender: string = 'Male';
  age: number = 20;
  showDetails: boolean = false;
  columnSpan: number = 2;
  toggleDetails(): void {
    this.showDetails = !this.showDetails;
  }
  /**********************************************/
  Twowaybinding = "Two way binding";
  Username: string;
  UsernameL: string;
  GreetNitin(updateValue) {
    this.UsernameL = updateValue;
    if (updateValue === 'nitin') { alert('wel come Nitin'); }

  }
  /*******************GET SET Two way Binding***************************/

  private _Custname: string = 'Type Nitin';

  get Custname(): string {
    return this._Custname;
  }

  set Custname(Value: string) {
    this._Custname = Value;
    //Additional code
    if (Value === 'nitin') { alert('wel come Nitin'); }
  }

  /****************Access Dom element In the Template from the componant class**
   * 
   * Set the focus on input element***@viewChield*************************/
  @ViewChild('nameRef') nameElementRef: ElementRef;
  ngAfterViewInit() {
    this.nameElementRef.nativeElement.focus();
    console.log(this.nameElementRef);
  }

  /********************Send Data To Child Component**************************/
  loggedInUser = true;
  loggedInUserParent: true;
  
  /********************Send Data To Child Component************************/


}

