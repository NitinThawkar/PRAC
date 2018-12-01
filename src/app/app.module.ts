import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { ChildSecondComponent } from './child-second/child-second.component';
import { ChildThreeComponent } from './child-three/child-three.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    ChildSecondComponent,
    ChildThreeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
