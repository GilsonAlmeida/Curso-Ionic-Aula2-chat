import { Mensagem } from './../../model/mensagem';
import { AuthService } from './../../service/AuthService';
import { AngularFireAuth } from 'angularfire2/auth';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';


@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {

  nomeUsuario: string;
  lista: FirebaseListObservable<any>;
  mensagem: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public af: AngularFireDatabase, public afa :AngularFireAuth, public authService: AuthService) {

    this.lista=af.list("https://chat-c5f54.firebaseio.com/chat")

    this.afa.authState.subscribe(auth1 => {
      
        if(auth1) {
          //  const usuario = this.authService.getUserByEmail(auth1.email);
            //usuario.subscribe(u =>  {
              
              this.nomeUsuario = auth1.email;
            
          //}//);
        }
    });

  }

  enviarMsg() {



    let msg:Mensagem = {
      usuario: this.nomeUsuario,
      texto: this.mensagem,
      data: new Date().toString()
    };

    this.lista.push(msg).then(()=> {
      this.mensagem = "";
      }
    )

  }

}
