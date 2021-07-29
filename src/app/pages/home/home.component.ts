import { Component, OnInit } from '@angular/core';
import {DataWordPressService} from '../../services/data-word-press.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  imgHome: any;

  constructor(private DataServices: DataWordPressService) { }

  ngOnInit(): void {
    this.DataServices.GetInicio('pages').subscribe(resp => {

      this.imgHome= resp;
    })
  }

}
