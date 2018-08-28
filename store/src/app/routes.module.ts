import { NgModule } from '@angular/core';
import { RouterModule,Routes} from '@angular/router';


import { MainComponent } from './layout/main/main.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';

const router : Routes = [
  {
    path : "",
    component : MainComponent,
    children : [
      {path : "login", component : LoginComponent},
      {path : "register", component : RegisterComponent}
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(router),
  ],
  exports : [RouterModule],
  declarations: []
})

export class RoutesModule { }
