import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import {AngularFireDatabase} from 'angularfire2/database';
import { User } from '../model/user';
import * as firebase from 'firebase/app';

@Injectable()
export class AuthService {
  user: Observable<firebase.User>;

  constructor(private angularFireAuth: AngularFireAuth, public afd : AngularFireDatabase) {
    this.user = angularFireAuth.authState;
  }

  createUser(user: User) {
    return this.angularFireAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
  }

  signIn(user: User) {
    return this.angularFireAuth.auth.signInWithEmailAndPassword(user.email, user.password);
  }

  signOut() {
    return this.angularFireAuth.auth.signOut();
  }

  resetPassword(email: string) {
    return this.angularFireAuth.auth.sendPasswordResetEmail(email);
  }

  getUserByEmail(email: string):any {
        return this.afd.list('usuario', {
            query: {
                orderByChild: 'email',
                equalTo: email
            }
        });
    }
}