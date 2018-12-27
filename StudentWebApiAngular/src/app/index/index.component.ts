import { Component, OnInit } from '@angular/core';
import { WebapiService } from '../webapi.service';
import { Student } from '../student.entity';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

    students: Student[];

  constructor(private webapiservice: WebapiService,
              private router: Router) { }
       

  ngOnInit() {
    this.loadData();
  }

edit(id: number){
  this.router.navigate(['/edit/' + id]);
}

delete(id: number) {
  var result = confirm('Are You sure?');
  if(result) {
    this.webapiservice.delete(id).subscribe(
      res => {
        this.loadData();
      },
      error => {
        console.log(error);
      }
    );
  }
}

  loadData() { 
    this.webapiservice.findAll().subscribe(
      res => {
      this.students = res;
      },
  error => {
    console.log(error);
  }
  );
 }
}