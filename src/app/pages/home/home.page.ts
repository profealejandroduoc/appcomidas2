
import { Component, OnInit } from '@angular/core';
import { Categorias, Categoria } from 'src/app/interfaces/comidas';
import { DataserviceService } from 'src/app/services/dataservice.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {


  listaCategorias:Categoria[]=[];


  constructor(private dataService: DataserviceService) { }

  ngOnInit() {
    console.log("On Init");
    this.dataService.getCategorias().subscribe(datos => {
      console.log(datos);
      this.listaCategorias.push(...datos.categories);
      console.log("MI LISTA");
      console.log(this.listaCategorias);

    });

  }





}
