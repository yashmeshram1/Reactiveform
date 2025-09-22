import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddstudentComponent } from './component/addstudent/addstudent.component';
import { ViewstudentComponent } from './component/viewstudent/viewstudent.component';
import { ViewbyisdtudentComponent } from './component/viewbyisdtudent/viewbyisdtudent.component';
import { UpdatestudentComponent } from './component/updatestudent/updatestudent.component';

const routes: Routes = [

  {path:'add',component:AddstudentComponent},
  {path:'view',component:ViewstudentComponent},
  {path:'viewbysid/:id',component:ViewbyisdtudentComponent},
  {path:'update/:id',component:UpdatestudentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
