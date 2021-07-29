import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-templo-parroquial',
  templateUrl: './templo-parroquial.component.html',
  styleUrls: ['./templo-parroquial.component.scss']
})
export class TemploParroquialComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(document).ready(function() {
      $("#gallery").unitegallery();
  });
  }

}
