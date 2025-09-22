import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Student } from 'src/app/model/student';
import { NewtworkserivesService } from 'src/app/services/newtworkserives.service';

@Component({
  selector: 'app-viewbyisdtudent',
  templateUrl: './viewbyisdtudent.component.html',
  styleUrls: ['./viewbyisdtudent.component.css']
})
export class ViewbyisdtudentComponent implements OnInit{


   singlestudent!:Student;

   constructor(private networkcall:NewtworkserivesService,private arouter:ActivatedRoute)
   {

   }

   ngOnInit(): void {

    const id=this.arouter.snapshot.paramMap.get('id');
    this.getstudent(id);
   
   
  }

  getstudent(id:any)
  {
    this.networkcall.viewByStudentId(id).subscribe((data)=>{
      this.singlestudent=data;
      console.log(data)
    })
  }

   

  
}
  


