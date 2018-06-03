import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ErrorHandler, NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { IonicStorageModule } from '@ionic/storage';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';
import "froala-editor/js/froala_editor.pkgd.min.js";
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';

import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { KegiatanPage } from '../pages/kegiatan/kegiatan';
import { KegiatanDetailPage } from '../pages/kegiatan-detail/kegiatan-detail';
import { KegiatanSubdetailPage } from '../pages/kegiatan-subdetail/kegiatan-subdetail';
import { KegiatanSubdetail2Page } from '../pages/kegiatan-subdetail2/kegiatan-subdetail2';
import { KegiatanFotoPage } from '../pages/kegiatan-foto/kegiatan-foto';
import { KegiatanPointPage } from '../pages/kegiatan-point/kegiatan-point';
import { CameraPage } from '../pages/camera/camera';
import { InputLaporanPage } from '../pages/input-laporan/input-laporan';
import { InputUraianPage } from '../pages/input-uraian/input-uraian';
import { DaftarLaporanPage } from '../pages/daftar-laporan/daftar-laporan';
import { ProfilePage } from '../pages/profile/profile';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { GlobalService } from '../providers/services/global-service';
import { KegiatanService } from '../providers/services/kegiatan-service';
import { Camera } from '@ionic-native/camera';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    KegiatanPage,
    KegiatanDetailPage,
    KegiatanSubdetailPage,
    KegiatanSubdetail2Page,
    KegiatanFotoPage,
    KegiatanPointPage,
    CameraPage,
    InputLaporanPage,
    InputUraianPage,
    DaftarLaporanPage,
    ProfilePage
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    FroalaEditorModule.forRoot(), 
    FroalaViewModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    KegiatanPage,
    KegiatanDetailPage,
    KegiatanSubdetailPage,
    KegiatanSubdetail2Page,
    KegiatanFotoPage,
    KegiatanPointPage,
    CameraPage,
    InputLaporanPage,
    InputUraianPage,
    DaftarLaporanPage,
    ProfilePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    GlobalService,
    KegiatanService,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
