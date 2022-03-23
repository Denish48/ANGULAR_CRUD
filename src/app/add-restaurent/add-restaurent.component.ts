import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ApiService } from '../services/api.service';
@Component({
  selector: 'app-add-restaurent',
  templateUrl: './add-restaurent.component.html',
  styleUrls: ['./add-restaurent.component.css'],
})
export class AddRestaurentComponent implements OnInit {
  addnewresdata = new FormGroup({
    Restaurent: new FormControl(''),
    Email: new FormControl(''),
    Phone: new FormControl(''),
    Address: new FormControl('')
  });

  alert: boolean = false;
  ngOnInit(): void {}

  constructor(private api: ApiService) {}
  Get_RES_Data() {
    this.api.POST_API_CALL(this.addnewresdata.value).subscribe((res) => {
      this.alert = true;
    });
    this.addnewresdata.reset({});
  }
  alertclose() {
    this.alert = false;
  }
}
