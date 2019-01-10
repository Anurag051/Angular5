import { Component, OnInit, OnChanges, SimpleChanges, Input} from '@angular/core';
import { RegistrationService } from '../../../services/registration.service';
import { FormControl, FormGroup,FormBuilder,NgForm } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { UserRegistration } from '../../../utility/user-registration';
import { Country } from '../../../utility/country';
import { IDProof } from '../../../utility/idproof';
import { Qualification } from '../../../utility/qualification';

import { UserDto } from '../../../services/user-dto';
import { User } from '../../../services/signup';
import { ActivatedRoute } from '@angular/router';
import { error } from 'util';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit, OnChanges{
  private users :User[];
  someCondition : boolean;
  selectedCountry: Country;
  countries = [
     new Country('unknown', 'select country' ),
     new Country('us', 'USA' ),
     new Country('ind', 'India' ),
     new Country('aus', 'Australia' ),
     new Country('bz', 'Brazil'),
     new Country('rs', 'Russia')
  ];

  selectedID :IDProof;
  idtypes = [
    new IDProof('unknown', 'Select UID' ),
    new IDProof('VID', 'Voter ID' ),
    new IDProof('AADR', 'Adhar' ),
    new IDProof('PAN', 'Pan'),
    new IDProof('PASSPRT', 'Passport')
 ];
// Qualification 
degreeHold : Qualification;
qualifns = [
   new Qualification('unknown','higher education ?'),
   new Qualification('b.tech','B.Tech'),
   new Qualification('P.hd','P.hd'),
   new Qualification('12th','Higher secondary'),
   new Qualification('10th','Secondary')
];
  variableName:FormGroup;
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

  constructor(private route:ActivatedRoute, private userDTO :UserDto ,private regSer:RegistrationService) { 
   this.user.roleType = this.regSer.getRole();
   alert('Reload');
  }

  
  ngOnInit() {
    this.user.countryname = this.countries[0];
    this.user.idType = this.idtypes[0];
    this.user.education = this.qualifns[0];
    //this.populateData();


  
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

  
  selectedIDType($event) {
    $event.preventDefault();
    if($event.target.selectedIndex == 0){
      this.someCondition=false;
    }else{
    this.someCondition=true;
    this.user.idType = this.idtypes[$event.target.selectedIndex];

    this.idType='enter your '+this.idtypes[$event.target.selectedIndex].name+' number';
    //console.log('selected: ' + $event.target.value);
    //console.log('text: ' + $event.target.selectedIndex);
    }
  }

  degreeHoldOn($event){
    $event.preventDefault();
    this.user.education = this.qualifns[$event.target.selectedIndex];
  }

  currentCntry($event){
    $event.preventDefault();
    this.user.countryname = this.countries[$event.target.selectedIndex];
  }
populateData(){
  alert("Inside populate :"+this.regSer.getRole());
 this.user.roleType = this.regSer.getRole();
}

onSubmit(userForm:NgForm){
  console.log(JSON.stringify(this.user));
  alert(JSON.stringify(this.user));  
  this.userDTO.init(this.user);
}

postData(){
 return;
  
}
}