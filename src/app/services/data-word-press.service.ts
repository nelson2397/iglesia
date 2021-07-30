import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataWordPressService {

  url:string = 'https://parroquiasantamartacali.org/backWordPress/wp-json/wp/v2';

  constructor(private http : HttpClient) { 

  }

  GetInicio(path: string){
    return this.http.get(`${this.url}/${path}/40`);
  }

  GetQuienesSomos(path: string){
    return this.http.get(`${this.url}/${path}/9`);
  }

  GetMision(path:string){
    return this.http.get(`${this.url}/${path}/63`)
  }

  GetBautizo(path:string){
    return this.http.get(`${this.url}/${path}/69`)
  }

  GetPrimeraComunion(path:string){
    return this.http.get(`${this.url}/${path}/68`)
  }

  GetConfirmacion(path:string){
    return this.http.get(`${this.url}/${path}/67`)
  }

  GetCatecumenado(path:string){
    return this.http.get(`${this.url}/${path}/70`)
  }

  GetFamilia(path:string){
    return this.http.get(`${this.url}/${path}/72`)
  }

  GetPastoralBiblica(path:string){
    return this.http.get(`${this.url}/${path}/77`)
  }
  getTemploParroquial(path: string){
    return this.http.get(`${this.url}/${path}/176`)
  }
  getProgramaEvangelizacion(path: string){
    return this.http.get(`${this.url}/${path}/144`)
  }
}
