import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  userdata:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private storage:Storage) {
    this.resetProfile();
  }

  resetProfile(){
    this.userdata = {
      username:'',
      fullname:''
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
    this.getUserData();
  }

  getUserData(){
    this.storage.get('userinfo').then((val) => {
      this.userdata = JSON.parse(val);
      if(this.userdata == null){
        this.resetProfile();
      }
    });
    
  }
}
