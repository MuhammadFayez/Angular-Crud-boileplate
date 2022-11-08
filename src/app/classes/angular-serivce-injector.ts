import { Injector } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { DatePipe , Location} from "@angular/common";

export abstract class AngularSerivceInjector {

  _fb : FormBuilder;
  _activeRoute : ActivatedRoute;
  _router : Router;
  _location : Location;

  constructor(public injector: Injector){
      this._fb = injector.get(FormBuilder);
      this._activeRoute = injector.get(ActivatedRoute);
      this._router = injector.get(Router);
      this._location = injector.get(Location);
  }

}
