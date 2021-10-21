import { NgModule } from '@angular/core';
import {MatToolbarModule} from "@angular/material/toolbar"
import {MatIconModule} from '@angular/material/icon'
import {MatButtonModule} from "@angular/material/button"
import {MatButtonToggleModule} from "@angular/material/button-toggle"
import {MatBadgeModule} from "@angular/material/badge"
import {MatSidenavModule} from "@angular/material/sidenav"
import {MatFormFieldModule} from "@angular/material/form-field"
import {MatSliderModule} from "@angular/material/slider"
import {MatGridListModule} from "@angular/material/grid-list"
import {MatCardModule} from "@angular/material/card"
import {MatSelectModule} from "@angular/material/select"
import{MatRadioModule} from"@angular/material/radio"
import {MatExpansionModule} from "@angular/material/expansion"
import {MatInputModule} from "@angular/material/input"
import {MatListModule} from "@angular/material/list"
import {MatProgressBarModule} from"@angular/material/progress-bar"
import {MatTableModule} from "@angular/material/table"
import {MatPaginatorModule} from "@angular/material/paginator"
import {MatSortModule} from "@angular/material/sort"
import {MatDatepickerModule} from "@angular/material/datepicker"
import {MatCheckboxModule} from "@angular/material/checkbox"




const materialComponent =[
MatToolbarModule,
MatProgressBarModule,

MatListModule,
MatIconModule,
MatButtonModule,
MatButtonToggleModule,
MatBadgeModule,
MatSidenavModule,
MatFormFieldModule,
MatCheckboxModule,
MatGridListModule,
MatSelectModule,MatSliderModule,MatCardModule,
MatRadioModule,
MatExpansionModule,
MatInputModule,
MatTableModule,
MatPaginatorModule,
MatSortModule,MatDatepickerModule
]



@NgModule({

  imports: [
    materialComponent
  ],
  exports:[materialComponent]
})
export class MaterialModule { }
