import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { usuario } from '../../interfaces/iusuario';
import { LocaldbService } from 'src/app/services/localdb.service';
import { Router } from '@angular/router';
=======
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { Usuario } from 'src/app/interfaces/iusuario';
import { LocaldbService } from 'src/app/services/localdb.service';
>>>>>>> 197795b97e903da8c88648c037af63b8b2f09a53

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

<<<<<<< HEAD
  usuario:usuario={
    username:'',
    password:'',
    nombre:'',
    apellido:''
  }
  constructor(private db:LocaldbService, private router:Router) { }
=======

  usr: Usuario = {
    username: '',
    password: '',
    nombre: '',
    apellido: ''
  }
  constructor(private db: LocaldbService,
    private toastController: ToastController,
    private alertController: AlertController,
    private router: Router) { }
>>>>>>> 197795b97e903da8c88648c037af63b8b2f09a53

  ngOnInit() {
  }

<<<<<<< HEAD
  onSubmit(){

    this.db.guardar(this.usuario.username, this.usuario);
    this.router.navigate(['login/']);
=======
  async presentToast(position: 'top' | 'middle' | 'bottom') {
    const toast = await this.toastController.create({
      message: 'El usuario ya existe',
      duration: 1500,
      position: position,
      color: 'danger',
      header: 'Error!',
      cssClass: 'textoast',
    });

    await toast.present();
  }

  registrar() {
    let buscado = this.db.obtener(this.usr.username)
   
    buscado.then(datos => {
      if (datos === null) {
        this.db.guardar(this.usr.username, this.usr);
        //this.router.navigate(['/login'])
        this.presentAlert();
      } else {
        this.presentToast('top');

      }
    });
   
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Usuario Registrado con Exito!!!',
      subHeader: '',
      message: 'Ahora puedes utilizar la aplicación',
      buttons: [{
        text:'Continuar',
        handler:()=>{
          
          this.router.navigate(['/login']);
        }
      }]
    });

    await alert.present();
>>>>>>> 197795b97e903da8c88648c037af63b8b2f09a53
  }
}
