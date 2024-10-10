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
      })
    }
  }

  favoritos(){
    console.log(this.id_comida);
    this.db.guardar(this.id_comida,"Holdffsfdsa");
  }
}
