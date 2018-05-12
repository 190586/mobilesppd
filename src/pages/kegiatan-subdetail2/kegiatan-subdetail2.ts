import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { KegiatanSubdetailPage } from '../kegiatan-subdetail/kegiatan-subdetail';

@Component({
  selector: 'page-kegiatan-subdetail2',
  templateUrl: 'kegiatan-subdetail2.html',
})
export class KegiatanSubdetail2Page {

  currentData:any = {};
  currentYear:number;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    if(this.navParams.get('item') != undefined){
      this.currentData = this.navParams.get('item');
      this.currentYear = new Date(this.currentData.TGL_MULAI).getFullYear();
      console.log(this.currentData);
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad KegiatanSubdetail2Page');
  }

  lihatLaporan(event:any){
    event.stopPropagation();
    this.navCtrl.push(KegiatanSubdetailPage, { item: this.currentData });
  }
}
