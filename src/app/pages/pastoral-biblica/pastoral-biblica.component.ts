import { Component, OnInit } from '@angular/core';
import {DataWordPressService} from  '../../services/data-word-press.service';
declare var $: any;

@Component({
  selector: 'app-pastoral-biblica',
  templateUrl: './pastoral-biblica.component.html',
  styleUrls: ['./pastoral-biblica.component.scss']
})
export class PastoralBiblicaComponent implements OnInit {

  parrafo: string;
  download = {
    url:"",
    name: ""
  }
  wpPastBiblica:any;
  constructor(private DataServices:DataWordPressService) { }

  ngOnInit(): void {

    this.DataServices.GetPastoralBiblica('pages').subscribe(resp => {
      this.wpPastBiblica=resp;
      this.parrafo = this.wpPastBiblica.acf.Item_1.contenido_item;
      this.download.url =this.wpPastBiblica.acf.Item_1.archivo_a_descargar;
      this.download.name= this.wpPastBiblica.acf.Item_1.titulo_item;
    })
  }

  cambiarTexto(btnId: number){
    if(btnId === 1){
      let active = $('.btn-outline-info').hasClass('active');
      if(active){
        $('.btn-outline-info').removeClass('active');
      }
      this.parrafo = this.wpPastBiblica.acf.Item_1.contenido_item;
      this.download.url =this.wpPastBiblica.acf.Item_1.archivo_a_descargar;
    this.download.name= this.wpPastBiblica.acf.Item_1.titulo_item;
    ;
    }else if(btnId === 2){
      let active = $('.btn-outline-info').hasClass('active');
      if(active){
        $('.btn-outline-info').removeClass('active');
      }
      this.parrafo = this.wpPastBiblica.acf.Item_2.contenido_item;
      this.download.url =this.wpPastBiblica.acf.Item_2.archivo_a_descargar;
    this.download.name= this.wpPastBiblica.acf.Item_2.titulo_item;
    }else if(btnId === 3){
      let active = $('.btn-outline-info').hasClass('active');
      if(active){
        $('.btn-outline-info').removeClass('active');
      }
      this.parrafo = this.wpPastBiblica.acf.Item_3.contenido_item;
      this.download.url =this.wpPastBiblica.acf.Item_3.archivo_a_descargar;
    this.download.name= this.wpPastBiblica.acf.Item_3.titulo_item;
    }else if(btnId === 4){
      let active = $('.btn-outline-info').hasClass('active');
      if(active){
        $('.btn-outline-info').removeClass('active');
      }
      this.parrafo = this.wpPastBiblica.acf.Item_4.contenido_item;
      this.download.url =this.wpPastBiblica.acf.Item_4.archivo_a_descargar;
    this.download.name= this.wpPastBiblica.acf.Item_4.titulo_item;
    }else if(btnId === 5){
      let active = $('.btn-outline-info').hasClass('active');
      if(active){
        $('.btn-outline-info').removeClass('active');
      }
      this.parrafo = this.wpPastBiblica.acf.Item_5.contenido_item;
      this.download.url =this.wpPastBiblica.acf.Item_5.archivo_a_descargar;
    this.download.name= this.wpPastBiblica.acf.Item_5.titulo_item;
    }else if(btnId === 6){
      let active = $('.btn-outline-info').hasClass('active');
      if(active){
        $('.btn-outline-info').removeClass('active');
      }
      this.parrafo = this.wpPastBiblica.acf.Item_6.contenido_item;
      this.download.url =this.wpPastBiblica.acf.Item_6.archivo_a_descargar;
    this.download.name= this.wpPastBiblica.acf.Item_6.titulo_item;
    }
    $(`#${btnId}`).addClass('active');
  }

}
