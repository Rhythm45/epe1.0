import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ToastController} from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-imc',
  templateUrl: 'imc.html',
})
export class ImcPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController) {
  }

  altura: any;
  peso: any;
  alturatotal: any;
  resultado: any;

  calcular(){
    this.alturatotal= (parseFloat(this.altura)*parseFloat(this.altura));
    this.resultado= (parseFloat(this.peso)/parseFloat(this.alturatotal));


    if(this.resultado <= 18){
      let toast2 = this.toastCtrl.create({
        message: 'Peso bajo. Necesario valorar signos de desnutrición Su IMC es: '+this.resultado+'',
        duration: 9000,
        position: 'bottom'})
        toast2.present();}

    else if(this.resultado < 25){
          let toast2 = this.toastCtrl.create({
            message: 'Usted se encuentra normal en su peso. Su IMC es: '+this.resultado+'',
            duration: 9000,
            position: 'bottom'})
            toast2.present();}

    else if  (this.resultado < 27){
      let toast2 = this.toastCtrl.create({
        message: 'Usted se encuentra en estado de Sobrepeso. Su IMC es: '+this.resultado+'',
        duration: 9000,
        position: 'bottom'})
        toast2.present();}      

     else if  (this.resultado < 30){
          let toast2 = this.toastCtrl.create({
            message: 'Usted se encuentra en estado de Obesidad. Su IMC es: '+this.resultado+'',
            duration: 9000,
            position: 'bottom'})
            toast2.present();}  

    else if  (this.resultado < 30){
        let toast2 = this.toastCtrl.create({
        message: 'Obesidad grado I. Riesgo relativo alto para desarrollar enfermedades cardiovasculares. Su IMC es: '+this.resultado+'',
        duration: 9000,
        position: 'bottom'})
        toast2.present();}         

        else if  (this.resultado < 40){
          let toast2 = this.toastCtrl.create({
          message: 'Obesidad grado II. Riesgo relativo muy alto para el desarrollo de enfermedades cardiovasculares. Su IMC es: '+this.resultado+'',
          duration: 9000,
          position: 'bottom'})
          toast2.present();} 
    
          else if  (this.resultado > 39){
            let toast2 = this.toastCtrl.create({
            message: 'Obesidad grado III Extrema o Mórbida. Riesgo relativo extremadamente alto para el desarrollo de enfermedades cardiovasculares Su IMC es: '+this.resultado+'',
            duration: 9000,
            position: 'bottom'})
            toast2.present();}       
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ImcPage');
  }

}
