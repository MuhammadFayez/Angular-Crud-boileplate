import { Component } from "@angular/core";
import { BaseSerivceInjector } from "./base-serivce-injector";
@Component({template: ''})
export abstract class BaseJoinActions extends BaseSerivceInjector {

  resetProperties() {
    this._fb = this._fs._fb;
  }
}
