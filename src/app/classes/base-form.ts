import { Component, Injector } from "@angular/core";
import { BaseJoinActions } from "./base-join-actions";
@Component({template: ''})
export abstract class BaseForm extends BaseJoinActions {
  constructor(injector: Injector) {
    super(injector);
    this.resetProperties();
  }
}
