import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../../../services/registration.service';

@Component({
  selector: 'app-root',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.css']
})
export class ContactInfoComponent implements OnInit {

  constructor(private regSer:RegistrationService) { }

  ngOnInit() {
    //alert(JSON.stringify(this.regSer.user));
  }

}
