import { Component, OnInit } from '@angular/core';
import { usuario } from '../../interfaces/iusuario';
import { LocaldbService } from 'src/app/services/localdb.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  usuario:usuario={
    username:'',
    password:'',
    nombre:'',
    apellido:''
  }
  constructor(private db:LocaldbService, private router:Router) { }

  ngOnInit() {
  }

  onSubmit(){

    this.db.guardar(this.usuario.username, this.usuario);
    this.router.navigate(['login/']);
  }
}
