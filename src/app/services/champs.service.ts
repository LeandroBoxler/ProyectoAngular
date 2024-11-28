import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DataChamp } from '../models/dataChamps.interface';
@Injectable({
  providedIn: 'root',
})
export class ChampsService {
  constructor(private http: HttpClient) {}
  champsAllAPI =
    'https://ddragon.leagueoflegends.com/cdn/14.23.1/data/es_AR/champion.json';
  champAPI =
    'https://ddragon.leagueoflegends.com/cdn/14.23.1/data/es_AR/champion/';

  loadChamps(): Observable<DataChamp> {
    return this.http.get<DataChamp>(this.champsAllAPI);
  }

  getChamp(id: string): Observable<DataChamp> {
    return this.http.get<DataChamp>(`${this.champAPI}${id}.json`);
  }
}
