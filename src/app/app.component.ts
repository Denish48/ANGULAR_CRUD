import { Component } from '@angular/core';
// import {Router} from "@angular/router"
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'restorent-details';
  //for redirect on button click:
  //   constructor(private router:Router){}
  //   user_redirect(){
  // this.router.navigateByUrl('/register')
  //   }
}
