import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrincipalComponent } from './principal.component';
import { HomeComponent } from './home/home.component';
import { NoPageFoundComponent } from './no-page-found/no-page-found.component';
import { RouterModule } from '@angular/router';
import { ComponentesModule } from '../components/componentes.module';



@NgModule({
  declarations: [
    PrincipalComponent,
    HomeComponent,
    NoPageFoundComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ComponentesModule
  ],
  exports: [
    PrincipalComponent,
    HomeComponent,
    NoPageFoundComponent
  ]
})
export class PagesModule { }
