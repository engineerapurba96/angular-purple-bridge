import { Component, OnInit } from '@angular/core';
import { JobService } from '../service/job-service.service';

@Component({
  selector: 'app-job-lists',
  templateUrl: './job-lists.component.html',
  styleUrls: ['./job-lists.component.css']
})
export class JobListsComponent implements OnInit {
  searchText:any;
  joblist:any;
  constructor(private jobservice:JobService ) { }

  ngOnInit( ) { 
    this.getAllList();
  }
 getAllList(){
  this.jobservice.getAllJobList().subscribe(res => {
    this.joblist = res;
    console.log(res);
    
  })
 }
}
