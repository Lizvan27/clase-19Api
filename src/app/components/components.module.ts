import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetallesComponent } from './detalles/detalles.component';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    DetallesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports:[
    DetallesComponent
  ]
})
export class ComponentsModule { }
