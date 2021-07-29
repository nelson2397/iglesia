import { Component, OnInit } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-oraciones',
  templateUrl: './oraciones.component.html',
  styleUrls: ['./oraciones.component.scss']
})
export class OracionesComponent implements OnInit {

  parrafo:string;
  download ={
    url :"",
    name: ""

  }

  constructor() { }

  ngOnInit(): void {

    this.parrafo="";
    this.download.name ="";
    this.download.url="";

  }

  cambiarTexto(btnId :number){

    if(btnId ===1){
      let active = $('.btn-outline-info').hasClass('active');
      if(active){
        $('.btn-outline-info').removeClass('active');
      }
      this.parrafo ="1";
      this.download.url="1";
      this.download.name="1";
    }
    else if(btnId ===2){
      let active = $('.btn-outline-info').hasClass('active');
      if(active){
        $('.btn-outline-info').removeClass('active');
      }
      this.parrafo ="2";
      this.download.url="2";
      this.download.name="2";
    }
    else if(btnId ===3){
      let active = $('.btn-outline-info').hasClass('active');
      if(active){
        $('.btn-outline-info').removeClass('active');
      }
      this.parrafo ="3";
      this.download.url="3";
      this.download.name="3";
    }
    else if(btnId ===4){
      let active = $('.btn-outline-info').hasClass('active');
      if(active){
        $('.btn-outline-info').removeClass('active');
      }
      this.parrafo ="4";
      this.download.url="4";
      this.download.name="4";
    }
    else if(btnId ===5){
      let active = $('.btn-outline-info').hasClass('active');
      if(active){
        $('.btn-outline-info').removeClass('active');
      }
      this.parrafo ="5";
      this.download.url="5";
      this.download.name="5";
    }
    else if(btnId ===6){
      let active = $('.btn-outline-info').hasClass('active');
      if(active){
        $('.btn-outline-info').removeClass('active');
      }
      this.parrafo ="6";
      this.download.url="6";
      this.download.name="6";
    }
    $(`#${btnId}`).addClass('active');

  }

  
}
