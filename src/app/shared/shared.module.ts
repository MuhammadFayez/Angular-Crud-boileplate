import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './modules/material/material.module';
import { NgxNgbOthersModule } from './modules/ngx-ngb-others/ngx-ngb-others.module';


const SharedModules = [
  CommonModule,
  FormsModule,
  HttpClientModule,
  ReactiveFormsModule,
  MaterialModule,
  NgxNgbOthersModule
];
@NgModule({
  declarations: [],
  imports: [SharedModules],
  exports:[SharedModules]
})
export class SharedModule { }
