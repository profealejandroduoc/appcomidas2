import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Categorias, Comidas} from '../interfaces/comidas';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  constructor(private httpclient:HttpClient) { }


  getCategorias(){
    return this.httpclient.get<Categorias>(`https://www.themealdb.com/api/json/v1/1/categories.php`);
  }

  getComidasxCategoria(tipo:string){
    console.log(tipo);
    return this.httpclient.get<Comidas>(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${tipo}`);
  }
}
