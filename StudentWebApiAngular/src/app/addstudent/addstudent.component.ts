import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { WebapiService } from '../webapi.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.css']
})
export class AddstudentComponent implements OnInit {
  
  studentForm: FormGroup

  constructor(private formBuilder: FormBuilder,
              private webapiService: WebapiService,
              private router: Router
    ) { }

  
  ngOnInit() {
    this.studentForm = this.formBuilder.group({
      'firstName' : [null, Validators.required],
        'lastName' : [null, Validators.required],
        'email' : [null, Validators.compose([Validators.required])],
        'password' : [null, Validators.required],
        'age': [null, Validators.required],
        'isAccepted': [null],
    });
  }

  
save():void {
  console.log(this.studentForm.value);
  this.webapiService.create(this.studentForm.value).subscribe(
    res => {
      this.router.navigate(['']);
    },
    error =>{
      console.log(error);
      
  });
 }
 

}
