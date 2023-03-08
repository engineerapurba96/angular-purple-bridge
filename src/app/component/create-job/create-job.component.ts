import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
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
    job_number: new FormControl(),
    job_title: new FormControl(),
    job_start_date: new FormControl(),
    job_close_date: new FormControl(),
    experience_required: new FormControl(),
    number_of_openings: new FormControl(),
    job_notes: new FormControl(),

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
