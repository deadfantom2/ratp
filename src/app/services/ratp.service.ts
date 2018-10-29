import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";


@Injectable()
export class RatpService {

  constructor(private http: HttpClient) { }

  getDatas(){
    const url = "https://data.ratp.fr/explore/dataset/liste-des-commerces-de-proximite-agrees-ratp/api/?disjunctive.code_postal&sort=code_postal&refine.tco_libelle=Le+Narval";
    const headers = new HttpHeaders()
        .append('Content-Type', 'application/json')
        .append('Access-Control-Allow-Origin', '*')
        .append('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, authorization,Client-Security-Token')
        .append('Access-Control-Allow-Methods', 'GET, PUT, POST, PATCH, DELETE, OPTIONS');

    return this.http.get<any>(url,{headers} ).pipe(map(res => console.log(res)));
  }





}
