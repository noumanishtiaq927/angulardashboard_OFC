import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from '../auth/register/register.component';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './main/home/home.component';
import { AdduserComponent } from './users/adduser/adduser.component';
import { AlluserComponent } from './users/alluser/alluser.component';

const routes: Routes = [{ path: '', component: DashboardComponent, children:[
  { path:'home', component:HomeComponent },
  {path:'alluser', component:AlluserComponent},
  {path:'adduser', component:RegisterComponent}
]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
