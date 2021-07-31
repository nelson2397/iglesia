import { Component, OnInit } from '@angular/core';
import { DataWordPressService } from 'src/app/services/data-word-press.service';


@Component({
  selector: 'app-avisos',
  templateUrl: './avisos.component.html',
  styleUrls: ['./avisos.component.scss']
})
export class AvisosComponent implements OnInit {

  wpAvisos:any;

  constructor( private DataServices:DataWordPressService) { }

  ngOnInit(): void {

    this.DataServices.getAvisosParroquiales('pages').subscribe(resp=>{
      this.wpAvisos=resp;
    })
    
   
  }

}
