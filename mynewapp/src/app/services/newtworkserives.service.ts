import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from '../model/student';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewtworkserivesService 
{

  private apiUrl:string="https://ec2-3-7-65-210.projects.wecreateproblems.com/proxy/3000/studentData";

  constructor(private httpcall:HttpClient) { }

  addStudent(newStud:Student):Observable<any>
  {
    return this.httpcall.post(this.apiUrl,newStud)
  }
  viewallStudent():Observable<any>
  {
    return this.httpcall.get(this.apiUrl)
  }
  viewByStudentId(id:any):Observable<any>
  {
    return this.httpcall.get(this.apiUrl+"/"+id)
  }
  updatebyid(id:any,newstu:Student):Observable<any>
  {
    return this.httpcall.put(this.apiUrl+"/"+id,newstu)
  }

  deletebyId(id:any):Observable<any>
  {

    return this.httpcall.delete(this.apiUrl+"/"+id)
  }

  getandsetviaJSON():Observable<Student[]>
  {
      return this.httpcall.get<Student[]>(this.apiUrl).pipe(
        map((dat:any)=>{

          if(Array.isArray(dat))
          {
            return dat;
          }
          else{
            return [dat];
          }
        })
      )
  }

}
