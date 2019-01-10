import { Component, OnInit } from '@angular/core';
import {RegistrationService} from '../../services/registration.service';
import { RouterService} from '../../services/router.service';

@Component({
  selector: 'app-root',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private regSer:RegistrationService,private routerService:RouterService) { 
  }

  ngOnInit() {
  }
  userType($event:MouseEvent){
    $event.preventDefault();
    $event.stopPropagation();
    this.routerService.setRole(event);
  }
}
