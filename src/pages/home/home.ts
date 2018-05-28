import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlimentacionPage } from '../alimentacion/alimentacion';
import { EjerciciosPage } from '../ejercicios/ejercicios';
import { DescansoPage } from '../descanso/descanso';
import { AguaPage } from '../agua/agua';
import { ImcPage } from '../imc/imc';
import { LeerPage } from '../leer/leer';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  abrirAlimentacion(){

    this.navCtrl.push(AlimentacionPage);

}

  abrirEjercicios(){

    this.navCtrl.push(EjerciciosPage);

  }

  abrirDescanso(){

    this.navCtrl.push(DescansoPage);

  }

  abrirAgua(){

    this.navCtrl.push(AguaPage);

  }

  abrirImc(){

    this.navCtrl.push(ImcPage);

  }

  Leer(){

    this.navCtrl.push(LeerPage);

  }
}
