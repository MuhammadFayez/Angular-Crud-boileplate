import { Injectable, Injector } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AngularSerivceInjector } from 'src/app/classes/angular-serivce-injector';

@Injectable({
  providedIn: 'root'
})
export class FormService  extends AngularSerivceInjector {
  _form : FormGroup;
  constructor(
    injector: Injector,
  ) {
    super(injector);
    this._form = this._fb.group({});
  }
}
