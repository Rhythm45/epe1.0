import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ToastController} from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-rutina2',
  templateUrl: 'rutina2.html',
})
export class Rutina2Page {

  ImageArray: any =  [ ]; 

  constructor(public navCtrl: NavController, public toastCtrl: ToastController) {

    
    let toast2 = this.toastCtrl.create({
      message: 'Vamos vamos vamos!!',
      duration: 5000,
      position: 'bottom'})
      toast2.present();

    this.ImageArray =  [ 

      {'image' : 'https://www.yoamolascarteras.com/wp-content/uploads/2016/05/ejercicio-de-rodillas.gif'},
      {'image' : 'https://ugc.kn3.net/i/760x/http://www.nowloss.com/Weight_Loss_Workouts/pics/Exc.gif'},
      {'image' : 'http://www.canalgif.net/Gifs-animados/Deportes/Abdominales/Imagen-animada-Abdominales-03.gif'},
      {'image' : 'http://altorendimiento.com/wp-content/uploads/2017/05/9.-torsion-rusa-mancuerna.gif'},
      {'image' : 'https://i.pinimg.com/originals/92/c8/18/92c818e9c1d26a8ddcf5b84e7586ff05.gif'},
      {'image' : 'https://es.fitness.com/exercises/uploaded/1188427273_0703090355.gif'},
      {'image' : 'https://greatist.com/sites/default/files/styles/article_main/public/GLUTE-BRIDGE.gif?itok=mB6mHpaT'},
      {'image' : 'http://www.canalgif.net/Gifs-animados/Deportes/Abdominales/Imagen-animada-Abdominales-03.gifion'},
  ] 
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad Rutina2Page');
  }

}
