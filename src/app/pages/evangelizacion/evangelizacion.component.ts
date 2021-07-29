import { Component, OnInit } from '@angular/core';
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

  constructor() { }

  ngOnInit(): void {
    this.parrafo="1";
    this. download.url="./assets/Documentos/evangelizacion/historia.docx";
    this.download.name = "Historia.docx";
  }

  cambiarTexto(btnId: number){
    if(btnId === 1){
      let active = $('.btn-outline-info').hasClass('active');
      if(active){
        $('.btn-outline-info').removeClass('active');
      }
      this.parrafo="1";
      this. download.url="./assets/Documentos/evangelizacion/historia.docx";
    this.download.name = "Historia.docx";
    }else if (btnId === 2){
      let active = $('.btn-outline-info').hasClass('active');
      if(active){
        $('.btn-outline-info').removeClass('active');
      }
      this.parrafo="2";
      this. download.url="./assets/Documentos/evangelizacion/2.docx";
    this.download.name = "2.docx";
    }
    else if (btnId === 3){
      let active = $('.btn-outline-info').hasClass('active');
      if(active){
        $('.btn-outline-info').removeClass('active');
      }
      this.parrafo="3";
      this. download.url="./assets/Documentos/evangelizacion/3.docx";
    this.download.name = "3.docx";
    }
    else if (btnId === 4){
      let active = $('.btn-outline-info').hasClass('active');
      if(active){
        $('.btn-outline-info').removeClass('active');
      }
      this.parrafo="4";
      this. download.url="./assets/Documentos/evangelizacion/4.docx";
    this.download.name = "4.docx";
    }
    else if (btnId === 5){
      let active = $('.btn-outline-info').hasClass('active');
      if(active){
        $('.btn-outline-info').removeClass('active');
      }
      this.parrafo="5";
      this. download.url="./assets/Documentos/evangelizacion/5.docx";
    this.download.name = "5.docx";
    }
    else if (btnId === 6){
      let active = $('.btn-outline-info').hasClass('active');
      if(active){
        $('.btn-outline-info').removeClass('active');
      }
      this.parrafo="6";
      this. download.url="./assets/Documentos/evangelizacion/6.docx";
    this.download.name = "6.docx";
    }
    else if (btnId === 7){
      let active = $('.btn-outline-info').hasClass('active');
      if(active){
        $('.btn-outline-info').removeClass('active');
      }
      this.parrafo="7";
      this. download.url="./assets/Documentos/evangelizacion/7.docx";
    this.download.name = "7.docx";
    }
    else if (btnId === 8){
      let active = $('.btn-outline-info').hasClass('active');
      if(active){
        $('.btn-outline-info').removeClass('active');
      }
      this.parrafo="8";
      this. download.url="./assets/Documentos/evangelizacion/8.docx";
    this.download.name = "8.docx";
    }
    $(`#${btnId}`).addClass('active');
    }
    
  }


