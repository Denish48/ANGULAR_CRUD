import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddRestaurentComponent } from './add-restaurent/add-restaurent.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RestListComponent } from './rest-list/rest-list.component';
import { RestUpdateComponent } from './rest-update/rest-update.component';

const routes: Routes = [
  {
    path:"list",
    component:RestListComponent
  },
  {
    component:LoginComponent,
    path:"login"
  },
  {
    component:RegisterComponent,
    path:"register"
  },
  {
    component:RestUpdateComponent,
    path:"update/:id"
  },
  {
    component:AddRestaurentComponent,
    path:""
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
