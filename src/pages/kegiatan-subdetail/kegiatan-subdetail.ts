import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { KegiatanFotoPage } from '../kegiatan-foto/kegiatan-foto';
import { KegiatanPointPage } from '../kegiatan-point/kegiatan-point';

@Component({
  selector: 'page-kegiatan-subdetail',
  templateUrl: 'kegiatan-subdetail.html',
})
export class KegiatanSubdetailPage {

  currentData:any = {};
  currentDetail:any = {};
  currentYear:number;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    if(this.navParams.get('item') != undefined){
      this.currentData = this.navParams.get('item');
      console.log(this.currentData);
      this.currentYear = new Date(this.currentData.TGL_MULAI).getFullYear();
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad KegiatanSubdetailPage');
  }

  getAllFoto(event:any){
    event.stopPropagation();
    console.log('get all foto');
    this.navCtrl.push(KegiatanFotoPage, { item: this.currentData });
  }

  getAllPoint(event:any){
    event.stopPropagation();
    console.log('get all points');
    this.navCtrl.push(KegiatanPointPage, { item: this.currentData });
  }

}
