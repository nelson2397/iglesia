import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PrincipalComponent } from './principal.component';

const routes: Routes = [
  {path: 'ppal', component: PrincipalComponent, children: [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent}
  ]}
]

@NgModule({
  declarations: [

  ],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class PagesRoutingModule { }
