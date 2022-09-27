import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDataComponent } from './add-data/add-data.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ReportsComponent } from './reports/reports.component';

const routes: Routes = [
  {
    component: LoginComponent,
    path: 'login',
  },
  {
    path: 'reports/add',
    component: AddDataComponent,
    // children: [
    //   { path: 'add', component: AddDataComponent },
    //   { path: 'edit', component: AddDataComponent },
    // ],
  },
  { path: 'reports/edit', component: AddDataComponent },
  {
    component: ReportsComponent,
    path: 'reports',
  },
  {
    component: DashboardComponent,
    path: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
