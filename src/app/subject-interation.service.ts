import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectInterationService {
  //create subject varable append with source;
  private _teacherMessageSource = new Subject<string>();

  //create observable append with $ sign
  teacherMessage$ = this._teacherMessageSource.asObservable();

  //create method 
  sendMessage(message: string) {

    this._teacherMessageSource.next(message);
  }

  constructor() { }
}
