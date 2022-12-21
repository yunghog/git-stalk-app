import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { GithubAuthProvider } from 'firebase/auth';
import { AngularFireDatabase } from '@angular/fire/compat/database';

interface User {
  id: string;
  email: string;
  username: string;
  name: string;
}
export interface SignupData {
  email: string;
  username: string;
  name: string;
  password: string;
}
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  provider = new GithubAuthProvider();
  constructor(public afAuth: AngularFireAuth, public router: Router, private db: AngularFireDatabase) {}
  SendVerificationMail() {
    return this.afAuth.currentUser.then((user) => {
      return user.sendEmailVerification();
    });
  }
  SignUp(data: SignupData) {
    return this.afAuth.createUserWithEmailAndPassword(data.email, data.password);
  }
  SignIn(email: string, password: string): Promise<firebase.default.auth.UserCredential> {
    return this.afAuth.signInWithEmailAndPassword(email, password);
  }
  SignupGithub() {
    return this.afAuth.signInWithPopup(this.provider);
  }
  SigninGithub() {
    return this.afAuth.signInWithPopup(this.provider);
  }
  addUser(data: SignupData, id: string) {
    let user: User = {
      name: data.name,
      username: data.username,
      email: data.email,
      id: id,
    };
    this.db.list('/users').set(id, user);
  }
}
