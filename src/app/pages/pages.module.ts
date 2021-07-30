import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrincipalComponent } from './principal.component';
import { HomeComponent } from './home/home.component';
import { NoPageFoundComponent } from './no-page-found/no-page-found.component';
import { RouterModule } from '@angular/router';
import { ComponentesModule } from '../components/componentes.module';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { MisionComponent } from './mision/mision.component';
import { PrimeraComunionComponent } from './primera-comunion/primera-comunion.component';
import { ConfirmacionComponent } from './confirmacion/confirmacion.component';
import { FamiliaMatrimonioComponent } from './familia-matrimonio/familia-matrimonio.component';
import { PastoralBiblicaComponent } from './pastoral-biblica/pastoral-biblica.component';
import { PastoralEducativaComponent } from './pastoral-educativa/pastoral-educativa.component';
import { TemploParroquialComponent } from './templo-parroquial/templo-parroquial.component';
import { CalendarioComponent } from './calendario/calendario.component';
import { OracionesComponent } from './oraciones/oraciones.component';
import { CantoComponent } from './canto/canto.component';
import { ArteComponent } from './arte/arte.component';
import { CaridadComponent } from './caridad/caridad.component';
import { PoliticaComponent } from './politica/politica.component';
import { UnidadComponent } from './unidad/unidad.component';
import { SaludComponent } from './salud/salud.component';
import { EducacionComponent } from './educacion/educacion.component';
import { EmpleoComponent } from './empleo/empleo.component';
import { CencoviComponent } from './cencovi/cencovi.component';
import { TresPanesComponent } from './tres-panes/tres-panes.component';
import { AvisosComponent } from './avisos/avisos.component';
import { BautizoComponent } from './bautizo/bautizo.component';
import { EvangelizacionComponent } from './evangelizacion/evangelizacion.component';
import { SolemnidadesComponent } from './solemnidades/solemnidades.component';



@NgModule({
  declarations: [
    PrincipalComponent,
    HomeComponent,
    NoPageFoundComponent,
    QuienesSomosComponent,
    MisionComponent,
    PrimeraComunionComponent,
    ConfirmacionComponent,
    FamiliaMatrimonioComponent,
    PastoralBiblicaComponent,
    PastoralEducativaComponent,
    TemploParroquialComponent,
    CalendarioComponent,
    OracionesComponent,
    CantoComponent,
    ArteComponent,
    CaridadComponent,
    PoliticaComponent,
    UnidadComponent,
    SaludComponent,
    EducacionComponent,
    EmpleoComponent,
    CencoviComponent,
    TresPanesComponent,
    AvisosComponent,
    BautizoComponent,
    EvangelizacionComponent,
    SolemnidadesComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ComponentesModule
  ],
  exports: [
    PrincipalComponent,
    HomeComponent,
    NoPageFoundComponent,
    QuienesSomosComponent,
    MisionComponent,
    PrimeraComunionComponent,
    ConfirmacionComponent,
    FamiliaMatrimonioComponent,
    PastoralBiblicaComponent,
    PastoralEducativaComponent,
    TemploParroquialComponent,
    CalendarioComponent,
    OracionesComponent,
    CantoComponent,
    ArteComponent,
    CaridadComponent,
    PoliticaComponent,
    UnidadComponent,
    SaludComponent,
    EducacionComponent,
    EmpleoComponent,
    CencoviComponent,
    TresPanesComponent,
    AvisosComponent,
    BautizoComponent,
    EvangelizacionComponent,
    SolemnidadesComponent
  ]
})
export class PagesModule { }
