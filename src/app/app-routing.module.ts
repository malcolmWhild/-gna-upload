import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import all app components
import { DisplayJobComponent } from './ui/display-job/display-job.component';
import { DashboardComponent } from './ui/dashboard/dashboard.component';
import { JobNumberInputComponent } from './ui/job-number-input/job-number-input.component';

// define all routes including base route
const routes: Routes = [
  // { path: '', component: JobNumberInputComponent },
  { path: '', component: DashboardComponent },
  { path: 'display-job', component: DisplayJobComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
