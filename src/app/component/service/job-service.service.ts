import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JobService {
  url = "http://localhost:3000/";

  constructor(private http: HttpClient) { }

  getAllJobList() {
    return this.http.get(this.url + "jobs");
  }
  createJob(payload: any){
    return this.http.post(this.url + "jobs",payload);
  }
  getJobDetails(id:any){
    return this.http.get(this.url + "jobs/" + id)
  }
  updateJob(id:any,payload:any){
    return this.http.put(this.url + "jobs/" + id,payload)
  }
}
