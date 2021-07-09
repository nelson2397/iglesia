import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoPageFoundComponent } from './pages/no-page-found/no-page-found.component';
import { PagesRoutingModule } from './pages/pages-routing.module';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: '**', component: NoPageFoundComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes,{useHash: true}),
    PagesRoutingModule
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
