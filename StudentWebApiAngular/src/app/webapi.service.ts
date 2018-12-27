import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, pipe } from 'rxjs';
import { map } from 'rxjs/operators';
import { Student } from './student.entity';

@Injectable({
  providedIn: 'root'
})

export class WebapiService {

  private url = "https://localhost:44394/api/student/";

  constructor (private http: HttpClient) { }

  findAll(): Observable<Student[]>{
    return this.http.get<Student[]>(this.url+'findall');
  }
  find(id: number): Observable<Student>{
    return this.http.get<Student>(this.url + 'find/' + id);
  }

  create(student: Student) {
    return this.http.post(this.url + 'create', student);
  }

  update(student: Student) {
    return this.http.put(this.url + 'update', student);
  }

  delete(id: number){
    return this.http.delete(this.url + 'delete/' + id);
  }
}
