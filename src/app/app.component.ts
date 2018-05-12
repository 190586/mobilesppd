import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Storage } from '@ionic/storage';

import { LoginPage } from '../pages/login/login';
import { KegiatanPage } from '../pages/kegiatan/kegiatan';
import { KegiatanSubdetailPage } from '../pages/kegiatan-subdetail/kegiatan-subdetail';
import { DaftarLaporanPage } from '../pages/daftar-laporan/daftar-laporan';
import { ProfilePage } from '../pages/profile/profile';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;

  pages: Array<{title: string, icon: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, private storage:Storage) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', icon: 'icon-home-modern', component: KegiatanPage },
      { title: 'Perjalanan Dinas', icon: 'icon-wallet-travel', component: DaftarLaporanPage },
      { title: 'Profile', icon: 'icon-account-circle', component: ProfilePage },
      { title: 'Keluar', icon: 'icon-exit-to-app', component: LoginPage }
    ];

  }

  ngOnInit(){
    this.storage.get('userinfo').then((val) => {
      let userdata = JSON.parse(val);
      if(userdata == null){
        this.nav.setRoot(LoginPage);
      }else{
        this.nav.setRoot(KegiatanPage);
      }
    });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
  
}
