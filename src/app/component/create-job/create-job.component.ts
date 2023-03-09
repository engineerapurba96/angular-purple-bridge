import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { JobService } from '../service/job-service.service';

@Component({
  selector: 'app-create-job',
  templateUrl: './create-job.component.html',
  styleUrls: ['./create-job.component.css']
})
export class CreateJobComponent implements OnInit{
  jobnew:any;
  myForm = new FormGroup({
    job_number: new FormControl('',Validators.required),
    job_title: new FormControl('',Validators.required),
    job_start_date: new FormControl('',Validators.required),
    job_close_date: new FormControl('',Validators.required),
    experience_required: new FormControl('',Validators.required),
    number_of_openings: new FormControl('',Validators.required),
    job_notes: new FormControl('',Validators.required),
  });
  constructor(private fb: FormBuilder,private jobservice:JobService,private route:Router ){

  }
  ngOnInit( ) { }
  onSubmit(){
   this.jobservice.createJob(this.myForm.value).subscribe(res=>{
  this.route.navigate(['/']);
   })
  }
}
