import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource} from '@angular/material/table'

import {MatPaginator} from '@angular/material/paginator'
import {MatSort} from '@angular/material/sort'
import {SelectionModel} from '@angular/cdk/collections';
import { CrucnoService } from '../../service/crudapi/crucno.service';


@Component({
  selector: 'app-alluser',
  templateUrl: './alluser.component.html',
  styleUrls: ['./alluser.component.css']
})
export class AlluserComponent implements OnInit, AfterViewInit{

  constructor(private cruc: CrucnoService) { }
  displayedColumns = ["select",'image', 'name', 'designation', 'mobile' ,'email', 'joiningdate', 'address'];
  dataSource = new MatTableDataSource<any>();
  selection = new SelectionModel<Element>(true, []);

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: any): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }

  @ViewChild(MatSort) sort: MatSort | any;
  @ViewChild(MatPaginator) paginator: MatPaginator | any;
  applyFilter(filterValue:any) {
    console.log(filterValue)
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  /**
   * Set the paginator after the view init since this component will
   * be able to query its view for the initialized paginator.
   */
  ngOnInit(){
    this.cruc.getData().subscribe((data:any)=>

    this.dataSource=  new MatTableDataSource<any>(data.records)


    )

  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

  }
}





