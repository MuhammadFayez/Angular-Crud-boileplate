import { Component, OnInit,Injector } from '@angular/core';
import { BaseForm } from 'src/app/classes/base-form';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent extends BaseForm  implements OnInit {

  uid : string | number | any;

  constructor( injector : Injector) {
       super(injector);
   }

  ngOnInit(): void {
    this._pathLocation = "/userList";
    this.uid = this._activeRoute.snapshot.paramMap.get('userId');
    this.initform();

    if(this.uid != null){
        this.patchFormData();
    }
  }

  initform(){
      this._fs._form = this._fb.group({
        firstName :[''],
        lastName :[''],
        age: [''],
        gender: [''],
        email:[''],
        password:[''],
        phone:[''],
        username:[''],
        height:[''],
        weight:['']
      })
  }

  patchFormData(){
    this._http.getCall(environment.API_URL + 'users/' + this.uid)
    .subscribe((res) => {
      console.log(res);


      const data = res;
      this._fs._form.patchValue({
        firstName : (data?.firstName != null ? data?.firstName : ''),
        lastName : (data?.lastName != null ? data?.lastName : ''),
        age : (data?.age != null ? data?.age : ''),
        gender : (data?.gender != null ? data?.gender : ''),
        email : (data?.email != null ? data?.email : ''),
        password : (data?.password != null ? data?.password : ''),
        phone : (data?.phone != null ? data?.phone : ''),
        username : (data?.username != null ? data?.username : ''),
        height : (data?.height != null ? data?.height : ''),
        weight : (data?.weight != null ? data?.weight : ''),
      });
    })

  }


  submit(){
      console.log(this._fs._form.value);
      this._http.create(environment.API_URL + 'users/add',this._fs._form.value)
      .subscribe((res)=>{
          if(res != null){
                this._switch()
          }
      })
  }

  _switch() {
    this._fs._form.reset();
    this._router.navigate([this._pathLocation]);
  }

}
