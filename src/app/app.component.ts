import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  icons: string[];
  pages: Array<{ title: string, component: any}>;
  
  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();


    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    'american-football', 'boat', 'bluetooth', 'build'];

    // used for an example of ngFor and navigation
    this.pages = [
        { title: 'Plan de entrenamiento:', component: HomePage },
        { title: 'Informe:', component: ListPage },
        { title: 'Seleccionar plan', component: ListPage },
        { title: 'Recordatorio', component: ListPage },
        { title: 'Opcion de idiomas', component: ListPage },
        { title: 'Ajustes', component: ListPage },
        { title: 'Reiniciar progreso', component: ListPage }
      ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
