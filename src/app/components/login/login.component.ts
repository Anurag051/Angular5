import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginDetails } from '../../model/login-model';
import { LoginServiceService } from '../../services/login-service.service';
import { AppSettings } from '../../utility/app-constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = new LoginDetails();
  constructor(private loginService:LoginServiceService) { }

  ngOnInit() {
  }
  onSubmit(userForm:NgForm){
    console.log(JSON.stringify(this.user));
    alert(JSON.stringify(this.user));  
    
    this.login().subscribe(
      data=>{
        this.user=data.json();
        console.log('data:'+this.user.username);
        console.log("Data from server :"+JSON.stringify(data));
      },error=>{
        this.user.username = error;
        console.log(this.user.username); 
      }
    );
    this.loginService.navigate(['./complete_registration']);  
  }
  login(){ 
    return this.loginService.login(AppSettings.LOGIN_URL,this.user);    
}
}
