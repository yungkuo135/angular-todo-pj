import { AngularMaterialModule } from './angular-material.module';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
  ],
  imports: [
    AngularMaterialModule,
    AppRoutingModule,
    FormsModule
  ],
  exports: [
    AngularMaterialModule,
    AppRoutingModule,
    FormsModule
  ]
})
export class SharedModule { }
