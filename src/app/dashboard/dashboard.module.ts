import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { SidenavComponent } from './navbar/sidenav/sidenav.component';
import { TopnavComponent } from './navbar/topnav/topnav.component';
import { MaterialModule } from '../material/material.module';
import { HomeComponent } from './main/home/home.component';
import { AlluserComponent } from './users/alluser/alluser.component';
import { CardComponent } from './reusecomponents/card/card.component';
import { GraphcardComponent } from './reusecomponents/graphcard/graphcard.component';
import { GraphcardserviceService } from './service/graphservices/graphcardservice.service';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { AllusersComponent } from './users/allusers/allusers.component'




@NgModule({
  declarations: [
    DashboardComponent,
    SidenavComponent,
    TopnavComponent,
    HomeComponent,
    AlluserComponent,
    CardComponent,
    GraphcardComponent,
    AllusersComponent



  ],
  imports: [
    CommonModule,
    HttpClientModule,
    DashboardRoutingModule,
    MaterialModule
  ],
  providers:[
    GraphcardserviceService
  ]
})
export class DashboardModule { }
