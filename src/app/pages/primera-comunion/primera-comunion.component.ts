import { Component, OnInit } from '@angular/core';
import { DataWordPressService } from 'src/app/services/data-word-press.service';

@Component({
  selector: 'app-primera-comunion',
  templateUrl: './primera-comunion.component.html',
  styleUrls: ['./primera-comunion.component.scss']
})
export class PrimeraComunionComponent implements OnInit {

  wpPrimeraComunion:any;
  constructor( private DataServices : DataWordPressService) { }

  ngOnInit(): void {
    this.DataServices.GetPrimeraComunion('sacramentos').subscribe(resp =>{
      this.wpPrimeraComunion=resp;
    })
  }

}
