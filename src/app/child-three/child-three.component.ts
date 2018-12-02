import { Component, OnInit, Output, EventEmitter } from '@angular/core';
// import { EventEmitter } from 'events';
import {SubjectInterationService} from '../subject-interation.service';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-child-three',
  templateUrl: './child-three.component.html',
  styleUrls: ['./child-three.component.css']
})
export class ChildThreeComponent implements OnInit {

  constructor(private _SubjectInterationService: SubjectInterationService) { }

  name='Nitin Thawkar';

  ngOnInit() {
    this._SubjectInterationService.teacherMessage$.subscribe(
      message => {
        if (message === 'Good morning') {
          alert('goodmorning teacher');
        }
        else if (message === 'well done') {
          alert('well done');
        }
      }
    )
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
