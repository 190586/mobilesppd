webpackJsonp([0],{

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputLaporanPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_services_global_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_services_kegiatan_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__kegiatan_subdetail_kegiatan_subdetail__ = __webpack_require__(44);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var InputLaporanPage = /** @class */ (function () {
    function InputLaporanPage(navCtrl, navParams, formBuilder, globalService, kegiatanService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.globalService = globalService;
        this.kegiatanService = kegiatanService;
        this.currentData = {};
        this.listProvinsi = [];
        this.listKota = [];
        if (this.navParams.get('item') != undefined) {
            this.currentData = this.navParams.get('item');
        }
        this.lapForm = this.formBuilder.group({
            no_surat: ['45345', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required],
            tgl_mulai: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required],
            tgl_akhir: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required],
            provinsi_id: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required],
            kota_id: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required]
        });
    }
    InputLaporanPage.prototype.ionViewDidLoad = function () {
        this.getOptProvinsi();
        this.getOptKota();
    };
    InputLaporanPage.prototype.getOptProvinsi = function () {
        var _this = this;
        this.globalService.getListProvinsi().subscribe(function (data) {
            _this.listProvinsi = data;
        });
    };
    InputLaporanPage.prototype.getOptKota = function () {
        var _this = this;
        this.globalService.getListKota().subscribe(function (data) {
            _this.listKota = data;
        });
    };
    InputLaporanPage.prototype.onSubmit = function () {
        console.log(this.lapForm.value);
        this.globalService.presentToast('Data berhasil disimpan!');
        // this.kegiatanService.postData(this.lapForm.value).subscribe((data) => {
        //   this.presentToast('Data berhasil disimpan!');
        // });
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__kegiatan_subdetail_kegiatan_subdetail__["a" /* KegiatanSubdetailPage */], { item: this.currentData, detail: this.lapForm.value });
    };
    InputLaporanPage.prototype.cancel = function (event) {
        this.navCtrl.pop();
    };
    InputLaporanPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-input-laporan',template:/*ion-inline-start:"D:\myapps\IONIC\laporanDinas\src\pages\input-laporan\input-laporan.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Laporan Perjalanan Dinas</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <form [formGroup]="lapForm" (ngSubmit)="onSubmit()">\n      <ion-list>\n          <ion-item>\n              <ion-label color="primary" stacked>No. Surat Tugas</ion-label>\n              <ion-input type="text" placeholder="Nomor surat" formControlName="no_surat" ngModel></ion-input>\n          </ion-item>\n          <ion-item>\n              <ion-label color="primary" stacked>Tanggal Mulai</ion-label>\n              <ion-datetime placeholder="Tanggal mulai" displayFormat="DD-MM-YYYY" pickerFormat="DD MMMM YYYY" formControlName="tgl_mulai" ngModel></ion-datetime>\n          </ion-item>\n          <ion-item>\n              <ion-label color="primary" stacked>Tanggal Akhir</ion-label>\n              <ion-datetime placeholder="Tanggal akhir" displayFormat="DD-MM-YYYY" pickerFormat="DD MMMM YYYY" formControlName="tgl_akhir" ngModel></ion-datetime>\n          </ion-item>\n          <ion-item>\n              <ion-label color="primary" stacked>Provinsi</ion-label>\n              <ion-select [(ngModel)]="currentData.PROVINSI_ID" formControlName="provinsi_id">\n                <ion-option *ngFor="let prov of listProvinsi;let i=index" value="{{ prov.PROVINSI_ID }}">{{ prov.NAMA_PROVINSI }}</ion-option>\n              </ion-select>\n          </ion-item>\n          <ion-item>\n              <ion-label color="primary" stacked>Kota</ion-label>\n              <ion-select placeholder="Pilih Kota" formControlName="kota_id" ngModel>\n                <ion-option *ngFor="let kota of listKota;let i=index" value="{{ kota.KOTA_ID }}">{{ kota.NAMA_KOTA }}</ion-option>\n              </ion-select>\n            </ion-item>\n      </ion-list>    \n      <ion-buttons>\n        <button ion-button block color="primary" type="submit" [disabled]="!lapForm.valid">Simpan</button>\n        <button ion-button block color="secondary" type="button" (click)="cancel($event)">Batal</button>\n      </ion-buttons>\n    </form>\n</ion-content>\n'/*ion-inline-end:"D:\myapps\IONIC\laporanDinas\src\pages\input-laporan\input-laporan.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2__providers_services_global_service__["a" /* GlobalService */],
            __WEBPACK_IMPORTED_MODULE_3__providers_services_kegiatan_service__["a" /* KegiatanService */]])
    ], InputLaporanPage);
    return InputLaporanPage;
}());

//# sourceMappingURL=input-laporan.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DaftarLaporanPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_animations__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_services_global_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_services_kegiatan_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__input_laporan_input_laporan__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__kegiatan_subdetail_kegiatan_subdetail__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__kegiatan_subdetail2_kegiatan_subdetail2__ = __webpack_require__(110);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var DaftarLaporanPage = /** @class */ (function () {
    function DaftarLaporanPage(navCtrl, navParams, globalService, kegiatanService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.globalService = globalService;
        this.kegiatanService = kegiatanService;
        this.optMonth = [];
        this.optYear = [];
        this.currentData = {};
        this.currentItems = {};
        this.pushData = {};
        this.provID = 0;
        this.listLaporan = [];
        if (this.navParams.get('item') != undefined) {
            this.currentData = this.navParams.get('item');
            this.currentYear = new Date(this.currentData.TGL_MULAI).getFullYear();
            console.log(this.currentData);
        }
        this.nowMonth = this.globalService.getNowMonth();
        this.nomYear = this.globalService.getNowYear();
        this.optMonth = [
            { val: 1, text: 'Januari' },
            { val: 2, text: 'Februari' },
            { val: 3, text: 'Maret' },
            { val: 4, text: 'April' },
            { val: 5, text: 'Mei' },
            { val: 6, text: 'Juni' },
            { val: 7, text: 'Juli' },
            { val: 8, text: 'Agustus' },
            { val: 9, text: 'September' },
            { val: 10, text: 'Oktober' },
            { val: 11, text: 'November' },
            { val: 12, text: 'Desember' }
        ];
        this.optYear = [2018, 2019, 2020, 2021, 2022, 2023];
    }
    DaftarLaporanPage.prototype.ionViewDidLoad = function () {
        this.getItemLaporan(null);
    };
    DaftarLaporanPage.prototype.getItemLaporan = function (time) {
        var _this = this;
        var mt = this.nowMonth;
        var yr = this.nomYear;
        console.log(mt, yr);
        this.kegiatanService.getListDataLaporan(mt, yr).subscribe(function (data) {
            _this.currentItems = data[0];
            _this.listLaporan = _this.currentItems.DETAIL_LAPORAN;
            console.log(_this.listLaporan);
            _this.globalService.presentToast('Get all data laporan..');
        });
    };
    DaftarLaporanPage.prototype.getDetailKegiatan = function (event) {
        event.stopPropagation();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__kegiatan_subdetail2_kegiatan_subdetail2__["a" /* KegiatanSubdetail2Page */], { item: this.currentData });
        //console.log(data);
    };
    DaftarLaporanPage.prototype.getDetailItemLaporan = function (event, data) {
        event.stopPropagation();
        var newObj = {};
        this.pushData = {
            KEGIATAN_ID: this.currentItems.KEGIATAN_ID,
            KEGIATAN_DETAIL_ID: this.currentItems.KEGIATAN_DETAIL_ID,
            NAMA_KEGIATAN: this.currentItems.NAMA_KEGIATAN,
            PROVINSI_DESC: this.currentItems.PROVINSI_DESC,
            KOTA_DESC: this.currentItems.KOTA_DESC
        };
        newObj = Object.assign(this.pushData, data);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__kegiatan_subdetail_kegiatan_subdetail__["a" /* KegiatanSubdetailPage */], { item: newObj });
    };
    DaftarLaporanPage.prototype.tambahLaporan = function (event, data) {
        event.stopPropagation();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__input_laporan_input_laporan__["a" /* InputLaporanPage */], { item: data });
    };
    DaftarLaporanPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-daftar-laporan',template:/*ion-inline-start:"D:\myapps\IONIC\laporanDinas\src\pages\daftar-laporan\daftar-laporan.html"*/'<ion-header>\n  <ion-navbar>\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n        <ion-title>\n            Daftar Laporan Kegiatan\n        </ion-title>\n    </ion-navbar>\n  \n  </ion-header>\n  \n  \n  <ion-content padding>\n      <ion-grid>\n          <ion-row>\n              <ion-col>\n                  <ion-select [(ngModel)]="nowMonth" placeholder="Pilih Bulan" (ngModelChange)="getItemLaporan($event)">\n                    <ion-option *ngFor="let month of optMonth;let i=index" value="{{ month.val }}">{{ month.text }}</ion-option>\n                  </ion-select>\n              </ion-col>\n              <ion-col>\n                  <ion-select [(ngModel)]="nomYear" placeholder="Pilih Tahun" (ngModelChange)="getItemLaporan($event)">\n                    <ion-option *ngFor="let year of optYear;let i=index" value="{{ year }}">{{ year }}</ion-option>\n                  </ion-select>\n              </ion-col>\n            </ion-row>\n      </ion-grid>\n    <ion-list [@listAnimation]="listLaporan.length">\n        <ion-item *ngFor="let item of listLaporan;let i = index" (click)="getDetailItemLaporan($event, item)">\n            <ion-grid>\n                <ion-row>\n                    <ion-col><h3>{{ item.TGL_MULAI | date:\'dd-MM-yyyy\':\'+0700\' }} - {{ item.TGL_AKHIR | date:\'dd-MM-yyyy\':\'+0700\' }}</h3></ion-col>\n                    <ion-col><h3 align="right"><strong>{{ item.KODE }}</strong></h3></ion-col>\n                </ion-row>\n                <ion-row>\n                    <ion-col>\n                      <strong>{{ item.KOTA_DESC }}, {{ item.PROVINSI_DESC }}</strong>\n                    </ion-col>\n                </ion-row>\n              </ion-grid>\n        </ion-item>\n        \n    </ion-list>\n  </ion-content>  '/*ion-inline-end:"D:\myapps\IONIC\laporanDinas\src\pages\daftar-laporan\daftar-laporan.html"*/,
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["l" /* trigger */])('listAnimation', [
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["k" /* transition */])('* => *', [
                        Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["g" /* query */])(':enter', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["j" /* style */])({ opacity: 0 }), { optional: true }),
                        Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["g" /* query */])(':enter', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* stagger */])('300ms', [
                            Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["e" /* animate */])('1s ease-in', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["f" /* keyframes */])([
                                Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["j" /* style */])({ opacity: 0, transform: 'translateY(-75%)', offset: 0 }),
                                Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["j" /* style */])({ opacity: .5, transform: 'translateY(35px)', offset: 0.3 }),
                                Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["j" /* style */])({ opacity: 1, transform: 'translateY(0)', offset: 1.0 }),
                            ]))
                        ]), { optional: true })
                    ])
                ])
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_services_global_service__["a" /* GlobalService */],
            __WEBPACK_IMPORTED_MODULE_4__providers_services_kegiatan_service__["a" /* KegiatanService */]])
    ], DaftarLaporanPage);
    return DaftarLaporanPage;
}());

//# sourceMappingURL=daftar-laporan.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KegiatanSubdetail2Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__kegiatan_subdetail_kegiatan_subdetail__ = __webpack_require__(44);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var KegiatanSubdetail2Page = /** @class */ (function () {
    function KegiatanSubdetail2Page(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.currentData = {};
        if (this.navParams.get('item') != undefined) {
            this.currentData = this.navParams.get('item');
            this.currentYear = new Date(this.currentData.TGL_MULAI).getFullYear();
            console.log(this.currentData);
        }
    }
    KegiatanSubdetail2Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad KegiatanSubdetail2Page');
    };
    KegiatanSubdetail2Page.prototype.lihatLaporan = function (event) {
        event.stopPropagation();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__kegiatan_subdetail_kegiatan_subdetail__["a" /* KegiatanSubdetailPage */], { item: this.currentData });
    };
    KegiatanSubdetail2Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-kegiatan-subdetail2',template:/*ion-inline-start:"D:\myapps\IONIC\laporanDinas\src\pages\kegiatan-subdetail2\kegiatan-subdetail2.html"*/'\n<ion-header>\n    <ion-navbar>\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    \n        <ion-title>\n            {{ currentData.KODE }}\n        </ion-title>\n    </ion-navbar>\n  \n  </ion-header>\n  \n  \n  <ion-content padding>\n    <h5>Informasi</h5>\n    <hr>\n    <h4>{{ currentData.NAMA_KEGIATAN }}</h4>\n    <ion-grid>\n        <ion-row>\n          <ion-col>\n              <p>Kontrak : <br><strong>{{ currentData.KONTRAK }}</strong></p>\n          </ion-col>\n          <ion-col>\n              <p>Tahun : <br><strong>{{ currentYear }}</strong></p>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col>\n                <p>Lokasi : <br><strong>{{ currentData.PROVINSI_DESC }}, {{ currentData.KOTA_DESC }}</strong></p>\n            </ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col>\n                <p>Rencana Lelang : <br><strong>{{ currentData.RENCANA_LELANG | date:\'dd MMMM yyyy\':\'+0700\' }}</strong></p>\n            </ion-col>\n            <ion-col>\n                <p>Rencana Kontrak : <br><strong>{{ currentData.RENCANA_KONTRAK | date:\'dd MMM yyyy\':\'+0700\' }}</strong></p>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n              <ion-col>\n                  <p>Pagu RKAKL : <br><strong>{{ currentData.PAGU_RKAKL | currency:\'Rp. \' }}</strong></p>\n              </ion-col>\n              <ion-col>\n                  <p>Pagu RKAKL : <br><strong>{{ currentData.PAGU_RKAKL | currency:\'Rp. \' }}</strong></p>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col>\n                    <p>PHO : <br><strong>{{ currentData.PHO | date:\'dd MMM yyyy\':\'+0700\' }}</strong></p>\n                </ion-col>\n            </ion-row>\n      </ion-grid>\n    \n    <ion-buttons>\n        <button color="primary" ion-button="" small="" (click)="lihatLaporan($event)"><span class="button-inner">Lihat Laporan</span><div class="button-effect"></div></button>\n    </ion-buttons>\n    <br>\n  </ion-content>  '/*ion-inline-end:"D:\myapps\IONIC\laporanDinas\src\pages\kegiatan-subdetail2\kegiatan-subdetail2.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], KegiatanSubdetail2Page);
    return KegiatanSubdetail2Page;
}());

//# sourceMappingURL=kegiatan-subdetail2.js.map

/***/ }),

/***/ 121:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 121;

/***/ }),

/***/ 162:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 162;

/***/ }),

/***/ 19:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var authUrl = 'http://localhost/auth/api/auth/login';
var httpOptions = { headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json' }) };
var GlobalService = /** @class */ (function () {
    function GlobalService(http, loadingCtrl, alertCtrl, toastCtrl, storage) {
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.storage = storage;
        //console.log('Hello GlobalService Provider');
    }
    // login(username: string, password: string): Observable<any>{
    //   return this.http.post<any>(authUrl, { username: username, password: password }, httpOptions)
    //     .map(user => {
    //         if (user) {
    //             this.storage.set('userinfo', JSON.stringify(user));
    //         }
    //         return user;
    //     });
    // }
    GlobalService.prototype.login = function (credential) {
        var boolResult = false;
        if (credential.username == 'admin' && credential.password == 'admin') {
            this.storage.set('userinfo', JSON.stringify({ username: credential.username, fullname: 'Hendrik Budiman' }));
            boolResult = true;
        }
        return boolResult;
    };
    GlobalService.prototype.getListProvinsi = function () {
        return this.http.get('assets/fakedata/provinsi.json');
    };
    GlobalService.prototype.getListKota = function () {
        return this.http.get('assets/fakedata/kota.json');
    };
    GlobalService.prototype.presentLoading = function () {
        var loader = this.loadingCtrl.create({
            content: "Mohon tunggu...",
            duration: 3000
        });
        loader.present();
    };
    GlobalService.prototype.presentToast = function (m) {
        var toast = this.toastCtrl.create({
            message: m,
            duration: 3000
        });
        toast.present();
    };
    GlobalService.prototype.presentAlert = function (t, s) {
        var alert = this.alertCtrl.create({
            title: t,
            subTitle: s,
            buttons: ['Dismiss']
        });
        alert.present();
    };
    GlobalService.prototype.getNowMonth = function () {
        var time = new Date().getMonth() + 1;
        return time;
    };
    GlobalService.prototype.getNowYear = function () {
        var time = new Date().getFullYear();
        return time;
    };
    GlobalService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
    ], GlobalService);
    return GlobalService;
}());

//# sourceMappingURL=global-service.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_services_global_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__kegiatan_kegiatan__ = __webpack_require__(209);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, storage, globalService, formBuilder) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.globalService = globalService;
        this.formBuilder = formBuilder;
        this.resetform();
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
        this.storage.remove('userinfo');
    };
    LoginPage.prototype.resetform = function () {
        this.credential = this.formBuilder.group({
            username: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required],
            password: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required]
        });
    };
    LoginPage.prototype.login = function () {
        console.log(this.credential.value);
        if (this.globalService.login(this.credential.value) == true) {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__kegiatan_kegiatan__["a" /* KegiatanPage */]);
        }
        else {
            this.globalService.presentAlert('Warning!', 'User atau password yang Anda masukkan salah');
            this.resetform();
        }
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"D:\myapps\IONIC\laporanDinas\src\pages\login\login.html"*/'  <!-- <ion-content>\n  \n    <form [formGroup]="credential" (ngSubmit)="login()">\n      <ion-list>\n  \n        <ion-item>\n          <ion-label floating>Username</ion-label>\n          <ion-input type="text" formControlName="username" ngModel></ion-input>\n        </ion-item>\n  \n        <ion-item>\n          <ion-label floating>Password</ion-label>\n          <ion-input type="password" formControlName="password" ngModel></ion-input>\n        </ion-item>  \n      </ion-list>\n      <ion-buttons>\n          <button ion-button block color="primary" type="submit" [disabled]="!credential.valid">Login</button>\n        </ion-buttons>\n    </form>\n  \n  </ion-content> -->\n\n<!-- Themes Login + logo -->\n<ion-content has-header white-background>\n    <ion-grid>\n        <form [formGroup]="credential" (ngSubmit)="login()">\n          <ion-row wrap padding>\n            <ion-col col-12 col-sm-12 col-md-12 offset-lg-3 col-lg-6 offset-xl-3 col-xl-6>\n                <!---Logo-->\n                <!-- <img [src]="data.logo" *ngIf="data.logo != null"> -->\n                <!---Input field username-->\n                <ion-item no-padding transparent>\n                    <ion-label floating>Username</ion-label>\n                    <ion-input type="text" formControlName="username" ngModel></ion-input>\n                </ion-item>\n                <!---Input field password-->\n                <ion-item no-padding transparent>\n                    <ion-label floating>Password</ion-label>\n                    <ion-input type="password" formControlName="password" ngModel></ion-input>\n                </ion-item>\n                <!---Login button-->\n                <button ion-button button-clear-outline round block outline type="submit" [disabled]="!credential.valid">Login</button>\n            </ion-col>\n        </ion-row>\n        </form>\n    </ion-grid>\n</ion-content>\n'/*ion-inline-end:"D:\myapps\IONIC\laporanDinas\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__providers_services_global_service__["a" /* GlobalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_services_global_service__["a" /* GlobalService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */]) === "function" && _e || Object])
    ], LoginPage);
    return LoginPage;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KegiatanPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_services_global_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_services_kegiatan_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__kegiatan_detail_kegiatan_detail__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_animations__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var KegiatanPage = /** @class */ (function () {
    function KegiatanPage(navCtrl, navParams, globalService, kegiatanService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.globalService = globalService;
        this.kegiatanService = kegiatanService;
        this.provID = '0';
        this.listProvinsi = [];
        this.listKegiatan = [];
        this.labelProv = 'Kegiatan Seluruh Provinsi';
    }
    KegiatanPage.prototype.ionViewDidLoad = function () {
        this.getOptProvinsi();
        this.getdataKegiatan(this.provID);
    };
    KegiatanPage.prototype.getOptProvinsi = function () {
        var _this = this;
        this.globalService.getListProvinsi().subscribe(function (data) {
            _this.listProvinsi = data;
        });
    };
    KegiatanPage.prototype.getdataKegiatan = function (idprov) {
        var _this = this;
        if (idprov != 0) {
            var obj = this.listProvinsi.find(function (obj) { return obj.PROVINSI_ID == idprov; });
            this.labelProv = 'Kegiatan Provinsi ' + obj.NAMA_PROVINSI;
        }
        else {
            this.labelProv = 'Kegiatan Seluruh Provinsi';
        }
        this.kegiatanService.getListKegiatan(idprov).subscribe(function (data) {
            _this.listKegiatan = data;
        });
    };
    KegiatanPage.prototype.getAllKegiatan = function (event) {
        event.stopPropagation();
        console.log('get all kegiatan..');
    };
    KegiatanPage.prototype.getDetailKegiatan = function (event, data) {
        event.stopPropagation();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__kegiatan_detail_kegiatan_detail__["a" /* KegiatanDetailPage */], { item: data });
    };
    KegiatanPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-kegiatan',template:/*ion-inline-start:"D:\myapps\IONIC\laporanDinas\src\pages\kegiatan\kegiatan.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>{{ labelProv }}</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n    <ion-toolbar class="toolbar" no-border>\n    <ion-item>\n        <ion-label>Provinsi</ion-label>\n        <ion-select [ngModel]="provID" (ngModelChange)=\'getdataKegiatan(provID=$event)\' placeholder="Pilih Provinsi">\n          <ion-option value="0">Seluruh Provinsi</ion-option>\n          <ion-option *ngFor="let prov of listProvinsi;let i = index" value="{{ prov.PROVINSI_ID }}">{{ prov.NAMA_PROVINSI }}</ion-option>\n        </ion-select>\n      </ion-item>\n    </ion-toolbar>\n\n    <ion-list [@listAnimation]="listKegiatan.length">\n        <ion-item *ngIf="(listKegiatan)?.length==0">Maaf, kegiatan masih kosong.</ion-item>\n        <ion-item *ngFor="let item of listKegiatan;let i = index" (click)="getDetailKegiatan($event, item)" >\n            <ion-grid>\n              <ion-row>\n                  <ion-col><h3>{{ item.KODE }}</h3></ion-col>\n                  <ion-col><h3 align="right">{{ item.KONTRAK }}</h3></ion-col>\n              </ion-row>\n              <ion-row>\n                  <ion-col>\n                    <h2>{{ item.NAMA_KEGIATAN }}</h2>\n                    <p>{{ item.KOTA_DESC }}, {{ item.PROVINSI_DESC }}</p>\n                  </ion-col>\n              </ion-row>\n            </ion-grid>\n        </ion-item>\n    </ion-list>\n</ion-content>'/*ion-inline-end:"D:\myapps\IONIC\laporanDinas\src\pages\kegiatan\kegiatan.html"*/,
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["l" /* trigger */])('listAnimation', [
                    Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["k" /* transition */])('* => *', [
                        Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["g" /* query */])(':enter', Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["j" /* style */])({ opacity: 0 }), { optional: true }),
                        Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["g" /* query */])(':enter', Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["i" /* stagger */])('300ms', [
                            Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["e" /* animate */])('1s ease-in', Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["f" /* keyframes */])([
                                Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["j" /* style */])({ opacity: 0, transform: 'translateY(-75%)', offset: 0 }),
                                Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["j" /* style */])({ opacity: .5, transform: 'translateY(35px)', offset: 0.3 }),
                                Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["j" /* style */])({ opacity: 1, transform: 'translateY(0)', offset: 1.0 }),
                            ]))
                        ]), { optional: true })
                    ])
                ])
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_services_global_service__["a" /* GlobalService */],
            __WEBPACK_IMPORTED_MODULE_3__providers_services_kegiatan_service__["a" /* KegiatanService */]])
    ], KegiatanPage);
    return KegiatanPage;
}());

//# sourceMappingURL=kegiatan.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KegiatanDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_animations__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_services_global_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_services_kegiatan_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__input_laporan_input_laporan__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__kegiatan_subdetail_kegiatan_subdetail__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__kegiatan_subdetail2_kegiatan_subdetail2__ = __webpack_require__(110);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var KegiatanDetailPage = /** @class */ (function () {
    function KegiatanDetailPage(navCtrl, navParams, globalService, kegiatanService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.globalService = globalService;
        this.kegiatanService = kegiatanService;
        this.currentData = {};
        this.currentItems = {};
        this.listReport = [];
        this.pushData = {};
        this.provID = 0;
        if (this.navParams.get('item') != undefined) {
            this.currentData = this.navParams.get('item');
            this.currentYear = new Date(this.currentData.TGL_MULAI).getFullYear();
            //console.log(this.currentData);
        }
    }
    KegiatanDetailPage.prototype.ionViewDidLoad = function () {
        this.getItemLaporan();
    };
    KegiatanDetailPage.prototype.getItemLaporan = function () {
        var _this = this;
        this.kegiatanService.getDetailKegiatan().subscribe(function (data) {
            _this.currentItems = data[0];
            _this.listReport = _this.currentItems.DETAIL_LAPORAN;
            //console.log(this.currentItems);
        });
    };
    KegiatanDetailPage.prototype.getDetailKegiatan = function (event) {
        event.stopPropagation();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__kegiatan_subdetail2_kegiatan_subdetail2__["a" /* KegiatanSubdetail2Page */], { item: this.currentData });
        //console.log(data);
    };
    KegiatanDetailPage.prototype.getDetailItemLaporan = function (event, data) {
        event.stopPropagation();
        var newObj = {};
        this.pushData = {
            KEGIATAN_ID: this.currentItems.KEGIATAN_ID,
            KEGIATAN_DETAIL_ID: this.currentItems.KEGIATAN_DETAIL_ID,
            NAMA_KEGIATAN: this.currentItems.NAMA_KEGIATAN,
            PROVINSI_DESC: this.currentItems.PROVINSI_DESC,
            KOTA_DESC: this.currentItems.KOTA_DESC
        };
        newObj = Object.assign(this.pushData, data);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__kegiatan_subdetail_kegiatan_subdetail__["a" /* KegiatanSubdetailPage */], { item: newObj });
    };
    KegiatanDetailPage.prototype.tambahLaporan = function (event, data) {
        event.stopPropagation();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__input_laporan_input_laporan__["a" /* InputLaporanPage */], { item: data });
    };
    KegiatanDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-kegiatan-detail',template:/*ion-inline-start:"D:\myapps\IONIC\laporanDinas\src\pages\kegiatan-detail\kegiatan-detail.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n  \n      <ion-title>\n          {{ currentData.KODE }}\n      </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <h5>Informasi</h5>\n  <hr>\n  <h4>{{ currentData.NAMA_KEGIATAN }}</h4>\n  <p>Tahun : <strong>{{ currentYear }}</strong></p>\n  <p>Lokasi : <strong>{{ currentData.PROVINSI_DESC }}, {{ currentData.KOTA_DESC }}</strong></p>\n  <ion-buttons end>\n      <button color="light" ion-button="" small="" end (click)="getDetailKegiatan($event)"><span class="button-inner">Detail Kegiatan</span><div class="button-effect"></div></button>\n  </ion-buttons>\n\n  <br>\n  <p class="text-center">Laporan Perjalanan Dinas Pada Kegiatan ini</p>\n  <ion-list [@listAnimation]="listReport.length">\n      <ion-item *ngFor="let item of currentItems.DETAIL_LAPORAN;let i = index" (click)="getDetailItemLaporan($event, item)">\n          <p>{{ item.TGL_MULAI | date:\'dd-MM-yyyy\':\'+0700\' }} - {{ item.TGL_AKHIR | date:\'dd-MM-yyyy\':\'+0700\' }}</p>\n          <h2><strong>{{ item.CREATED_BY }}</strong></h2>\n      </ion-item>\n  </ion-list>\n</ion-content>\n\n<!-- Fab Button -->\n<ion-fab #fab bottom right>\n  <button button-ion-fab ion-fab (click)="tambahLaporan($event, currentData)">\n  <ion-icon name="add"></ion-icon>\n</button>\n</ion-fab>\n\n\n'/*ion-inline-end:"D:\myapps\IONIC\laporanDinas\src\pages\kegiatan-detail\kegiatan-detail.html"*/,
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["l" /* trigger */])('listAnimation', [
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["k" /* transition */])('* => *', [
                        Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["g" /* query */])(':enter', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["j" /* style */])({ opacity: 0 }), { optional: true }),
                        Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["g" /* query */])(':enter', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* stagger */])('300ms', [
                            Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["e" /* animate */])('1s ease-in', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["f" /* keyframes */])([
                                Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["j" /* style */])({ opacity: 0, transform: 'translateY(-75%)', offset: 0 }),
                                Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["j" /* style */])({ opacity: .5, transform: 'translateY(35px)', offset: 0.3 }),
                                Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["j" /* style */])({ opacity: 1, transform: 'translateY(0)', offset: 1.0 }),
                            ]))
                        ]), { optional: true })
                    ])
                ])
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_services_global_service__["a" /* GlobalService */],
            __WEBPACK_IMPORTED_MODULE_4__providers_services_kegiatan_service__["a" /* KegiatanService */]])
    ], KegiatanDetailPage);
    return KegiatanDetailPage;
}());

//# sourceMappingURL=kegiatan-detail.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KegiatanFotoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_services_global_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_services_kegiatan_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__camera_camera__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__daftar_laporan_daftar_laporan__ = __webpack_require__(109);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var KegiatanFotoPage = /** @class */ (function () {
    function KegiatanFotoPage(navCtrl, navParams, globalService, kegiatanService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.globalService = globalService;
        this.kegiatanService = kegiatanService;
        this.currentData = {};
        this.arrDataFoto = [];
        if (this.navParams.get('item') != undefined) {
            this.currentData = this.navParams.get('item');
            console.log(this.currentData);
        }
    }
    KegiatanFotoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad KegiatanFotoPage');
        //this.getAllFoto();
    };
    KegiatanFotoPage.prototype.ionViewDidEnter = function () {
        this.getAllFoto();
    };
    KegiatanFotoPage.prototype.getAllFoto = function () {
        var _this = this;
        this.globalService.presentLoading();
        this.kegiatanService.getFotoKegiatan().subscribe(function (data) {
            _this.arrDataFoto = data;
            console.log(_this.arrDataFoto);
        });
    };
    KegiatanFotoPage.prototype.ambilFoto = function (event) {
        event.stopPropagation();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__camera_camera__["a" /* CameraPage */], { item: this.currentData });
    };
    KegiatanFotoPage.prototype.lihatLaporan = function (event, foto) {
        event.stopPropagation();
        console.log();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__daftar_laporan_daftar_laporan__["a" /* DaftarLaporanPage */], { item: this.currentData });
    };
    KegiatanFotoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-kegiatan-foto',template:/*ion-inline-start:"D:\myapps\IONIC\laporanDinas\src\pages\kegiatan-foto\kegiatan-foto.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Foto Kegiatan</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list [@listAnimation]="arrDataFoto.length">\n    <ion-item *ngFor="let foto of arrDataFoto;let i = index" (click)="lihatLaporan($event, foto)">\n        <img src="{{ foto.IMG_PATH }}">\n      <p text-wrap>{{ foto.CAPTION }}</p>\n    </ion-item>\n  </ion-list>\n</ion-content>\n\n<!-- Fab Button -->\n<ion-fab #fab bottom right>\n  <button button-ion-fab ion-fab (click)="ambilFoto($event)">\n    <ion-icon class="icon" name="camera"></ion-icon>\n</button>\n</ion-fab>\n'/*ion-inline-end:"D:\myapps\IONIC\laporanDinas\src\pages\kegiatan-foto\kegiatan-foto.html"*/,
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["l" /* trigger */])('listAnimation', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["k" /* transition */])('* => *', [
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* query */])(':enter', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* style */])({ opacity: 0 }), { optional: true }),
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* query */])(':enter', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* stagger */])('300ms', [
                            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('1s ease-in', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["f" /* keyframes */])([
                                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* style */])({ opacity: 0, transform: 'translateY(-75%)', offset: 0 }),
                                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* style */])({ opacity: .5, transform: 'translateY(35px)', offset: 0.3 }),
                                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* style */])({ opacity: 1, transform: 'translateY(0)', offset: 1.0 }),
                            ]))
                        ]), { optional: true })
                    ])
                ])
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_services_global_service__["a" /* GlobalService */],
            __WEBPACK_IMPORTED_MODULE_4__providers_services_kegiatan_service__["a" /* KegiatanService */]])
    ], KegiatanFotoPage);
    return KegiatanFotoPage;
}());

//# sourceMappingURL=kegiatan-foto.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CameraPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_services_global_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_services_kegiatan_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CameraPage = /** @class */ (function () {
    function CameraPage(navCtrl, navParams, formBuilder, globalService, kegiatanService, camera) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.globalService = globalService;
        this.kegiatanService = kegiatanService;
        this.camera = camera;
        this.currentData = {};
        this.imgCam = 'assets/icon/camera-icon.svg';
        //this.imgCam = 'data:image/jpeg;base64,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';
        if (this.navParams.get('item') != undefined) {
            this.currentData = this.navParams.get('item');
            console.log(this.currentData);
        }
        this.uploadForm = this.formBuilder.group({
            caption: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required]
        });
    }
    CameraPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CameraPage');
    };
    CameraPage.prototype.getPic = function () {
        var _this = this;
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.camera.getPicture(options).then(function (imageData) {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64:
            var base64Image = 'data:image/jpeg;base64,' + imageData;
            _this.imgCam = base64Image;
        }, function (err) {
            // Handle error
            _this.globalService.presentToast(err);
        });
    };
    CameraPage.prototype.onSubmit = function () {
        var dataCam = this.uploadForm.value;
        var objData = {
            img: this.imgCam,
            kegiatan_id: this.currentData.KEGIATAN_ID,
            kegiatan_detail_id: this.currentData.KEGIATAN_DETAIL_ID,
            caption: dataCam.caption
        };
        console.log(objData);
        this.globalService.presentToast('Gambar berhasil diunggah!');
        this.navCtrl.pop();
    };
    CameraPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-camera',template:/*ion-inline-start:"D:\myapps\IONIC\laporanDinas\src\pages\camera\camera.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Ambil Gambar Foto</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-img class="imageCam img-responsive" style="width: 100%; height: 85%;" src="{{ imgCam }}"></ion-img>\n    <br>\n    <form [formGroup]="uploadForm" (ngSubmit)="onSubmit()">\n        <ion-list>\n            <ion-item>\n                <ion-label color="primary" stacked>Komentar</ion-label>\n                <ion-textarea placeholder="Deskripsi foto" formControlName="caption" ngModel></ion-textarea>\n            </ion-item>\n            \n        </ion-list>    \n        <ion-buttons>\n            <button ion-button block color="secondary" type="button" (click)="getPic($event)">Ambil Gambar</button>\n            <button ion-button block color="primary" type="submit" [disabled]="!uploadForm.valid">Unggah</button>\n        </ion-buttons>\n    </form>\n</ion-content>\n'/*ion-inline-end:"D:\myapps\IONIC\laporanDinas\src\pages\camera\camera.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__providers_services_global_service__["a" /* GlobalService */],
            __WEBPACK_IMPORTED_MODULE_4__providers_services_kegiatan_service__["a" /* KegiatanService */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */]])
    ], CameraPage);
    return CameraPage;
}());

//# sourceMappingURL=camera.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KegiatanPointPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_services_global_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_services_kegiatan_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__input_uraian_input_uraian__ = __webpack_require__(215);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var KegiatanPointPage = /** @class */ (function () {
    function KegiatanPointPage(navCtrl, navParams, globalService, kegiatanService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.globalService = globalService;
        this.kegiatanService = kegiatanService;
        this.currentData = {};
        this.arrDataUraian = [];
        if (this.navParams.get('item') != undefined) {
            this.currentData = this.navParams.get('item');
            console.log(this.currentData);
        }
    }
    KegiatanPointPage.prototype.ionViewDidEnter = function () {
        console.log('ionViewDidLoad KegiatanPointPage');
        this.getAllUraian();
    };
    KegiatanPointPage.prototype.getAllUraian = function () {
        var _this = this;
        this.globalService.presentLoading();
        this.kegiatanService.getUraianKegiatan().subscribe(function (data) {
            _this.arrDataUraian = data;
        });
    };
    KegiatanPointPage.prototype.tambahPoint = function (event) {
        event.stopPropagation();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__input_uraian_input_uraian__["a" /* InputUraianPage */], { item: this.currentData });
    };
    KegiatanPointPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-kegiatan-point',template:/*ion-inline-start:"D:\myapps\IONIC\laporanDinas\src\pages\kegiatan-point\kegiatan-point.html"*/'<ion-header>\n  <ion-navbar>\n      <ion-title>Uraian Kegiatan</ion-title>\n    </ion-navbar>\n  </ion-header>\n  \n  <ion-content padding>\n    <ion-list [@listAnimation]="arrDataUraian.length">\n      <ion-item *ngFor="let item of arrDataUraian; let i = index" text-wrap>\n        <!-- <ion-icon name="leaf" item-start></ion-icon> -->\n        <ion-badge item-start>{{ (i+1) }}</ion-badge>\n        <p>{{ item.URAIAN_DESC }}</p>\n      </ion-item>\n    </ion-list>\n  </ion-content>\n\n  <!-- Fab Button -->\n<ion-fab #fab bottom right>\n  <button button-ion-fab ion-fab (click)="tambahPoint($event)">\n    <ion-icon class="icon" name="clipboard"></ion-icon>\n</button>\n</ion-fab>\n  '/*ion-inline-end:"D:\myapps\IONIC\laporanDinas\src\pages\kegiatan-point\kegiatan-point.html"*/,
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["l" /* trigger */])('listAnimation', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["k" /* transition */])('* => *', [
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* query */])(':enter', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* style */])({ opacity: 0 }), { optional: true }),
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* query */])(':enter', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* stagger */])('300ms', [
                            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('1s ease-in', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["f" /* keyframes */])([
                                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* style */])({ opacity: 0, transform: 'translateY(-75%)', offset: 0 }),
                                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* style */])({ opacity: .5, transform: 'translateY(35px)', offset: 0.3 }),
                                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* style */])({ opacity: 1, transform: 'translateY(0)', offset: 1.0 }),
                            ]))
                        ]), { optional: true })
                    ])
                ])
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_services_global_service__["a" /* GlobalService */],
            __WEBPACK_IMPORTED_MODULE_4__providers_services_kegiatan_service__["a" /* KegiatanService */]])
    ], KegiatanPointPage);
    return KegiatanPointPage;
}());

//# sourceMappingURL=kegiatan-point.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputUraianPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_services_global_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_services_kegiatan_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var InputUraianPage = /** @class */ (function () {
    function InputUraianPage(navCtrl, navParams, formBuilder, globalService, kegiatanService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.globalService = globalService;
        this.kegiatanService = kegiatanService;
        this.currentData = {};
        if (this.navParams.get('item') != undefined) {
            this.currentData = this.navParams.get('item');
            console.log(this.currentData);
        }
        this.uraianForm = this.formBuilder.group({
            uraian: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required]
        });
    }
    InputUraianPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad InputUraianPage');
    };
    InputUraianPage.prototype.onSubmit = function () {
        var dataForm = this.uraianForm.value;
        var objData = {
            kegiatan_id: this.currentData.KEGIATAN_ID,
            kegiatan_detail_id: this.currentData.KEGIATAN_DETAIL_ID,
            uraian: dataForm.uraian
        };
        console.log(objData);
        this.globalService.presentToast('Uraian berhasil disimpan!');
        this.navCtrl.pop();
    };
    InputUraianPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-input-uraian',template:/*ion-inline-start:"D:\myapps\IONIC\laporanDinas\src\pages\input-uraian\input-uraian.html"*/'<ion-header>\n\n    <ion-navbar>\n      <ion-title>Tambah Uraian</ion-title>\n    </ion-navbar>\n  \n  </ion-header>\n  \n  \n  <ion-content padding>\n      <form [formGroup]="uraianForm" (ngSubmit)="onSubmit()">\n          <ion-list>\n              <ion-item>\n                  <ion-label color="primary" stacked>Uraian</ion-label>\n                  <ion-textarea placeholder="Deskripsi uraian" formControlName="uraian" ngModel></ion-textarea>\n              </ion-item>\n              \n          </ion-list>    \n          <ion-buttons>\n              <button ion-button block color="primary" type="submit" [disabled]="!uraianForm.valid">Simpan</button>\n          </ion-buttons>\n      </form>\n  </ion-content>\n  '/*ion-inline-end:"D:\myapps\IONIC\laporanDinas\src\pages\input-uraian\input-uraian.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2__providers_services_global_service__["a" /* GlobalService */],
            __WEBPACK_IMPORTED_MODULE_3__providers_services_kegiatan_service__["a" /* KegiatanService */]])
    ], InputUraianPage);
    return InputUraianPage;
}());

//# sourceMappingURL=input-uraian.js.map

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfilePage = /** @class */ (function () {
    function ProfilePage(navCtrl, navParams, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.resetProfile();
    }
    ProfilePage.prototype.resetProfile = function () {
        this.userdata = {
            username: '',
            fullname: ''
        };
    };
    ProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfilePage');
        this.getUserData();
    };
    ProfilePage.prototype.getUserData = function () {
        var _this = this;
        this.storage.get('userinfo').then(function (val) {
            _this.userdata = JSON.parse(val);
            if (_this.userdata == null) {
                _this.resetProfile();
            }
        });
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"D:\myapps\IONIC\laporanDinas\src\pages\profile\profile.html"*/'<!--\n  Generated template for the ProfilePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n      <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n    <ion-title>Profile</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-list>\n        <ion-item>\n            <ion-icon name="contact"></ion-icon>\n        </ion-item>\n        <ion-item>\n          <ion-label stacked>Name</ion-label>\n          <ion-input type="text" [(ngModel)]="userdata.fullname" [disabled]="true"></ion-input>\n        </ion-item>\n      \n        <ion-item>\n          <ion-label stacked>Username</ion-label>\n          <ion-input type="text" [(ngModel)]="userdata.username" [disabled]="true"></ion-input>\n        </ion-item>\n      \n      </ion-list>\n</ion-content>\n'/*ion-inline-end:"D:\myapps\IONIC\laporanDinas\src\pages\profile\profile.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]) === "function" && _c || Object])
    ], ProfilePage);
    return ProfilePage;
    var _a, _b, _c;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(238);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 238:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_login_login__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_kegiatan_kegiatan__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_kegiatan_detail_kegiatan_detail__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_kegiatan_subdetail_kegiatan_subdetail__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_kegiatan_subdetail2_kegiatan_subdetail2__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_kegiatan_foto_kegiatan_foto__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_kegiatan_point_kegiatan_point__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_camera_camera__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_input_laporan_input_laporan__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_input_uraian_input_uraian__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_daftar_laporan_daftar_laporan__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_profile_profile__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_status_bar__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_splash_screen__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__providers_services_global_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__providers_services_kegiatan_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ionic_native_camera__ = __webpack_require__(213);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_kegiatan_kegiatan__["a" /* KegiatanPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_kegiatan_detail_kegiatan_detail__["a" /* KegiatanDetailPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_kegiatan_subdetail_kegiatan_subdetail__["a" /* KegiatanSubdetailPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_kegiatan_subdetail2_kegiatan_subdetail2__["a" /* KegiatanSubdetail2Page */],
                __WEBPACK_IMPORTED_MODULE_13__pages_kegiatan_foto_kegiatan_foto__["a" /* KegiatanFotoPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_kegiatan_point_kegiatan_point__["a" /* KegiatanPointPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_camera_camera__["a" /* CameraPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_input_laporan_input_laporan__["a" /* InputLaporanPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_input_uraian_input_uraian__["a" /* InputUraianPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_daftar_laporan_daftar_laporan__["a" /* DaftarLaporanPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_profile_profile__["a" /* ProfilePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_kegiatan_kegiatan__["a" /* KegiatanPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_kegiatan_detail_kegiatan_detail__["a" /* KegiatanDetailPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_kegiatan_subdetail_kegiatan_subdetail__["a" /* KegiatanSubdetailPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_kegiatan_subdetail2_kegiatan_subdetail2__["a" /* KegiatanSubdetail2Page */],
                __WEBPACK_IMPORTED_MODULE_13__pages_kegiatan_foto_kegiatan_foto__["a" /* KegiatanFotoPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_kegiatan_point_kegiatan_point__["a" /* KegiatanPointPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_camera_camera__["a" /* CameraPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_input_laporan_input_laporan__["a" /* InputLaporanPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_input_uraian_input_uraian__["a" /* InputUraianPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_daftar_laporan_daftar_laporan__["a" /* DaftarLaporanPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_profile_profile__["a" /* ProfilePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_20__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_21__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_22__providers_services_global_service__["a" /* GlobalService */],
                __WEBPACK_IMPORTED_MODULE_23__providers_services_kegiatan_service__["a" /* KegiatanService */],
                __WEBPACK_IMPORTED_MODULE_24__ionic_native_camera__["a" /* Camera */],
                { provide: __WEBPACK_IMPORTED_MODULE_2__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 24:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KegiatanService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({
        'Content-Type': 'application/json'
    })
};
var apiUrl = 'http://localhost:8000/api';
var KegiatanService = /** @class */ (function () {
    function KegiatanService(http) {
        this.http = http;
        //console.log('Hello KegiatanServiceProvider Provider');
    }
    KegiatanService.prototype.getListKegiatan = function (id) {
        var param = 'k_all';
        if (id != 0) {
            if (id == '6' || id == '9') {
                param = 'k_' + id;
            }
            else {
                param = 'blank';
            }
        }
        return this.http.get('assets/fakedata/' + param + '.json');
    };
    KegiatanService.prototype.getDetailKegiatan = function () {
        return this.http.get('assets/fakedata/k_detail.json');
    };
    KegiatanService.prototype.getListDataLaporan = function (m, y) {
        return this.http.get('assets/fakedata/k_detail.json');
    };
    KegiatanService.prototype.getFotoKegiatan = function () {
        return this.http.get('assets/fakedata/foto.json');
    };
    KegiatanService.prototype.getUraianKegiatan = function () {
        return this.http.get('assets/fakedata/uraian.json');
    };
    KegiatanService.prototype.postData = function (data) {
        return this.http.post(apiUrl, data, httpOptions);
    };
    KegiatanService.prototype.updateData = function (data) {
        //return articles;
        return this.http.put(apiUrl, data, httpOptions);
    };
    KegiatanService.prototype.deleteData = function (id) {
        return this.http.delete(apiUrl + '/id/' + id, httpOptions);
    };
    KegiatanService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], KegiatanService);
    return KegiatanService;
}());

//# sourceMappingURL=kegiatan-service.js.map

/***/ }),

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_kegiatan_kegiatan__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_daftar_laporan_daftar_laporan__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_profile_profile__ = __webpack_require__(216);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, storage) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.storage = storage;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', icon: 'icon-home-modern', component: __WEBPACK_IMPORTED_MODULE_6__pages_kegiatan_kegiatan__["a" /* KegiatanPage */] },
            { title: 'Perjalanan Dinas', icon: 'icon-wallet-travel', component: __WEBPACK_IMPORTED_MODULE_7__pages_daftar_laporan_daftar_laporan__["a" /* DaftarLaporanPage */] },
            { title: 'Profile', icon: 'icon-account-circle', component: __WEBPACK_IMPORTED_MODULE_8__pages_profile_profile__["a" /* ProfilePage */] },
            { title: 'Keluar', icon: 'icon-exit-to-app', component: __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */] }
        ];
    }
    MyApp.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.get('userinfo').then(function (val) {
            var userdata = JSON.parse(val);
            if (userdata == null) {
                _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */]);
            }
            else {
                _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_6__pages_kegiatan_kegiatan__["a" /* KegiatanPage */]);
            }
        });
    };
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]) === "function" && _a || Object)
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\myapps\IONIC\laporanDinas\src\app\app.html"*/'<ion-split-pane when="md">\n  <!-- Menu Main Top  -->\n    <ion-menu [content]="content">\n        <ion-header  header-background-image [ngStyle]="{\'background-image\': \'url(assets/images/16.jpg)\'}">\n            <ion-thumbnail>\n                <img [src]="\'assets/images/login-3.png\'">\n            </ion-thumbnail>\n            <h2 item-title text-center>Laporan Perjalanan Dinas</h2>\n        </ion-header>\n        <!-- Menu Main List -->\n        <ion-content main-menu>\n          <ion-list no-margin no-padding>\n            <button menuClose ion-item paddinge-left no-lines item-title *ngFor="let p of pages" (click)="openPage(p)">\n              <ion-icon icon-small item-left>\n                <i class="icon {{ p.icon }}"></i>\n              </ion-icon>\n              {{p.title}}\n            </button>\n          </ion-list>\n        </ion-content>\n    </ion-menu>\n    <!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n    <ion-nav [root]="rootPage" main #content swipeBackEnabled="false"></ion-nav>\n</ion-split-pane>\n'/*ion-inline-end:"D:\myapps\IONIC\laporanDinas\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]) === "function" && _e || Object])
    ], MyApp);
    return MyApp;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KegiatanSubdetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__kegiatan_foto_kegiatan_foto__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__kegiatan_point_kegiatan_point__ = __webpack_require__(214);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var KegiatanSubdetailPage = /** @class */ (function () {
    function KegiatanSubdetailPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.currentData = {};
        this.currentDetail = {};
        if (this.navParams.get('item') != undefined) {
            this.currentData = this.navParams.get('item');
            console.log(this.currentData);
            this.currentYear = new Date(this.currentData.TGL_MULAI).getFullYear();
        }
    }
    KegiatanSubdetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad KegiatanSubdetailPage');
    };
    KegiatanSubdetailPage.prototype.getAllFoto = function (event) {
        event.stopPropagation();
        console.log('get all foto');
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__kegiatan_foto_kegiatan_foto__["a" /* KegiatanFotoPage */], { item: this.currentData });
    };
    KegiatanSubdetailPage.prototype.getAllPoint = function (event) {
        event.stopPropagation();
        console.log('get all points');
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__kegiatan_point_kegiatan_point__["a" /* KegiatanPointPage */], { item: this.currentData });
    };
    KegiatanSubdetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-kegiatan-subdetail',template:/*ion-inline-start:"D:\myapps\IONIC\laporanDinas\src\pages\kegiatan-subdetail\kegiatan-subdetail.html"*/'\n<ion-header>\n\n    <ion-navbar>\n        <ion-title>\n            Detail Perjalanan Dinas\n        </ion-title>\n    </ion-navbar>\n  \n  </ion-header>\n  \n  \n  <ion-content padding>\n    <h5>Informasi</h5>\n    <hr>\n    <h4>{{ currentData.NAMA_KEGIATAN }}</h4>\n    <p>Tahun : <strong>{{ currentYear }}</strong></p>\n    <p>Lokasi : <strong>{{ currentData.PROVINSI_DESC }}, {{ currentData.KOTA_DESC }}</strong></p>\n  \n    <br>\n    <p class="text-center">Uraian Foto &amp; Kegiatan</p>\n    <ion-list>\n        <button ion-item (click)="getAllFoto($event)">\n            Foto Kegiatan\n            <ion-badge item-end>{{ currentData.TOTAL_FOTO }}</ion-badge>\n        </button>\n        <button ion-item (click)="getAllPoint($event)">\n            Point-point Kegiatan\n            <ion-badge item-end>{{ currentData.TOTAL_URAIAN }}</ion-badge>\n        </button>  \n    </ion-list>\n  </ion-content>\n  \n  \n  '/*ion-inline-end:"D:\myapps\IONIC\laporanDinas\src\pages\kegiatan-subdetail\kegiatan-subdetail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], KegiatanSubdetailPage);
    return KegiatanSubdetailPage;
}());

//# sourceMappingURL=kegiatan-subdetail.js.map

/***/ })

},[217]);
//# sourceMappingURL=main.js.map