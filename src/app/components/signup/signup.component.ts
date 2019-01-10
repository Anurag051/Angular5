import { Component, OnInit, OnChanges,SimpleChanges } from '@angular/core';
import { RouterService} from '../../services/router.service';
import { UserRegistration } from '../../utility/user-registration';
import { NgForm } from '@angular/forms';
import { SignupServiceService } from '../../services/signup-service.service';
import { RequestPayload } from '../../model/request-payload';
import { AppSettings } from '../../utility/app-constants';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit,OnChanges {
  private response:Response;
  firstName:string;
  lastName:string;
  age:string;
  roleType:string;
  idType:string;
  idProof:string;
  education:string;
  countryName:string;
  stateName:string;
  city:string;
  phoneType:string;
  phno:string;
  email:string;
  address:string;

  user = new UserRegistration();
  isSignup=false;
  constructor(private signupService:SignupServiceService,private routeService:RouterService) { 
    if(this.routeService.getRole()!=null){
      this.user.roleType=this.routeService.getRole();
      this.isSignup=true;
    }
  }

  ngOnInit() {
    console.log('ngOnInit');
    
  }
  ngOnChanges(changes:SimpleChanges){

    for(let propName in changes){
      let change = changes[propName];
      let cur_value = JSON.stringify(change.currentValue);
      let pre_value = JSON.stringify(change.previousValue);
      console.log("Current value :"+cur_value);
      console.log("Previous value:"+pre_value);
    }

  }
  onSubmit(userForm:NgForm){
    console.log(JSON.stringify(this.user));
    alert(JSON.stringify(this.user));  
    
    this.createUser().subscribe(
      data=>{
        this.user=data.json();
        console.log('data:'+this.user.email);
        console.log("Data from server :"+JSON.stringify(data));
      },error=>{
        this.email = error;
        console.log(this.email); 
      }
    );
    this.signupService.navigate(['./login']);  
  }
  
  createUser(){ 
      return this.signupService.createUser(AppSettings.AUTHENTICATE,this.user);    
  }
}
