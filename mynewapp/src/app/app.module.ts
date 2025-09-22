import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddstudentComponent } from './component/addstudent/addstudent.component';
import { ViewstudentComponent } from './component/viewstudent/viewstudent.component';
import { ViewbyisdtudentComponent } from './component/viewbyisdtudent/viewbyisdtudent.component';
import { UpdatestudentComponent } from './component/updatestudent/updatestudent.component';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { StudentpipePipe } from './pipes/studentpipe.pipe'

@NgModule({
  declarations: [
    AppComponent,
    AddstudentComponent,
    ViewstudentComponent,
    ViewbyisdtudentComponent,
    UpdatestudentComponent,
    StudentpipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
