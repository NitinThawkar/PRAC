import { Component, OnInit, Output, EventEmitter } from '@angular/core';
// import { EventEmitter } from 'events';

@Component({
  selector: 'app-child-three',
  templateUrl: './child-three.component.html',
  styleUrls: ['./child-three.component.css']
})
export class ChildThreeComponent implements OnInit {

  constructor() { }

  name='Nitin Thawkar';

  ngOnInit() {
  }
  @Output() greetEvent = new EventEmitter();
  @Output() greetEventName = new EventEmitter();
  CallParentGreet() {
    //  alert('I am from Child');
    this.greetEvent.emit();
  }

  CallParentGreetName() {
    //  alert('I am from Child');
    this.greetEventName.emit(this.name);
  }
}
