import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';

@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {

  lista: FirebaseListObservable<any>;
  mensagem: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public af: AngularFireDatabase) {
    this.lista=af.list("https://chat-5ec9d.firebaseio.com/chat")
  }

  enviarMsg() {
    let msg = {
      texto: this.mensagem,
      data: new Date()
    };
    this.lista.push(msg).then(()=> {
      this.mensagem = "";
      }
    )
  }

}
