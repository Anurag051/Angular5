import { Injectable} from '@angular/core';

@Injectable()
export class RegistrationService{


  userRole : any;
  constructor() { }

  setRole(event){
    this.userRole = event.target.innerHTML;
  }

  getRole(){
    return this.userRole;
  }
}
