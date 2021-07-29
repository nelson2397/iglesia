import { Component, OnInit } from '@angular/core';
import { DataWordPressService } from 'src/app/services/data-word-press.service';

@Component({
  selector: 'app-quienes-somos',
  templateUrl: './quienes-somos.component.html',
  styleUrls: ['./quienes-somos.component.scss']
})
export class QuienesSomosComponent implements OnInit {

  varQS : any;
  constructor(private DataServices: DataWordPressService) { }

  ngOnInit(): void {
    this.DataServices.GetQuienesSomos('pages').subscribe(resp => {
      this.varQS = resp;
    })
  }

}
