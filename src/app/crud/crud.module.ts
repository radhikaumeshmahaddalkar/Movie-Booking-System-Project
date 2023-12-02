import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrudRoutingModule } from './crud-routing.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    CrudRoutingModule,
    FormsModule,
    Ng2SearchPipeModule
    
  ]
})
export class CrudModule { }
