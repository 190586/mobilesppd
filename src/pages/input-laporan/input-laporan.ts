import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { GlobalService } from '../../providers/services/global-service';
import { KegiatanService } from './../../providers/services/kegiatan-service';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { KegiatanSubdetailPage } from '../kegiatan-subdetail/kegiatan-subdetail';

@Component({
  selector: 'page-input-laporan',
  templateUrl: 'input-laporan.html',
})
export class InputLaporanPage {

  currentData:any = {};
  listProvinsi:any[] = [];
  listKota:any[] = [];
  lapForm: FormGroup;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private formBuilder: FormBuilder,
    private globalService:GlobalService,
    private kegiatanService:KegiatanService
  ) {
    if(this.navParams.get('item') != undefined){
      this.currentData = this.navParams.get('item');
    }
    this.lapForm = this.formBuilder.group({
      no_surat: ['45345', Validators.required],
      tgl_mulai: ['', Validators.required],
      tgl_akhir: ['', Validators.required],
      provinsi_id: ['', Validators.required],
      kota_id: ['', Validators.required]
    });
  }

  ionViewDidLoad() {
    this.getOptProvinsi();
    this.getOptKota();
  }

  getOptProvinsi(){
    this.globalService.getListProvinsi().subscribe((data) => {
      this.listProvinsi = data;
    });
  }

  getOptKota(){
    this.globalService.getListKota().subscribe((data) => {
      this.listKota = data;
    });
  }

  onSubmit(){
    console.log(this.lapForm.value);
    this.globalService.presentToast('Data berhasil disimpan!');
    // this.kegiatanService.postData(this.lapForm.value).subscribe((data) => {
    //   this.presentToast('Data berhasil disimpan!');
    // });
    this.navCtrl.push(KegiatanSubdetailPage, { item: this.currentData, detail: this.lapForm.value });
  }

  cancel(event:any){
    this.navCtrl.pop();
  }

  

}
