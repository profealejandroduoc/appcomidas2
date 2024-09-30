
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categorias, Categoria } from 'src/app/interfaces/comidas';
import { DataserviceService } from 'src/app/services/dataservice.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {


  listaCategorias:Categoria[]=[];


  constructor(private dataService: DataserviceService, private router:Router) { }

  ngOnInit() {
    console.log("On Init");
    this.dataService.getCategorias().subscribe(datos => {
      console.log(datos);
      this.listaCategorias.push(...datos.categories);
      console.log("MI LISTA");
      console.log(this.listaCategorias);

    });

  }

  verComida(tipo:string){
    this.dataService.getComidasxCategoria(tipo).subscribe(datos=>{
      console.log(datos);
      this.router.navigate(['/comidas']);

    })
  }





}
