import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { RequestOptions, Http, Response,Headers,URLSearchParams } from '@angular/http';
import { Router } from '@angular/router';

@Injectable()
export class HttpserviceService {

  constructor(private http:Http,private router:Router) { 

  }
  get(obj):Observable<Response>{
      return this.http.get(obj.url)
      .map((res:Response)=>{
          if(res){
              if(res.status === 200){
                  return {status:res.status,json:res.json()}
              }
          }
      })
      .catch((error:any)=>Observable.throw(error.json().error || 'Server Error'));

  }

  post(obj):Observable<Response>{
      return this.http.post(obj.url,obj.body,obj.option);
  }

  navigate(obj){
      this.router.navigate(obj);
  }

}
