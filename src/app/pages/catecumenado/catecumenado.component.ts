import { Component, OnInit } from '@angular/core';
import { DataWordPressService } from 'src/app/services/data-word-press.service';

@Component({
  selector: 'app-catecumenado',
  templateUrl: './catecumenado.component.html',
  styleUrls: ['./catecumenado.component.scss']
})
export class CatecumenadoComponent implements OnInit {

  wpCatecumenado:any;

  constructor(private DataServices:DataWordPressService) { }

  ngOnInit(): void {
    this.DataServices.GetCatecumenado('sacramentos').subscribe(resp =>{
      this.wpCatecumenado=resp;
    })
  }

}
