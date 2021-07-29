import { Component, OnInit } from '@angular/core';
import { DataWordPressService } from 'src/app/services/data-word-press.service';

@Component({
  selector: 'app-confirmacion',
  templateUrl: './confirmacion.component.html',
  styleUrls: ['./confirmacion.component.scss']
})
export class ConfirmacionComponent implements OnInit {

  wpConfirmacion:any;

  constructor(private DataServices:DataWordPressService) { }

  ngOnInit(): void {
    this.DataServices.GetConfirmacion('sacramentos').subscribe(resp => {
      this.wpConfirmacion=resp;
    })
  }

}
