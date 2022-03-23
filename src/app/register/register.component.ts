import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl} from "@angular/forms"
import {ApiService} from '../services/api.service'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
user_sign_in_data=new FormGroup(
  {
    Name:new FormControl(''),
    Email:new FormControl(''),
    Password:new FormControl(''),
    Address:new FormControl(''),
    Accept_Conditions:new FormControl('')

  }
)
  constructor(private api:ApiService) { }

  ngOnInit(): void {
  }
GET_USER_DATA()
{
  this.api.POST_USER_DATA_API_CALL(this.user_sign_in_data.value).subscribe((result)=>
  {
    console.log(result)
  })
}
}
