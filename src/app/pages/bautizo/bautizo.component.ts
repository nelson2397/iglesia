import { Component, OnInit } from '@angular/core';
import { DataWordPressService } from 'src/app/services/data-word-press.service';

@Component({
  selector: 'app-bautizo',
  templateUrl: './bautizo.component.html',
  styleUrls: ['./bautizo.component.scss']
})
export class BautizoComponent implements OnInit {

  wpBautizo:any;

  constructor( private DataServices : DataWordPressService) { }

  ngOnInit(): void {
    this.DataServices.GetBautizo('sacramentos').subscribe(resp =>{
      this.wpBautizo=resp;
    })
  }

}
