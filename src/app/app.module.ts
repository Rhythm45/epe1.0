import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { AlimentacionPage } from '../pages/alimentacion/alimentacion';
import { EjerciciosPage } from '../pages/ejercicios/ejercicios';
import { AguaPage } from '../pages/agua/agua';
import { DescansoPage } from '../pages/descanso/descanso';
import { ImcPage } from '../pages/imc/imc';
import { LeerPage } from '../pages/leer/leer';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    AlimentacionPage,
    EjerciciosPage,
    DescansoPage,
    ImcPage,
    AguaPage,
    LeerPage
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    AlimentacionPage,
    EjerciciosPage,
    DescansoPage,
    ImcPage,
    AguaPage,
    LeerPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
