import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';
@Component({
  selector: 'app-rest-update',
  templateUrl: './rest-update.component.html',
  styleUrls: ['./rest-update.component.css'],
})
export class RestUpdateComponent implements OnInit {
  edit_res = new FormGroup({
    Restaurent: new FormControl(''),
    Email: new FormControl(''),
    Phone: new FormControl(''),
    Address: new FormControl(''),
  });
  productid = 0;
  constructor(private routeperam: ActivatedRoute, private api: ApiService) {}
  items: any = [];
  ngOnInit(): void {
    console.log(this.routeperam.snapshot.params);

    this.api
      .GET_CURR_DATA_API_CALL(this.routeperam.snapshot.params['id'])
      .subscribe((responce:any) => {
        console.log(responce);

        this.edit_res = new FormGroup({
          Restaurent: new FormControl(responce['Restaurent']),
          Email: new FormControl(responce['Email']),
          Phone: new FormControl(responce['Phone']),
          Address: new FormControl(responce['Address']),
        });
      });
  }
  ON_UPDATE_COLLECTION() {
    // console.log(this.edit_res.value)
    this.api
      .GET_NEW_UPDATE_DATA(
        this.routeperam.snapshot.params['id'],
        this.edit_res.value
      )
      .subscribe((update_res) => {
        console.log(update_res);
      });
  }
}
