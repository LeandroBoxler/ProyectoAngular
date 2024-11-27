import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DataChamp } from '../models/dataChamps.interface';
@Injectable({
  providedIn: 'root',
})
export class ChampsService {
  constructor(private http: HttpClient) {}
  champsAPI =
    'https://ddragon.leagueoflegends.com/cdn/14.23.1/data/es_AR/champion.json';

  loadChamps(): Observable<DataChamp> {
    return this.http.get<DataChamp>(this.champsAPI);
  }
}
