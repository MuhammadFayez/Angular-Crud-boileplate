import { HttpClient } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularSerivceInjector } from 'src/app/classes/angular-serivce-injector';
@Injectable({
  providedIn: 'root'
})
export class HttpService extends AngularSerivceInjector {

  readonly http: HttpClient;

  constructor(
    injector: Injector,
  ) {
    super(injector)
    this.http = this.injector.get(HttpClient);
  }


  getCall(url: string | any): Observable<any> {
    return this.http.get<any>(url);
  }

  create(url:any, param: any): Observable<any> {
    return this.http.post(url, param)
  }



}
