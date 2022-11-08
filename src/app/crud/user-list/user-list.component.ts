import { Component, OnInit,Injector ,AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator, PageEvent} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { BaseForm } from 'src/app/classes/base-form';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent extends BaseForm  implements OnInit {

  public dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  totalRows = 0;
  pageSize = 10;
  currentPage = 0;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  UserList : Array<any> = [];


  displayedColumns : Array<any | string> = ['s_no', 'actions' ,'first_name', 'last_name', 'age' , 'gender' ,'email' ,'phone_number','user_name','height','weight'];

  constructor( injector : Injector) {
    super(injector);
  }

  ngOnInit(): void {
      this._pathLocation = "/userAdd";
      this.getList();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  getList = () => {
      this._http
      .getCall(environment.API_URL + 'users?limit=100')
      .subscribe((res)=>{
        console.log(res);
        this.paginator.pageIndex = this.currentPage;
        this.dataSource.data = res.users;
        this.totalRows = res.total;
        this.UserList =  res.users;
      })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  pageChanged(event: PageEvent) {
    this.pageSize = event.pageSize;
    this.currentPage = event.pageIndex;
  }

  _switch(id = null) {
    if (id) this._router.navigate([this._pathLocation, { userId: id}]);
    else this._router.navigate([this._pathLocation]);
  }

}
