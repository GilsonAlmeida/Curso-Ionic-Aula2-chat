import { AngularFireDatabase } from 'angularfire2/database';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AngularFireModule } from "angularfire2";
import { ChatPage } from '../pages/chat/chat';

export const firebaseConfig = {

    apiKey: "AIzaSyDEoztwqOQ91PVvMXTndTLMOKbzrfvgeaI",
    authDomain: "chat-5ec9d.firebaseapp.com",
    databaseURL: "https://chat-5ec9d.firebaseio.com",
    projectId: "chat-5ec9d",
    storageBucket: "chat-5ec9d.appspot.com",
    messagingSenderId: "689473812030"

};


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ChatPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ChatPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireDatabase,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
