import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";


@Injectable()
export class RatpService {

  constructor(private http: HttpClient) { }

  getDatas(){
    const url = "https://data.ratp.fr/api/records/1.0/search/?dataset=liste-des-commerces-de-proximite-agrees-ratp&sort=code_postal&facet=tco_libelle&facet=code_postal";
    const headers = new HttpHeaders({ 'Content-Type': 'application/json'})
        .append('Content-Type', 'application/json')
        .append('Access-Control-Allow-Origin', '*')
        .append('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, authorization,Client-Security-Token')
        .append('Access-Control-Allow-Methods', 'GET, PUT, POST, PATCH, DELETE, OPTIONS');

    return this.http.get<any>(url).pipe(map(res => {
      console.log(res.records)
      return res.records;
    }));
  }





}
