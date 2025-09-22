import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { NewtworkserivesService } from 'src/app/services/newtworkserives.service';
import {StudentpipePipe} from 'src/app/pipes/studentpipe.pipe'
@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.css']
})
export class AddstudentComponent implements OnInit {


  formG!: FormGroup;
  isValidss!:boolean;

  constructor(private fb: FormBuilder,private networkcall:NewtworkserivesService) {

  
}



dataformat(control:AbstractControl):ValidationErrors | null
{
     const regerst=/^\d{4}-\d{2}-\d{2}$/
     if(!regerst.test(control.value))
     {
        return {retriveinvalid:true}
     }
     return null;
}

positivenumber(control:AbstractControl):ValidationErrors | null
{
  const check=control.value;
  if(check<10000)
  {
    return {ischeck:true}
  }
  return null;
}
dateRangeCheck(grp:FormGroup):ValidationErrors | null
{

  const start=grp.controls['policystart']?.value;
  const end=grp.controls['policyend']?.value;
  if(start && end && end<=start)
  {
    return {daterangeinvalid:true}
  }
  return  null;
}

  uniquemail(control:AbstractControl): ValidationErrors | null
  {
    const email=control.value;
    let val=JSON.parse(localStorage.getItem('studentarr') || '{}');
    console.log(val)
    if(Array.isArray(val))
    {
      const emailss=val.map((d:any)=> d.email)
      if(emailss.includes(email))
      {
        return {invalidmail:true}
      }
    }
    return null;
  }

  ngOnInit(): void {
    this.formG = this.fb.group({

      username: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9]+$')]],
      mobileno: ['',[Validators.required,Validators.pattern('^[6-9][0-9]{9}$')]],
      email: ['',[Validators.required,Validators.email,this.uniquemail]],
      dateofBirth: ['',[Validators.required,this.dataformat]],
      salary: ['',[Validators.required]],
      age:['',[Validators.required,this.positivenumber]],
      policystart:['',[Validators.required,this.dataformat]],
      policyend:['',[Validators.required,this.dataformat]]
    },{validators:this.dateRangeCheck})
  }


  addStudent() {

    if(this.formG.valid)
    {
      this.networkcall.addStudent(this.formG.value).subscribe((data)=>{
        console.log(data)
        console.log("sucess")
      this.isValidss=true;
      this.formG.reset();
      })
      
      
    }

  }

}
