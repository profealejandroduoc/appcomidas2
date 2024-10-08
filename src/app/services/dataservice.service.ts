import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Categorias, Comidas, Recetas} from '../interfaces/icomidas';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  constructor(private httpclient:HttpClient) { }


  getCategorias(){
    return this.httpclient.get<Categorias>(`https://www.themealdb.com/api/json/v1/1/categories.php`);
  }

  getComidasxCategoria(tipo:string){
   
    return this.httpclient.get<Comidas>(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${tipo}`);
  }


  getReceta(id:string){
    return this.httpclient.get<Recetas>(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
  }
}
