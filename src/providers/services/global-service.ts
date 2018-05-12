import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { AlertController, ToastController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { LoadingController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';


const authUrl = 'http://localhost/auth/api/auth/login';
const httpOptions = { headers: new HttpHeaders({ 'Content-Type':  'application/json' }) };

@Injectable()
export class GlobalService {

  constructor(
    public http: HttpClient, 
    public loadingCtrl: LoadingController,
    public alertCtrl:AlertController,
    public toastCtrl:ToastController,
    private storage:Storage
  ) {
    //console.log('Hello GlobalService Provider');
  }


  // login(username: string, password: string): Observable<any>{
  //   return this.http.post<any>(authUrl, { username: username, password: password }, httpOptions)
  //     .map(user => {
  //         if (user) {
  //             this.storage.set('userinfo', JSON.stringify(user));
  //         }
  //         return user;
  //     });
  // }

  login(credential){
    let boolResult = false;
    if(credential.username == 'admin' && credential.password == 'admin'){
      this.storage.set('userinfo', JSON.stringify({ username: credential.username, fullname: 'Hendrik Budiman' }));
      boolResult = true;
    }
    return boolResult;
  }

  getListProvinsi(): Observable<any>{
    return this.http.get('assets/fakedata/provinsi.json');
  }

  getListKota(): Observable<any>{
    return this.http.get('assets/fakedata/kota.json');
  }

  presentLoading() {
    let loader = this.loadingCtrl.create({
      content: "Mohon tunggu...",
      duration: 3000
    });
    loader.present();
  }

  presentToast(m) {
    let toast = this.toastCtrl.create({
      message: m,
      duration: 3000
    });
    toast.present();
  }

  presentAlert(t, s) {
    let alert = this.alertCtrl.create({
      title: t,
      subTitle: s,
      buttons: ['Dismiss']
    });
    alert.present();
  }

  getNowMonth(){
    let time = new Date().getMonth() + 1;
    return time;
  }

  getNowYear(){
    let time = new Date().getFullYear();
    return time;
  }
}
