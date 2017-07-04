import { AngularFireDatabase } from 'angularfire2/database';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AuthService } from '../service/AuthService';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AngularFireModule } from "angularfire2";
import { ChatPage } from '../pages/chat/chat';
import { LoginPage } from '../pages/login/login';
import { AngularFireAuth } from 'angularfire2/auth';
export const firebaseConfig = {

    apiKey: "AIzaSyAUDCHs3t8sSDfftsdX1hT4dizYe7XmL_o",
    authDomain: "chat-c5f54.firebaseapp.com",
    databaseURL: "https://chat-c5f54.firebaseio.com",
    projectId: "chat-c5f54",
    storageBucket: "chat-c5f54.appspot.com",
    messagingSenderId: "249075345837"

};


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ChatPage,
    LoginPage
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
    ChatPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireDatabase,
    AuthService,
    AngularFireAuth,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
