import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NewtworkserivesService } from 'src/app/services/newtworkserives.service';

@Component({
  selector: 'app-updatestudent',
  templateUrl: './updatestudent.component.html',
  styleUrls: ['./updatestudent.component.css']
})
export class UpdatestudentComponent implements OnInit {


  formG!: FormGroup;
  isValidss!:string;

  constructor(private fb: FormBuilder,private networkcall:NewtworkserivesService,private arouter:ActivatedRoute,private nrouetr:Router) {

  
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


  ngOnInit(): void {

    this.isValidss=String(this.arouter.snapshot.paramMap.get('id'));
    alert('hhh')
    if(this.isValidss)
    {
      this.networkcall.viewByStudentId(this.isValidss).subscribe((data)=>{
        this.formG.patchValue(data)
      })
    }

    this.formG = this.fb.group({

      username: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9]+$')]],
      mobileno: ['',[Validators.required,Validators.pattern('^[6-9][0-9]{9}$')]],
      email: ['',[Validators.required,Validators.email]],
      dateofBirth: ['',[Validators.required,this.dataformat]],
      salary: ['',[Validators.required]],
      age:['',[Validators.required,this.positivenumber]],
      policystart:['',[Validators.required,this.dataformat]],
      policyend:['',[Validators.required,this.dataformat]]
    },{validators:this.dateRangeCheck})
  }


  updateStudent() {

    if(this.formG.valid)
    {
      this.networkcall.updatebyid(this.isValidss,this.formG.value).subscribe((data)=>{
        alert("update sucess")
        console.log(data)//check
      })
    
      
      
    }

  }

}
