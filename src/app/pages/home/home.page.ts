import { Component, OnInit } from '@angular/core';
import { DataserviceService } from 'src/app/services/dataservice.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private dataService: DataserviceService) { }


  ngOnInit() {
    console.log("On Init");
    this.dataService.getCategorias().subscribe(datos => {
      console.log(datos);
    });

  }





}
