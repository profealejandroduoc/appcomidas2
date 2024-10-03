import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Comida } from 'src/app/interfaces/icomidas';
import { DataserviceService } from 'src/app/services/dataservice.service';

@Component({
  selector: 'app-comidas',
  templateUrl: './comidas.page.html',
  styleUrls: ['./comidas.page.scss'],
})
export class ComidasPage implements OnInit {

  titulo:string=""
  listaComidas:Comida[]=[];

  constructor(private router:Router,private dataService:DataserviceService) { }

  ngOnInit() {
    let datosextras=this.router.getCurrentNavigation()?.extras.state;
    if(datosextras!==undefined){
      console.log(datosextras["tipo_categoria"]);
      this.titulo=datosextras["tipo_categoria"];
      this.cargarComidas(datosextras["tipo_categoria"]);
    }
  }

  cargarComidas(tipo:string){
    this.dataService.getComidasxCategoria(tipo).subscribe(datos=>{
      console.log(datos);
      this.listaComidas.push(...datos.meals);


    })
  }

  verReceta(id:string){
    console.log(id);
  }


}
