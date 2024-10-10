
import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Categoria } from 'src/app/interfaces/icomidas';
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
   
  



    });

  }

  verComida(tipo:string){
    let xtr:NavigationExtras={
      state:{
        tipo_categoria:tipo,
      
      }
    }

    this.router.navigate(['comidas/'],xtr);
  }





}
