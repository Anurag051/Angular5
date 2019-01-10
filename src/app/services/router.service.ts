import { Injectable} from '@angular/core';

@Injectable()
export class RouterService{


  userRole : any;
  constructor() { }

  setRole(event){
      if(event==null){
          this.userRole=event;
      }else{
        this.userRole = event.target.innerHTML;
      }
  }

  getRole(){
    return this.userRole;
  }
}
