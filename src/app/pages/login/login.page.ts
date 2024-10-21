
import { Component, OnInit } from '@angular/core';
import { usuario } from 'src/app/interfaces/iusuario';
import { LocaldbService } from 'src/app/services/localdb.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  usuario:usuario={
    username:'',
    password:'',
    nombre:'',
    apellido:''
  }
  constructor(private db:LocaldbService) { }

  ngOnInit() {
  }

  login(){
    let usr=this.db.obtener(this.usuario.username);
    if(usr!==undefined){
      usr.then(valores=>{
        console.log(valores);
      })
    }
  }
}
