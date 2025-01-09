import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component'; // Ensure the correct path
//import { CustomerComponent } from './customer/customer.component'; // Ensure the correct path
import { GreetComponent } from './greet/greet.component'; // Ensure the correct path
import { LoginComponent } from './login/login.component'; // Ensure the correct path
import { LogoutComponent } from './logout/logout.component'; // Ensure the correct path
import { SignupComponent } from './signup/signup.component'; // Ensure the correct path
import { CustomerDetailsComponent } from './customer-details/customer-details.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'customers', component: CustomerDetailsComponent },
  { path: 'greet', component: GreetComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'signup', component: SignupComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
