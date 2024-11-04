import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { Comida } from 'src/app/interfaces/icomidas';
import { DataserviceService } from 'src/app/services/dataservice.service';

@Component({
  selector: 'app-comidas',
  templateUrl: './comidas.page.html',
  styleUrls: ['./comidas.page.scss'],
})
export class ComidasPage implements OnInit {

  loaded=false;
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
      this.loaded=true;


    })
  }

  verReceta(id:string){
    
    let x:NavigationExtras={
      state:{
        id_rec:id
      }
    }
    this.router.navigate(['receta/'],x);
  }


}
