import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, Observable, of, toArray } from 'rxjs';
import { Student } from 'src/app/model/student';
import { NewtworkserivesService } from 'src/app/services/newtworkserives.service';

@Component({
  selector: 'app-viewstudent',
  templateUrl: './viewstudent.component.html',
  styleUrls: ['./viewstudent.component.css']
})
export class ViewstudentComponent implements OnInit{

  student:Observable<Student[]>=of([]);
  final:Observable<Student[]>=of([]);
  ascorder:Observable<Student[]>=of([]);
  desccorder:Observable<Student[]>=of([]);

  jsonss:Observable<Student[]>=of([]);
  jsonfilter:Observable<Student[]>=of([]);

  constructor(private netwofrk:NewtworkserivesService,private arouter:ActivatedRoute,private noralr:Router)
  {
    this.getData()
    this.GetandSetEmployee()
  }
  ngOnInit(): void {
  

}

  getData()
  {

    this.student=this.netwofrk.viewallStudent();
    this.final=this.student;
   
    this.ascorder=this.student.pipe(
      map(d => d.sort((a: Student,b: Student) => a.username.localeCompare(b.username)))
    )
    
    this.desccorder=this.student.pipe(
      map(d => d.sort((a: Student,b: Student)=> b.username.localeCompare(a.username)))
    )
    }
    seatchvalue(e:any)
    {
      const isvalue=e.target.value;
      console.log(isvalue)
      if(isvalue)
      {
        this.final=this.student.pipe(
          map((studentss)=>{
            return studentss.filter((studenta)=>{
              return studenta.username.toString().toLowerCase().includes(isvalue.toLowerCase()) 
              //  studenta.email.toString().includes(isvalue)
            })
          })
        )
      }
      else{
        this.final=this.student;
        return;
      }
    }

    deletes(id:any)
    {
      this.netwofrk.deletebyId(id).subscribe(()=>{
        alert("delete sucess")
        this.noralr.navigate(['/view'])

      })
    }

    // used other method
    GetandSetEmployee()
    {
      this.jsonss=this.netwofrk.getandsetviaJSON();
      console.log("here is dara "+this.jsonss)
      this.jsonfilter=this.student.pipe(map(d => d.sort((a:Student,b:Student)=> a.username.localeCompare(b.username))));
      this.jsonfilter.pipe(toArray())
      let insArray;
      this.jsonfilter.subscribe((ins)=>{
        insArray=ins
        if(insArray)
        {
          const arr=JSON.stringify(insArray);
          localStorage.setItem('studentarr',arr);
        }
      })
      
    }
    
}
