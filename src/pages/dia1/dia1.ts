import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Rutina1Page } from '../rutina1/rutina1';

@IonicPage()
@Component({
  selector: 'page-dia1',
  templateUrl: 'dia1.html',
})
export class Dia1Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  abrirRutina1(){

    this.navCtrl.push(Rutina1Page);

}
  ionViewDidLoad() {
    console.log('ionViewDidLoad Dia1Page');
  }

}
