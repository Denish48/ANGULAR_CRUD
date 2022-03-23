import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

// import { interval, map, Subscription ,filter} from 'rxjs';
@Component({
  selector: 'app-rest-list',
  templateUrl: './rest-list.component.html',
  styleUrls: ['./rest-list.component.css'],
})
export class RestListComponent implements OnInit, OnDestroy {
  //component for unsubscribe:
  public apisubscription: Subscription | any;
  alldata: any = [];
  //define observable for api:
  alldata2$: Observable<any>;

  constructor(private apidata: ApiService, private router: Router) {
    console.log(this.apidata.API_CALL());
    //observable for api call:
    this.alldata2$ = this.apidata.API_CALL();
    // console.log(this.alldata2$);
  }

  ngOnInit(): void {
    this.apisubscription = this.apidata.API_CALL().subscribe((res) => {
      this.alldata = res;
    });
  }

  
  Delete_RES(item: number) {
    this.alldata.splice(item - 1, 1);
    this.apidata.DELETE_API_CALL(item).subscribe((res) => {
      console.log('Delete Successfully');
    });
  }
  updateBlog(id: any) {
    this.router.navigateByUrl(`/update/${id}`);
  }
  //when change the comepenent ng destroy works:
  ngOnDestroy(): void {
    console.log('component unsubscribe ');
    this.apisubscription.unsubscribe();
  }
}
