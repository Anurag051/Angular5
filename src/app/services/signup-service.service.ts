import { Injectable } from '@angular/core';
import { HttpserviceService } from './httpservice.service';
import { AppSettings } from '../utility/app-constants';
import { RequestPayload } from '../model/request-payload';
import {Headers, RequestOptions} from '@angular/http';
@Injectable()
export class SignupServiceService {
  
  constructor(private payload:RequestPayload,private httpService:HttpserviceService) { 
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    this.payload.option=options;
  }

  createUser(url,data){
    this.payload.body = JSON.stringify(data);
    this.payload.url = url;
    return this.httpService.post(this.payload);
  }
  navigate(obj){
    this.httpService.navigate(obj);
}
}
