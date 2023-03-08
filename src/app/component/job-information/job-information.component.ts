import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { JobService } from '../service/job-service.service';

@Component({
  selector: 'app-job-information',
  templateUrl: './job-information.component.html',
  styleUrls: ['./job-information.component.css']
})
export class JobInformationComponent implements OnInit {
  jobId: String = '';
  jobDetails: any;
  jobnew: any;
  myForm = new FormGroup({
    job_number: new FormControl(),
    job_title: new FormControl(),
    job_start_date: new FormControl(),
    job_close_date: new FormControl(),
    experience_required: new FormControl(),
    number_of_openings: new FormControl(),
    job_notes: new FormControl(),

  })
  constructor(private route: ActivatedRoute, private routes:Router,private jobService: JobService) {

  }
  ngOnInit() {
    this.jobId = this.route.snapshot.params['id'];
    this.getJobDetails();
  }
  getJobDetails() {
    this.jobService.getJobDetails(this.jobId).subscribe(res => {
      this.jobDetails = res;
      delete this.jobDetails.id;
      console.log(this.jobDetails);
      this.myForm.setValue(this.jobDetails);
    })
  }
  updateJob() {
    this.jobService.updateJob(this.jobId,this.myForm.value).subscribe(res => {
      this.routes.navigate(['/']);
    })
  }
}