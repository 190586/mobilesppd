import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { trigger,style,transition,animate,keyframes,query,stagger } from '@angular/animations';
import { GlobalService } from '../../providers/services/global-service';
import { KegiatanService } from './../../providers/services/kegiatan-service';
import { InputLaporanPage } from '../input-laporan/input-laporan';
import { KegiatanSubdetailPage } from '../kegiatan-subdetail/kegiatan-subdetail';
import { KegiatanSubdetail2Page } from '../kegiatan-subdetail2/kegiatan-subdetail2';

@Component({
  selector: 'page-daftar-laporan',
  templateUrl: 'daftar-laporan.html',
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
export class DaftarLaporanPage {

  nowMonth:number;
  nomYear:number;
  optMonth:any = [];
  optYear:any = [];
  currentData:any = {};
  currentItems:any = {};
  pushData:any = {};
  currentYear:number;
  provID:number = 0;
  listLaporan:any = [];
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private globalService:GlobalService,
    private kegiatanService:KegiatanService
  ) {
    if(this.navParams.get('item') != undefined){
      this.currentData = this.navParams.get('item');
      this.currentYear = new Date(this.currentData.TGL_MULAI).getFullYear();
      console.log(this.currentData);
    }
    this.nowMonth = this.globalService.getNowMonth();
    this.nomYear = this.globalService.getNowYear();
    this.optMonth = [
      { val: 1, text: 'Januari'},
      { val: 2, text: 'Februari'},
      { val: 3, text: 'Maret'},
      { val: 4, text: 'April'},
      { val: 5, text: 'Mei'},
      { val: 6, text: 'Juni'},
      { val: 7, text: 'Juli'},
      { val: 8, text: 'Agustus'},
      { val: 9, text: 'September'},
      { val: 10, text: 'Oktober'},
      { val: 11, text: 'November'},
      { val: 12, text: 'Desember'}
    ];
    this.optYear = [2018,2019,2020,2021,2022,2023];
    
  }

  ionViewDidLoad() {
    this.getItemLaporan(null);
  }

  getItemLaporan(time:any){
    let mt = this.nowMonth;
    let yr = this.nomYear;
    console.log(mt, yr);
    this.kegiatanService.getListDataLaporan(mt, yr).subscribe((data) => {
      this.currentItems = data[0];
      this.listLaporan = this.currentItems.DETAIL_LAPORAN;
      console.log(this.listLaporan);
      this.globalService.presentToast('Get all data laporan..');
    });
  }

  getDetailKegiatan(event:any){
    event.stopPropagation();
    this.navCtrl.push(KegiatanSubdetail2Page, { item: this.currentData });
    //console.log(data);
  }

  getDetailItemLaporan(event:any, data){
    event.stopPropagation();
    let newObj = {};
    this.pushData = {
      KEGIATAN_ID: this.currentItems.KEGIATAN_ID,
      KEGIATAN_DETAIL_ID: this.currentItems.KEGIATAN_DETAIL_ID,
      NAMA_KEGIATAN: this.currentItems.NAMA_KEGIATAN,
      PROVINSI_DESC: this.currentItems.PROVINSI_DESC,
      KOTA_DESC: this.currentItems.KOTA_DESC
    }
    newObj = Object.assign(this.pushData, data);
    this.navCtrl.push(KegiatanSubdetailPage, { item: newObj });
  }

  tambahLaporan(event:any, data){
    event.stopPropagation();
    this.navCtrl.push(InputLaporanPage, { item: data });
  }
}

