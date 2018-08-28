import { Component, OnInit } from '@angular/core';
import { log } from 'util';
import { Observable, Subject } from 'rxjs';
import { LoginService } from '../../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form = {
    email : "",
    password : ""
  }
  constructor(private loginService : LoginService) {

  }

  ngOnInit() {
  }

  onSubmit(form){
    if(!form.invalid){
      this.loginService.attemptLogin(this.form.email,this.form.password).subscribe(function(response){

      });
    }
      
  }
}
