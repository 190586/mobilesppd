import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { GlobalService } from './../../providers/services/global-service';
import { KegiatanService } from './../../providers/services/kegiatan-service';
import { KegiatanDetailPage } from '../kegiatan-detail/kegiatan-detail';
import { trigger,style,transition,animate,keyframes,query,stagger } from '@angular/animations';

@Component({
  selector: 'page-kegiatan',
  templateUrl: 'kegiatan.html',
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
export class KegiatanPage {
  provID:string = '0';
  listProvinsi:any = [];
  listKegiatan:any = [];
  labelProv:string;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private globalService:GlobalService,
    private kegiatanService:KegiatanService
  ) {
    this.labelProv = 'Kegiatan Seluruh Provinsi';
  }

  ionViewDidLoad() {
    this.getOptProvinsi();
    this.getdataKegiatan(this.provID);
  }

  getOptProvinsi(){
    this.globalService.getListProvinsi().subscribe((data) => {
      this.listProvinsi = data;
    });
  }

  getdataKegiatan(idprov: any){
    if(idprov != 0){
      let obj = this.listProvinsi.find(function (obj) { return obj.PROVINSI_ID == idprov; });
      this.labelProv = 'Kegiatan Provinsi '+ obj.NAMA_PROVINSI;
    }else{
      this.labelProv = 'Kegiatan Seluruh Provinsi';
    }
    this.kegiatanService.getListKegiatan(idprov).subscribe((data) => {
      this.listKegiatan = data;
    });
  }

  getAllKegiatan(event: any){
    event.stopPropagation();
    console.log('get all kegiatan..')
  }

  getDetailKegiatan(event: any, data){
    event.stopPropagation();
    this.navCtrl.push(KegiatanDetailPage, { item: data });
  }

}