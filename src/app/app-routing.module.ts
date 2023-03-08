import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateJobComponent } from './component/create-job/create-job.component';
import { JobInformationComponent } from './component/job-information/job-information.component';
import { JobListsComponent } from './component/job-lists/job-lists.component';

const routes: Routes = [
{path:'',pathMatch:"full",redirectTo:"jobs"},
{path:'jobs',component:JobListsComponent},
{path:'jobs/new',component:CreateJobComponent},
{path:'jobs/:id',component:JobInformationComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
