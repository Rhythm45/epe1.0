import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Rutina2Page } from '../rutina2/rutina2';
/**
 * Generated class for the Dia2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dia2',
  templateUrl: 'dia2.html',
})
export class Dia2Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


  abrirRutina2(){

    this.navCtrl.push(Rutina2Page);

}

  ionViewDidLoad() {
    console.log('ionViewDidLoad Dia2Page');
  }

}
