import { Component } from '@angular/core';
import { trigger,style,transition,animate,keyframes,query,stagger } from '@angular/animations';
import { NavController, NavParams } from 'ionic-angular';
import { GlobalService } from '../../providers/services/global-service';
import { KegiatanService } from './../../providers/services/kegiatan-service';
import { CameraPage } from '../camera/camera';
import { DaftarLaporanPage } from '../daftar-laporan/daftar-laporan';

@Component({
  selector: 'page-kegiatan-foto',
  templateUrl: 'kegiatan-foto.html',
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
export class KegiatanFotoPage {

  currentData:any = {};
  arrDataFoto:any = [];
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

  ionViewDidLoad() {
    console.log('ionViewDidLoad KegiatanFotoPage');
    //this.getAllFoto();
  }

  ionViewDidEnter(){
    this.getAllFoto();
  }

  getAllFoto(){
    this.globalService.presentLoading();
    this.kegiatanService.getFotoKegiatan().subscribe((data) => {
      this.arrDataFoto = data;
      console.log(this.arrDataFoto);
    });
  }

  ambilFoto(event:any){
    event.stopPropagation();
    this.navCtrl.push(CameraPage, { item: this.currentData });
  }

  lihatLaporan(event:any, foto){
    event.stopPropagation();
    console.log()
    this.navCtrl.push(DaftarLaporanPage, { item: this.currentData });
  }

}
