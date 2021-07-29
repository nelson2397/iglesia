import { Component, OnInit } from '@angular/core';
import { DataWordPressService } from 'src/app/services/data-word-press.service';

@Component({
  selector: 'app-familia-matrimonio',
  templateUrl: './familia-matrimonio.component.html',
  styleUrls: ['./familia-matrimonio.component.scss']
})
export class FamiliaMatrimonioComponent implements OnInit {

  wpFamilia:any;
  constructor(private DataServices:DataWordPressService) { }

  ngOnInit(): void {
    this.DataServices.GetFamilia('sacramentos').subscribe(resp =>{
      this.wpFamilia=resp;
    })
  }

}
