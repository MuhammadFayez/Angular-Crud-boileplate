import { Component, OnInit,Injector } from '@angular/core';
import { BaseForm } from 'src/app/classes/base-form';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent extends BaseForm  implements OnInit {

  constructor( injector : Injector) {
       super(injector);
   }

  ngOnInit(): void {
    this.initform();
  }

  initform(){
      this._fs._form = this._fb.group({
        firstName :['Muhammad'],
        lastName :['Fayez'],
        age: ['25'],
        gender: ['male'],
        email:['m.fayez131@gmail.com'],
        password:['123456789'],
        phone:['03402238993'],
        username:['test_fayez'],
        height:['6.4'],
        weight:['97']
      })
  }


  submit(){
      console.log(this._fs._form.value);
      this._http.create(environment.API_URL + 'users/add',this._fs._form.value)
      .subscribe((res)=>{
        console.log(res);
      })
  }

}
