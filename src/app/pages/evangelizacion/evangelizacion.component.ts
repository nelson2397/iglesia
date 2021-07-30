import { Component, OnInit } from '@angular/core';
import { DataWordPressService } from 'src/app/services/data-word-press.service';
declare var $:any;
@Component({
  selector: 'app-evangelizacion',
  templateUrl: './evangelizacion.component.html',
  styleUrls: ['./evangelizacion.component.scss']
})
export class EvangelizacionComponent implements OnInit {

  parrafo:string;
  download={
    url:"",
    name:""
  }
  dataEvangelizacion: any;

  constructor(private dataWpServices: DataWordPressService) { }

  ngOnInit(): void {
    this.dataWpServices.getProgramaEvangelizacion('pages').subscribe(resp => {
      this.dataEvangelizacion = resp;
    })
    setTimeout(() => {
      this.parrafo= this.dataEvangelizacion.acf.Item_1.contenido_item;
      this. download.url= this.dataEvangelizacion.acf.Item_1.archivo_a_descargar;
      this.download.name = `${this.dataEvangelizacion.acf.Item_1.titulo_item}.pdf`;
    }, 3000);
  }

  cambiarTexto(btnId: number){
    if(btnId === 1){
      let active = $('.btn-outline-info').hasClass('active');
      if(active){
        $('.btn-outline-info').removeClass('active');
      }
      this.parrafo= this.dataEvangelizacion.acf.Item_1.contenido_item;
      this. download.url= this.dataEvangelizacion.acf.Item_1.archivo_a_descargar;
    this.download.name = `${this.dataEvangelizacion.acf.Item_1.titulo_item}.pdf`;
    }else if (btnId === 2){
      let active = $('.btn-outline-info').hasClass('active');
      if(active){
        $('.btn-outline-info').removeClass('active');
      }
      this.parrafo= this.dataEvangelizacion.acf.Item_2.contenido_item;
      this. download.url= this.dataEvangelizacion.acf.Item_2.archivo_a_descargar;
    this.download.name = `${this.dataEvangelizacion.acf.Item_1.titulo_item}.pdf`;
    }
    else if (btnId === 3){
      let active = $('.btn-outline-info').hasClass('active');
      if(active){
        $('.btn-outline-info').removeClass('active');
      }
      this.parrafo= this.dataEvangelizacion.acf.Item_3.contenido_item;
      this. download.url= this.dataEvangelizacion.acf.Item_3.archivo_a_descargar;
    this.download.name = `${this.dataEvangelizacion.acf.Item_3.titulo_item}.pdf`;
    }
    else if (btnId === 4){
      let active = $('.btn-outline-info').hasClass('active');
      if(active){
        $('.btn-outline-info').removeClass('active');
      }
      this.parrafo= this.dataEvangelizacion.acf.Item_4.contenido_item;
      this. download.url= this.dataEvangelizacion.acf.Item_4.archivo_a_descargar;
    this.download.name = `${this.dataEvangelizacion.acf.Item_4.titulo_item}.pdf`;
    }
    else if (btnId === 5){
      let active = $('.btn-outline-info').hasClass('active');
      if(active){
        $('.btn-outline-info').removeClass('active');
      }
      this.parrafo= this.dataEvangelizacion.acf.Item_5.contenido_item;
      this. download.url= this.dataEvangelizacion.acf.Item_5.archivo_a_descargar;
    this.download.name = `${this.dataEvangelizacion.acf.Item_5.titulo_item}.pdf`;
    }
    else if (btnId === 6){
      let active = $('.btn-outline-info').hasClass('active');
      if(active){
        $('.btn-outline-info').removeClass('active');
      }
      this.parrafo= this.dataEvangelizacion.acf.Item_6.contenido_item;
      this. download.url= this.dataEvangelizacion.acf.Item_6.archivo_a_descargar;
    this.download.name = `${this.dataEvangelizacion.acf.Item_6.titulo_item}.pdf`;
    }
    else if (btnId === 7){
      let active = $('.btn-outline-info').hasClass('active');
      if(active){
        $('.btn-outline-info').removeClass('active');
      }
      this.parrafo= this.dataEvangelizacion.acf.Item_7.contenido_item;
      this. download.url= this.dataEvangelizacion.acf.Item_7.archivo_a_descargar;
    this.download.name = `${this.dataEvangelizacion.acf.Item_7.titulo_item}.pdf`;
    }
    else if (btnId === 8){
      let active = $('.btn-outline-info').hasClass('active');
      if(active){
        $('.btn-outline-info').removeClass('active');
      }
      this.parrafo= this.dataEvangelizacion.acf.Item_8.contenido_item;
      this. download.url= this.dataEvangelizacion.acf.Item_8.archivo_a_descargar;
    this.download.name = `${this.dataEvangelizacion.acf.Item_8.titulo_item}.pdf`;
    }
    $(`#${btnId}`).addClass('active');
    }
    
  }


