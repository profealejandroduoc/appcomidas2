import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataserviceService } from 'src/app/services/dataservice.service';
import { Receta } from '../../interfaces/icomidas';
import { LocaldbService } from 'src/app/services/localdb.service';

@Component({
  selector: 'app-receta',
  templateUrl: './receta.page.html',
  styleUrls: ['./receta.page.scss'],
})
export class RecetaPage implements OnInit {

  id_comida:string="";

  iconofav="heart-outline";

  listaReceta: Receta[] = [];
  constructor(private router: Router, 
    private srv: DataserviceService,
    private db:LocaldbService
  ) { }

  ngOnInit() {


    let x = this.router.getCurrentNavigation()?.extras.state;
    if (x !== undefined) {
      console.log(x["id_rec"]);
      
      this.srv.getReceta(x["id_rec"]).subscribe(datos=>{
        console.log(datos);
        this.listaReceta.push(...datos.meals);
        this.id_comida=this.listaReceta[0].idMeal;
        this.buscarFav(this.id_comida);
      })
    }
    console.log("INICIO ON INIT");
    console.log(this.id_comida);
    this.buscarFav(this.id_comida);
    console.log("FIN ON INIT");
  }

  favoritos(){
    console.log(this.id_comida);
    this.db.guardar(this.id_comida,this.listaReceta[0]);
    this.iconofav="heart"
  }

  buscarFav(id:string){
   let valor=this.db.obtener(id);
   //Solo para mostrar en consola
   valor.then(datos=>{
    console.log(datos);
    if(datos!==null){
      this.iconofav="heart"
    }

   })
  }
}
