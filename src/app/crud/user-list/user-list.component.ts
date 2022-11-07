import { Component, OnInit,Injector } from '@angular/core';
import { BaseForm } from 'src/app/classes/base-form';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent extends BaseForm  implements OnInit {

  constructor( injector : Injector) {
    super(injector);
  }

  ngOnInit(): void {
  }

}
