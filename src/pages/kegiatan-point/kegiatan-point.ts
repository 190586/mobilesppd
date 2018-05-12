import { Component } from '@angular/core';
import { trigger,style,transition,animate,keyframes,query,stagger } from '@angular/animations';
import { NavController, NavParams } from 'ionic-angular';
import { GlobalService } from '../../providers/services/global-service';
import { KegiatanService } from './../../providers/services/kegiatan-service';
import { InputUraianPage } from '../input-uraian/input-uraian';

@Component({
  selector: 'page-kegiatan-point',
  templateUrl: 'kegiatan-point.html',
  animations: [
    trigger('listAnimation', [
      transition('* => *', [
        query(':enter', style({ opacity: 0 }), {optional: true}),
        query(':enter', stagger('300ms', [
          animate('1s ease-in', keyframes([
            style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
            style({opacity: .5, transform: 'translateY(35px)',  offset: 0.3}),
            style({opacity: 1, transform: 'translateY(0)',     offset: 1.0}),
          ]))]), {optional: true})
      ])
    ])
  ]
})
export class KegiatanPointPage {
  currentData:any = {};
  arrDataUraian:any = [];
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private globalService:GlobalService,
    private kegiatanService:KegiatanService
  ) {
    if(this.navParams.get('item') != undefined){
      this.currentData = this.navParams.get('item');
      console.log(this.currentData);
    }
  }

  ionViewDidEnter() {
    console.log('ionViewDidLoad KegiatanPointPage');
    this.getAllUraian();
  }

  getAllUraian(){
    this.globalService.presentLoading();
    this.kegiatanService.getUraianKegiatan().subscribe((data) => {
      this.arrDataUraian = data;
    });
  }

  tambahPoint(event:any){
    event.stopPropagation();
    this.navCtrl.push(InputUraianPage, { item: this.currentData });
  }

}
