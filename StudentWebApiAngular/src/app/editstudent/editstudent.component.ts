import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { WebapiService } from '../webapi.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editstudent',
  templateUrl: './editstudent.component.html',
  styleUrls: ['./editstudent.component.css']
})
export class EditstudentComponent implements OnInit {

  studentForm: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private webapiservice: WebapiService,
    private router: Router,
    private activatedRoute:ActivatedRoute
  ) { }

  ngOnInit() {
    var id = this.activatedRoute.snapshot.params.id;
    this.webapiservice.find(id).subscribe(
      res =>{
        this.studentForm = this.formBuilder.group({
          id: res.Id,
          firstName: res.FirstName,
          lastName: res.LastName,
          email: res.Email,
          password: res.Password,
          age: res.Age
        });
      },
      error => {
        console.log(error);
      });
    }

    save(){
      console.log(this.studentForm.value);
      this.webapiservice.update(this.studentForm.value).subscribe(
        res => {
          this.router.navigate(['']);
        },
        error =>{
          console.log(error);
          
      }
      );
     }
  }
