import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import 'rxjs/add/operator/map';
import 'rxjs/Rx';
// const https = require('https');


@Injectable({
  providedIn: 'root'
})
export class TrendsService {

  constructor(private _http: HttpClient) { }

  // cases() {
  //   return this._http.get("http://samples.openweathermap.org/data/2.5/history/city?q=Warren,OH&appid=b6907d289e10d714a6e88b30761fae22")
  //     .map(result => result);
  // }


  cases() {
    return this._http.get("https://api.covid19api.com/total/country/south-africa/status/confirmed?from=2020-03-01T00:00:00Z&to=2020-04-01T00:00:00Z")
      .map(result => result);
  }
}
