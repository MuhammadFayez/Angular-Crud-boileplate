import { Component, Injector } from "@angular/core";
import { AngularSerivceInjector } from "./angular-serivce-injector";
import { HttpService } from "../shared/services/http.service";
import { FormService } from "../shared/services/form.service";
@Component({template: ''})
export abstract class BaseSerivceInjector extends AngularSerivceInjector {


  _http : HttpService;
  _fs : FormService;

  constructor(
    public override injector: Injector
    ) {
    super(injector);
      this._http = this.injector.get(HttpService);
      this._fs = this.injector.get(FormService);
  }
}
