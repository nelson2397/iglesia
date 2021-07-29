import { Component, OnInit } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-solemnidades',
  templateUrl: './solemnidades.component.html',
  styleUrls: ['./solemnidades.component.scss']
})
export class SolemnidadesComponent implements OnInit {

  fotos:string;

  constructor() { }

  ngOnInit(): void {
    this.fotos="";
  }


  cambiarFotos(btnId: number){
    if (btnId === 1){
      let active = $('.btn-outline-info').hasClass('active');
      if(active){
        $('.btn-outline-info').removeClass('active');
      }
      this.fotos = "1";
    }
    else if (btnId === 2){
      let active = $('.btn-outline-info').hasClass('active');
      if(active){
        $('.btn-outline-info').removeClass('active');
      }
      this.fotos = "2";
    }
    else if (btnId === 3){
      let active = $('.btn-outline-info').hasClass('active');
      if(active){
        $('.btn-outline-info').removeClass('active');
      }
      this.fotos = "3";
    }
    else if (btnId === 4){
      let active = $('.btn-outline-info').hasClass('active');
      if(active){
        $('.btn-outline-info').removeClass('active');
      }
      this.fotos = "4";
    }
    else if (btnId === 5){
      let active = $('.btn-outline-info').hasClass('active');
      if(active){
        $('.btn-outline-info').removeClass('active');
      }
      this.fotos = "5";
    }
    else if (btnId === 6){
      let active = $('.btn-outline-info').hasClass('active');
      if(active){
        $('.btn-outline-info').removeClass('active');
      }
      this.fotos = "6";
    }
    else if (btnId === 7){
      let active = $('.btn-outline-info').hasClass('active');
      if(active){
        $('.btn-outline-info').removeClass('active');
      }
      this.fotos = "7";
    }
    $(`#${btnId}`).addClass('active');
  }

  
}
