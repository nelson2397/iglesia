import { Component, OnInit } from '@angular/core';
import { DataWordPressService } from '../../services/data-word-press.service';

declare var $:any;
@Component({
  selector: 'app-templo-parroquial',
  templateUrl: './templo-parroquial.component.html',
  styleUrls: ['./templo-parroquial.component.scss']
})
export class TemploParroquialComponent implements OnInit {
  dataTemploParroquial: any;

  constructor(private dataWordPress: DataWordPressService) { }

  ngOnInit(): void {
    this.dataWordPress.getTemploParroquial('pages').subscribe(resp => {
      this.dataTemploParroquial = resp;
    })
  }

}
