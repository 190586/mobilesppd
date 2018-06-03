import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { GlobalService } from '../../providers/services/global-service';
import { KegiatanService } from './../../providers/services/kegiatan-service';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'page-input-uraian',
  templateUrl: 'input-uraian.html',
})
export class InputUraianPage {
  currentData:any = {};
  uraianTxt:string = '';
  uraianForm: FormGroup;
  boolDisabled: boolean = true;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private formBuilder: FormBuilder,
    private globalService:GlobalService,
    private kegiatanService:KegiatanService
  ) {
    if(this.navParams.get('item') != undefined){
      this.currentData = this.navParams.get('item');
      console.log(this.currentData);
    }
    this.uraianForm = this.formBuilder.group({
      uraian: ['', Validators.required]
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InputUraianPage');
  }

  public options: Object = {
    placeholderText: 'Deskripsi uraian',
    charCounterCount: true,
    toolbarButtonsXS: ['bold', 'italic', 'underline', 'fontSize', 'color', 'align', 'formatOL', 'formatUL', 'outdent', 'indent', 'undo', 'redo'],
    height: 300
  };

  valuechange(event: any){
    console.log(event);
  }

  onSubmit(){
    let dataForm = this.uraianForm.value;
    if(this.uraianTxt != ''){
      let objData = {
        kegiatan_id:this.currentData.KEGIATAN_ID,
        kegiatan_detail_id:this.currentData.KEGIATAN_DETAIL_ID, 
        //uraian: dataForm.uraian,
        uraian: this.uraianTxt
      };
      console.log(objData);
      this.globalService.presentToast('Uraian berhasil disimpan!');
      this.navCtrl.pop();
    }else{
      this.globalService.presentAlert('Warning', 'Uraian masih kosong');
    }
    
  }

}
