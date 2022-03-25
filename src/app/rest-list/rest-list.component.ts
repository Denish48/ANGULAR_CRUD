import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { ChkDeleteService } from '../services/chk-delete.service';
import { SelectionModel } from '@angular/cdk/collections';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-rest-list',
  templateUrl: './rest-list.component.html',
  styleUrls: ['./rest-list.component.css'],
})
export class RestListComponent implements OnInit, OnDestroy {
  //mui table variable:
  displayedColumns: string[] = [
    'select',
    'id',
    'name',
    'phone',
    'email',
    'Address',
    'operations',
  ];
  dataSource = new MatTableDataSource<APIResponceType>(alldata);
  selection = new SelectionModel<APIResponceType>(true, []);

  //component for unsubscribe:
  public apisubscription: Subscription | any;
  //define observable for api:
  // alldata2$: Observable<any>;

  constructor(
    private apidata: ApiService,
    private router: Router,
    private http2: ChkDeleteService,
    private _snackBar: MatSnackBar
  ) {
    console.log(this.apidata.API_CALL());
    //observable for api call:
    // this.alldata2$ = this.apidata.API_CALL();
    // console.log(this.alldata2$);
  }

  //  Whether the number of selected elements matches the total number of rows.
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    // console.log('this is numselected', numSelected);
    let numRows = this.dataSource.data.length;
    // console.log('this is numrow', numRows);
    return numSelected === numRows;
  }

  //  Selects all rows if they are not all selected; otherwise clear selection.
  masterToggle() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }
    //all raw data responce get in this.dataSource.Data:
    this.selection.select(...this.dataSource.data);
  }

  //  The label for the checkbox on the passed row
  checkboxLabel(row?: APIResponceType): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }

    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${
      row.id + 1
    }`;
  }

  ngOnInit(): void {
    console.log('working OnIniti');
    this.apisubscription = this.apidata.API_CALL().subscribe((res) => {
      alldata = res;
      this.dataSource = new MatTableDataSource(alldata);
    });
  }
  //for filter the table data:
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  //delete selected value by checkbox:
  deleteid: any;
  //delete all selected value:
  deletealldata: any;
  DeleteData(message: string, action: string) {
    if (this.selection.selected.length === 0) {
      alert('select atleast one data to delete');
    } else if (this.selection.selected.length !== 0) {
      this.selection.selected.map((ele) => {
        // console.log(ele.id);
        this.deleteid = ele.id;
        this.http2.API_CHK_VAL_DELETE(this.deleteid).subscribe((raw_sel) => {
          this.ngOnInit();
          this._snackBar.open(message, action);
        });
      });
    } else if (this.selection.selected.length === this.dataSource.data.length) {
      this.dataSource.data.map((responce) => {
        console.log('this is data source', responce.id);
        this.deletealldata = responce.id;
        this.http2.API_CHK_VAL_DELETE(this.deletealldata).subscribe((res) => {
          console.log(res);
          this.ngOnInit();
        });
      });
    }
  }

  //update the value of table:
  updateBlog(id: any) {
    this.router.navigateByUrl(`/update/${id}`);
  }
  //when change the comepenent ng destroy works:
  ngOnDestroy(): void {
    console.log('component unsubscribe ');
    this.apisubscription.unsubscribe();
  }
}

//create interface for api responce:
export interface APIResponceType {
  Restaurent: string;
  Email: string;
  Phone: number;
  Address: string;
  id: number;
}
//store api responce data in one variable:
var alldata: APIResponceType | any = [];
