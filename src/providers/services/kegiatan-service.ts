import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };
const apiUrl = 'http://localhost:8000/api';

@Injectable()
export class KegiatanService {

  constructor(public http: HttpClient) {
    //console.log('Hello KegiatanServiceProvider Provider');
  }

  getListKegiatan(id): Observable<any>{
    let param = 'k_all';
    if(id != 0){
      if(id == '6' || id == '9'){
        param = 'k_'+id;
      }else{
        param = 'blank';
      }
    }
    return this.http.get('assets/fakedata/'+param+'.json');
  }

  getDetailKegiatan(): Observable<any>{
    return this.http.get('assets/fakedata/k_detail.json');
  }

  getListDataLaporan(m,y): Observable<any>{
    return this.http.get('assets/fakedata/k_detail.json');
  }

  getFotoKegiatan(): Observable<any>{
    return this.http.get('assets/fakedata/foto.json');
  }

  getUraianKegiatan(): Observable<any>{
    return this.http.get('assets/fakedata/uraian.json');
  }
  
  postData(data): Observable<any>{
    return this.http.post<any>(apiUrl, data, httpOptions);
  }

  updateData(data): Observable<any>{
    //return articles;
    return this.http.put<any>(apiUrl, data, httpOptions);
  }

  deleteData(id){
    return this.http.delete(apiUrl+'/id/'+id, httpOptions);
  }
}
