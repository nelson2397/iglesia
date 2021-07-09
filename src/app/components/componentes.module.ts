import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FootersComponent } from './footers/footers.component';



@NgModule({
  declarations: [
    HeaderComponent,
    NavbarComponent,
    FootersComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    NavbarComponent,
    FootersComponent
  ]
})
export class ComponentesModule { }
