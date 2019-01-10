import { Injectable } from '@angular/core';
import { RequestPayload } from '../model/request-payload';
import { HttpserviceService } from './httpservice.service';
import { Headers,RequestOptions } from '@angular/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class LoginServiceService {

  constructor(private payload:RequestPayload,private httpService:HttpserviceService) {
    let custHeader = new Headers;
    custHeader.append('Content-Type', 'application/json');
    custHeader.append('Authorization','Basic ' + btoa('user:secret123'));
    let options = new RequestOptions({headers:custHeader});
    this.payload.option=options;
   }
  login(url,data){
    this.payload.body = JSON.stringify(data);
    this.payload.url = url;
    return this.httpService.post(this.payload);
  }
  navigate(obj){
    this.httpService.navigate(obj);
}
}
