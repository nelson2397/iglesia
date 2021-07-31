import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArteComponent } from './arte/arte.component';
import { AvisosComponent } from './avisos/avisos.component';
import { BautizoComponent } from './bautizo/bautizo.component';
import { CalendarioComponent } from './calendario/calendario.component';
import { CantoComponent } from './canto/canto.component';
import { CaridadComponent } from './caridad/caridad.component';
import { CencoviComponent } from './cencovi/cencovi.component';
import { ConfirmacionComponent } from './confirmacion/confirmacion.component';
import { EducacionComponent } from './educacion/educacion.component';
import { EmpleoComponent } from './empleo/empleo.component';
import { EvangelizacionComponent } from './evangelizacion/evangelizacion.component';
import { FamiliaMatrimonioComponent } from './familia-matrimonio/familia-matrimonio.component';
import { HomeComponent } from './home/home.component';
import { MisionComponent } from './mision/mision.component';
import { OracionesComponent } from './oraciones/oraciones.component';
import { PastoralBiblicaComponent } from './pastoral-biblica/pastoral-biblica.component';
import { PastoralEducativaComponent } from './pastoral-educativa/pastoral-educativa.component';
import { PoliticaComponent } from './politica/politica.component';
import { PrimeraComunionComponent } from './primera-comunion/primera-comunion.component';
import { PrincipalComponent } from './principal.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { SaludComponent } from './salud/salud.component';
import { SolemnidadesComponent } from './solemnidades/solemnidades.component';
import { TemploParroquialComponent } from './templo-parroquial/templo-parroquial.component';
import { TresPanesComponent } from './tres-panes/tres-panes.component';
import { UnidadComponent } from './unidad/unidad.component';

const routes: Routes = [
  {path: 'ppal', component: PrincipalComponent, children: [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'quienes-somos', component: QuienesSomosComponent},
    {path: 'mision', component: MisionComponent},
    {path: 'primera-comunion', component:PrimeraComunionComponent},
    {path: 'confirmacion', component:ConfirmacionComponent},
    {path: 'familia-matrimonio', component:FamiliaMatrimonioComponent},
    {path: 'pastoral-biblica', component:PastoralBiblicaComponent},
    {path: 'pastoral-educativa', component:PastoralEducativaComponent},
    {path: 'templo-parroquial', component: TemploParroquialComponent},
    {path: 'calendario', component:CalendarioComponent},
    {path: 'oraciones', component: OracionesComponent},
    {path: 'canto', component: CantoComponent},
    {path: 'arte', component: ArteComponent},
    {path: 'caridad', component:CaridadComponent},
    {path: 'politica', component: PoliticaComponent},
    {path: 'unidad', component:UnidadComponent},
    {path: 'salud', component:SaludComponent},
    {path: 'educacion', component: EducacionComponent},
    {path: 'empleo', component:EmpleoComponent},
    {path: 'cencovi', component: CencoviComponent},
    {path: 'tres-panes', component: TresPanesComponent},
    {path: 'avisos', component: AvisosComponent},
    {path: 'evangelizacion', component: EvangelizacionComponent},
    {path: 'solemnidades', component:SolemnidadesComponent},
    {path: 'bautizo', component:BautizoComponent}

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
