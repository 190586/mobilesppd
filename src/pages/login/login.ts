import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { GlobalService } from '../../providers/services/global-service';
import { Storage } from '@ionic/storage';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { KegiatanPage } from '../kegiatan/kegiatan';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  credential: FormGroup;
  constructor(
    public navCtrl: NavController, public navParams: NavParams, 
    private storage:Storage, private globalService:GlobalService,
    private formBuilder: FormBuilder
  ) {
    this.resetform();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
    this.storage.remove('userinfo');
  }

  resetform(){
    this.credential = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login(){
    console.log(this.credential.value);
    if(this.globalService.login(this.credential.value) == true){
      this.navCtrl.setRoot(KegiatanPage);
    }else{
      this.globalService.presentAlert('Warning!', 'User atau password yang Anda masukkan salah');
      this.resetform();
    }
  }

}
